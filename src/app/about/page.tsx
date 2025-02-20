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
                      <div className="space-y-6">
                        <div className="relative">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                              <SparklesIcon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">The Beginning</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            My journey in digital marketing began with a passion for storytelling and a curiosity about how brands connect with their audiences. Starting as a content creator, I quickly realized the power of strategic digital marketing in transforming businesses.
                          </p>
                        </div>
                        <div className="relative">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                              <RocketLaunchIcon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Growth & Learning</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            Through continuous learning and hands-on experience, I've developed expertise in content strategy, social media management, and digital marketing. Each project has been an opportunity to refine my skills and deliver better results.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="relative">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                              <HeartIcon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Industry Experience</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            Over the past three years, I've had the privilege of working with diverse industries, from car care to fitness supplements and beyond. Each project has been an opportunity to craft unique narratives and drive meaningful results.
                          </p>
                        </div>
                        <div className="relative">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-teal-500">
                              <LightBulbIcon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Current Focus</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            Today, I focus on creating data-driven content strategies that help brands build authentic connections with their audience while achieving measurable business results.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Key Milestones */}
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Key Milestones</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { label: "Brands Served", value: "20+" },
                          { label: "Projects Completed", value: "50+" },
                          { label: "Content Pieces", value: "500+" },
                          { label: "Avg. Engagement", value: "5.8%" }
                        ].map((milestone, index) => (
                          <motion.div
                            key={milestone.label}
                            className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                              {milestone.value}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {milestone.label}
                            </div>
                          </motion.div>
                        ))}
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

              {/* Experience Highlights */}
              <motion.div
                className="mb-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-2 mb-8 text-center">Experience Highlights</h2>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.24)] transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">Focus Areas</h3>
                        <ul className="space-y-3">
                          {[
                            "Content Strategy Development",
                            "Social Media Management",
                            "Brand Storytelling",
                            "Digital Marketing Campaigns",
                            "Community Engagement"
                          ].map((item) => (
                            <motion.li
                              key={item}
                              className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                            >
                              <SparklesIcon className="h-5 w-5 text-primary-500" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">Industry Experience</h3>
                        <ul className="space-y-3">
                          {[
                            "Automotive Care",
                            "Health & Fitness",
                            "E-commerce",
                            "Food & Beverage",
                            "Lifestyle Brands"
                          ].map((item) => (
                            <motion.li
                              key={item}
                              className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                            >
                              <SparklesIcon className="h-5 w-5 text-primary-500" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Brands & Insights Section */}
              <motion.div
                className="mb-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-2 mb-8 text-center">Brand Impact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      metric: "Engagement Rate",
                      value: "5.8%",
                      description: "Average engagement across platforms",
                      gradient: "from-blue-500 to-cyan-500"
                    },
                    {
                      metric: "Reach",
                      value: "25K+",
                      description: "Monthly content reach",
                      gradient: "from-purple-500 to-pink-500"
                    },
                    {
                      metric: "Content Performance",
                      value: "92%",
                      description: "Content meeting KPI targets",
                      gradient: "from-orange-500 to-red-500"
                    },
                    {
                      metric: "Growth Rate",
                      value: "48%",
                      description: "Average audience growth",
                      gradient: "from-green-500 to-teal-500"
                    }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.metric}
                      className="relative group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-20 group-hover:opacity-30 group-hover:blur-sm transition-all duration-300`} />
                      <div className="relative">
                        <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">
                          {stat.metric}
                        </h3>
                        <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                          {stat.value}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {stat.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Featured Brands */}
                <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold text-center mb-8">Featured Brand Collaborations</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        name: "Car Care Pro",
                        type: "Automotive",
                        engagement: "6.2%",
                        reach: "15K",
                        posts: "48",
                        gradient: "from-blue-500 to-cyan-500"
                      },
                      {
                        name: "FitLife Supplements",
                        type: "Health & Fitness",
                        engagement: "5.5%",
                        reach: "12K",
                        posts: "36",
                        gradient: "from-purple-500 to-pink-500"
                      },
                      {
                        name: "Jelaty Lebnan",
                        type: "Food & Beverage",
                        engagement: "5.9%",
                        reach: "18K",
                        posts: "42",
                        gradient: "from-orange-500 to-red-500"
                      }
                    ].map((brand) => (
                      <motion.div
                        key={brand.name}
                        className="relative group bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${brand.gradient} rounded-xl opacity-20 group-hover:opacity-30 group-hover:blur-sm transition-all duration-300`} />
                        <div className="relative">
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{brand.name}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{brand.type}</p>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">{brand.engagement}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Engagement</div>
                            </div>
                            <div>
                              <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">{brand.reach}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Avg. Reach</div>
                            </div>
                            <div>
                              <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">{brand.posts}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Posts</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
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