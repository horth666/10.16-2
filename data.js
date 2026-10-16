const TEST_DATA = {
  questions: [
    {
      kicker: 'SCENE 01 · A SMALL DETOUR', tag: 'RHYTHM',
      text: '原本排好的周末突然空出一整天，你的第一反应是？',
      options: [
        { text: '查一条没走过的路线，出门再说', score: { curiosity: 3, pace: 2, freedom: 2, social: 0, observe: 1, bond: 0 } },
        { text: '回到最熟悉的角落，慢慢把时间用掉', score: { curiosity: 0, pace: -3, freedom: 1, social: 0, observe: 2, bond: 1 } },
        { text: '发消息约一个“想到就会开心”的人', score: { curiosity: 1, pace: 1, freedom: 0, social: 3, observe: 0, bond: 3 } },
        { text: '先不安排，等当天的心情发号施令', score: { curiosity: 2, pace: -1, freedom: 3, social: 1, observe: 1, bond: 0 } }
      ]
    },
    {
      kicker: 'SCENE 02 · WEATHER CHANGE', tag: 'ADAPT',
      text: '走到半路，朋友突然说计划要改。你会？',
      options: [
        { text: '迅速打开地图，现场拼出一个新版本', score: { curiosity: 2, pace: 3, freedom: 2, social: 1, observe: 1, bond: 0 } },
        { text: '先问清楚原因，再决定要不要跟上', score: { curiosity: 0, pace: 0, freedom: 1, social: 1, observe: 3, bond: 1 } },
        { text: '只要大家还在一起，去哪儿都可以', score: { curiosity: 1, pace: 1, freedom: 0, social: 3, observe: 0, bond: 3 } },
        { text: '给自己十分钟缓冲，然后按新节奏来', score: { curiosity: 1, pace: -1, freedom: 2, social: 0, observe: 2, bond: 1 } }
      ]
    },
    {
      kicker: 'SCENE 03 · THE TINY CLUE', tag: 'NOTICE',
      text: '第一次去一家小店，你最容易被什么吸引？',
      options: [
        { text: '菜单上那个看不懂但很想试的名字', score: { curiosity: 3, pace: 1, freedom: 1, social: 0, observe: 1, bond: 0 } },
        { text: '角落里最安静、光线刚好的位置', score: { curiosity: 0, pace: -1, freedom: 1, social: -1, observe: 3, bond: 0 } },
        { text: '老板和熟客之间那种自然的招呼', score: { curiosity: 1, pace: 1, freedom: 0, social: 3, observe: 1, bond: 2 } },
        { text: '杯垫、旧海报、墙上被忽略的小字', score: { curiosity: 2, pace: 0, freedom: 1, social: 0, observe: 3, bond: 0 } }
      ]
    },
    {
      kicker: 'SCENE 04 · MESSAGE AT 23:47', tag: 'REACT',
      text: '晚上收到一条“在吗”的消息，你通常会？',
      options: [
        { text: '先猜对方想说什么，再回一个精准的问题', score: { curiosity: 1, pace: 0, freedom: 1, social: 1, observe: 3, bond: 1 } },
        { text: '立刻回：在！然后把对方的事接过来', score: { curiosity: 0, pace: 2, freedom: 0, social: 3, observe: 0, bond: 3 } },
        { text: '看见了，但等脑袋准备好再回复', score: { curiosity: 0, pace: -2, freedom: 2, social: -1, observe: 2, bond: 1 } },
        { text: '如果语气不对劲，会直接打电话确认', score: { curiosity: 1, pace: 2, freedom: 0, social: 2, observe: 2, bond: 3 } }
      ]
    },
    {
      kicker: 'SCENE 05 · NEW OBJECT', tag: 'CURIOSITY',
      text: '路边出现一个从没见过的自动售卖机，你会？',
      options: [
        { text: '研究说明，顺便拍下它的奇怪菜单', score: { curiosity: 3, pace: 1, freedom: 1, social: 0, observe: 2, bond: 0 } },
        { text: '先看看有没有人用过，再决定', score: { curiosity: 1, pace: 0, freedom: 1, social: 0, observe: 3, bond: 0 } },
        { text: '拉朋友一起试，未知比较适合分享', score: { curiosity: 2, pace: 2, freedom: 0, social: 3, observe: 0, bond: 2 } },
        { text: '记住位置，下次心血来潮再来', score: { curiosity: 2, pace: -1, freedom: 2, social: 0, observe: 1, bond: 0 } }
      ]
    },
    {
      kicker: 'SCENE 06 · A FULL INBOX', tag: 'RESET',
      text: '事情一起涌过来的时候，你会先做什么？',
      options: [
        { text: '把任务摊开，找出最关键的那一件', score: { curiosity: 0, pace: 2, freedom: 1, social: 0, observe: 3, bond: 0 } },
        { text: '先离开屏幕，走一圈再回来处理', score: { curiosity: 1, pace: -1, freedom: 3, social: 0, observe: 1, bond: 0 } },
        { text: '找一个靠谱的人说两句，心就顺了', score: { curiosity: 0, pace: 1, freedom: 0, social: 2, observe: 1, bond: 3 } },
        { text: '凭直觉挑一件最想做的先启动', score: { curiosity: 2, pace: 2, freedom: 2, social: 0, observe: 0, bond: 0 } }
      ]
    },
    {
      kicker: 'SCENE 07 · THE GROUP PHOTO', tag: 'BELONG',
      text: '一群人准备合照时，你通常会站在哪里？',
      options: [
        { text: '边缘但不缺席，顺便观察大家的站位', score: { curiosity: 0, pace: 0, freedom: 2, social: 1, observe: 3, bond: 1 } },
        { text: '熟悉的人旁边，笑得最放松', score: { curiosity: 0, pace: 1, freedom: 0, social: 3, observe: 0, bond: 3 } },
        { text: '哪里有空站哪里，动作先跟上再说', score: { curiosity: 1, pace: 3, freedom: 1, social: 2, observe: 0, bond: 0 } },
        { text: '拍完就撤，留下一张刚好证明来过的照片', score: { curiosity: 1, pace: 0, freedom: 3, social: 0, observe: 1, bond: 1 } }
      ]
    },
    {
      kicker: 'SCENE 08 · LAST LIGHT', tag: 'INSTINCT',
      text: '一天快结束时，什么会让你觉得“今天过得不错”？',
      options: [
        { text: '发现一个新地方，带回一个小故事', score: { curiosity: 3, pace: 1, freedom: 2, social: 0, observe: 1, bond: 0 } },
        { text: '把重要的人照顾到，也被他们记挂着', score: { curiosity: 0, pace: 1, freedom: 0, social: 2, observe: 1, bond: 3 } },
        { text: '终于按自己的节奏，把一件事做完', score: { curiosity: 0, pace: -1, freedom: 3, social: 0, observe: 2, bond: 0 } },
        { text: '脑子里多了一条想明白的线索', score: { curiosity: 1, pace: 0, freedom: 1, social: 0, observe: 3, bond: 0 } }
      ]
    }
  ],
  animals: [
    { id: 'owl', number: '01', name: '猫头鹰', accent: '#536b68', soft: '#dce5df', tagline: '夜色越深，脑内越亮。', summary: '你不是慢半拍，只是在等思绪排成自己的队伍。', ideal: { curiosity: 0.25, social: 0, pace: -1, observe: 2.375, freedom: 1.75, bond: 0.5 }, description: '你有一套不太吵闹、但非常准确的内在时钟。白天可以安静地收集线索，到了夜里，灵感和判断力才真正打开。你习惯先把事情想透，再用自己的方式落地。', behaviors: ['群聊里不一定最先发言，但常常一句话就说到重点。', '喜欢在深夜整理照片、计划或突然想通的事情。', '遇到新环境会先找一个能看清全局的位置。', '做决定前会给自己留一小段无人打扰的时间。'], strength: '你能把零散的信息拼成清晰的判断，给身边人一种“有你在就不用慌”的可靠感。', contrast: '看起来像在发呆，其实脑内已经开完三轮会议。', quote: '安静不是离线，是你的思绪正在加载高清模式。', summaryLine: '低调收集世界，高调拥有自己的答案。' },
    { id: 'fox', number: '02', name: '狐狸', accent: '#ad6946', soft: '#f0ded3', tagline: '留一点神秘，给生活转个弯。', summary: '你总能在规则之外，找到一条更聪明的走法。', ideal: { curiosity: 1.25, social: 0.125, pace: 0.125, observe: 1.625, freedom: 2.125, bond: 0.25 }, description: '你对环境的变化很敏感，既不急着抢镜，也不轻易把全部底牌摊开。你擅长读懂空气里的小信号，再把行动调整到刚刚好。', behaviors: ['出门前不一定做完整计划，但总有备用路线。', '别人还在讨论规则时，你已经发现了更省力的办法。', '熟悉的人面前很会开玩笑，陌生场合则保留一点观察距离。', '喜欢有选择权的安排，不爱被单一路线锁住。'], strength: '你有很强的临场适应力，能把尴尬场面变成有趣转折。', contrast: '看似随手一选，其实每一步都留着后手。', quote: '不走直线，是因为你看见了更好玩的风景。', summaryLine: '聪明不是算计，是懂得给自己留出口。' },
    { id: 'capybara', number: '03', name: '水豚', accent: '#8b7862', soft: '#e9e0d5', tagline: '先让世界安静三分钟。', summary: '你的松弛感不是放弃，而是知道什么值得用力。', ideal: { curiosity: 0.875, social: 0, pace: -0.875, observe: 2, freedom: 2, bond: 0.375 }, description: '你很懂得给生活留出呼吸的缝隙。事情多的时候，你不会立刻被带着跑，而是先稳住自己的水面，再决定下一步往哪里游。', behaviors: ['临时被催时，会先慢慢喝口水再开始。', '喜欢把一天排得有余地，给意外留个座位。', '朋友吵吵闹闹时，你常常是那个让气氛回暖的人。', '不追每一个热点，但会认真享受真正喜欢的东西。'], strength: '你能让复杂的人际场景降噪，成为别人愿意靠近的安全区。', contrast: '看起来什么都不争，关键时刻却很清楚自己的边界。', quote: '不赶路的人，也可以把日子过得很有方向。', summaryLine: '慢一点，反而更接近真正重要的事。' },
    { id: 'blackcat', number: '04', name: '黑猫', accent: '#434b50', soft: '#e0e3e4', tagline: '安静地判断，漂亮地转身。', summary: '你不需要解释所有选择，因为你知道自己在看什么。', ideal: { curiosity: 0.5, social: -0.25, pace: -1.125, observe: 2, freedom: 2, bond: 0.5 }, description: '你独立、慢热，却并不疏离。你对细节有自己的敏感度，愿意把信任交给少数真正重要的人，也愿意为自己的判断负责。', behaviors: ['不爱跟风，买东西会先摸清细节和质感。', '遇到热闹场合，会自动找到舒服的退场路线。', '不常主动解释，但会用行动把在意的事做好。', '喜欢一个人走路，沿途观察城市的小变化。'], strength: '你有很强的边界感和审美判断，能在嘈杂里保留清醒。', contrast: '表面像一扇关着的门，熟人知道里面其实很会撒娇。', quote: '神秘感不是距离，是你对自己生活的主权。', summaryLine: '安静有分量，独处也有温度。' },
    { id: 'meerkat', number: '05', name: '狐獴', accent: '#b98245', soft: '#f0e3c9', tagline: '先看看，世界又更新了什么。', summary: '你总能比别人早半步发现有趣的小变化。', ideal: { curiosity: 1.875, social: 0.375, pace: 0.75, observe: 1.875, freedom: 1.75, bond: 0.25 }, description: '你对周围的一切都保有一点轻盈的好奇。新店换了招牌、朋友语气变了、角落多了一只猫，这些小事都会被你收进雷达。', behaviors: ['走过熟悉的路，也会注意今天哪扇窗换了植物。', '聊天时常常捕捉到别人一闪而过的暗示。', '看到新东西会先研究，再分享给身边的人。', '旅行不只拍景，还会记录当地人的小习惯。'], strength: '你能给平淡的日常找到新鲜入口，也很会让别人感到“被看见”。', contrast: '看起来注意力很跳，其实只是同时开了很多扇观察窗。', quote: '世界没有重复播放，每天都有一处细节值得发光。', summaryLine: '好奇心是你的望远镜，也是你的社交天线。' },
    { id: 'sloth', number: '06', name: '树懒', accent: '#66806f', soft: '#dce8df', tagline: '启动慢一点，完成得更像自己。', summary: '你不是拖延，你是在等身体和心情同时点头。', ideal: { curiosity: 0.5, social: 0.375, pace: -0.875, observe: 1.5, freedom: 1.375, bond: 1.125 }, description: '你不喜欢被外界的倒计时牵着走。进入状态前需要一点缓冲，但一旦找到自己的节奏，就会稳定、专注地把事情做完。', behaviors: ['开始一件事前，习惯先整理桌面或泡一杯饮料。', '不追求第一时间回复，但会认真回应重要的人。', '喜欢把大任务拆成几个今天真的能完成的小步。', '周末最珍贵的安排，是不被安排。'], strength: '你能持续做那些需要耐心的事，不容易被短暂的喧闹带偏。', contrast: '开机需要时间，运行起来却很少死机。', quote: '慢是你的预热，不是你的限速。', summaryLine: '按自己的秒针走，也能走到很远。' },
    { id: 'otter', number: '07', name: '海獭', accent: '#5d8490', soft: '#dce8eb', tagline: '把开心递给值得的人。', summary: '你有独处的能力，也有把亲密关系照顾得很柔软的天赋。', ideal: { curiosity: 0.625, social: 2.75, pace: 1.25, observe: 0.375, freedom: 0, bond: 2.75 }, description: '你看起来可以自己搞定一切，但真正让你发光的时刻，往往发生在和重要的人分享一件小事时。你珍惜陪伴，也懂得保留自己的空间。', behaviors: ['看到有趣的东西，第一反应是“这个要发给谁”。', '会记得朋友随口提过的小愿望。', '热闹之后需要一段独处，把情绪放回原位。', '遇到突发状况，常常先照顾身边人的感受。'], strength: '你很会把关系里的温度接住，让人感到自己没有被落下。', contrast: '平时说着“我都可以”，心里其实有一份很具体的在乎清单。', quote: '真正的松弛，是有人可以分享，也能独自发呆。', summaryLine: '柔软不是负担，是你把生活过好的方式。' },
    { id: 'crow', number: '08', name: '乌鸦', accent: '#5b5968', soft: '#e3e1e8', tagline: '表面之外，还有一层答案。', summary: '你总想知道事情为什么发生，而不只满足于它发生了。', ideal: { curiosity: 0.375, social: 0.25, pace: -0.25, observe: 2.875, freedom: 1.125, bond: 0.5 }, description: '你有一双会追问的眼睛。一个看似普通的现象，到了你这里会多出背景、因果和另一种可能。你不轻易被表象说服，却也不急着否定未知。', behaviors: ['看完一条消息，会顺手查它的前因后果。', '朋友讲故事时，你会记得那些被略过的细节。', '喜欢把复杂问题拆成可以理解的小结构。', '安静的时候不是放空，而是在脑内做连接。'], strength: '你的深度观察力让你能提前识别风险，也能提出别人没想到的角度。', contrast: '看起来有点冷静，内心其实住着一个很爱钻研的孩子。', quote: '别人看到一扇门，你会想知道门后是谁设计的房间。', summaryLine: '不被表面带走，是你最安静的锋利。' },
    { id: 'penguin', number: '09', name: '企鹅', accent: '#59788a', soft: '#dce7ed', tagline: '慢慢靠近，认真站在你这边。', summary: '信任对你来说不是开场白，而是一段值得守住的关系。', ideal: { curiosity: 0.25, social: 0.5, pace: -0.625, observe: 1.875, freedom: 1.125, bond: 1.125 }, description: '你可能需要一点时间熟悉新的群体，但一旦认定对方，就会用很长的耐心维护这段关系。你不追求认识所有人，更在意彼此是否真的可靠。', behaviors: ['初次见面话不多，但会记住对方说过的重点。', '朋友需要帮忙时，比表达关心更快的是直接出现。', '不太热衷频繁社交，却愿意为重要约定提前准备。', '喜欢固定的小仪式，让关系有可回到的地方。'], strength: '你把承诺看得很重，能成为别人生活里稳定、可信赖的锚点。', contrast: '熟悉之前像一块冰，熟悉之后是会主动分零食的那种。', quote: '我不一定很快靠近，但我会认真留下。', summaryLine: '慢热只是入口，忠诚才是你的主场。' },
    { id: 'raccoon', number: '10', name: '浣熊', accent: '#71846c', soft: '#e0e7d9', tagline: '有趣的东西，当然要拆开看看。', summary: '你擅长把日常过成一场轻量级寻宝。', ideal: { curiosity: 2, social: 0.5, pace: 1.375, observe: 1.625, freedom: 1.5, bond: 0.5 }, description: '你很容易被新鲜事物点亮，而且不是走马观花的那种。一个小物件、一条小巷、一种奇怪口味，都可能成为你当天最开心的发现。', behaviors: ['逛超市也像在探险，总能带回计划外的东西。', '会突然学一个小技能，只因为觉得“看起来很好玩”。', '旅行路线常常被一间奇怪的小店拐走。', '喜欢把新发现讲得像一段精彩的秘密。'], strength: '你能把好奇转成行动，让身边的人也重新对生活有兴趣。', contrast: '看起来一刻不停，其实你对真正喜欢的事很有专注力。', quote: '生活的隐藏彩蛋，通常藏在“顺便看看”之后。', summaryLine: '先去看看，答案常常比计划更可爱。' },
    { id: 'wolf', number: '11', name: '狼', accent: '#5d6c76', soft: '#dde3e6', tagline: '自由不是独行，是自己选方向。', summary: '你愿意并肩，但不愿把方向盘交出去。', ideal: { curiosity: 1.375, social: 0.5, pace: 0.125, observe: 1, freedom: 2, bond: 0.625 }, description: '你重视独立判断，也重视真正平等的同行。你可以和一群人并肩赶路，但内心始终保留一块只听自己声音的领地。', behaviors: ['更喜欢明确目标后自己安排实现路径。', '不爱被过度照顾，但会在关键时刻保护伙伴。', '面对选择时，宁愿多花时间确认这是自己的决定。', '偶尔需要离开人群，重新校准生活方向。'], strength: '你有很强的自主性和执行力，能在不确定里为自己开路。', contrast: '看似不需要谁，其实很珍惜那些尊重你边界的人。', quote: '真正的自由，是我知道为什么往这边走。', summaryLine: '保持野性，也保持对同伴的认真。' },
    { id: 'shiba', number: '12', name: '柴犬', accent: '#bc734b', soft: '#f2dfd1', tagline: '今天的灵感，今天就去试试。', summary: '你身上有一股突然启动的能量，认真又有点可爱。', ideal: { curiosity: 0.875, social: 2.25, pace: 1.25, observe: 0.75, freedom: 0.5, bond: 2 }, description: '你可能前一秒还在说“再等等”，下一秒就已经穿好鞋出门。你的行动力不总是按日程出现，却常常在最需要的时候把事情推起来。', behaviors: ['灵感来了就立刻开工，热情比计划更早到达。', '喜欢直接表达，不太擅长把一句简单的话绕三圈。', '遇到喜欢的人和事，会很自然地站到它们那边。', '有自己的坚持，越被劝说越想亲自验证。'], strength: '你能把气氛带活，也能在关键时刻用真实和行动给人力量。', contrast: '表面大大咧咧，心里其实记得每一个重要细节。', quote: '先出发，路上会长出比计划更好的答案。', summaryLine: '热烈地生活，坦率地坚持。' }
  ]
};
