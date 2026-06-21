export interface Story {
  id: string;
  title: string;
  character: 'pipi' | 'popo' | 'both';
  category: 'anxiety' | 'relax' | 'growth';
  summary: string;
  content: string;
  emoji: string;
  createdAt: string;
}

export const stories: Story[] = [
  {
    id: 'story-001',
    title: '皮皮的第一次演讲',
    character: 'pipi',
    category: 'anxiety',
    summary: '皮皮要在班会上演讲，他紧张得翅膀都在发抖...',
    content: `皮皮站在教室前面，感觉自己的心跳得像打鼓一样快。

"大家...大家好..."他的声音小得像蚊子叫。

皮皮的翅膀不停地颤抖，他看了看坐在窗边的坡坡。坡坡正悠闲地用爪子梳着羽毛，完全没有紧张的样子。

"皮皮，加油！"坡坡轻声说道，还给了他一个微笑。

皮皮深吸一口气，慢慢地开始讲述他的故事。虽然一开始还是有点结巴，但随着故事的发展，他越来越自信了。

演讲结束后，班上响起了热烈的掌声。皮皮松了一口气，原来演讲也没有那么可怕嘛！

"坡坡，谢谢你的鼓励！"皮皮开心地说道。

"你看，你做到了吧！"坡坡眨眨眼睛，"下次就不紧张啦！"`,
    emoji: '📢',
    createdAt: '2026-06-20',
  },
  {
    id: 'story-002',
    title: '坡坡的放松秘籍',
    character: 'popo',
    category: 'relax',
    summary: '坡坡分享了一个神奇的放松技巧，让皮皮学会了深呼吸...',
    content: `今天阳光明媚，皮皮又因为考试的事情焦虑不安。

"坡坡，我好紧张啊！下周就要期末考试了，我还有好多东西没复习完..."皮皮焦急地踱来踱去。

坡坡从树枝上跳下来，拍了拍皮皮的翅膀。

"来，皮皮，我教你一个放松秘籍！"

"是什么？是什么？"皮皮好奇地问。

"很简单，就是深呼吸。"坡坡慢慢地说，"吸气的时候，想象你在吸入温暖的阳光；呼气的时候，想象把所有的烦恼都呼出去。"

皮皮试着做了一次，感觉好像真的舒服了一点。

"再来几次，你会感觉更好的。"坡坡温柔地说。

他们一起坐在大树下，做了十次深呼吸。皮皮感觉自己的心跳平稳了许多，脑子也清醒了很多。

"谢谢你，坡坡！这个方法真的很管用！"皮皮的眉头终于舒展开来。

"记住，当你感到紧张的时候，就做几次深呼吸。"坡坡眨眨眼，"这是大自然给我们的礼物哦！"`,
    emoji: '🌳',
    createdAt: '2026-06-19',
  },
  {
    id: 'story-003',
    title: '一起搬家',
    character: 'both',
    category: 'growth',
    summary: '皮皮和坡坡要搬家了，面对新环境他们有不同的反应...',
    content: `皮皮和坡坡收到消息，他们的大树要被砍掉建新房子了，他们要搬到一个新的森林。

皮皮整天愁眉苦脸："新森林会有什么样的树呢？会有我喜欢吃的橡果吗？会有我的老朋友吗？"

坡坡却很期待："听说新森林很大，有很多新朋友等着我们呢！"

搬家那天，皮皮小心翼翼地抱着自己心爱的羽毛和收集的闪闪发光的小石头。

"皮皮，你准备好了吗？"坡坡问道。

"我...我不知道..."皮皮的声音有些颤抖。

坡坡飞到他身边，用翅膀轻轻拍了拍他："别担心，不管发生什么，我都会陪着你的。"

到了新森林，皮皮发现这里真的很美丽！有高大的橡树，有清澈的小溪，还有许多友善的小动物。

"皮皮，快来看！这里有一棵超级大的老橡树！"坡坡兴奋地叫着。

皮皮飞过去，发现老橡树的树洞里有很多他喜欢的橡果！

"太棒了！"皮皮开心地叫道，"这里真好！"

从此，皮皮学会了：新的开始，也可能是美好的冒险！`,
    emoji: '🏡',
    createdAt: '2026-06-18',
  },
  {
    id: 'story-004',
    title: '皮皮的噩梦',
    character: 'pipi',
    category: 'anxiety',
    summary: '皮皮做了一个可怕的噩梦，担心的事情发生了...',
    content: `深夜，皮皮从噩梦中惊醒。

在梦里，他忘记了自己要去参加重要的聚会，所有的松鸦都在等他，他迟到了整整一天！

"呼...呼..."皮皮喘着粗气，心跳得厉害。

他看了看窗外，月亮还挂在天上，周围很安静。

"只是一个梦..."皮皮安慰自己，但是眼泪还是忍不住流了下来。

这时候，坡坡的声音从旁边的树洞传来："皮皮？你怎么还没睡？"

"我...我做了一个噩梦..."皮皮小声说道。

坡坡飞过来，停在皮皮身边。"噩梦里发生了什么？"

"我梦到自己迟到了，所有人都生气了..."皮皮把梦里的故事讲给了坡坡。

坡坡轻轻地用翅膀拍了拍皮皮的背："梦里的事情不会成真的。明天我会提醒你去聚会的。"

"真的吗？"皮皮的眼泪渐渐停了。

"当然啦！我们是最好朋友啊！"坡坡笑着说。

那天晚上，坡坡一直陪着皮皮，直到皮皮安心地睡着了。

第二天醒来，皮皮发现坡坡真的早早叫醒了他，提醒他去聚会。皮皮的心里充满了温暖。`,
    emoji: '🌙',
    createdAt: '2026-06-17',
  },
  {
    id: 'story-005',
    title: '雨后的彩虹',
    character: 'both',
    category: 'growth',
    summary: '暴风雨过后，皮皮和坡坡一起看到了美丽的彩虹...',
    content: `今天下午，天空突然变得灰暗，一场暴风雨即将来临。

皮皮躲在大树叶子里，担忧地说："暴风雨会很大吧？会不会把我们的房子吹走？"

坡坡却很平静："没关系，皮皮。我们的树很结实，不会被吹走的。"

哗啦啦，哗啦啦！大雨倾盆而下，电闪雷鸣。

皮皮紧紧闭上眼睛，不敢看外面的风雨。

但是坡坡却很勇敢，他透过树叶的缝隙看着外面。

"皮皮，快看！"坡坡兴奋地叫道。

"看什么？暴风雨好可怕..."皮皮还是很害怕。

"相信我，睁开眼睛看看！"

皮皮慢慢地睁开眼睛，透过树叶，他看到了——一道美丽的彩虹横跨在天空中！

"哇！好漂亮啊！"皮皮惊叹道。

暴风雨过后，太阳公公露出了笑脸，天空中挂着一道七色彩虹。

"坡坡，你看！彩虹！"皮皮开心极了。

"是啊，"坡坡笑着说，"暴风雨过后，总会有彩虹的。"

皮皮明白了：有时候，困难和挑战之后，会有更美好的事情在等着我们。`,
    emoji: '🌈',
    createdAt: '2026-06-16',
  },
  {
    id: 'story-006',
    title: '皮皮的收藏',
    character: 'pipi',
    category: 'anxiety',
    summary: '皮皮收集了很多东西，但他总是担心会弄丢...',
    content: `皮皮的树洞里堆满了他收集的各种宝贝：闪闪发光的玻璃碎片、漂亮的羽毛、各种颜色的石头...

"皮皮，你的房间好乱啊！"坡坡飞进来，差点被地上的东西绊倒。

"这些都是我珍贵的宝贝！"皮皮紧张地说，"万一弄丢了怎么办？"

"可是这样你连转身的空间都没有了啊！"坡坡说道。

皮皮看着满屋子的东西，突然感到很焦虑：这么多东西，如果弄丢了怎么办？如果被偷了怎么办？如果...

"皮皮！"坡坡的声音打断了他的思绪，"你想想，你最珍贵的宝贝是什么？"

皮皮想了想："嗯...应该是你吧？因为你是我的好朋友！"

"对啊！"坡坡笑了，"友情是最珍贵的宝贝，而且永远不会丢失！"

皮皮看着坡坡，心里暖暖的。他决定只留下几件最有意义的收藏，其他的分享给其他小动物。

"谢谢你，坡坡！"皮皮感觉轻松多了，"现在我有更多空间可以跳舞啦！"`,
    emoji: '✨',
    createdAt: '2026-06-15',
  },
  {
    id: 'story-007',
    title: '坡坡的早睡早起',
    character: 'popo',
    category: 'relax',
    summary: '坡坡每天都早睡早起，他有什么健康秘诀吗？',
    content: `清晨，太阳刚刚升起，坡坡已经精神抖擞地在树枝上做早操了。

皮皮打着哈欠从树洞里探出头来："坡坡，你怎么每天都这么有精神啊？我每天都觉得睡不醒..."

"因为我每天都早睡早起呀！"坡坡边做伸展运动边说。

"可是晚上有那么多有趣的事情可以做，我不想那么早睡觉..."皮皮说道。

"皮皮，你知道吗？"坡坡飞到他身边，"充足的睡眠对我们很重要哦！它能帮助我们的大脑发育，还能让我们更有精力。"

"真的吗？"皮皮好奇地问。

"当然！我每天太阳下山就睡觉，天亮就起床。"坡坡说，"这样我每天都有充足的精力去探索新事物！"

皮皮想了想，决定试试坡坡的方法。

那天晚上，皮皮早早地爬进了温暖的羽毛枕头里。刚开始他还有点睡不着，但是慢慢地，他感觉眼皮越来越重...

第二天早上，皮皮神清气爽地醒来，感觉特别棒！

"坡坡，你说得对！早睡早起真的让我精神好多了！"皮皮开心地说。

"欢迎来到早睡早起俱乐部！"坡坡笑着说。`,
    emoji: '🌅',
    createdAt: '2026-06-14',
  },
  {
    id: 'story-008',
    title: '第一次做蛋糕',
    character: 'both',
    category: 'growth',
    summary: '皮皮和坡坡决定一起做松果蛋糕，虽然过程曲折但结果很甜...',
    content: `母亲节快到了，皮皮和坡坡决定给妈妈做一个特别的松果蛋糕。

"我们要做世界上最好吃的蛋糕！"皮皮兴奋地说。

"我来收集松果，你去找蜂蜜吧！"坡坡分配任务。

皮皮找到了一罐蜂蜜，但是路上不小心洒了一大半！

"糟糕了！"皮皮急得快哭了。

坡坡看到后说："没关系，我们想想办法。蜂蜜不够的话，我们可以少放一点，多放一些浆果，一样会很美味的！"

皮皮擦了擦眼泪，决定重新振作。

他们一起合作，和面、加料、搅拌...忙活了一整个下午。

蛋糕终于做好了！虽然形状有点歪歪扭扭的，颜色也不太均匀...

但是当松鸦妈妈咬下第一口时，她的眼睛湿润了："这是我吃过最好吃的蛋糕！"

"真的吗？"皮皮惊喜地问。

"当然！因为这是你们用心做的！"妈妈把皮皮和坡坡都抱在怀里。

皮皮明白了：重要的不是完美，而是用心和爱。`,
    emoji: '🎂',
    createdAt: '2026-06-13',
  },
  {
    id: 'story-009',
    title: '这杯水安全吗？',
    character: 'both',
    category: 'anxiety',
    summary: '皮皮盯着小溪里的水发愁，坡坡教他如何轻松看待喝水这件事...',
    content: `皮皮和坡坡在森林边的小溪边玩耍。

皮皮盯着清澈的溪水，突然眉头紧锁。

Pipi: "Pōpo, is this water really safe to drink? What if there are tiny bugs in it that I can't see? What if the water tastes strange and makes my stomach hurt?"\n皮皮："坡坡，这水真的安全吗？万一有我看不见的小虫子怎么办？万一味道怪怪的，让我的肚子疼怎么办？"

Pōpo: "Pipi, look at how clear and sparkling this water is. The stream flows fresh every day from the mountain spring above. I drink here every morning and I feel wonderful!"\n坡坡："皮皮，你看这水多清澈、多闪亮啊。这条小溪每天从山上的泉水流下来，都是新鲜的。我每天早上都在这里喝水，感觉可棒了！"

Pipi: "But what if... what if a leaf fell in it just now? What if a frog jumped in upstream? I can't stop worrying!"\n皮皮："可是万一……万一刚才有一片叶子掉进去了呢？万一有只青蛙在上游跳进去了呢？我忍不住一直担心！"

Pōpo: "Pipi, take a slow breath with me. Look at the little fish swimming happily in the water. If the water were unsafe, would they be swimming so joyfully? Trust the forest, trust your body. Your stomach is strong, and a tiny leaf never hurt anyone."\n坡坡："皮皮，跟我一起慢慢吸一口气。你看那些小鱼在水里游得多开心。如果水不安全，它们会这么快乐地游来游去吗？相信森林，相信你的身体。你的胃很强壮，一片小叶子不会伤害任何人的。"

Pipi: "You... you really think it's okay?"\n皮皮："你……你真的觉得没问题吗？"

Pōpo: "I know it's okay. Here, I'll drink first. See? Mmm, refreshing and sweet! Your turn, Pipi."\n坡坡："我知道没问题。来，我先喝。看到了吗？嗯，清凉又甘甜！轮到你了，皮皮。"

皮皮小心地啄了一口溪水，眼睛慢慢亮了起来。

Pipi: "Wow... it really is sweet! And my stomach feels fine! Why did I worry so much?"\n皮皮："哇……真的好甜！我的肚子感觉也没事！为什么我之前那么担心呢？"

Pōpo: "That's what worry does, Pipi. It makes small things seem big. But when you trust a little and try, you often find there was nothing to fear at all."\n坡坡："这就是担心的作用，皮皮。它让小事情看起来很大。但当你稍微相信一点、尝试一下，你经常会发现根本没什么可怕的。"

皮皮又喝了一大口，开心地笑了。`,
    emoji: '💧',
    createdAt: '2026-06-21',
  },
  {
    id: 'story-010',
    title: '储藏了多少果子？',
    character: 'both',
    category: 'anxiety',
    summary: '皮皮数了八百遍橡果，还是担心不够过冬，坡坡带他去看看春天的花...',
    content: `秋天的午后，皮皮在树洞里来回踱步，脚边堆满了橡果。

Pipi: "Pōpo, I counted eight hundred times. Eight hundred! I have one hundred and twenty-three acorns. Is that enough for winter? What if winter is extra long this year? What if I forget where I hid them?"\n皮皮："坡坡，我数了八百遍。八百遍！我有一百二十三颗橡果。这够过冬吗？万一今年冬天特别长怎么办？万一我忘了藏在哪里怎么办？"

Pōpo: "Pipi, come sit outside with me. Feel the warm sun on your feathers."\n坡坡："皮皮，出来跟我一起坐。感受阳光照在你羽毛上的温暖。"

Pipi: "But I need to count again! Maybe I missed one. Maybe a squirrel stole some while I was sleeping!"\n皮皮："但我需要再数一遍！也许我漏掉了一颗。也许有只松鼠在我睡觉的时候偷走了一些！"

Pōpo: "Pipi, look at the trees around us. They don't count their leaves. They don't worry about how many will fall. They just grow, rest, and trust that spring will come again. The forest always provides."\n坡坡："皮皮，看看我们周围的树。它们不会数自己的叶子。它们不会担心有多少会掉下来。它们只是生长、休息，然后相信春天会再次到来。森林总会提供一切的。"

Pipi: "But... what if I'm different? What if I'm not as good at finding food as other birds?"\n皮皮："但是……万一我不一样呢？万一我不如其他鸟擅长找食物呢？"

Pōpo: "Every bird is different, Pipi. And that's okay. You have me, your friend. We can share. We can help each other find food. You don't have to do everything alone."\n坡坡："每只鸟都不一样，皮皮。这没关系。你有我，你的朋友。我们可以分享。我们可以互相帮助找食物。你不需要一个人做所有事情。"

皮皮慢慢平静下来，走到坡坡身边坐下。

Pipi: "I... I never thought about it that way. Having a friend makes it less scary."\n皮皮："我……我从来没这样想过。有朋友在身边，就没那么可怕了。"

Pōpo: "Exactly! Now let's go enjoy the sunshine. Winter is still far away, and today is beautiful."\n坡坡："就是这样！现在我们去享受阳光吧。冬天还远着呢，今天很美。"`,
    emoji: '🌰',
    createdAt: '2026-06-21',
  },
  {
    id: 'story-011',
    title: '捉到了几只虫子？',
    character: 'both',
    category: 'anxiety',
    summary: '皮皮今天只捉到三只虫子，他觉得其他小鸟会笑话他...',
    content: `傍晚，皮皮垂头丧气地飞回树上，爪子里紧紧抓着三只小虫子。

Pipi: "Pōpo, I only caught three worms today. Three! The robin caught ten. The sparrow caught seven. Everyone will laugh at me!"\n皮皮："坡坡，我今天只捉到了三条虫子。三条！那只知更鸟捉了十条。那只麻雀捉了七条。大家都会笑话我的！"

Pōpo: "Pipi, let me see those worms. Oh, they look very plump and healthy! You chose good ones."\n坡坡："皮皮，让我看看这些虫子。哦，它们看起来又肥又健康！你选得真好。"

Pipi: "But three is not enough! I'm the worst hunter in the forest. What if I'm too slow? What if my eyes aren't sharp enough?"\n皮皮："但是三条不够！我是森林里最差劲的猎手。万一我太慢了呢？万一我的眼睛不够尖呢？"

Pōpo: "Pipi, do you remember last week when you caught that big caterpillar that was hiding deep in the bark? No one else could find it. You have a special talent for finding hidden food."\n坡坡："皮皮，你还记得上周你捉到的那只藏在树皮深处的大毛毛虫吗？其他鸟都找不到。你有发现隐藏食物的特殊天赋。"

Pipi: "I... I did catch that one, didn't I?"\n皮皮："我……我确实捉到了那只，对吧？"

Pōpo: "Yes! And today, maybe you spent more time helping the little chick find its mother. Or maybe you were enjoying the beautiful flowers. Numbers are not everything, Pipi."\n坡坡："是的！而且今天，也许你花了很多时间帮那只小鸡找到妈妈。或者也许你只是享受了美丽的花。数字不是一切，皮皮。"

皮皮抬起头，看了看自己爪子里的虫子。

Pipi: "These are actually quite big worms. And they were hiding under a heavy rock. It took skill to find them."\n皮皮："这些虫子其实挺大的。而且它们藏在很重的石头下面。能发现它们需要技巧。"

Pōpo: "See? You have your own strengths. Don't compare your three special worms to someone else's ten ordinary ones. Be proud of what you can do."\n坡坡："看到了吗？你有你自己的长处。不要拿你的三条特别的虫子去和别人十条普通的虫子比较。为你能做到的事情感到骄傲。"

皮皮终于露出了微笑，心情好多了。`,
    emoji: '🐛',
    createdAt: '2026-06-21',
  },
  {
    id: 'story-012',
    title: '我的羽毛颜色好看吗？',
    character: 'both',
    category: 'anxiety',
    summary: '皮皮觉得自己的羽毛不够鲜艳，坡坡让他看看水里的倒影...',
    content: `皮皮站在水边，看着自己的倒影，叹了口气。

Pipi: "Pōpo, look at my feathers. They're so plain. The blue jay has such bright blue feathers. The cardinal is so red and beautiful. I'm just... brown and grey."\n皮皮："坡坡，看看我的羽毛。太朴素了。那只蓝松鸦有那么鲜艳的蓝色羽毛。那只红雀又红又漂亮。我只是……棕色和灰色。"

Pōpo: "Pipi, come closer to the water. Look again. What do you see?"\n坡坡："皮皮，靠近水面一点。再看看。你看到了什么？"

Pipi: "I see... I see a bird with soft brown wings that blend perfectly with the tree bark. I see white spots that look like tiny stars. I see a strong beak and bright eyes."\n皮皮："我看到……我看到一只翅膀柔软棕褐色、和树皮完美融合的鸟。我看到像小星星一样的白色斑点。我看到强壮的喙和明亮的眼睛。"

Pōpo: "Exactly! Your colors help you hide from danger. Your white spots help your friends find you in the dark forest. Every color on you has a purpose."\n坡坡："就是这样！你的颜色帮助你躲避危险。你的白色斑点帮助朋友在黑暗的森林里找到你。你身上的每一种颜色都有它的用途。"

Pipi: "But... don't you wish I was more colorful? Like the peacock?"\n皮皮："但是……你不希望我颜色更鲜艳一些吗？像孔雀那样？"

Pōpo: "Pipi, if you were a peacock, you couldn't fit in our tree hollow. Your long tail would get stuck in every branch! And think about it - when we play hide and seek, you always win because you blend in so well."\n坡坡："皮皮，如果你是孔雀，你就进不了我们的树洞了。你的长尾巴会卡在每一根树枝上！而且想想看——我们玩捉迷藏的时候，你总是赢，因为你和周围融合得太好了。"

皮皮低头看了看自己的羽毛，摸了摸那些白色的小斑点。

Pipi: "I never thought of it that way. My colors are actually... useful."\n皮皮："我从来没这样想过。我的颜色实际上……很有用。"

Pōpo: "They are perfect for you, Pipi. You are perfect for you. And I think you are beautiful just as you are."\n坡坡："它们非常适合你，皮皮。你就是你，完美无缺。而且我觉得你现在这样就很美。"

皮皮的脸红了，但心里暖暖的。他展开翅膀，第一次为自己独特的羽毛感到骄傲。`,
    emoji: '🪶',
    createdAt: '2026-06-21',
  },
  {
    id: 'story-013',
    title: '昨晚睡得好吗？',
    character: 'both',
    category: 'anxiety',
    summary: '皮皮凌晨三点就醒了，担心没睡好会影响今天...',
    content: `凌晨三点，皮皮睁大了眼睛，盯着树洞顶部的木纹。

Pipi: "Pōpo, are you awake? I woke up and now I can't fall back asleep. What if I didn't get enough sleep? What if I'm too tired to fly tomorrow? What if I get sick because my body didn't rest properly?"\n皮皮："坡坡，你醒了吗？我醒了，现在再也睡不着了。万一我睡不够怎么办？万一明天我太累了飞不动怎么办？万一因为我没休息好而生病了怎么办？"

Pōpo: "yawns... Pipi, I'm here. Listen to the night sounds. The owl is hooting. The crickets are singing. The wind is whispering through the leaves. The forest is peaceful."\n坡坡：（打哈欠）……皮皮，我在这儿。听听夜晚的声音。猫头鹰在叫。蟋蟀在唱歌。风在树叶间低语。森林很宁静。"

Pipi: "But I need to sleep! I should be sleeping! I'm wasting time lying here awake!"\n皮皮："但我需要睡觉！我应该正在睡觉！我躺在这里醒着是在浪费时间！"

Pōpo: "Pipi, even when we are awake, our body is still resting. Lying down is rest. Breathing slowly is rest. Listening to the night is rest. You don't have to be asleep to feel peaceful."\n坡坡："皮皮，即使我们醒着，我们的身体仍然在休息。躺着就是休息。慢慢呼吸就是休息。听夜晚的声音就是休息。你不需要睡着才能感到平静。"

Pipi: "Really? But everyone says eight hours of sleep is important..."\n皮皮："真的吗？但每个人都说八小时睡眠很重要……"

Pōpo: "Sleep is important, yes. But worrying about sleep is worse than not sleeping. Your body knows what it needs. Sometimes it wakes up because it wants to enjoy the quiet night. That's okay too."\n坡坡："睡眠很重要，是的。但是担心睡眠比睡不着更糟糕。你的身体知道它需要什么。有时候它醒来是因为想享受安静的夜晚。那也没关系。"

皮皮深呼吸，听着坡坡描述的那些声音。

Pipi: "The owl does sound far away... and the wind does feel gentle..."\n皮皮："猫头鹰的声音确实很远……风也确实很轻柔……"

Pōpo: "Yes. And now, let's just rest together. Whether you sleep or not, morning will come, and you will be fine. I promise."\n坡坡："是的。现在，让我们一起休息吧。不管你睡不睡得着，早晨都会到来，而你会没事的。我保证。"

皮皮慢慢闭上眼睛，虽然没有立刻睡着，但心里不再焦虑了。`,
    emoji: '💤',
    createdAt: '2026-06-21',
  },
  {
    id: 'story-014',
    title: '我能飞得够高吗？',
    character: 'both',
    category: 'anxiety',
    summary: '皮皮看着老鹰翱翔，担心自己的飞行能力不够好...',
    content: `山顶上，皮皮看着一只老鹰在高高的蓝天上盘旋。

Pipi: "Pōpo, look at that eagle. He flies so high, so free. I can only fly up to the middle of the trees. What if I'm not good enough? What if my wings are too small? What if other birds laugh at how low I fly?"\n皮皮："坡坡，看那只老鹰。他飞得那么高，那么自由。我只能飞到树的中间。万一我不够好呢？万一我的翅膀太小呢？万一其他鸟嘲笑我飞得太低呢？"

Pōpo: "Pipi, the eagle flies high, yes. But can he fit through the small spaces between branches like you can? Can he land on a thin twig to pick berries?"\n坡坡："皮皮，老鹰飞得高，是的。但他能像你一样穿过树枝间的小缝隙吗？他能落在细枝上摘浆果吗？"

Pipi: "Well... no. He needs wide open spaces."\n皮皮："嗯……不能。他需要开阔的空间。"

Pōpo: "Exactly! You can fly low and find food on the ground. You can weave through the forest quickly. You can hide in small places. Every bird has their own flying style."\n坡坡："就是这样！你可以飞得低，在地上找到食物。你可以快速穿梭在森林里。你可以躲在小地方。每只鸟都有自己的飞行方式。"

Pipi: "But... don't you wish I could fly as high as the eagle? Wouldn't that be amazing?"\n皮皮："但是……你不希望我能像老鹰一样飞得那么高吗？那不是很棒吗？"

Pōpo: "Pipi, imagine if I couldn't see you because you were always flying high in the clouds. I like having you near me, flying beside me, playing tag among the trees. That's what makes you special to me."\n坡坡："皮皮，想象一下如果我看不到你，因为你总是在云层里高飞。我喜欢你在我身边，在我旁边飞，在树丛间玩捉迷藏。这让你对我来说很特别。"

皮皮看着自己的翅膀，它们确实很适合在树林里穿梭。

Pipi: "I guess... flying low lets me see the flowers up close. And the mushrooms. And the little bugs on the ground."\n皮皮："我想……飞得低让我能近距离看到花朵。还有蘑菇。还有地上的小虫子。"

Pōpo: "Yes! And you can land on my branch anytime you want. That's much better than being far away in the clouds, don't you think?"\n坡坡："是的！而且你可以随时落在我的树枝上。这比远远地在云层里好多了，你不觉得吗？"

皮皮笑了，轻轻飞到坡坡身边的树枝上。

Pipi: "You're right. Being here with you is better than any high cloud."\n皮皮："你说得对。和你在一起比任何高空的云都好。"`,
    emoji: '🦅',
    createdAt: '2026-06-21',
  },
  {
    id: 'story-015',
    title: '小青蛙喜欢我吗？',
    character: 'both',
    category: 'anxiety',
    summary: '皮皮担心小青蛙不喜欢自己，坡坡带他去问问看...',
    content: `池塘边，皮皮看见小青蛙在荷叶上跳来跳去，却不敢过去打招呼。

Pipi: "Pōpo, little frog is playing over there. But what if he doesn't like me? What if he thinks I'm too noisy? What if he doesn't want to be friends with a bird?"\n皮皮："坡坡，小青蛙在那边玩。但如果他不喜欢我怎么办？万一他觉得我太吵呢？万一他不想和鸟做朋友呢？"

Pōpo: "Pipi, has little frog ever said he doesn't like you?"\n坡坡："皮皮，小青蛙有没有说过他不喜欢你？"

Pipi: "No... but what if he's just being polite? What if he secretly thinks I'm boring?"\n皮皮："没有……但如果他只是出于礼貌呢？万一他 secretly 觉得我很无聊呢？"

Pōpo: "Pipi, look at me. Do you like me?"\n坡坡："皮皮，看着我。你喜欢我吗？"

Pipi: "Of course! You're my best friend!"\n皮皮："当然！你是我最好的朋友！"

Pōpo: "And do you worry that I secretly don't like you?"\n坡坡："那你担心我 secretly 不喜欢你吗？"

Pipi: "No... because you always smile at me and help me."\n皮皮："不……因为你总是对我笑，总是帮助我。"

Pōpo: "Exactly! Friendship is not a secret test, Pipi. If someone likes you, they show it. If little frog wanted to be alone, he would hide under the water. But he's sitting on the lily pad, looking at us."\n坡坡："就是这样！友谊不是 secret 测试，皮皮。如果有人喜欢你，他们会表现出来。如果小青蛙想一个人待着，他会藏在水底下。但他正坐在荷叶上，看着我们呢。"

皮皮看向池塘，小青蛙确实正看着他们。

Pipi: "He... he is looking at us. Maybe he wants to say hello?"\n皮皮："他……他在看着我们。也许他想打招呼？"

Pōpo: "There's only one way to find out. Let's go say hello together. I'll be right beside you."\n坡坡："只有一个办法能知道。我们一起去打招呼吧。我会一直在你身边的。"

皮皮和坡坡飞到池塘边。小青蛙高兴地跳了过来。

Little Frog: "Hi Pipi! Hi Pōpo! I was hoping you'd come play today! I found a really cool new splash game!"\n小青蛙："嗨皮皮！嗨坡坡！我正希望你们今天来玩呢！我发现了一个超酷的新水花游戏！"

Pipi: "You... you were hoping we'd come? You really like playing with us?"\n皮皮："你……你希望我们过来？你真的喜欢和我们玩？"

Little Frog: "Of course! You're my favorite bird friends! Pipi, you're so funny when you try to hop like me!"\n小青蛙："当然！你是我最喜欢的鸟朋友！皮皮，你学我跳的时候太好笑了！"

皮皮终于开心地笑了，和朋友们一起玩耍。`,
    emoji: '🐸',
    createdAt: '2026-06-21',
  },
];

export const getStoriesByCharacter = (character: 'pipi' | 'popo' | 'both') => {
  return stories.filter(story => story.character === character || story.character === 'both');
};

export const getStoriesByCategory = (category: 'anxiety' | 'relax' | 'growth') => {
  return stories.filter(story => story.category === category);
};

export const getStoryById = (id: string) => {
  return stories.find(story => story.id === id || story.id === `story-${id.padStart(3, '0')}` || story.id.includes(id));
};

export const getStoryIndex = (id: string) => {
  return stories.findIndex(story => story.id === id || story.id === `story-${id.padStart(3, '0')}` || story.id.includes(id));
};
