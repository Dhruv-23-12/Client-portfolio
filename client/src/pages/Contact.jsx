import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus({ type: 'success', message: data.message })
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050506] py-16 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-[#9700ff20] blur-[150px]" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-[#57ff1c1c] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1300px] px-4 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <h1 className="text-4xl font-semibold">Get in Touch</h1>
            <p className="mt-4 text-lg text-white/70">
              I'm always excited to explore new editing projects, creative concepts, and collaboration opportunities. Reach out anytime—let's bring your vision to life through powerful visuals.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {['name', 'email', 'subject', 'message'].map((field) => (
                <div key={field} className="space-y-2">
                  <label htmlFor={field} className="text-sm font-medium uppercase tracking-widest text-white/60">
                    {field === 'name' && 'Your Name'}
                    {field === 'email' && 'Your Email'}
                    {field === 'subject' && 'Subject'}
                    {field === 'message' && 'Message'}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Enter your message"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#8459FF] focus:ring-2 focus:ring-[#8459FF]/30"
                      required
                      disabled={isSubmitting}
                    />
                  ) : (
                    <input
                      id={field}
                      name={field}
                      type={field === 'email' ? 'email' : 'text'}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={`Enter your ${field}`}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#8459FF] focus:ring-2 focus:ring-[#8459FF]/30"
                      required
                      disabled={isSubmitting}
                    />
                  )}
                </div>
              ))}
              {submitStatus && (
                <div
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-[#2f44ff] px-5 py-4 text-base font-semibold text-white transition hover:bg-[#2336d1] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <h1 className="text-4xl font-semibold">Contact Information</h1>
            <p className="mt-4 text-lg text-white/70">
              Feel free to reach out through any of the channels below. I aim to respond within 24 hours.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  label: 'Phone',
                  value: '+91 9316061782',
                  href: 'tel:+919316061782',
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  ),
                },
                {
                  label: 'Email',
                  value: 'varshiltailor@gmail.com',
                  href: 'mailto:varshiltailor@gmail.com',
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  ),
                },
              ].map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      {method.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-white/50">{method.label}</p>
                    <p className="text-lg font-semibold text-white">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

