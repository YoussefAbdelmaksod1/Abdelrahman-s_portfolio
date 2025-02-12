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
                Transforming ideas into compelling digital experiences
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
              {/* Profile Section */}
              <motion.div 
                className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mb-24"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="relative aspect-square w-full max-w-md mx-auto"
                  variants={fadeInUp}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image
                      src="/images/profile.jpg"
                      alt="Abdelrahman Younes"
                      fill
                      className="object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  <motion.div
                    className="absolute -inset-4 -z-10 border-2 border-primary-200 rounded-2xl"
                    variants={rotatingBorder}
                    animate="animate"
                    initial={false}
                  />
                  <motion.div
                    className="absolute -inset-8 -z-20 border border-primary-100 rounded-2xl"
                    variants={rotatingBorder}
                    animate="animate"
                    initial={false}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop"
                    }}
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <h2 className="heading-2 mb-6">My Journey</h2>
                  <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                    <p>
                      As a passionate content creator, I've dedicated my career to crafting compelling digital experiences that resonate with audiences and drive meaningful engagement. My journey began with a deep love for storytelling and has evolved into a comprehensive mastery of digital media.
                    </p>
                    <p>
                      I specialize in creating content that not only captures attention but also delivers real value. Whether it's through video production, photography, or written content, I focus on creating narratives that leave a lasting impact.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Values Section */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: RocketLaunchIcon,
                    title: "Innovation",
                    description: "Pushing boundaries with creative solutions"
                  },
                  {
                    icon: LightBulbIcon,
                    title: "Creativity",
                    description: "Bringing fresh perspectives to every project"
                  },
                  {
                    icon: HeartIcon,
                    title: "Passion",
                    description: "Dedicated to creating exceptional content"
                  },
                  {
                    icon: SparklesIcon,
                    title: "Excellence",
                    description: "Committed to the highest quality standards"
                  }
                ].map((value) => (
                  <motion.div
                    key={value.title}
                    className="relative group bg-white dark:bg-gray-800 p-6 rounded-lg ring-1 ring-gray-200/50 dark:ring-gray-700/50"
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-primary-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000" />
                    <value.icon className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Section */}
              <motion.div 
                className="mt-24 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link 
                  href="/contact" 
                  className="btn-primary group relative overflow-hidden"
                >
                  <span className="relative z-10">Let's Work Together</span>
                  <motion.span
                    className="absolute inset-0 -z-10 bg-primary-700"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ type: 'tween' }}
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 