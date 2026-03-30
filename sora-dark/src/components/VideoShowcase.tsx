import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    src: "https://picsum.photos/seed/sora1/800/1200",
    prompt: "An AI agent qualifying inbound leads through multi-channel outreach sequences.",
    aspect: "aspect-[2/3]"
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/sora2/1200/800",
    prompt: "Real-time analytics dashboard tracking pipeline velocity and conversion rates.",
    aspect: "aspect-[3/2]"
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/sora3/800/800",
    prompt: "Automated workflow orchestrating email, LinkedIn, and SMS follow-ups in sync.",
    aspect: "aspect-square"
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/sora4/800/1000",
    prompt: "Custom CRM integration syncing lead data across platforms in real-time.",
    aspect: "aspect-[4/5]"
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/sora5/1000/800",
    prompt: "AI-generated reports summarizing weekly growth metrics and actionable insights.",
    aspect: "aspect-[5/4]"
  }
];

export default function VideoShowcase() {
  return (
    <section className="relative z-10 px-4 md:px-8 py-24 max-w-7xl mx-auto">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative group break-inside-avoid cursor-pointer"
          >
            <div className={`relative w-full overflow-hidden rounded-xl bg-white/5 ${video.aspect}`}>
              <img
                src={video.src}
                alt={video.prompt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
                  <Play className="w-6 h-6 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                <span className="text-white font-medium">Prompt: </span>
                {video.prompt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
