import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-[1.5rem] bg-gradient-to-b from-[#1a2b4c] to-[#0a1128] flex items-center justify-center shadow-2xl border border-white/10">
            {/* Gemini-generated Sora ghost logo — kept as-is per Jake's request */}
            <div className="relative w-12 h-10 bg-[#c4d9ff] rounded-full flex items-center justify-center">
              <div className="absolute top-2 left-2 w-2.5 h-3 bg-[#1a2b4c] rounded-full transform -rotate-12">
                <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full"></div>
              </div>
              <div className="absolute top-1.5 right-2 w-2.5 h-3 bg-[#1a2b4c] rounded-full transform rotate-12">
                <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full"></div>
              </div>
              <div className="absolute -bottom-1 left-1 w-3 h-3 bg-[#c4d9ff] rounded-full"></div>
              <div className="absolute -bottom-1.5 left-4 w-4 h-4 bg-[#c4d9ff] rounded-full"></div>
              <div className="absolute -bottom-1 right-1 w-3 h-3 bg-[#c4d9ff] rounded-full"></div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">
          AnovaGrowth
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-light tracking-wide">
          AI-powered systems that automate your growth. From leads to revenue, on autopilot.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors w-full sm:w-auto">
            Get started
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-sm tracking-widest uppercase"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}
