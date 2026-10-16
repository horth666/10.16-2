(function () {
  'use strict';

  const state = { index: 0, answers: [], result: null, scores: null };
  const axes = ['curiosity', 'social', 'pace', 'observe', 'freedom', 'bond'];
  const screens = { home: document.getElementById('home'), quiz: document.getElementById('quiz'), reveal: document.getElementById('reveal'), result: document.getElementById('result') };
  const $ = (id) => document.getElementById(id);

  function showScreen(name) {
    Object.keys(screens).forEach((key) => {
      const active = key === name;
      screens[key].hidden = !active;
      screens[key].classList.toggle('is-active', active);
    });
    window.scrollTo({ top: 0, behavior: 'instant' });
    $('app').focus({ preventScroll: true });
  }

  function startTest() {
    state.index = 0;
    state.answers = [];
    state.result = null;
    state.scores = null;
    renderQuestion();
    showScreen('quiz');
  }

  function renderQuestion() {
    const question = TEST_DATA.questions[state.index];
    const displayNumber = String(state.index + 1).padStart(2, '0');
    $('question-number').textContent = displayNumber;
    $('progress-current').textContent = displayNumber;
    $('progress-bar').style.width = `${((state.index + 1) / TEST_DATA.questions.length) * 100}%`;
    $('question-kicker').textContent = question.kicker;
    $('question-tag').textContent = question.tag;
    $('question-title').textContent = question.text;
    const options = $('options');
    options.innerHTML = '';
    question.options.forEach((option, optionIndex) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'option-button';
      button.setAttribute('role', 'listitem');
      button.innerHTML = `<span class="option-number">${String.fromCharCode(65 + optionIndex)}</span><span class="option-text">${option.text}</span><span class="option-arrow" aria-hidden="true">↗</span>`;
      button.addEventListener('click', () => chooseOption(optionIndex, button));
      options.appendChild(button);
    });
  }

  function chooseOption(optionIndex, button) {
    if (button.disabled) return;
    document.querySelectorAll('.option-button').forEach((item) => { item.disabled = true; });
    button.classList.add('is-selected');
    state.answers.push(optionIndex);
    window.setTimeout(() => {
      state.index += 1;
      if (state.index >= TEST_DATA.questions.length) finishTest();
      else renderQuestion();
    }, 260);
  }

  function calculateScores() {
    const scores = axes.reduce((all, axis) => { all[axis] = 0; return all; }, {});
    TEST_DATA.questions.forEach((question, index) => {
      const delta = question.options[state.answers[index]].score;
      axes.forEach((axis) => { scores[axis] += delta[axis] || 0; });
    });
    axes.forEach((axis) => { scores[axis] /= TEST_DATA.questions.length; });
    return scores;
  }

  function chooseResult(scores) {
    let best = null;
    let bestDistance = Infinity;
    TEST_DATA.animals.forEach((animal, animalIndex) => {
      const distance = axes.reduce((sum, axis) => {
        const gap = scores[axis] - animal.ideal[axis];
        return sum + (gap * gap);
      }, 0);
      const tieBreaker = (animalIndex * 0.0001) + (scores.curiosity * 0.00001);
      if (distance + tieBreaker < bestDistance) {
        bestDistance = distance + tieBreaker;
        best = animal;
      }
    });
    return best;
  }

  function finishTest() {
    state.scores = calculateScores();
    state.result = chooseResult(state.scores);
    $('reveal-number').textContent = state.result.number;
    $('reveal-name').textContent = state.result.name;
    $('reveal-line').textContent = state.result.tagline;
    showScreen('reveal');
    window.setTimeout(() => { renderResult(); showScreen('result'); }, 1450);
  }

  function renderResult() {
    const animal = state.result;
    const fields = ['result-index', 'result-file'];
    $(fields[0]).textContent = animal.number;
    $(fields[1]).textContent = `ANIMAL FILE ${animal.number}`;
    $('result-name').textContent = animal.name;
    $('result-tagline').textContent = animal.tagline;
    $('result-summary').textContent = animal.summary;
    $('result-summary-line').textContent = `一句话：${animal.summaryLine}`;
    $('result-description').textContent = animal.description;
    $('result-strength').textContent = animal.strength;
    $('result-contrast').textContent = animal.contrast;
    $('result-quote').textContent = animal.quote;
    $('result-date').textContent = `FIELD GUIDE / ${new Date().getFullYear()}`;
    const list = $('result-behaviors');
    list.innerHTML = '';
    animal.behaviors.forEach((behavior) => {
      const item = document.createElement('li');
      item.textContent = behavior;
      list.appendChild(item);
    });
    $('result-art').style.setProperty('--accent', animal.accent);
    $('result-art').style.setProperty('--soft', animal.soft);
    $('share-status').textContent = '';
  }

  function shareResult() {
    const animal = state.result;
    if (!animal) return;
    const shareText = `《测测你是哪种稀有动物人格》\n我测出了「${animal.name}」：${animal.quote}`;
    if (navigator.share) {
      navigator.share({ title: '测测你是哪种稀有动物人格', text: shareText }).then(() => {
        $('share-status').textContent = '已打开分享面板';
      }).catch(() => {
        $('share-status').textContent = '分享已取消，也可以复制结果文案。';
      });
      return;
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(shareText).then(() => {
        $('share-status').textContent = '结果文案已复制，去分享给朋友吧。';
      }).catch(() => fallbackCopy(shareText));
    } else {
      fallbackCopy(shareText);
    }
  }

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      const copied = document.execCommand('copy');
      $('share-status').textContent = copied ? '结果文案已复制，去分享给朋友吧。' : '复制未成功，请长按选择结果文案。';
    } catch (error) {
      $('share-status').textContent = '复制未成功，请长按选择结果文案。';
    } finally {
      document.body.removeChild(textarea);
    }
  }

  document.addEventListener('click', (event) => {
    const actionTarget = event.target.closest('[data-action]');
    if (!actionTarget) return;
    const action = actionTarget.dataset.action;
    if (action === 'start') startTest();
    if (action === 'restart' || action === 'home') { startTest(); if (action === 'home') showScreen('home'); }
    if (action === 'share') shareResult();
  });

  showScreen('home');
})();
