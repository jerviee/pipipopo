import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getStoryById } from '../data/stories';
import { ArrowLeft, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

// 使用public目录中的本地图片作为头像
const PIPI_IMAGES = [
  '/pipi-1.jpg',
  '/pipi-2.jpg',
  '/pipi-3.jpg',
  '/pipi-4.jpg',
];
const POPO_IMAGES = [
  '/popo-1.jpg',
  '/popo-2.jpg',
  '/popo-3.jpg',
  '/popo-4.jpg',
];

function getAvatarIndex(storyId: string): number {
  const idNum = parseInt(storyId, 10);
  return (idNum - 1) % 4;
}

function playChirpSound(pitch: number = 1) {
  const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const startTime = ctx.currentTime;
  const duration = 2;
  
  let i = 0;
  const chirpInterval = setInterval(() => {
    const elapsed = ctx.currentTime - startTime;
    if (elapsed >= duration) {
      clearInterval(chirpInterval);
      return;
    }
    
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(2500 * pitch, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(3500 * pitch, ctx.currentTime + 0.08);
    
    gainNode.gain.setValueAtTime(0.25, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.12);
    
    i++;
  }, 100);
}

export default function StoryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const story = id ? getStoryById(id) : null;
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(-1);
  const [speakingCharacter, setSpeakingCharacter] = useState<'pipi' | 'popo' | 'frog' | null>(null);
  const [currentEnglish, setCurrentEnglish] = useState('');
  const [currentChinese, setCurrentChinese] = useState('');
  const [dialogues, setDialogues] = useState<Array<{speaker: 'pipi' | 'popo' | 'frog', english: string, chinese: string}>>([]);
  const [isChirping, setIsChirping] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const [showFullDialogue, setShowFullDialogue] = useState(false);

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
    setShowGlow(true);
    setIsChirping(true);
    
    const pitch = dialogue.speaker === 'pipi' ? 1.2 : dialogue.speaker === 'popo' ? 0.9 : 1.0;
    playChirpSound(pitch);
    
    setTimeout(() => {
      setIsChirping(false);
      const utterance = new SpeechSynthesisUtterance(dialogue.english);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      
      const voices = speechSynthesis.getVoices();
      if (dialogue.speaker === 'pipi') {
        const boyVoice = voices.find(v => v.name.includes('Boy') || v.name.includes('boy') || v.name.includes('Child') || v.name.includes('child'));
        if (boyVoice) utterance.voice = boyVoice;
        utterance.pitch = 1.15;
        utterance.rate = 0.95;
      } else if (dialogue.speaker === 'popo') {
        const girlVoice = voices.find(v => v.name.includes('Girl') || v.name.includes('girl') || v.name.includes('Female') || v.name.includes('female'));
        if (girlVoice) utterance.voice = girlVoice;
        utterance.pitch = 1.0;
        utterance.rate = 0.85;
      } else {
        utterance.pitch = 1.05;
      }
      
      utterance.onend = () => {
        setSpeakingCharacter(null);
        setShowGlow(false);
      };
      speechSynthesis.speak(utterance);
    }, 500);
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

  const avatarIndex = getAvatarIndex(id || '1');
  const currentPipiImage = PIPI_IMAGES[avatarIndex];
  const currentPopoImage = POPO_IMAGES[avatarIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-50 via-warm-100 to-calm-50 py-12 px-4 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <Link
          to="/stories"
          className="inline-flex items-center gap-2 text-warm-600 hover:text-warm-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          返回故事小屋
        </Link>

        {/* 标题区域 */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 mb-8">
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
          </div>
          <h1 className="font-display text-3xl md:text-4xl text-warm-700 text-center mb-2">
            {story.title}
          </h1>
          <p className="text-warm-600 flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            {story.createdAt}
          </p>
        </div>

        {/* 左右对话区域 */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* 左侧 - 皮皮 */}
          <div className="md:w-1/2">
            <div 
              className={`bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center cursor-pointer transition-all duration-300 ${
                speakingCharacter === 'pipi' 
                  ? 'ring-4 ring-warm-400 shadow-warm-400/50' 
                  : speakingCharacter !== null 
                  ? 'opacity-60'
                  : 'hover:shadow-xl'
              }`}
              onClick={handlePipiClick}
            >
              {/* 发亮效果 */}
              {showGlow && speakingCharacter === 'pipi' && (
                <div className="absolute inset-0 bg-warm-400/20 rounded-3xl animate-pulse"></div>
              )}
              
              {/* 头像 */}
              <div className="relative mb-6">
                {isChirping && speakingCharacter === 'pipi' && (
                  <div className="absolute -top-4 -right-4 text-2xl animate-bounce">
                    🎵叽叽叽
                  </div>
                )}
                <div className={`w-32 h-32 mx-auto rounded-full border-4 transition-all overflow-hidden ${
                  speakingCharacter === 'pipi' 
                    ? 'border-warm-400 shadow-2xl shadow-warm-400/50 scale-110' 
                    : 'border-warm-200'
                }`}>
                  <img 
                    src={currentPipiImage} 
                    alt="皮皮" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 名称 */}
              <h2 className="font-display text-2xl text-warm-700 mb-2">皮皮</h2>
              <p className="text-warm-500 text-sm mb-4">焦虑的小松鸦</p>

              {/* 当前对话 */}
              {speakingCharacter === 'pipi' && currentEnglish && (
                <div className="bg-warm-100 rounded-xl p-4 animate-fade-in">
                  <p className="text-warm-800 font-medium mb-2">{currentEnglish}</p>
                  <p className="text-warm-600 text-sm italic">{currentChinese}</p>
                </div>
              )}

              {!speakingCharacter && (
                <p className="text-warm-400 text-sm">点击皮皮听她说话</p>
              )}
            </div>
          </div>

          {/* 右侧 - 坡坡 */}
          <div className="md:w-1/2">
            <div 
              className={`bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center cursor-pointer transition-all duration-300 ${
                speakingCharacter === 'popo' 
                  ? 'ring-4 ring-calm-400 shadow-calm-400/50' 
                  : speakingCharacter !== null 
                  ? 'opacity-60'
                  : 'hover:shadow-xl'
              }`}
              onClick={handlePopoClick}
            >
              {/* 发亮效果 */}
              {showGlow && speakingCharacter === 'popo' && (
                <div className="absolute inset-0 bg-calm-400/20 rounded-3xl animate-pulse"></div>
              )}
              
              {/* 头像 */}
              <div className="relative mb-6">
                {isChirping && speakingCharacter === 'popo' && (
                  <div className="absolute -top-4 -right-4 text-2xl animate-bounce">
                    🎵叽叽叽
                  </div>
                )}
                <div className={`w-32 h-32 mx-auto rounded-full border-4 transition-all overflow-hidden ${
                  speakingCharacter === 'popo' 
                    ? 'border-calm-400 shadow-2xl shadow-calm-400/50 scale-110' 
                    : 'border-calm-200'
                }`}>
                  <img 
                    src={currentPopoImage} 
                    alt="坡坡" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 名称 */}
              <h2 className="font-display text-2xl text-calm-700 mb-2">坡坡</h2>
              <p className="text-calm-500 text-sm mb-4">放松的小松鸦</p>

              {/* 当前对话 */}
              {speakingCharacter === 'popo' && currentEnglish && (
                <div className="bg-calm-100 rounded-xl p-4 animate-fade-in">
                  <p className="text-calm-800 font-medium mb-2">{currentEnglish}</p>
                  <p className="text-calm-600 text-sm italic">{currentChinese}</p>
                </div>
              )}

              {!speakingCharacter && (
                <p className="text-calm-400 text-sm">点击坡坡听他说话</p>
              )}
            </div>
          </div>
        </div>

        {/* 折叠的完整对话 */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
          <button
            onClick={() => setShowFullDialogue(!showFullDialogue)}
            className="w-full p-6 flex items-center justify-center gap-2 text-warm-700 hover:bg-warm-50 transition-colors"
          >
            <span className="font-display text-lg">完整对话内容</span>
            {showFullDialogue ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>

          {showFullDialogue && (
            <div className="p-8 border-t border-warm-200 animate-fade-in">
              <div className="prose prose-lg max-w-none">
                {story.content.split('\n\n').map((paragraph, index) => {
                  const isPipiDialogue = paragraph.startsWith('Pipi:');
                  const isPopoDialogue = paragraph.startsWith('Pōpo:');
                  const isFrogDialogue = paragraph.startsWith('Little Frog:');

                  return (
                    <div key={index} className="mb-6">
                      {isPipiDialogue ? (
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-warm-50 border-l-4 border-warm-400">
                          <div className="w-10 h-10 rounded-full bg-warm-200 flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">🐦</span>
                          </div>
                          <div className="flex-1">
                            {paragraph.split('\n').map((line, lineIndex) => (
                              <p key={lineIndex} className={`leading-relaxed ${lineIndex === 0 ? 'text-warm-700 font-medium' : 'text-gray-600 text-sm mt-1'}`}>
                                {line.replace(/^Pipi: /, '')}
                              </p>
                            ))}
                          </div>
                        </div>
                      ) : isPopoDialogue ? (
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-calm-50 border-l-4 border-calm-400">
                          <div className="w-10 h-10 rounded-full bg-calm-200 flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">🦅</span>
                          </div>
                          <div className="flex-1">
                            {paragraph.split('\n').map((line, lineIndex) => (
                              <p key={lineIndex} className={`leading-relaxed ${lineIndex === 0 ? 'text-calm-700 font-medium' : 'text-gray-600 text-sm mt-1'}`}>
                                {line.replace(/^Pōpo: /, '')}
                              </p>
                            ))}
                          </div>
                        </div>
                      ) : isFrogDialogue ? (
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-nature-50 border-l-4 border-nature-400">
                          <div className="w-10 h-10 rounded-full bg-nature-200 flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">🐸</span>
                          </div>
                          <div className="flex-1">
                            {paragraph.split('\n').map((line, lineIndex) => (
                              <p key={lineIndex} className={`leading-relaxed ${lineIndex === 0 ? 'text-nature-700 font-medium' : 'text-gray-600 text-sm mt-1'}`}>
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
            </div>
          )}
        </div>

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