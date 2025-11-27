import { motion } from 'framer-motion'

const skills = [
  'Reels Editing',
  'Color Grading',
  'Multi Cam Editing',
  'Pre Wedding Edit',
  'Pre Wedding Teaser',
  'Youtube Video Edit',
]

const About = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050507] py-16 text-white">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-0 h-72 w-72 rounded-full bg-[#9700ff1c] blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#57ff1c1c] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-8">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5/10 p-8 backdrop-blur"
        >
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex items-center justify-center">
              <div className="h-28 w-28 rounded-full border-4 border-white/10 bg-gradient-to-br from-[#3b82f6] to-[#312e81] text-2xl font-bold tracking-[0.2em] text-white shadow-lg shadow-[#3b82f6]/30">
                <div className="flex h-full w-full items-center justify-center">VT</div>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold text-white sm:text-5xl">Hi, I'm Varshil Tailor</h1>
              <p className="text-lg leading-relaxed text-white/80">
              I’m Varshil Tailor, a passionate Premiere Pro video editor with a strong eye for detail, clean storytelling, and modern editing styles. I specialize in crafting engaging videos that combine smooth transitions, sharp timing, and creative visual flow. Whether it’s social media content, cinematic edits, or promotional videos, I focus on delivering high-quality work that connects with the audience. I’m always learning, experimenting, and upgrading my skills to bring fresh ideas and professional polish to every project.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-12 rounded-[32px] border border-white/10 bg-white/5/10 p-8 backdrop-blur"
        >
          <h2 className="text-3xl font-semibold text-white">Strength</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            I bring strong creative vision, precise timing, and a sharp attention to detail to every project. My strengths include smooth
            storytelling, quick problem-solving, and efficiency under deadlines. I excel at organizing footage, maintaining visual style,
            and adapting to different project requirements.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 rounded-[32px] border border-white/10 bg-white/5/10 p-8 backdrop-blur"
        >
          <h2 className="text-3xl font-semibold text-white">Skills Snapshot</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-base font-medium text-white/80 shadow-inner shadow-white/5"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 rounded-[32px] border border-white/10 bg-white/5/10 p-8 backdrop-blur"
        >
          <h2 className="text-3xl font-semibold text-white">Tools</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { label: 'Premiere Pro', color: 'from-[#8b00ff] to-[#6a00cc]', text: 'text-white', symbol: 'Pr' },
              { label: 'CapCut', color: 'from-white to-white', text: 'text-black', symbol: 'S' },
            ].map((tool, index) => (
              <motion.div
                key={tool.label}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${tool.color} text-xl font-bold ${tool.text}`}
                >
                  {tool.symbol}
                </div>
                <span className="text-lg font-semibold text-white">{tool.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  )
}

export default About

