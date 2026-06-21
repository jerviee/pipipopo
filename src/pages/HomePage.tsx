import { Link } from 'react-router-dom';
import { stories } from '../data/stories';
import { Heart, Moon, Coffee, Feather } from 'lucide-react';

export default function HomePage() {
  const latestStories = stories.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-50 via-warm-100 to-warm-200">
      {/* Hero Section */}
      <section className="relative py-16 px-4 text-center overflow-hidden">
        {/* 装饰性云朵 */}
        <div className="absolute top-10 left-10 text-6xl opacity-30 animate-float">☁️</div>
        <div className="absolute top-20 right-20 text-4xl opacity-20 animate-float" style={{animationDelay: '1s'}}>☁️</div>
        <div className="absolute bottom-20 left-1/4 text-5xl opacity-25 animate-float" style={{animationDelay: '2s'}}>🍃</div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* 标题 */}
          <h1 className="font-display text-6xl md:text-8xl font-bold text-warm-600 mb-4 drop-shadow-lg">
            放松鸦
          </h1>
          
          {/* 角色介绍 */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-8xl mb-2 animate-wiggle">🐦</div>
              <p className="font-display text-2xl text-warm-700">皮皮</p>
              <p className="text-sm text-warm-600">焦虑但勇敢</p>
            </div>
            <div className="text-4xl text-warm-400">💕</div>
            <div className="text-center">
              <div className="text-8xl mb-2">🦅</div>
              <p className="font-display text-2xl text-calm-600">坡坡</p>
              <p className="text-sm text-calm-600">放松且智慧</p>
            </div>
          </div>

          <p className="text-xl text-warm-800 mb-8 font-body max-w-2xl mx-auto leading-relaxed">
            两只可爱松鸦的治愈故事，陪你一起放松心情，缓解焦虑，找到内心的平静 ✨
          </p>

          {/* CTA按钮 */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/stories"
              className="px-8 py-4 bg-warm-500 hover:bg-warm-600 text-white font-display text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              📖 开始阅读故事
            </Link>
            <Link
              to="/relax"
              className="px-8 py-4 bg-calm-500 hover:bg-calm-600 text-white font-display text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              🌙 放松一下
            </Link>
          </div>
        </div>
      </section>

      {/* 最新故事 */}
      <section className="py-12 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-4xl text-warm-700 flex items-center gap-3">
              <Feather className="w-8 h-8" />
              最新故事
            </h2>
            <Link
              to="/stories"
              className="text-warm-600 hover:text-warm-700 font-medium flex items-center gap-2 transition-colors"
            >
              查看全部 →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestStories.map((story, index) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-warm-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{story.emoji}</div>
                <h3 className="font-display text-xl text-warm-700 mb-2">{story.title}</h3>
                <p className="text-warm-600 text-sm mb-4 line-clamp-3">{story.summary}</p>
                <div className="flex items-center justify-between text-xs text-warm-500">
                  <span className="flex items-center gap-1">
                    {story.character === 'pipi' && '🐦 皮皮'}
                    {story.character === 'popo' && '🦅 坡坡'}
                    {story.character === 'both' && '🐦🦅 一起'}
                  </span>
                  <span>{story.createdAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 快速入口 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl text-center text-warm-700 mb-12 flex items-center justify-center gap-3">
            <Heart className="w-8 h-8" />
            放松角落
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 呼吸练习 */}
            <Link
              to="/relax#breathing"
              className="group bg-gradient-to-br from-calm-100 to-calm-200 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-transparent hover:border-calm-300"
            >
              <div className="text-7xl mb-4 group-hover:animate-breathe">🌬️</div>
              <h3 className="font-display text-2xl text-calm-700 mb-2">呼吸练习</h3>
              <p className="text-calm-600 text-sm">跟着节奏深呼吸，放松身心</p>
            </Link>

            {/* 白噪音 */}
            <Link
              to="/relax#sounds"
              className="group bg-gradient-to-br from-nature-100 to-nature-200 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-transparent hover:border-nature-300"
            >
              <div className="text-7xl mb-4 group-hover:animate-float">🌧️</div>
              <h3 className="font-display text-2xl text-nature-700 mb-2">自然声音</h3>
              <p className="text-nature-600 text-sm">聆听雨声和海浪，找回宁静</p>
            </Link>

            {/* 睡前故事 */}
            <Link
              to="/stories?sleep=true"
              className="group bg-gradient-to-br from-dream-100 to-dream-200 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-transparent hover:border-dream-300"
            >
              <div className="text-7xl mb-4 group-hover:animate-float" style={{animationDelay: '0.5s'}}>🌙</div>
              <h3 className="font-display text-2xl text-dream-700 mb-2">睡前故事</h3>
              <p className="text-dream-600 text-sm">温馨故事伴你入眠</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 关于我们预览 */}
      <section className="py-12 px-4 bg-gradient-to-r from-warm-100 via-warm-50 to-calm-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl text-warm-700 mb-4">关于皮皮和坡坡</h2>
          <p className="text-warm-600 mb-6 leading-relaxed">
            我们是两只性格不同但同样可爱的松鸦。皮皮有时候会焦虑，但他很勇敢；
            坡坡总是很放松，充满了生活的智慧。我们在这里，陪你一起成长 🌟
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-warm-500 hover:bg-warm-600 text-white font-display rounded-full transition-colors"
          >
            <Coffee className="w-5 h-5" />
            了解更多
          </Link>
        </div>
      </section>
    </div>
  );
}
