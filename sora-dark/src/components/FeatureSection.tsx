import { motion } from 'motion/react';

export default function FeatureSection() {
  return (
    <section className="relative z-10 py-32 px-6 max-w-5xl mx-auto">
      <div className="space-y-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
            AnovaGrowth can deploy full automation systems in days while maintaining quality and precision.
          </h2>
          <div className="text-white/60 text-lg font-light leading-relaxed space-y-6">
            <p>
              Our AI agents handle lead generation, qualification, outreach, and follow-up — freeing your team to focus on closing deals.
            </p>
            <p>
              Every system is custom-built to your business, your voice, and your pipeline. No templates, no generic sequences.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
            Understanding and automating the growth engine in motion.
          </h2>
          <div className="text-white/60 text-lg font-light leading-relaxed space-y-6">
            <p>
              Our platform orchestrates entire revenue pipelines — from first touch to closed deal — running 24/7 without human intervention.
            </p>
            <p>
              The system has a deep understanding of your market, enabling it to craft personalized outreach that converts at scale.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-40 text-center border-t border-white/10 pt-20 pb-10"
      >
        <h3 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8">Ready to grow?</h3>
        <button className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-white/90 transition-colors">
          Book a strategy call
        </button>
      </motion.div>
    </section>
  );
}
