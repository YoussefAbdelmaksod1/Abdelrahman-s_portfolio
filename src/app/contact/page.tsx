'use client'

import { Navigation } from '@/components/Navigation'
import { motion } from 'framer-motion'
import {
  EnvelopeIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import { SVGProps, FormEvent, useState } from 'react'
import React from 'react'

type HeroIconType = typeof EnvelopeIcon;
type CustomIconType = (props: SVGProps<SVGSVGElement>) => JSX.Element;

interface ContactMethod {
  name: string;
  description: string;
  icon: HeroIconType | CustomIconType;
  contact: string;
  href?: string;
}

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const contactMethods: ContactMethod[] = [
  {
    name: 'Email',
    description: 'Send me an email anytime',
    icon: EnvelopeIcon,
    contact: 'abdelrahmany99@gmail.com',
  },
  {
    name: 'WhatsApp',
    description: 'Message me on WhatsApp',
    icon: WhatsAppIcon,
    contact: '+20 01210233451',
    href: 'https://wa.me/201210233451',
  },
  {
    name: 'LinkedIn',
    description: 'Connect with me',
    icon: LinkedInIcon,
    contact: 'linkedin.com/in/abdelrahman-younes',
    href: 'https://www.linkedin.com/in/abdelrahman-younes-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formData = new FormData(e.currentTarget)
      // Here you would typically send the form data to your API
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
      setSubmitStatus('success')
      e.currentTarget.reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden section-gradient pt-32 lg:pt-40">
          <div className="container relative z-10">
            <motion.div 
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <SparklesIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <motion.h1 
                className="heading-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Let's Create Something Amazing
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Ready to transform your brand with engaging content? Let's discuss your project and explore how we can work together.
              </motion.p>
            </motion.div>
          </div>

          {/* Enhanced background decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              className="absolute -top-40 left-[calc(50%-500px)] h-[1000px] w-[1000px] rounded-full bg-gradient-to-r from-primary-200/30 to-secondary-200/30 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -bottom-40 right-[calc(50%-500px)] h-[800px] w-[800px] rounded-full bg-gradient-to-l from-primary-200/30 to-secondary-200/30 blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-light py-24 sm:py-32">
          <div className="container">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {/* Contact Methods */}
                <motion.div 
                  className="max-w-xl lg:max-w-lg"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.h2 
                    className="heading-2"
                    variants={fadeInUp}
                  >
                    Let's Connect
                  </motion.h2>
                  <motion.p 
                    className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300"
                    variants={fadeInUp}
                  >
                    Choose your preferred way to reach out
                  </motion.p>
                  <motion.dl 
                    className="mt-10 space-y-4 text-base leading-7"
                    variants={container}
                  >
                    {contactMethods.map((method) => (
                      <motion.div
                        key={method.name}
                        variants={fadeInUp}
                        className="relative pl-12 group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <dt className="inline font-semibold text-gray-900 dark:text-white">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-600 dark:text-primary-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                            <method.icon className="h-6 w-6" aria-hidden="true" />
                          </span>
                          {method.name}
                        </dt>
                        <dd className="block mt-1 text-gray-600 dark:text-gray-300">
                          {method.description}
                          <div className="mt-1">
                            {method.href ? (
                              <a 
                                href={method.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                              >
                                {method.contact}
                              </a>
                            ) : (
                              <span className="select-all font-medium">{method.contact}</span>
                            )}
                          </div>
                        </dd>
                      </motion.div>
                    ))}
                  </motion.dl>
                </motion.div>

                {/* Contact Form */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 rounded-2xl blur opacity-75" />
                  <div className="relative flex flex-col gap-10 rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 gap-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        >
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                          >
                            Name
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              required
                              autoComplete="name"
                              className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700/50 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:focus:ring-primary-400 sm:text-sm sm:leading-6 transition-all duration-300"
                              placeholder="Your name"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                        >
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                          >
                            Email
                          </label>
                          <div className="mt-2">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              required
                              autoComplete="email"
                              className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700/50 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:focus:ring-primary-400 sm:text-sm sm:leading-6 transition-all duration-300"
                              placeholder="you@example.com"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 }}
                        >
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                          >
                            Subject
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="subject"
                              id="subject"
                              required
                              className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700/50 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:focus:ring-primary-400 sm:text-sm sm:leading-6 transition-all duration-300"
                              placeholder="What's this about?"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 }}
                        >
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                          >
                            Message
                          </label>
                          <div className="mt-2">
                            <textarea
                              name="message"
                              id="message"
                              rows={4}
                              required
                              className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700/50 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:focus:ring-primary-400 sm:text-sm sm:leading-6 transition-all duration-300"
                              placeholder="Tell me about your project..."
                            />
                          </div>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                      >
                        <button 
                          type="submit" 
                          className="relative w-full rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:from-primary-500 hover:to-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center">
                              <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin mr-2" />
                              Sending...
                            </div>
                          ) : (
                            'Send Message'
                          )}
                        </button>
                        {submitStatus === 'success' && (
                          <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                            Message sent successfully!
                          </p>
                        )}
                        {submitStatus === 'error' && (
                          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                            There was an error sending your message. Please try again.
                          </p>
                        )}
                      </motion.div>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}