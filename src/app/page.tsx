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
                  Computer Science{' '}
                  <span className="relative">
                    <span className="relative z-10 bg-gradient-to-r from-primary-600 via-primary-600 to-primary-600 bg-clip-text text-transparent font-bold">
                      Instructor & Developer
                    </span>
                    <motion.span
                      className="absolute -inset-1 -z-10 block rounded-lg bg-primary-100/50 blur-xl"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                    />
                  </span>
                </motion.h1>
                <motion.p 
                  className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Passionate content creator specializing in crafting compelling digital experiences that resonate with audiences and drive meaningful engagement. Dedicated to delivering high-quality content that makes an impact.
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
                Combining creative excellence with strategic thinking to deliver exceptional content that makes an impact
              </p>
            </motion.div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Creative Storytelling",
                  description: "Crafting compelling narratives that captivate and engage your audience",
                  icon: PencilSquareIcon,
                },
                {
                  title: "Technical Excellence",
                  description: "Leveraging cutting-edge tools and techniques for premium content creation",
                  icon: CommandLineIcon,
                },
                {
                  title: "Strategic Approach",
                  description: "Data-driven content strategies aligned with your business goals",
                  icon: PresentationChartBarIcon,
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg ring-1 ring-gray-200/50 dark:ring-gray-700/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-100/0 to-primary-100/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-gray-700 text-primary-600 dark:text-primary-400"
                    >
                      <feature.icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                  </div>
                  <p className="mt-4 text-body">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Experience Section */}
        <section className="relative section-light py-24 sm:py-32">
          <div className="container">
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <AcademicCapIcon className="h-8 w-8 text-primary-600" />
              </motion.div>
              <h2 className="heading-2">Education & Experience</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                A decade of experience in content creation, backed by continuous learning and adaptation to emerging trends
              </p>
            </motion.div>

            <div className="relative mt-16">
              <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2">
                <div className="h-full w-full bg-gradient-to-b from-primary-600 via-primary-500 to-primary-400 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-b from-primary-400 to-primary-600 blur-sm opacity-50" />
              </div>
              <div className="space-y-12">
                {[
                  {
                    year: "2023",
                    title: "Senior Content Creator",
                    organization: "Digital Media Agency",
                    description: "Led major content campaigns and mentored junior creators",
                  },
                  {
                    year: "2021",
                    title: "Content Strategy Certification",
                    organization: "Digital Marketing Institute",
                    description: "Advanced certification in content strategy and analytics",
                  },
                  {
                    year: "2020",
                    title: "Content Creator",
                    organization: "Creative Studio",
                    description: "Created multimedia content for diverse client portfolio",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <motion.div
                      className="group relative w-1/2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-primary-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000" />
                      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg">
                        <div className="flex items-center gap-4">
                          <span className="rounded-full bg-primary-100 dark:bg-gray-700 px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                            {item.year}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                        </div>
                        <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">{item.organization}</p>
                        <p className="mt-4 text-body">{item.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
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
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Specialized in teaching, machine learning, and software development
              </p>
            </motion.div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Computer Science Education",
                  description: "Experienced instructor with a passion for teaching programming and computer science concepts",
                  icon: AcademicCapIcon,
                },
                {
                  title: "Machine Learning",
                  description: "Expertise in developing and implementing machine learning solutions",
                  icon: SparklesIcon,
                },
                {
                  title: "Backend Development",
                  description: "Building robust and scalable backend systems",
                  icon: CommandLineIcon,
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg ring-1 ring-gray-200/50 dark:ring-gray-700/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-100/0 to-primary-100/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-gray-700 text-primary-600 dark:text-primary-400"
                    >
                      <feature.icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                  </div>
                  <p className="mt-4 text-body">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="section-light py-24 sm:py-32">
          <div className="container">
            <motion.div 
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2">Featured Projects</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                A selection of my recent development and research projects
              </p>
            </motion.div>
            <motion.div 
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Water Quality Control System",
                  description: "Digital system to automate water analysis process at drinking water treatment facilities using Node.js and MySQL.",
                  tags: ["Node.js", "MySQL", "API", "Backend"],
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Car Classification Models",
                  description: "Machine learning models for classifying car types based on various features using Python and scikit-learn.",
                  tags: ["Python", "ML", "Data Analysis"],
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Breast Cancer Classifier",
                  description: "Implementation of machine learning models for classifying breast cancer diagnoses using various algorithms.",
                  tags: ["Python", "ML", "Healthcare"],
                  gradient: "from-orange-500 to-red-500"
                }
              ].map((project) => (
                <motion.article
                  key={project.title}
                  className="group relative isolate flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
                  variants={item}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`} />
                  <div className="relative p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-primary-50 dark:bg-gray-700 px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400"
                        >
                          {tag}
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