import { useState, useEffect, useRef } from 'react';
import { Wind, Volume2, Heart, Play, Pause, RefreshCw, Dumbbell } from 'lucide-react';

export default function RelaxPage() {
  const [activeTab, setActiveTab] = useState<'breathing' | 'sounds' | 'exercise'>('breathing');

  return (
    <div className="min-h-screen bg-gradient-to-b from-calm-50 via-calm-100 to-nature-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌙</div>
          <h1 className="font-display text-5xl text-calm-700 mb-4">放松角</h1>
          <p className="text-calm-600 text-lg">在这里，找到内心的平静</p>
        </div>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('breathing')}
            className={`px-6 py-3 rounded-full font-display text-lg transition-all ${
              activeTab === 'breathing'
                ? 'bg-calm-500 text-white shadow-lg'
                : 'bg-white text-calm-600 hover:bg-calm-100'
            }`}
          >
            <Wind className="w-5 h-5 inline mr-2" />
            呼吸练习
          </button>
          <button
            onClick={() => setActiveTab('sounds')}
            className={`px-6 py-3 rounded-full font-display text-lg transition-all ${
              activeTab === 'sounds'
                ? 'bg-nature-500 text-white shadow-lg'
                : 'bg-white text-nature-600 hover:bg-nature-100'
            }`}
          >
            <Volume2 className="w-5 h-5 inline mr-2" />
            自然声音
          </button>
          <button
            onClick={() => setActiveTab('exercise')}
            className={`px-6 py-3 rounded-full font-display text-lg transition-all ${
              activeTab === 'exercise'
                ? 'bg-warm-500 text-white shadow-lg'
                : 'bg-white text-warm-600 hover:bg-warm-100'
            }`}
          >
            <Dumbbell className="w-5 h-5 inline mr-2" />
            运动游戏
          </button>
        </div>

        {activeTab === 'breathing' ? <BreathingExercise /> : 
         activeTab === 'sounds' ? <SoundsPanel /> : 
         <ExerciseGame />}
      </div>
    </div>
  );
}

function BreathingExercise() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [countdown, setCountdown] = useState(4);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          if (phase === 'inhale') {
            setPhase('hold');
            return 7;
          } else if (phase === 'hold') {
            setPhase('exhale');
            return 8;
          } else {
            setPhase('inhale');
            setCycle((c) => c + 1);
            return 4;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase]);

  const getInstruction = () => {
    if (!isActive) return '点击开始，跟随呼吸';
    if (phase === 'inhale') return '吸气...';
    if (phase === 'hold') return '保持...';
    return '呼气...';
  };

  const getScale = () => {
    if (!isActive) return 'scale-100';
    if (phase === 'inhale') return 'scale-150';
    if (phase === 'hold') return 'scale-150';
    return 'scale-100';
  };

  return (
    <div id="breathing" className="bg-white rounded-3xl shadow-2xl p-12 text-center">
      <h2 className="font-display text-3xl text-calm-700 mb-2">4-7-8 呼吸法</h2>
      <p className="text-calm-600 mb-8">吸气4秒，保持7秒，呼气8秒</p>

      <div className="relative w-64 h-64 mx-auto mb-8">
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-br from-calm-200 to-calm-400 shadow-2xl transition-all duration-1000 ${getScale()} flex items-center justify-center`}
        >
          <div className="text-center">
            <div className="text-6xl mb-2">{isActive ? countdown : '🌬️'}</div>
            <p className="font-display text-2xl text-calm-700">{getInstruction()}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setIsActive(!isActive)}
          className={`px-8 py-4 rounded-full font-display text-xl transition-all shadow-lg hover:shadow-xl ${
            isActive
              ? 'bg-orange-500 hover:bg-orange-600 text-white'
              : 'bg-calm-500 hover:bg-calm-600 text-white'
          }`}
        >
          {isActive ? (
            <>
              <Pause className="w-6 h-6 inline mr-2" />
              暂停
            </>
          ) : (
            <>
              <Play className="w-6 h-6 inline mr-2" />
              开始
            </>
          )}
        </button>
        <button
          onClick={() => {
            setIsActive(false);
            setPhase('inhale');
            setCountdown(4);
            setCycle(0);
          }}
          className="px-6 py-4 bg-warm-100 text-warm-600 rounded-full font-display text-xl hover:bg-warm-200 transition-all"
        >
          <RefreshCw className="w-6 h-6" />
        </button>
      </div>

      <div className="text-center">
        <p className="text-calm-600">
          已完成 <span className="font-display text-2xl text-calm-700">{cycle}</span> 个循环
        </p>
      </div>

      <div className="mt-8 p-6 bg-calm-50 rounded-2xl">
        <p className="text-calm-700 text-sm leading-relaxed">
          💡 <strong>小贴士：</strong>找一个舒适的地方坐下，保持背部挺直。
          闭上眼睛，专注于呼吸的感觉。这个练习可以帮助你缓解焦虑和压力。
        </p>
      </div>
    </div>
  );
}

function SoundsPanel() {
  const [activeSound, setActiveSound] = useState<string | null>(null);
  const [volume, setVolume] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const sounds = [
    { id: 'rain', emoji: '🌧️', name: '雨声', description: '温柔的雨滴' },
    { id: 'forest', emoji: '🌲', name: '森林', description: '鸟鸣和树叶' },
    { id: 'ocean', emoji: '🌊', name: '海浪', description: '波涛声' },
    { id: 'fire', emoji: '🔥', name: '壁炉', description: '噼啪的火焰' },
  ];

  const createNoiseBuffer = (type: string) => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      if (type === 'white') {
        data[i] = Math.random() * 2 - 1;
      } else if (type === 'pink') {
        let b0, b1, b2, b3, b4, b5, b6;
        b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;
        data[i] = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + data[i] * 0.0555179;
        b1 = 0.99332 * b1 + data[i] * 0.0750759;
        b2 = 0.96900 * b2 + data[i] * 0.1538520;
        b3 = 0.90000 * b3 + data[i] * 0.3104856;
        b4 = 0.65000 * b4 + data[i] * 0.5329522;
        b5 = -0.7616 * b5 - data[i] * 0.0168980;
        data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + data[i] * 0.5362;
        data[i] *= 0.11;
      }
    }
    return buffer;
  };

  const generateSound = (type: string) => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    const ctx = audioContextRef.current;

    if (sourceRef.current) {
      sourceRef.current.stop();
    }

    const buffer = createNoiseBuffer('pink');
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    const gainNode = ctx.createGain();
    gainNode.gain.value = volume;

    let filter: BiquadFilterNode;
    
    switch (type) {
      case 'rain':
        filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 800;
        source.connect(filter);
        filter.connect(gainNode);
        break;
      case 'ocean':
        filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 400;
        const lfo = ctx.createOscillator();
        lfo.frequency.value = 0.1;
        const lfoGain = ctx.createGain();
        lfoGain.gain.value = 200;
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);
        lfo.start();
        source.connect(filter);
        filter.connect(gainNode);
        break;
      case 'fire':
        filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1500;
        filter.Q.value = 1;
        source.connect(filter);
        filter.connect(gainNode);
        break;
      case 'forest':
        filter = ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 2000;
        source.connect(filter);
        filter.connect(gainNode);
        break;
      default:
        source.connect(gainNode);
    }

    gainNode.connect(ctx.destination);
    source.start();
    sourceRef.current = source;
    gainRef.current = gainNode;
  };

  useEffect(() => {
    if (isPlaying && activeSound && gainRef.current) {
      gainRef.current.gain.value = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (isPlaying && activeSound) {
      generateSound(activeSound);
    } else {
      if (sourceRef.current) {
        sourceRef.current.stop();
        sourceRef.current = null;
      }
    }
    return () => {
      if (sourceRef.current) {
        sourceRef.current.stop();
      }
    };
  }, [isPlaying, activeSound]);

  return (
    <div id="sounds" className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
      <h2 className="font-display text-3xl text-nature-700 mb-2 text-center">自然声音</h2>
      <p className="text-nature-600 mb-8 text-center">选择你喜欢的声音，让心灵去旅行</p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {sounds.map((sound) => (
          <button
            key={sound.id}
            onClick={() => setActiveSound(activeSound === sound.id ? null : sound.id)}
            className={`p-6 rounded-2xl text-left transition-all ${
              activeSound === sound.id
                ? 'bg-gradient-to-br from-nature-200 to-nature-300 shadow-lg scale-105'
                : 'bg-nature-50 hover:bg-nature-100 shadow'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="text-5xl">{sound.emoji}</div>
              <div>
                <h3 className="font-display text-xl text-nature-700">{sound.name}</h3>
                <p className="text-nature-600 text-sm">{sound.description}</p>
              </div>
              {activeSound === sound.id && (
                <div className="ml-auto">
                  {isPlaying ? (
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-nature-600 rounded animate-pulse"></div>
                      <div className="w-1 h-6 bg-nature-600 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1 h-4 bg-nature-600 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  ) : (
                    <div className="text-nature-600">
                      <Heart className="w-6 h-6 fill-current" />
                    </div>
                  )}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {activeSound && (
        <div className="bg-nature-50 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <Volume2 className="w-6 h-6 text-nature-600" />
            <label className="text-nature-700 font-medium">音量</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="flex-1 h-2 bg-nature-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-nature-600 w-12">{Math.round(volume * 100)}%</span>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-full py-4 bg-nature-500 hover:bg-nature-600 text-white rounded-xl font-display text-lg transition-colors"
          >
            {isPlaying ? '⏸️ 暂停播放' : '▶️ 开始播放'}
          </button>

          <p className="text-center text-nature-600 text-sm mt-4">
            {isPlaying
              ? `正在播放 ${sounds.find((s) => s.id === activeSound)?.name}...`
              : '点击开始播放'}
          </p>
        </div>
      )}

      {!activeSound && (
        <div className="text-center py-12 text-nature-600">
          <div className="text-6xl mb-4">🎵</div>
          <p>选择一个声音开始你的放松之旅</p>
        </div>
      )}

      <div className="mt-8 p-6 bg-nature-50 rounded-2xl">
        <p className="text-nature-700 text-sm leading-relaxed">
          💡 <strong>小贴士：</strong>在睡前聆听自然声音可以帮助你更快入睡。
          建议使用耳机获得更好的沉浸体验。
        </p>
      </div>
    </div>
  );
}

function ExerciseGame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [exercise, setExercise] = useState(0);
  const [countdown, setCountdown] = useState(10);
  const [score, setScore] = useState(0);
  const [pipiAnimation, setPipiAnimation] = useState('');
  const [popoAnimation, setPopoAnimation] = useState('');

  const exercises = [
    { name: '翅膀伸展', pipi: 'animate-bounce', popo: 'animate-pulse', emoji: '🦅' },
    { name: '原地跳跃', pipi: 'animate-bounce', popo: 'animate-bounce', emoji: '🪶' },
    { name: '头部转动', pipi: 'animate-wiggle', popo: 'animate-wiggle', emoji: '🎯' },
    { name: '深呼吸', pipi: 'animate-breathe', popo: 'animate-breathe', emoji: '🌬️' },
    { name: '羽毛整理', pipi: 'animate-float', popo: 'animate-float', emoji: '✨' },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(c => c - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      if (exercise < exercises.length - 1) {
        setExercise(e => e + 1);
        setCountdown(10);
        setScore(s => s + 10);
      } else {
        setIsPlaying(false);
        setScore(s => s + 20);
      }
    }
  }, [isPlaying, countdown, exercise]);

  const startGame = () => {
    setIsPlaying(true);
    setExercise(0);
    setCountdown(10);
    setScore(0);
    setPipiAnimation(exercises[0].pipi);
    setPopoAnimation(exercises[0].popo);
  };

  useEffect(() => {
    if (isPlaying) {
      setPipiAnimation(exercises[exercise].pipi);
      setPopoAnimation(exercises[exercise].popo);
    }
  }, [exercise, isPlaying]);

  return (
    <div id="exercise" className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
      <h2 className="font-display text-3xl text-warm-700 mb-2 text-center">🦅 运动时间！</h2>
      <p className="text-warm-600 mb-8 text-center">跟着皮皮和坡坡一起锻炼身体吧！</p>

      {!isPlaying ? (
        <div className="text-center">
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className={`text-8xl ${pipiAnimation}`}>🐦</div>
              <p className="font-display text-xl text-warm-700 mt-2">皮皮</p>
            </div>
            <div className="text-4xl text-warm-400 mt-8">💪</div>
            <div className="text-center">
              <div className={`text-8xl ${popoAnimation}`}>🦅</div>
              <p className="font-display text-xl text-calm-600 mt-2">坡坡</p>
            </div>
          </div>
          <button
            onClick={startGame}
            className="px-12 py-4 bg-warm-500 hover:bg-warm-600 text-white rounded-full font-display text-xl shadow-lg hover:shadow-xl transition-all"
          >
            <Play className="w-6 h-6 inline mr-2" />
            开始运动！
          </button>
          <div className="mt-8 p-6 bg-warm-50 rounded-2xl">
            <h3 className="font-display text-lg text-warm-700 mb-2">运动清单</h3>
            <ul className="text-warm-600 text-sm space-y-2">
              {exercises.map((ex, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span>{ex.emoji}</span>
                  <span>{ex.name} - 10秒</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="mb-4 flex justify-center items-center gap-4">
            <span className="text-warm-600">得分:</span>
            <span className="font-display text-3xl text-warm-500">{score}</span>
          </div>

          <div className="mb-8">
            <div className="text-2xl text-warm-600 mb-2">{exercise + 1} / {exercises.length}</div>
            <div className="text-5xl mb-2">{exercises[exercise].emoji}</div>
            <h3 className="font-display text-3xl text-warm-700">{exercises[exercise].name}</h3>
            <div className="mt-4 text-6xl font-display text-calm-500">{countdown}</div>
          </div>

          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className={`text-8xl ${pipiAnimation}`}>🐦</div>
              <p className="font-display text-lg text-warm-700 mt-2">皮皮</p>
            </div>
            <div className="text-4xl text-warm-400 mt-8">💪</div>
            <div className="text-center">
              <div className={`text-8xl ${popoAnimation}`}>🦅</div>
              <p className="font-display text-lg text-calm-600 mt-2">坡坡</p>
            </div>
          </div>

          <button
            onClick={() => setIsPlaying(false)}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-display text-lg transition-all"
          >
            <Pause className="w-5 h-5 inline mr-2" />
            停止运动
          </button>
        </div>
      )}

      {!isPlaying && score > 0 && (
        <div className="mt-8 p-6 bg-gradient-to-br from-warm-100 to-calm-100 rounded-2xl text-center">
          <div className="text-6xl mb-2">🏆</div>
          <h3 className="font-display text-2xl text-warm-700 mb-2">太棒了！</h3>
          <p className="text-warm-600">你完成了所有运动！得分：{score}</p>
        </div>
      )}
    </div>
  );
}
