import { useState, useEffect } from 'react';
import { Wind, Volume2, Heart, Play, Pause, RefreshCw } from 'lucide-react';

export default function RelaxPage() {
  const [activeTab, setActiveTab] = useState<'breathing' | 'sounds'>('breathing');

  return (
    <div className="min-h-screen bg-gradient-to-b from-calm-50 via-calm-100 to-nature-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌙</div>
          <h1 className="font-display text-5xl text-calm-700 mb-4">放松角</h1>
          <p className="text-calm-600 text-lg">在这里，找到内心的平静</p>
        </div>

        {/* 标签切换 */}
        <div className="flex justify-center gap-4 mb-8">
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
        </div>

        {/* 内容 */}
        {activeTab === 'breathing' ? <BreathingExercise /> : <SoundsPanel />}
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
          // 切换阶段
          if (phase === 'inhale') {
            setPhase('hold');
            return 7; // 保持7秒
          } else if (phase === 'hold') {
            setPhase('exhale');
            return 8; // 呼气8秒
          } else {
            setPhase('inhale');
            setCycle((c) => c + 1);
            return 4; // 吸气4秒
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

      {/* 呼吸圆圈 */}
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

      {/* 控制按钮 */}
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

      {/* 循环计数 */}
      <div className="text-center">
        <p className="text-calm-600">
          已完成 <span className="font-display text-2xl text-calm-700">{cycle}</span> 个循环
        </p>
      </div>

      {/* 提示 */}
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

  const sounds = [
    { id: 'rain', emoji: '🌧️', name: '雨声', description: '温柔的雨滴' },
    { id: 'forest', emoji: '🌲', name: '森林', description: '鸟鸣和树叶' },
    { id: 'ocean', emoji: '🌊', name: '海浪', description: '波涛声' },
    { id: 'fire', emoji: '🔥', name: '壁炉', description: '噼啪的火焰' },
  ];

  return (
    <div id="sounds" className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
      <h2 className="font-display text-3xl text-nature-700 mb-2 text-center">自然声音</h2>
      <p className="text-nature-600 mb-8 text-center">选择你喜欢的声音，让心灵去旅行</p>

      {/* 声音选择 */}
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

      {/* 音量控制 */}
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

      {/* 提示 */}
      <div className="mt-8 p-6 bg-nature-50 rounded-2xl">
        <p className="text-nature-700 text-sm leading-relaxed">
          💡 <strong>小贴士：</strong>在睡前聆听自然声音可以帮助你更快入睡。
          建议使用耳机获得更好的沉浸体验。
        </p>
      </div>
    </div>
  );
}
