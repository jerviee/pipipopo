import { useState } from 'react';
import { Link } from 'react-router-dom';
import { stories, Story } from '../data/stories';
import { Book, Filter } from 'lucide-react';

export default function StoriesPage() {
  const [filter, setFilter] = useState<'all' | 'pipi' | 'popo' | 'both'>('all');
  const [category, setCategory] = useState<'all' | 'anxiety' | 'relax' | 'growth'>('all');

  const filteredStories = stories.filter(story => {
    const characterMatch = filter === 'all' || story.character === filter || story.character === 'both';
    const categoryMatch = category === 'all' || story.category === category;
    return characterMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-50 via-warm-100 to-calm-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="font-display text-5xl text-warm-700 mb-4">故事小屋</h1>
          <p className="text-warm-600 text-lg">皮皮和坡坡的治愈故事，陪你度过每一天</p>
        </div>

        {/* 筛选器 */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-warm-600" />
            <span className="font-display text-lg text-warm-700">筛选</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* 角色筛选 */}
            <div>
              <label className="block text-sm text-warm-600 mb-2">角色</label>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    filter === 'all'
                      ? 'bg-warm-500 text-white shadow-md'
                      : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
                  }`}
                >
                  全部
                </button>
                <button
                  onClick={() => setFilter('pipi')}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    filter === 'pipi'
                      ? 'bg-warm-500 text-white shadow-md'
                      : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
                  }`}
                >
                  🐦 皮皮
                </button>
                <button
                  onClick={() => setFilter('popo')}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    filter === 'popo'
                      ? 'bg-calm-500 text-white shadow-md'
                      : 'bg-calm-100 text-calm-600 hover:bg-calm-200'
                  }`}
                >
                  🦅 坡坡
                </button>
                <button
                  onClick={() => setFilter('both')}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    filter === 'both'
                      ? 'bg-dream-500 text-white shadow-md'
                      : 'bg-dream-100 text-dream-600 hover:bg-dream-200'
                  }`}
                >
                  🐦🦅 一起
                </button>
              </div>
            </div>

            {/* 类型筛选 */}
            <div>
              <label className="block text-sm text-warm-600 mb-2">类型</label>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setCategory('all')}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    category === 'all'
                      ? 'bg-warm-500 text-white shadow-md'
                      : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
                  }`}
                >
                  全部
                </button>
                <button
                  onClick={() => setCategory('anxiety')}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    category === 'anxiety'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                  }`}
                >
                  😰 克服焦虑
                </button>
                <button
                  onClick={() => setCategory('relax')}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    category === 'relax'
                      ? 'bg-calm-500 text-white shadow-md'
                      : 'bg-calm-100 text-calm-600 hover:bg-calm-200'
                  }`}
                >
                  🌿 放松技巧
                </button>
                <button
                  onClick={() => setCategory('growth')}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    category === 'growth'
                      ? 'bg-nature-500 text-white shadow-md'
                      : 'bg-nature-100 text-nature-600 hover:bg-nature-200'
                  }`}
                >
                  🌱 共同成长
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 故事列表 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story, index) => (
            <Link
              key={story.id}
              to={`/stories/${story.id}`}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-warm-200"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {story.emoji}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  story.category === 'anxiety' ? 'bg-orange-100 text-orange-600' :
                  story.category === 'relax' ? 'bg-calm-100 text-calm-600' :
                  'bg-nature-100 text-nature-600'
                }`}>
                  {story.category === 'anxiety' && '😰 克服焦虑'}
                  {story.category === 'relax' && '🌿 放松技巧'}
                  {story.category === 'growth' && '🌱 共同成长'}
                </span>
              </div>
              <h3 className="font-display text-xl text-warm-700 mb-2 group-hover:text-warm-600">
                {story.title}
              </h3>
              <p className="text-warm-600 text-sm mb-4 line-clamp-3">
                {story.summary}
              </p>
              <div className="flex items-center justify-between text-xs text-warm-500">
                <span className="flex items-center gap-1">
                  {story.character === 'pipi' && '🐦 皮皮'}
                  {story.character === 'popo' && '🦅 坡坡'}
                  {story.character === 'both' && '🐦🦅 一起'}
                </span>
                <span className="group-hover:text-warm-600">阅读更多 →</span>
              </div>
            </Link>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-warm-600">没有找到符合筛选条件的故疇</p>
          </div>
        )}
      </div>
    </div>
  );
}
