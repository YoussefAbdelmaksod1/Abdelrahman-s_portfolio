'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import {
  RocketLaunchIcon,
  LightBulbIcon,
  HeartIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

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

const rotatingBorder = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop"
    }
  }
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden section-gradient pt-32 lg:pt-40">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <motion.h1 
                className="heading-1"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About Me
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Learn more about who I am and how I can help you
              </motion.p>
            </div>
          </div>

          {/* Animated background elements */}
          <motion.div 
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
          </motion.div>
        </section>

        {/* Main Content */}
        <section className="relative section-light py-24 sm:py-32">
          <div className="container">
            <div className="mx-auto max-w-7xl">
              {/* Profile Section - HOOK */}
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mb-24">
                <motion.div 
                  className="relative aspect-square w-full max-w-md mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Rotating borders */}
                  <motion.div
                    className="absolute -inset-4 rounded-2xl border-2 border-primary-500/50"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.div
                    className="absolute -inset-8 rounded-2xl border-2 border-primary-400/30"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Main image container */}
                  <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="/images/profile.jpg"
                      alt="Abdelrahman Younes"
                      fill
                      className="object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0"
                      animate={{
                        background: [
                          "linear-gradient(to right top, rgba(59, 130, 246, 0.2), transparent)",
                          "linear-gradient(to right top, rgba(99, 102, 241, 0.2), transparent)",
                          "linear-gradient(to right top, rgba(59, 130, 246, 0.2), transparent)"
                        ]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="space-y-4">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                      Hey, I'm Youness! 👋
                    </h1>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                      Content Creator & Digital Marketing Specialist
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Transforming brands through creative storytelling and strategic digital marketing
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {[
                      { value: "3+", label: "Years Experience" },
                      { value: "20+", label: "Industries Served" },
                      { value: "23", label: "Projects Delivered" }
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.24)] transition-all duration-300">
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">{stat.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Journey Section */}
              <motion.div 
                className="mb-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-2 mb-8 text-center">My Journey</h2>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg relative overflow-hidden">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur opacity-50" />
                  <div className="relative">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-8">
                        <div className="relative group">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 transform group-hover:scale-110 transition-transform duration-300">
                              <SparklesIcon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">The Beginning</h3>
                          </div>
                          <div className="pl-16">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              My journey in digital marketing began with a passion for storytelling and a curiosity about how brands connect with their audiences. Starting as a content creator, I quickly realized the power of strategic digital marketing in transforming businesses.
                            </p>
                          </div>
                        </div>
                        <div className="relative group">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 transform group-hover:scale-110 transition-transform duration-300">
                              <RocketLaunchIcon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">Growth & Learning</h3>
                          </div>
                          <div className="pl-16">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              Through continuous learning and hands-on experience, I've developed expertise in content strategy, social media management, and digital marketing. Each project has been an opportunity to refine my skills and deliver better results.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-8">
                        <div className="relative group">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 transform group-hover:scale-110 transition-transform duration-300">
                              <HeartIcon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">Industry Experience</h3>
                          </div>
                          <div className="pl-16">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              Over the past three years, I've had the privilege of working with diverse industries, from car care to fitness supplements and beyond. Each project has been an opportunity to craft unique narratives and drive meaningful results.
                            </p>
                          </div>
                        </div>
                        <div className="relative group">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 transform group-hover:scale-110 transition-transform duration-300">
                              <LightBulbIcon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">Current Focus</h3>
                          </div>
                          <div className="pl-16">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              Today, I focus on creating data-driven content strategies that help brands build authentic connections with their audience while achieving measurable business results.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* USP Section */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: RocketLaunchIcon,
                    title: "Fresh Perspective",
                    description: "Bringing new ideas and modern approaches to content creation"
                  },
                  {
                    icon: LightBulbIcon,
                    title: "Creative Energy",
                    description: "Crafting engaging and authentic content that connects"
                  },
                  {
                    icon: SparklesIcon,
                    title: "Growth Mindset",
                    description: "Constantly learning and adapting to industry trends"
                  }
                ].map((value) => (
                  <motion.div
                    key={value.title}
                    className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1"
                    variants={fadeInUp}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary-50 dark:bg-gray-700">
                        <value.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{value.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Section */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mx-auto max-w-3xl bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 animate-pulse" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Ready to Transform Your Brand?
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Let's create engaging content that resonates with your audience and drives real results.
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <Link href="/contact" className="btn-primary">
                      Start a Project
                    </Link>
                    <Link href="/portfolio" className="btn-outline">
                      View My Work
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 