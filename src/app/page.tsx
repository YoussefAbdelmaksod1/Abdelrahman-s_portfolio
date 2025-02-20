'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import {
  VideoCameraIcon,
  PencilSquareIcon,
  PresentationChartBarIcon,
  CameraIcon,
  MegaphoneIcon,
  CommandLineIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
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

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  }
}

const timelineItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  }
}

const SkillCard = ({ icon: Icon, title, description }: { 
  icon: any, 
  title: string, 
  description: string
}) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <Icon className="w-12 h-12 text-primary-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </motion.div>
)

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <>
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden section-gradient pt-32 lg:pt-40">
          <div className="container relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div 
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1 
                  className="heading-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Content Creator{' '}
                  <span className="relative">
                    <span className="relative z-10 bg-gradient-to-r from-primary-600 via-primary-600 to-primary-600 bg-clip-text text-transparent font-bold">
                      & Digital Storyteller
                    </span>
                  </span>
                </motion.h1>
                <motion.p 
                  className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Passionate content creator specializing in crafting compelling digital experiences that resonate with audiences and drive meaningful engagement.
                </motion.p>
                <motion.div 
                  className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link href="/portfolio" className="btn-primary">
                    View My Projects
                  </Link>
                  <Link href="/contact" className="btn-outline">
                    Get in Touch
                  </Link>
                </motion.div>
              </motion.div>

              {/* Profile Image with Animation */}
              <motion.div
                className="relative mx-auto aspect-square w-full max-w-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <motion.div
                    className="absolute inset-0 z-10 rounded-full bg-gradient-to-tr from-primary-500/20 to-transparent"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <Image
                    src="/images/profile.jpg"
                    alt="Abdelrahman Younes"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <motion.div
                  className="absolute -inset-4 -z-10 rounded-full border-2 border-primary-200"
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Enhanced Animated Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              className="absolute -top-40 left-[calc(50%-500px)] h-[1000px] w-[1000px] rounded-full bg-gradient-to-r from-primary-200/30 to-secondary-200/30 blur-3xl"
              style={{ y }}
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

        {/* USP Section */}
        <section className="relative overflow-hidden section-alt py-24 sm:py-32">
          <div className="container relative z-10">
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100"
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <SparklesIcon className="h-8 w-8 text-primary-600" />
              </motion.div>
              <h2 className="heading-2">Why Choose Me?</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Elevate your brand with strategic content creation and marketing expertise
              </p>
            </motion.div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Visual Storytelling",
                  description: "Creating eye-catching photos and videos that tell your story",
                  icon: VideoCameraIcon,
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Social Media",
                  description: "Making content that people love to share and engage with",
                  icon: MegaphoneIcon,
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Content Strategy",
                  description: "Planning content that helps reach your goals",
                  icon: PresentationChartBarIcon,
                  gradient: "from-orange-500 to-red-500"
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg ring-1 ring-gray-200/50 dark:ring-gray-700/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.4,
                      duration: 0.8,
                      delay: index * 0.2
                    }
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }
                  }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-0 transition-all duration-300 group-hover:opacity-75`} />
                  <div className="relative">
                    <motion.div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient}`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <motion.h3 
                      className="mt-4 text-xl font-semibold text-gray-900 dark:text-white"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.3 + 0.2 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p 
                      className="mt-2 text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 + 0.4 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="mx-auto max-w-3xl bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 animate-pulse" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Create Something Amazing?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Let's collaborate and bring your vision to life with engaging content that resonates with your audience.
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
        </section>

        {/* Experience Timeline */}
        <section className="relative section-light py-24 sm:py-32">
          <div className="container">
            <motion.div
              className="mx-auto max-w-2xl text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary-100 to-secondary-100"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, duration: 0.8 }}
              >
                <BriefcaseIcon className="h-8 w-8 text-primary-600" />
              </motion.div>
              <h2 className="heading-2 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">My Journey</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                A track record of creating impactful content and managing successful campaigns
              </p>
            </motion.div>

            <div className="relative mt-16 max-w-5xl mx-auto px-4 sm:px-6">
              {/* Timeline Line with Gradient and Animation */}
              <div className="absolute left-8 sm:left-1/2 h-full w-1 -translate-x-1/2">
                <motion.div 
                  className="h-full w-full bg-gradient-to-b from-primary-600 via-primary-500 to-primary-400 rounded-full"
                  initial={{ height: "0%" }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white via-white/50 to-transparent dark:from-gray-900 dark:via-gray-900/50" />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-gray-900 dark:via-gray-900/50" />
                </motion.div>
              </div>
              
              <div className="space-y-12">
                {[
                  {
                    period: "Nov 2024 - Present",
                    role: "Account Manager",
                    company: "ZED Marketing Agency",
                    location: "Alexandria, Egypt",
                    type: "Full-time",
                    skills: ["Account Management", "Project Management", "Marketing Strategy", "Content Strategy"],
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    period: "Oct 2024 - Present",
                    role: "Senior Content Creator",
                    company: "ZED Marketing Agency",
                    location: "Alexandria, Egypt",
                    type: "Full-time",
                    skills: ["Content Creation", "Social Media Content Creation", "Content Strategy", "Content Marketing"],
                    gradient: "from-purple-500 to-pink-500"
                  },
                  {
                    period: "Aug 2024 - Sep 2024",
                    role: "Social Media Specialist",
                    company: "NJO Business Solutions",
                    location: "Alexandria, Egypt",
                    type: "Full-time",
                    skills: ["Social Media Marketing", "Social Media Management", "Social Media Strategy", "Content Marketing"],
                    gradient: "from-orange-500 to-red-500"
                  },
                  {
                    period: "Jan 2024 - Jun 2024",
                    role: "Junior Content Creator",
                    company: "Trend Marketing Agency",
                    location: "Alexandria, Egypt",
                    type: "Full-time",
                    skills: ["Content Creation", "Social Media", "Content Design", "Copywriting"],
                    gradient: "from-green-500 to-teal-500"
                  },
                  {
                    period: "Oct 2023 - Dec 2023",
                    role: "Content Creator",
                    company: "Kaf Production",
                    location: "Alexandria, Egypt",
                    type: "Internship",
                    skills: ["Creative Content Creation", "Scriptwriting", "Content Planning", "Marketing Strategy"],
                    gradient: "from-pink-500 to-rose-500"
                  },
                  {
                    period: "Aug 2023 - Nov 2023",
                    role: "Content Creator",
                    company: "MMA - Modern Marketing Academy",
                    location: "Alexandria, Egypt",
                    type: "Internship",
                    skills: ["Market Research", "Competitive Analysis", "Content Design", "Social Media Strategy"],
                    gradient: "from-indigo-500 to-violet-500"
                  },
                  {
                    period: "2022 - 2023",
                    role: "Co-Founder & Digital Marketer",
                    company: "Well & Fit",
                    location: "Online",
                    type: "Full-time",
                    skills: ["Digital Marketing", "Content Strategy", "Brand Development", "Social Media Marketing"],
                    gradient: "from-emerald-500 to-teal-500"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.period}
                    className={clsx(
                      "relative flex flex-col sm:flex-row",
                      index % 2 === 0 ? "sm:justify-start" : "sm:justify-end",
                      "group"
                    )}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <motion.div
                      className={clsx(
                        "group relative",
                        "w-[calc(100%-3rem)] sm:w-[calc(50%-2rem)]",
                        "ml-16 sm:ml-0",
                        "transition-all duration-300"
                      )}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      <div className={clsx(
                        "absolute top-4 -translate-x-[calc(100%+1rem)]",
                        "left-0 sm:translate-x-0",
                        index % 2 === 0 
                          ? "sm:right-0 sm:left-auto sm:translate-x-[calc(100%+1rem)]" 
                          : "sm:left-0 sm:-translate-x-[calc(100%+1rem)]"
                      )}>
                        <motion.div
                          className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-125 transition-all duration-300`}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2, type: "spring" }}
                        >
                          <div className="w-3 h-3 rounded-full bg-white group-hover:scale-75 transition-all duration-300" />
                        </motion.div>
                        <motion.div
                          className={clsx(
                            "absolute top-1/2 h-0.5 bg-gradient-to-r",
                            item.gradient,
                            index % 2 === 0 
                              ? "left-full sm:right-full sm:left-auto" 
                              : "left-full",
                            "w-4 sm:w-8 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                          )}
                          initial={{ width: 0 }}
                          whileInView={{ width: "2rem" }}
                          transition={{ delay: 0.3 }}
                        />
                      </div>

                      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-20 group-hover:opacity-30 group-hover:blur-sm transition-all duration-300`} />
                        
                        <div className="relative">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4">
                            <motion.span 
                              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${item.gradient} text-white shadow-sm group-hover:shadow-md transition-all duration-300`}
                              whileHover={{ scale: 1.05 }}
                            >
                              {item.period}
                            </motion.span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 italic">
                              {item.type}
                            </span>
                          </div>
                          <motion.h3 
                            className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                            whileHover={{ x: 5 }}
                          >
                            {item.role}
                          </motion.h3>
                          <p className="text-base text-primary-600 dark:text-primary-400 font-medium mb-2">
                            {item.company}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                            📍 {item.location}
                          </p>
                          <motion.div 
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            {item.skills.map((skill, skillIndex) => (
                              <motion.span
                                key={skill}
                                className="inline-flex items-center rounded-full bg-primary-50 dark:bg-gray-700 px-2.5 py-0.5 text-xs font-medium text-primary-600 dark:text-primary-400 group-hover:bg-primary-100 dark:group-hover:bg-gray-600 transition-all duration-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + skillIndex * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="relative section-light py-24 sm:py-32">
          <div className="container">
            <motion.div
              className="mx-auto max-w-2xl text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary-100 to-secondary-100"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, duration: 0.8 }}
              >
                <AcademicCapIcon className="h-8 w-8 text-primary-600" />
              </motion.div>
              <h2 className="heading-2 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Education</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Academic foundation in psychology and human behavior
              </p>
            </motion.div>

            <motion.div
              className="mx-auto max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg overflow-hidden">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-30 group-hover:blur-sm transition-all duration-300" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Faculty of Arts
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400">
                        Alexandria University
                      </p>
                    </div>
                    <motion.div
                      className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <span className="text-2xl text-white">🎓</span>
                    </motion.div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Bachelor's in Psychology
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Specialized in understanding human behavior, cognitive processes, and social psychology
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <motion.span
                        className="inline-flex items-center rounded-full bg-primary-50 dark:bg-gray-700 px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400"
                        whileHover={{ scale: 1.05 }}
                      >
                        Psychology
                      </motion.span>
                      <motion.span
                        className="inline-flex items-center rounded-full bg-primary-50 dark:bg-gray-700 px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400"
                        whileHover={{ scale: 1.05 }}
                      >
                        Research Methods
                      </motion.span>
                      <motion.span
                        className="inline-flex items-center rounded-full bg-primary-50 dark:bg-gray-700 px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400"
                        whileHover={{ scale: 1.05 }}
                      >
                        Social Psychology
                      </motion.span>
                      <motion.span
                        className="inline-flex items-center rounded-full bg-primary-50 dark:bg-gray-700 px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400"
                        whileHover={{ scale: 1.05 }}
                      >
                        Cognitive Psychology
                      </motion.span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="relative section-alt py-24 sm:py-32">
          <div className="container">
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2">Skills & Expertise</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                A diverse skill set in content creation, marketing, and digital strategy
              </p>
            </motion.div>

            <div className="mt-16 grid gap-12 lg:grid-cols-2">
              {[
                {
                  title: "Content Creation",
                  skills: [
                    { name: "Creative Writing", icon: "✍️" },
                    { name: "Design Enhancement", icon: "🎨" },
                    { name: "Art Direction", icon: "🎭" },
                    { name: "Storytelling", icon: "📖" },
                    { name: "Content Planning", icon: "📋" },
                    { name: "Brand Voice", icon: "🎯" }
                  ],
                  gradient: "from-rose-400 to-purple-500"
                },
                {
                  title: "Digital Marketing",
                  skills: [
                    { name: "Social Media", icon: "📱" },
                    { name: "Content Strategy", icon: "🎯" },
                    { name: "Brand Development", icon: "⭐" },
                    { name: "Analytics", icon: "📊" },
                    { name: "Campaign Management", icon: "🚀" },
                    { name: "Market Research", icon: "🔍" }
                  ],
                  gradient: "from-blue-400 to-cyan-500"
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className={`text-2xl font-bold mb-8 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                  <div className="grid gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="group relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl transition-all duration-300 hover:shadow-md">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="section-light py-24 sm:py-32">
          <div className="container">
            <motion.div 
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2">Certifications</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Professional qualifications and achievements in digital marketing and content creation
              </p>
            </motion.div>
            <motion.div 
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Digital Marketing Diploma",
                  issuer: "MMA - Modern Marketing Academy",
                  date: "2023",
                  description: "Comprehensive training in digital marketing strategies, social media management, and content creation",
                  skills: ["Digital Marketing", "Social Media", "Content Strategy"],
                  gradient: "from-blue-500 to-cyan-500",
                  icon: AcademicCapIcon
                }
              ].map((cert) => (
                <motion.article
                  key={cert.title}
                  className="group relative isolate flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg max-w-2xl mx-auto"
                  variants={item}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.gradient} rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`} />
                  <div className="relative p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${cert.gradient}`}>
                        {cert.icon && <cert.icon className="h-6 w-6 text-white" />}
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {cert.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {cert.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-full bg-primary-50 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-primary-600 dark:text-primary-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 