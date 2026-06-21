import { useParams, Link } from 'react-router-dom';
import { getStoryById } from '../data/stories';
import { ArrowLeft, Calendar } from 'lucide-react';

export default function StoryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const story = id ? getStoryById(id) : null;

  if (!story) {
    return (
      <div className="min-h-screen bg-warm-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🦋</div>
          <h1 className="font-display text-3xl text-warm-700 mb-4">故事未找到</h1>
          <Link
            to="/stories"
            className="inline-flex items-center gap-2 px-6 py-3 bg-warm-500 text-white rounded-full hover:bg-warm-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            返回故事小屋
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-50 via-warm-100 to-calm-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* 返回按钮 */}
        <Link
          to="/stories"
          className="inline-flex items-center gap-2 text-warm-600 hover:text-warm-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          返回故事小屋
        </Link>

        {/* 文章卡片 */}
        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* 头部 */}
          <div className="bg-gradient-to-r from-warm-200 to-calm-200 p-8 text-center">
            <div className="text-6xl mb-4">{story.emoji}</div>
            <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                story.category === 'anxiety' ? 'bg-orange-100 text-orange-600' :
                story.category === 'relax' ? 'bg-calm-100 text-calm-600' :
                'bg-nature-100 text-nature-600'
              }`}>
                {story.category === 'anxiety' && '😰 克服焦虑'}
                {story.category === 'relax' && '🌿 放松技巧'}
                {story.category === 'growth' && '🌱 共同成长'}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                story.character === 'pipi' ? 'bg-warm-100 text-warm-600' :
                story.character === 'popo' ? 'bg-calm-100 text-calm-600' :
                'bg-dream-100 text-dream-600'
              }`}>
                {story.character === 'pipi' && '🐦 皮皮的故事'}
                {story.character === 'popo' && '🦅 坡坡的故事'}
                {story.character === 'both' && '🐦🦅 一起的故事'}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-warm-700 mb-2">
              {story.title}
            </h1>
            <p className="text-warm-600 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              {story.createdAt}
            </p>
          </div>

          {/* 内容 */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {story.content.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-warm-800 leading-relaxed mb-6 ${
                    paragraph.startsWith('"') ? 'text-xl italic text-calm-700' : ''
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 底部装饰 */}
            <div className="mt-12 pt-8 border-t border-warm-200 text-center">
              <div className="text-4xl mb-4">✨</div>
              <p className="text-warm-600">
                {story.character === 'pipi' && '希望皮皮的故事能给你带来勇气 💪'}
                {story.character === 'popo' && '希望坡坡的智慧能帮你找到平静 🕊️'}
                {story.character === 'both' && '希望你们的故事能温暖你的心 💕'}
              </p>
            </div>
          </div>
        </article>

        {/* 相关故事推荐 */}
        <div className="mt-12">
          <h2 className="font-display text-2xl text-warm-700 mb-6 text-center">看看其他故事</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/stories"
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center group"
            >
              <div className="text-4xl mb-2">📚</div>
              <p className="text-warm-700 group-hover:text-warm-600">探索更多故事</p>
            </Link>
            <Link
              to="/relax"
              className="bg-gradient-to-br from-calm-100 to-calm-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center group"
            >
              <div className="text-4xl mb-2">🌙</div>
              <p className="text-calm-700 group-hover:text-calm-600">去放松一下吧</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
