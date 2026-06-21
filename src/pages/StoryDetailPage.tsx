import { useParams, Link, useState, useEffect, useRef } from 'react-router-dom';
import { getStoryById } from '../data/stories';
import { ArrowLeft, Calendar } from 'lucide-react';

export default function StoryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const story = id ? getStoryById(id) : null;
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(-1);
  const [speakingCharacter, setSpeakingCharacter] = useState<'pipi' | 'popo' | 'frog' | null>(null);
  const [currentEnglish, setCurrentEnglish] = useState('');
  const [currentChinese, setCurrentChinese] = useState('');
  const [dialogues, setDialogues] = useState<Array<{speaker: 'pipi' | 'popo' | 'frog', english: string, chinese: string}>>([]);

  useEffect(() => {
    if (story) {
      const paras = story.content.split('\n\n');
      const newDialogues: Array<{speaker: 'pipi' | 'popo' | 'frog', english: string, chinese: string}> = [];
      
      paras.forEach(para => {
        if (para.startsWith('Pipi:')) {
          const lines = para.split('\n');
          const english = lines[0].replace('Pipi: ', '');
          const chinese = lines[1] || '';
          newDialogues.push({ speaker: 'pipi', english, chinese });
        } else if (para.startsWith('Pōpo:')) {
          const lines = para.split('\n');
          const english = lines[0].replace('Pōpo: ', '');
          const chinese = lines[1] || '';
          newDialogues.push({ speaker: 'popo', english, chinese });
        } else if (para.startsWith('Little Frog:')) {
          const lines = para.split('\n');
          const english = lines[0].replace('Little Frog: ', '');
          const chinese = lines[1] || '';
          newDialogues.push({ speaker: 'frog', english, chinese });
        }
      });
      
      setDialogues(newDialogues);
    }
  }, [story]);

  const speakDialogue = (index: number) => {
    if (index >= dialogues.length) return;
    
    const dialogue = dialogues[index];
    setCurrentDialogueIndex(index);
    setCurrentEnglish(dialogue.english);
    setCurrentChinese(dialogue.chinese);
    setSpeakingCharacter(dialogue.speaker);
    
    const utterance = new SpeechSynthesisUtterance(dialogue.english);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = dialogue.speaker === 'pipi' ? 1.1 : dialogue.speaker === 'popo' ? 0.95 : 1.05;
    utterance.onend = () => {
      setSpeakingCharacter(null);
    };
    speechSynthesis.speak(utterance);
  };

  const handlePipiClick = () => {
    speechSynthesis.cancel();
    if (currentDialogueIndex === -1) {
      const firstDialogue = dialogues.findIndex(d => d.speaker === 'pipi');
      if (firstDialogue !== -1) speakDialogue(firstDialogue);
    } else {
      const nextPipi = dialogues.findIndex((d, i) => i > currentDialogueIndex && d.speaker === 'pipi');
      if (nextPipi !== -1) {
        speakDialogue(nextPipi);
      } else {
        const firstDialogue = dialogues.findIndex(d => d.speaker === 'pipi');
        if (firstDialogue !== -1) speakDialogue(firstDialogue);
      }
    }
  };

  const handlePopoClick = () => {
    speechSynthesis.cancel();
    if (currentDialogueIndex === -1) {
      const firstDialogue = dialogues.findIndex(d => d.speaker === 'popo');
      if (firstDialogue !== -1) speakDialogue(firstDialogue);
    } else {
      const nextPopo = dialogues.findIndex((d, i) => i > currentDialogueIndex && d.speaker === 'popo');
      if (nextPopo !== -1) {
        speakDialogue(nextPopo);
      } else {
        const firstDialogue = dialogues.findIndex(d => d.speaker === 'popo');
        if (firstDialogue !== -1) speakDialogue(firstDialogue);
      }
    }
  };

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

  const paragraphs = story.content.split('\n\n');

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-50 via-warm-100 to-calm-50 py-12 px-4 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 飘落的装饰 */}
        <div className="absolute top-10 left-[10%] text-4xl animate-float opacity-40">🌰</div>
        <div className="absolute top-20 right-[15%] text-3xl animate-float opacity-30" style={{animationDelay: '0.5s'}}>🐛</div>
        <div className="absolute top-[30%] left-[5%] text-3xl animate-float opacity-35" style={{animationDelay: '1s'}}>🐸</div>
        <div className="absolute top-[40%] right-[8%] text-2xl animate-float opacity-30" style={{animationDelay: '1.5s'}}>🐦</div>
        <div className="absolute bottom-[30%] left-[8%] text-2xl animate-float opacity-25" style={{animationDelay: '2s'}}>🦅</div>
        <div className="absolute bottom-[20%] right-[12%] text-3xl animate-float opacity-35" style={{animationDelay: '0.8s'}}>🌰</div>
        <div className="absolute top-[15%] left-[25%] text-2xl animate-float opacity-20" style={{animationDelay: '2.5s'}}>🐛</div>
        <div className="absolute bottom-[40%] right-[25%] text-2xl animate-float opacity-25" style={{animationDelay: '1.2s'}}>🐦</div>
        <div className="absolute top-[50%] left-[3%] text-xl animate-float opacity-20" style={{animationDelay: '3s'}}>🐸</div>
        <div className="absolute bottom-[15%] left-[20%] text-xl animate-float opacity-25" style={{animationDelay: '0.3s'}}>🦅</div>
        
        {/* 更多装饰 */}
        <div className="absolute top-[25%] right-[3%] text-xl animate-float opacity-15" style={{animationDelay: '2.2s'}}>🌰</div>
        <div className="absolute bottom-[25%] left-[15%] text-xl animate-float opacity-20" style={{animationDelay: '1.8s'}}>🐛</div>
        <div className="absolute top-[60%] right-[18%] text-xl animate-float opacity-15" style={{animationDelay: '2.8s'}}>🐦</div>
        <div className="absolute bottom-[35%] left-[30%] text-lg animate-float opacity-20" style={{animationDelay: '0.6s'}}>🐸</div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          to="/stories"
          className="inline-flex items-center gap-2 text-warm-600 hover:text-warm-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          返回故事小屋
        </Link>

        <article className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
          {/* 头部 - 两只松鸦 */}
          <div className="bg-gradient-to-r from-warm-200 to-calm-200 p-6 text-center relative">
            <div className="flex justify-center items-center gap-8">
              {/* 皮皮 */}
              <div 
                className={`text-center cursor-pointer transition-all duration-300 ${
                  speakingCharacter === 'pipi' 
                    ? 'transform scale-110 drop-shadow-lg' 
                    : speakingCharacter !== null && speakingCharacter !== 'pipi'
                    ? 'opacity-50 grayscale'
                    : 'hover:scale-105'
                }`}
                onClick={handlePipiClick}
              >
                <div className={`relative ${speakingCharacter === 'pipi' ? 'animate-wiggle' : ''}`}>
                  <div className={`text-8xl ${speakingCharacter === 'pipi' ? 'drop-shadow-2xl' : ''}`}>🐦</div>
                  {speakingCharacter === 'pipi' && (
                    <div className="absolute -inset-4 bg-warm-400/30 rounded-full animate-ping"></div>
                  )}
                </div>
                <p className="font-display text-lg text-warm-700 mt-2">皮皮</p>
                <p className="text-xs text-warm-500">点击朗读</p>
              </div>

              {/* 中间对话图标 */}
              <div className="text-4xl animate-bounce">💬</div>

              {/* 坡坡 */}
              <div 
                className={`text-center cursor-pointer transition-all duration-300 ${
                  speakingCharacter === 'popo' 
                    ? 'transform scale-110 drop-shadow-lg' 
                    : speakingCharacter !== null && speakingCharacter !== 'popo'
                    ? 'opacity-50 grayscale'
                    : 'hover:scale-105'
                }`}
                onClick={handlePopoClick}
              >
                <div className={`relative ${speakingCharacter === 'popo' ? 'animate-wiggle' : ''}`}>
                  <div className={`text-8xl ${speakingCharacter === 'popo' ? 'drop-shadow-2xl' : ''}`}>🦅</div>
                  {speakingCharacter === 'popo' && (
                    <div className="absolute -inset-4 bg-calm-400/30 rounded-full animate-ping"></div>
                  )}
                </div>
                <p className="font-display text-lg text-calm-700 mt-2">坡坡</p>
                <p className="text-xs text-calm-500">点击朗读</p>
              </div>
            </div>

            {/* 标签 */}
            <div className="flex items-center justify-center gap-2 mb-4 flex-wrap mt-4">
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
            <h1 className="font-display text-3xl md:text-4xl text-warm-700 mb-2">
              {story.title}
            </h1>
            <p className="text-warm-600 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              {story.createdAt}
            </p>
          </div>

          {/* 对话翻译显示区 */}
          {currentEnglish && (
            <div className="bg-gradient-to-r from-warm-100 to-calm-100 p-4 animate-fade-in">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl">{speakingCharacter === 'pipi' ? '🐦' : speakingCharacter === 'popo' ? '🦅' : '🐸'}</span>
                  <span className="font-display text-lg text-warm-700">
                    {speakingCharacter === 'pipi' ? '皮皮说：' : speakingCharacter === 'popo' ? '坡坡说：' : '小青蛙说：'}
                  </span>
                </div>
                <p className="text-lg text-warm-800 mb-2 leading-relaxed">{currentEnglish}</p>
                <p className="text-base text-calm-700 italic">{currentChinese}</p>
              </div>
            </div>
          )}

          {/* 故事内容 */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {paragraphs.map((paragraph, index) => {
                const isPipiDialogue = paragraph.startsWith('Pipi:');
                const isPopoDialogue = paragraph.startsWith('Pōpo:');
                const isFrogDialogue = paragraph.startsWith('Little Frog:');
                const isDialogue = isPipiDialogue || isPopoDialogue || isFrogDialogue;

                return (
                  <div key={index} className="mb-6">
                    {isPipiDialogue ? (
                      <div 
                        className={`flex items-start gap-4 p-6 rounded-2xl bg-warm-50 border-l-4 border-warm-400 cursor-pointer transition-all hover:scale-[1.02] ${
                          currentDialogueIndex === dialogues.findIndex(d => d.speaker === 'pipi' && d.english === paragraph.split('\n')[0].replace('Pipi: ', ''))
                            ? 'ring-4 ring-warm-300'
                            : ''
                        }`}
                        onClick={() => {
                          const di = dialogues.findIndex(d => d.speaker === 'pipi' && d.english === paragraph.split('\n')[0].replace('Pipi: ', ''));
                          if (di !== -1) speakDialogue(di);
                        }}
                      >
                        <div className="text-4xl flex-shrink-0">🐦</div>
                        <div className="flex-1">
                          {paragraph.split('\n').map((line, lineIndex) => (
                            <p key={lineIndex} className={`leading-relaxed ${lineIndex === 0 ? 'text-warm-700 font-medium' : 'text-gray-600 text-sm mt-2'}`}>
                              {line.replace(/^Pipi: /, '')}
                            </p>
                          ))}
                        </div>
                      </div>
                    ) : isPopoDialogue ? (
                      <div 
                        className={`flex items-start gap-4 p-6 rounded-2xl bg-calm-50 border-l-4 border-calm-400 cursor-pointer transition-all hover:scale-[1.02] ${
                          currentDialogueIndex === dialogues.findIndex(d => d.speaker === 'popo' && d.english === paragraph.split('\n')[0].replace('Pōpo: ', ''))
                            ? 'ring-4 ring-calm-300'
                            : ''
                        }`}
                        onClick={() => {
                          const di = dialogues.findIndex(d => d.speaker === 'popo' && d.english === paragraph.split('\n')[0].replace('Pōpo: ', ''));
                          if (di !== -1) speakDialogue(di);
                        }}
                      >
                        <div className="text-4xl flex-shrink-0">🦅</div>
                        <div className="flex-1">
                          {paragraph.split('\n').map((line, lineIndex) => (
                            <p key={lineIndex} className={`leading-relaxed ${lineIndex === 0 ? 'text-calm-700 font-medium' : 'text-gray-600 text-sm mt-2'}`}>
                              {line.replace(/^Pōpo: /, '')}
                            </p>
                          ))}
                        </div>
                      </div>
                    ) : isFrogDialogue ? (
                      <div 
                        className={`flex items-start gap-4 p-6 rounded-2xl bg-nature-50 border-l-4 border-nature-400 cursor-pointer transition-all hover:scale-[1.02] ${
                          currentDialogueIndex === dialogues.findIndex(d => d.speaker === 'frog' && d.english === paragraph.split('\n')[0].replace('Little Frog: ', ''))
                            ? 'ring-4 ring-nature-300'
                            : ''
                        }`}
                        onClick={() => {
                          const di = dialogues.findIndex(d => d.speaker === 'frog' && d.english === paragraph.split('\n')[0].replace('Little Frog: ', ''));
                          if (di !== -1) speakDialogue(di);
                        }}
                      >
                        <div className="text-4xl flex-shrink-0">🐸</div>
                        <div className="flex-1">
                          {paragraph.split('\n').map((line, lineIndex) => (
                            <p key={lineIndex} className={`leading-relaxed ${lineIndex === 0 ? 'text-nature-700 font-medium' : 'text-gray-600 text-sm mt-2'}`}>
                              {line.replace(/^Little Frog: /, '')}
                            </p>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-warm-800 leading-relaxed text-lg p-4 bg-warm-50/50 rounded-xl">
                        {paragraph}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* 底部装饰 */}
            <div className="mt-12 pt-8 border-t border-warm-200 text-center">
              <div className="flex justify-center gap-4 mb-4">
                <span className="text-4xl">🐦</span>
                <span className="text-4xl">🦅</span>
                <span className="text-4xl">💕</span>
              </div>
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
