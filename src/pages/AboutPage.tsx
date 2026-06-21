import { Heart, Sparkles, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dream-50 via-warm-50 to-calm-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">🌟</div>
          <h1 className="font-display text-5xl text-warm-700 mb-4">关于放松鸦</h1>
          <p className="text-warm-600 text-lg max-w-2xl mx-auto">
            一个温暖的角落，两只可爱松鸦的治愈故事，陪你一起成长 ✨
          </p>
        </div>

        {/* 角色介绍 */}
        <section className="mb-16">
          <h2 className="font-display text-3xl text-warm-700 mb-8 text-center flex items-center justify-center gap-3">
            <Users className="w-8 h-8" />
            我们的主角
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 皮皮 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-warm-200 hover:shadow-2xl transition-shadow">
              <div className="text-center mb-6">
                <div className="text-8xl mb-4 animate-wiggle">🐦</div>
                <h3 className="font-display text-4xl text-warm-600 mb-2">皮皮</h3>
                <p className="text-warm-500 italic">Pípi the Anxious Jay</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-display text-lg text-warm-700 mb-2">性格特点</h4>
                  <p className="text-warm-600 text-sm leading-relaxed">
                    皮皮是一只容易紧张的小松鸦。他会因为考试、演讲或者社交场合而焦虑不安。
                    但是，皮皮非常勇敢，他总是努力克服自己的恐惧！
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-lg text-warm-700 mb-2">喜欢的事情</h4>
                  <ul className="text-warm-600 text-sm space-y-1">
                    <li>✨ 收集闪闪发光的小东西</li>
                    <li>✨ 听坡坡讲放松的技巧</li>
                    <li>✨ 完成挑战后的成就感</li>
                    <li>✨ 和坡坡一起冒险</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-display text-lg text-warm-700 mb-2">口头禅</h4>
                  <p className="text-warm-600 text-sm italic bg-warm-50 p-3 rounded-lg">
                    "我...我能做到吗？"
                  </p>
                </div>
              </div>
            </div>

            {/* 坡坡 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-calm-200 hover:shadow-2xl transition-shadow">
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">🦅</div>
                <h3 className="font-display text-4xl text-calm-600 mb-2">坡坡</h3>
                <p className="text-calm-500 italic">Pòpo the Relaxed Jay</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-display text-lg text-calm-700 mb-2">性格特点</h4>
                  <p className="text-calm-600 text-sm leading-relaxed">
                    坡坡是皮皮最好的朋友，总是那么平静和放松。他相信生活中没有解决不了的问题，
                    总能找到积极的一面。坡坡总是耐心地帮助皮皮度过难关。
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-lg text-calm-700 mb-2">喜欢的事情</h4>
                  <ul className="text-calm-600 text-sm space-y-1">
                    <li>🌿 在阳光下悠闲地晒太阳</li>
                    <li>🌿 教皮皮深呼吸的技巧</li>
                    <li>🌿 探索森林里的新地方</li>
                    <li>🌿 和皮皮分享生活的智慧</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-display text-lg text-calm-700 mb-2">口头禅</h4>
                  <p className="text-calm-600 text-sm italic bg-calm-50 p-3 rounded-lg">
                    "别担心，一切都会好起来的！"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 创作理念 */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-warm-100 to-calm-100 rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="font-display text-3xl text-warm-700 mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              创作理念
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl text-warm-700 mb-3">为什么创建放松鸦？</h3>
                <p className="text-warm-600 leading-relaxed mb-4">
                  在当今快节奏的生活中很多人都承受着各种压力和焦虑。
                  我们希望通过两只可爱松鸦的故事，传递温暖和治愈的力量。
                </p>
                <p className="text-warm-600 leading-relaxed">
                  皮皮代表着我们每个人心中那个容易紧张、担心的小声音；
                  坡坡则是我们渴望拥有的平和与智慧。
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-warm-700 mb-3">我们的目标</h3>
                <ul className="space-y-2 text-warm-600">
                  <li className="flex items-start gap-2">
                    <span>🌟</span>
                    <span>用温暖的故事缓解焦虑和压力</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🌟</span>
                    <span>分享简单实用的放松技巧</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🌟</span>
                    <span>传递友情、勇气和希望的正能量</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🌟</span>
                    <span>陪伴每个人度过困难的时刻</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 底部信息 */}
        <section className="text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-5xl mb-4">💝</div>
            <h2 className="font-display text-2xl text-warm-700 mb-4">感谢你的到来</h2>
            <p className="text-warm-600 leading-relaxed mb-6 max-w-2xl mx-auto">
              无论你正在经历什么，请记住：你不是一个人。
              皮皮和坡坡会一直在这里陪着你，愿这个小小的角落能给你带来一丝温暖和安慰。
            </p>
            <div className="flex items-center justify-center gap-2 text-warm-500">
              <Heart className="w-5 h-5 fill-current" />
              <span>Made with love for everyone who needs a little comfort</span>
              <Heart className="w-5 h-5 fill-current" />
            </div>
          </div>
        </section>

        {/* 版本信息 */}
        <div className="mt-12 text-center text-warm-400 text-sm">
          <p>放松鸦 v1.0.0 - 2026</p>
          <p className="mt-1">陪你一起，放松心情 ✨</p>
        </div>
      </div>
    </div>
  );
}
