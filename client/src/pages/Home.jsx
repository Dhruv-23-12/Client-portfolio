import { motion } from 'framer-motion'

import heroVisual from '../assets/Hero Image.png'
import photoroomBadge from '../assets/Photoroom.png'
import capcutBadge from '../assets/Capcut.png'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
]

const Home = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020107] py-10 text-white">
      

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="">
          {/* <div className="flex flex-wrap items-center justify-between border-b border-white/5 pb-6">
            <div className="flex items-center gap-3 text-lg font-semibold text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#0b0a14] text-[10px] font-bold tracking-[0.4em]">
                VT
              </span>
              Varshil Tailor
            </div>
            <div className="mt-4 flex flex-wrap gap-2 rounded-full bg-[#0b0a14] px-3 py-2 text-sm font-medium sm:mt-0">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`rounded-full px-4 py-1.5 transition ${
                    item.label === 'Home'
                      ? 'bg-[#2f44ff] text-white shadow-[0_15px_30px_rgba(47,68,255,0.35)]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div> */}

          <div className="relative mt-20 grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="pointer-events-none absolute -left-12 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 text-[11px] font-semibold tracking-[0.5em] text-white/40 lg:flex">
              <div className="h-28 w-px bg-white/20"/>
              <span className="[writing-mode:vertical-rl]">Home Page</span>
              <div className="h-28 w-px bg-white/20"/>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <p className="text-xs uppercase tracking-[0.6em] text-white/60">Professional video editor</p>
              <h1 className="text-[clamp(3rem,8vw,6rem)] font-semibold leading-[1.05] text-white">
                This is your
                <br />
                Editor
              </h1>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-gradient-to-r from-[#4c0b79] via-[#7a2dff] to-[#12001d] px-10 py-4 text-[0.85rem] font-semibold uppercase tracking-[0.3em] text-white shadow-[0_20px_60px_rgba(122,45,255,0.45)]">
                Professional video editor
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="relative flex items-center justify-center"
            >
            

              <div className="relative w-full mt-24 max-w-[700px]">
                <div className="">
                  <img
                    src={heroVisual}
                    alt="Hero visual dashboard"
                    className=""
                    loading="lazy"
                  />
                 
                </div>

                <motion.img
                  src={photoroomBadge}
                  alt="Photoroom badge"
                  className="absolute -left-6 top-[-60px] w-24 drop-shadow-[0_12px_30px_rgba(20,255,255,0.35)]"
                  initial={{ opacity: 0, y: -30, rotate: 12 }}
                  animate={{ opacity: 1, y: 0, rotate: 6 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
                  loading="lazy"
                />

                <motion.img
                  src={capcutBadge}
                  alt="CapCut badge"
                  className="absolute -right-5 top-[-60px] w-24 drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
                  initial={{ opacity: 0, y: 30, rotate: -18 }}
                  animate={{ opacity: 1, y: 0, rotate: -10 }}
                  transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

