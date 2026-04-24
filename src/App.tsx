import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Briefcase, GraduationCap, Languages, User, Mail, Calendar, Sparkles } from 'lucide-react';

const SLIDES = [
  { id: 'intro' },
  { id: 'about' },
  { id: 'experience' },
  { id: 'education' },
  { id: 'languages' },
  { id: 'credits' }
];

const MAIN_IMAGE_URL = "https://lh3.googleusercontent.com/sitesv/AA5AbUAAg4yf5K9NcYi_bNkpaW8CJ7FHARqF5WMiBH9F_KSPLsi3iJPiOCWdJx1vrfCFH8wGF4tVbDWSqyyOJNum7yctOKeXDBWMQGhgNT7_hw7Xfm1lvU6VW9PISkDZR-4blKDtZJdYECfGkSm5BFDV1tRmvq99N09akYOwlhck_hWbsF2zh4_V23DsCNlFyocR82fWSJ9T0dfS7v8DASMMyW5-NTlJhlajFSHmrpo=w1280";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (currentSlide < SLIDES.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const renderSlideContent = () => {
    switch (currentSlide) {
        case 0:
            return (
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                  <motion.div 
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 overflow-hidden rounded-2xl shadow-2xl w-full max-w-4xl h-80 relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
                    <img 
                      src={MAIN_IMAGE_URL} 
                      alt="Banner" 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <div className="absolute bottom-4 left-0 right-0 z-20">
                      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
                        李冠頡 (廷廷)
                      </h1>
                      <h2 className="text-2xl md:text-3xl font-light text-zinc-200 mt-2 tracking-widest uppercase">
                        Li Kuan Jie
                      </h2>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-4 mt-8"
                  >
                    {['行銷企劃', '社群經營', '專案執行'].map((skill, index) => (
                      <span key={index} className="px-6 py-3 bg-zinc-800 text-zinc-100 rounded-full text-xl font-medium border border-zinc-700 shadow-xl shadow-black/20">
                        {skill}
                      </span>
                    ))}
                  </motion.div>
                </div>
            );
        case 1:
            return (
              <div className="flex flex-col h-full px-8 py-12 md:p-16 max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                  <div className="p-4 bg-blue-500/20 text-blue-400 rounded-2xl"><User size={40} /></div>
                  <h2 className="text-4xl md:text-5xl font-bold">關於我 About Me</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 flex-grow items-center">
                  <div className="space-y-8">
                    <p className="text-2xl md:text-3xl leading-relaxed text-zinc-300">
                      你好，我叫<span className="text-white font-semibold">李冠頡</span>，可以叫我<span className="text-blue-400 font-semibold">廷廷</span>。<br /><br />
                      我對於股票操作有濃厚興趣，大家都叫我<span className="text-amber-400 font-bold tracking-wider">高科巴菲特</span>，現在主要靠操盤維生。
                    </p>
                  </div>
                  
                  <div className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700/50 shadow-2xl backdrop-blur-sm space-y-6">
                    <div className="flex items-center gap-4 text-xl">
                      <Sparkles className="text-amber-400" />
                      <div>
                        <p className="text-zinc-400 text-sm uppercase tracking-wider">星座血型</p>
                        <p className="font-medium">雙魚座 ｜ B型</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xl">
                      <Calendar className="text-green-400" />
                      <div>
                        <p className="text-zinc-400 text-sm uppercase tracking-wider">出生日期</p>
                        <p className="font-medium">2007-02-24</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xl">
                      <Mail className="text-blue-400" />
                      <div>
                        <p className="text-zinc-400 text-sm uppercase tracking-wider">聯絡信箱</p>
                        <a href="mailto:a111182106@nkust.edu.tw" className="font-medium text-blue-300 hover:text-blue-200 transition-colors">
                          a111182106@nkust.edu.tw
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
        case 2:
            return (
                <div className="flex flex-col h-full px-8 py-12 md:p-16 max-w-5xl mx-auto">
                  <div className="flex items-center gap-4 mb-4 md:mb-12">
                    <div className="p-4 bg-amber-500/20 text-amber-400 rounded-2xl"><Briefcase size={40} /></div>
                    <h2 className="text-4xl md:text-5xl font-bold">工作經歷 Experience</h2>
                  </div>

                  <div className="space-y-8 flex-grow flex flex-col justify-center">
                    {/* Experience 1 */}
                    <motion.div 
                      initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                      className="bg-gradient-to-br from-zinc-800 to-zinc-900 border-l-4 border-l-amber-500 p-6 md:p-8 rounded-r-2xl shadow-lg relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                        <Briefcase size={120} />
                      </div>
                      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">卓鮑國際</h3>
                        <span className="text-amber-400 font-medium px-3 py-1 bg-amber-400/10 rounded-full text-lg">高階金牌經理</span>
                      </div>
                      <p className="text-zinc-400 text-lg mb-4 font-mono">2025 ~ 現在</p>
                      <ul className="list-inside text-xl text-zinc-300 space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-amber-500 mt-1">▸</span> 東南亞跨境人力資源仲介(柬埔寨)
                        </li>
                      </ul>
                    </motion.div>

                    {/* Experience 2 */}
                    <motion.div 
                      initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}
                      className="bg-gradient-to-br from-zinc-800 to-zinc-900 border-l-4 border-l-red-500 p-6 md:p-8 rounded-r-2xl shadow-lg relative overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">蘋果森林有限公司</h3>
                        <span className="text-red-400 font-medium px-3 py-1 bg-red-400/10 rounded-full text-lg">資深融資專員兼逾期款項處理專員</span>
                      </div>
                      <p className="text-zinc-400 text-lg mb-4 font-mono">2019 ~ 2025</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          "手機/機車/勞保貸，有憑證就能貸",
                          "門檻超低，不看信用紀錄/協商戶可",
                          "幾分鐘過件，當天撥款",
                          "一棒協商，欠款收場"
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3 text-lg text-zinc-300 bg-zinc-950/50 p-3 rounded-lg border border-zinc-800/50">
                            <span className="text-red-500 mt-1 flex-shrink-0">✖</span> 
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
            );
        case 3:
            return (
              <div className="flex flex-col h-full px-8 py-12 md:p-16 max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                  <div className="p-4 bg-emerald-500/20 text-emerald-400 rounded-2xl"><GraduationCap size={40} /></div>
                  <h2 className="text-4xl md:text-5xl font-bold">學歷 Education</h2>
                </div>

                <div className="relative border-l-2 border-zinc-700 ml-6 md:ml-12 space-y-16 py-8 flex-grow">
                  
                  {/* Edu 2 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="relative pl-8 md:pl-12"
                  >
                    <div className="absolute -left-[11px] top-1 w-5 h-5 bg-emerald-500 rounded-full outline outline-4 outline-zinc-900 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                    <p className="text-emerald-400 font-mono text-xl mb-2 tracking-wider">2022/9 - 現在</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">高科大</h3>
                    <p className="text-2xl text-zinc-300 bg-zinc-800/50 inline-block px-4 py-2 rounded-xl border border-emerald-500/20">航運技術系</p>
                  </motion.div>

                  {/* Edu 1 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                    className="relative pl-8 md:pl-12"
                  >
                    <div className="absolute -left-[11px] top-1 w-5 h-5 bg-zinc-600 rounded-full outline outline-4 outline-zinc-900" />
                    <p className="text-zinc-400 font-mono text-xl mb-2 tracking-wider">2019 - 2022</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">社會大學</h3>
                    <p className="text-2xl text-zinc-400 bg-zinc-800/30 inline-block px-4 py-2 rounded-xl border border-zinc-700/50">球類運動系<span className="mx-2 text-zinc-600">|</span>球棒組</p>
                  </motion.div>

                </div>
              </div>
            );
        case 4:
            return (
              <div className="flex flex-col h-full px-8 py-12 md:p-16 max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                  <div className="p-4 bg-purple-500/20 text-purple-400 rounded-2xl"><Languages size={40} /></div>
                  <h2 className="text-4xl md:text-5xl font-bold">語言能力 Language Skills</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { lang: "英文", level: "精通", desc: "TOEIC 900", color: "bg-blue-500 border-blue-400/30 text-blue-100", score: 90 },
                    { lang: "台語", level: "精通", desc: "精通台式問候", color: "bg-purple-500 border-purple-400/30 text-purple-100", score: 95 },
                    { lang: "日文", level: "八嘎鴨漏", desc: "略懂皮毛", color: "bg-rose-500 border-rose-400/30 text-rose-100", score: 20 },
                    { lang: "韓文", level: "西八", desc: "熱情且奔放", color: "bg-amber-500 border-amber-400/30 text-amber-100", score: 15 }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-zinc-800/40 p-6 md:p-8 rounded-3xl border border-zinc-700/50 flex flex-col gap-4 hover:bg-zinc-800/80 transition-colors"
                    >
                      <div className="flex justify-between items-end mb-2">
                        <h3 className="text-3xl font-bold">{item.lang}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-bold tracking-widest ${item.color.split(' ')[0]} bg-opacity-20 ${item.color.split(' ')[2]}`}>
                          {item.level}
                        </span>
                      </div>
                      
                      <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full ${item.color.split(' ')[0]}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.score}%` }}
                          transition={{ delay: 0.5 + idx * 0.1, duration: 1, type: "spring" }}
                        />
                      </div>
                      <p className="text-zinc-400 text-lg mt-2 text-right">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
        case 5:
            return (
              <div className="flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto space-y-12">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.1)] mb-8"
                >
                  <img src={MAIN_IMAGE_URL} alt="Profile" className="w-full h-full object-cover object-center" />
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-500 pb-2">
                  謝謝觀賞
                </h1>
                <p className="text-2xl text-zinc-400">Thank You</p>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent my-12" />

                <div className="grid sm:grid-cols-3 gap-6 w-full text-left bg-zinc-900/50 p-6 md:p-8 rounded-3xl border border-zinc-800">
                  <div>
                    <h4 className="text-zinc-500 font-mono text-sm mb-2 uppercase">範本模板</h4>
                    <a href="https://youtube.com/@ruosuoasu-class" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline inline-block break-all">youtube.com/@ruosuoasu-class</a>
                  </div>
                  <div>
                    <h4 className="text-zinc-500 font-mono text-sm mb-2 uppercase">履歷內容</h4>
                    <a href="https://www.yourator.co" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline inline-block break-all">www.yourator.co</a>
                  </div>
                  <div>
                    <h4 className="text-zinc-500 font-mono text-sm mb-2 uppercase">背景圖</h4>
                    <a href="https://www.freepik.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline inline-block break-all">www.freepik.com</a>
                  </div>
                </div>
              </div>
            );
        default:
            return <div>Not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans overflow-hidden flex flex-col selection:bg-blue-500/30">
      
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[120px]" />
      </div>

      <div className="flex-1 relative overflow-hidden z-10 w-full h-[calc(100vh-80px)]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 w-full h-full overflow-y-auto custom-scrollbar"
          >
            {renderSlideContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <div className="h-20 bg-zinc-900/80 backdrop-blur-md border-t border-zinc-800/50 px-6 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-2 md:gap-4 w-1/3">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-2 md:p-3 rounded-full flex items-center justify-center transition-all ${
              currentSlide === 0 
                ? 'opacity-30 cursor-not-allowed bg-zinc-800/50' 
                : 'hover:bg-zinc-800 bg-zinc-800/80 hover:text-white text-zinc-300'
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="text-zinc-500 font-mono text-sm hidden md:inline-block">← Prev</span>
        </div>

        <div className="hidden md:flex items-center gap-2 w-1/3 justify-center">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === idx 
                  ? 'w-10 bg-white' 
                  : 'w-2.5 bg-zinc-700 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>
        
        <div className="md:hidden flex space-x-1 justify-center w-1/3">
           <span className="text-sm font-mono text-zinc-400">{currentSlide + 1} / {SLIDES.length}</span>
        </div>

        <div className="flex items-center justify-end gap-2 md:gap-4 w-1/3">
          <span className="text-zinc-500 font-mono text-sm hidden md:inline-block">Next →</span>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === SLIDES.length - 1}
            className={`p-2 md:p-3 rounded-full flex items-center justify-center transition-all ${
              currentSlide === SLIDES.length - 1 
                ? 'opacity-30 cursor-not-allowed bg-zinc-800/50' 
                : 'hover:bg-zinc-800 bg-zinc-800/80 hover:text-white text-zinc-300'
            }`}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

