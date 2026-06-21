import { useParams, Link, useState, useEffect, useRef } from 'react-router-dom';
import { getStoryById } from '../data/stories';
import { ArrowLeft, Calendar, Play, Pause, Volume2, VolumeX, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

export default function StoryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const story = id ? getStoryById(id) : null;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [speakingIndex, setSpeakingIndex] = useState(-1);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const handleEnd = () => {
      setSpeakingIndex(-1);
      if (currentParagraph < (story?.content.split('\n\n').length || 0) - 1) {
        setTimeout(() => {
          setCurrentParagraph(p => p + 1);
          setIsAnimating(true);
          setTimeout(() => setIsAnimating(false), 500);
        }, 500);
      } else {
        setIsPlaying(false);
      }
    };

    if (isPlaying && story) {
      const paragraphs = story.content.split('\n\n');
      if (currentParagraph < paragraphs.length) {
        const text = paragraphs[currentParagraph].replace(/Pipi: /g, '').replace(/Pōpo: /g, '').replace(/Little Frog: /g, '').replace(/\n.*$/gm, '');
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.onend = handleEnd;
        utteranceRef.current = utterance;
        speechSynthesis.speak(utterance);
        setSpeakingIndex(currentParagraph);
      }
    }

    return () => {
      speechSynthesis.cancel();
    };
  }, [isPlaying, story, currentParagraph]);

  const handlePlay = () => {
    if (isPlaying) {
      speechSynthesis.cancel();
      setIsPlaying(false);
      setSpeakingIndex(-1);
    } else {
      setIsPlaying(true);
    }
  };

  const handleReset = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
    setCurrentParagraph(0);
    setSpeakingIndex(-1);
  };

  const goToParagraph = (index: number) => {
    speechSynthesis.cancel();
    setCurrentParagraph(index);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    if (isPlaying) {
      setSpeakingIndex(index);
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
    <div className="min-h-screen bg-gradient-to-b from-warm-50 via-warm-100 to-calm-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/stories"
          className="inline-flex items-center gap-2 text-warm-600 hover:text-warm-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          返回故事小屋
        </Link>

        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-warm-200 to-calm-200 p-8 text-center relative">
            <div className="text-6xl mb-4 animate-float">{story.emoji}</div>
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
            <h1 className="font-display text-4xl md:text-5xl text-warm-700 mb-2 animate-fade-in">
              {story.title}
            </h1>
            <p className="text-warm-600 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              {story.createdAt}
            </p>

            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-3 rounded-full transition-all ${isMuted ? 'bg-gray-300 text-gray-500' : 'bg-white/80 text-warm-600 hover:bg-white'}`}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={handleReset}
                className="p-3 bg-warm-100 hover:bg-warm-200 text-warm-600 rounded-full transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button
                onClick={handlePlay}
                className={`px-8 py-4 rounded-full font-display text-xl transition-all shadow-lg hover:shadow-xl ${
                  isPlaying
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-warm-500 hover:bg-warm-600 text-white'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-6 h-6 inline mr-2" />
                    暂停
                  </>
                ) : (
                  <>
                    <Play className="w-6 h-6 inline mr-2" />
                    朗读故事
                  </>
                )}
              </button>
              <button
                onClick={() => goToParagraph(Math.max(0, currentParagraph - 1))}
                disabled={currentParagraph === 0}
                className="p-3 bg-warm-100 hover:bg-warm-200 text-warm-600 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => goToParagraph(Math.min(paragraphs.length - 1, currentParagraph + 1))}
                disabled={currentParagraph === paragraphs.length - 1}
                className="p-3 bg-warm-100 hover:bg-warm-200 text-warm-600 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mb-8">
              {paragraphs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToParagraph(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentParagraph
                      ? 'bg-warm-500 w-6'
                      : index === speakingIndex
                      ? 'bg-calm-400 animate-pulse'
                      : 'bg-warm-200 hover:bg-warm-300'
                  }`}
                />
              ))}
            </div>

            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
              <div className="prose prose-lg max-w-none">
                {paragraphs.map((paragraph, index) => {
                  if (index !== currentParagraph) return null;
                  
                  const isPipiDialogue = paragraph.startsWith('Pipi:');
                  const isPopoDialogue = paragraph.startsWith('Pōpo:');
                  const isFrogDialogue = paragraph.startsWith('Little Frog:');

                  return (
                    <div key={index} className="animate-fade-in">
                      {isPipiDialogue || isPopoDialogue || isFrogDialogue ? (
                        <div className={`flex items-start gap-4 mb-8 p-6 rounded-2xl ${
                          isPipiDialogue ? 'bg-warm-50 border-l-4 border-warm-400' :
                          isPopoDialogue ? 'bg-calm-50 border-l-4 border-calm-400' :
                          'bg-nature-50 border-l-4 border-nature-400'
                        }`}>
                          <div className="text-4xl flex-shrink-0">
                            {isPipiDialogue && '🐦'}
                            {isPopoDialogue && '🦅'}
                            {isFrogDialogue && '🐸'}
                          </div>
                          <div className="flex-1">
                            {paragraph.split('\n').map((line, lineIndex) => (
                              <p
                                key={lineIndex}
                                className={`leading-relaxed ${
                                  lineIndex === 0 
                                    ? isPipiDialogue ? 'text-warm-700 font-medium' : 
                                      isPopoDialogue ? 'text-calm-700 font-medium' :
                                      'text-nature-700 font-medium'
                                    : 'text-gray-600 text-sm mt-2'
                                }`}
                              >
                                {line.replace(/^Pipi: /, '').replace(/^Pōpo: /, '').replace(/^Little Frog: /, '')}
                              </p>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-warm-800 leading-relaxed mb-6 text-lg">
                          {paragraph}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-warm-200 text-center">
              <div className="text-4xl mb-4 animate-float">✨</div>
              <p className="text-warm-600">
                {story.character === 'pipi' && '希望皮皮的故事能给你带来勇气 💪'}
                {story.character === 'popo' && '希望坡坡的智慧能帮你找到平静 🕊️'}
                {story.character === 'both' && '希望你们的故事能温暖你的心 💕'}
              </p>
            </div>
          </div>
        </article>

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
