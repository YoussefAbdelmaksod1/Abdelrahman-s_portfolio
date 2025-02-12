'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import {
  AcademicCapIcon,
  BriefcaseIcon,
  TrophyIcon,
  StarIcon,
  RocketLaunchIcon,
  LightBulbIcon,
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

const experiences = [
  {
    year: "2023",
    role: "Computer Science Instructor",
    company: "Educational Institute",
    description: "Teaching computer science fundamentals and advanced programming concepts to students.",
    achievements: [
      "Developed comprehensive curriculum",
      "Mentored 100+ students",
      "Improved student success rate by 40%",
      "Created interactive learning materials"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    year: "2021-2022",
    role: "Machine Learning Engineer",
    company: "Tech Company",
    description: "Developed and implemented machine learning solutions for real-world problems.",
    achievements: [
      "Built classification models",
      "Optimized model performance",
      "Implemented data preprocessing pipelines",
      "Achieved 95% accuracy in predictions"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    year: "2020",
    role: "Backend Developer",
    company: "Software Company",
    description: "Developed robust backend systems and APIs for various applications.",
    achievements: [
      "Built scalable APIs",
      "Optimized database performance",
      "Implemented security measures",
      "Reduced response time by 60%"
    ],
    gradient: "from-orange-500 to-red-500"
  }
]

const certifications = [
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford University",
    date: "2022",
    icon: AcademicCapIcon,
    gradient: "from-green-500 to-teal-500"
  },
  {
    name: "Advanced Python Programming",
    issuer: "Python Institute",
    date: "2021",
    icon: RocketLaunchIcon,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    name: "Backend Development",
    issuer: "Tech Academy",
    date: "2021",
    icon: LightBulbIcon,
    gradient: "from-indigo-500 to-violet-500"
  }
]

export default function ExperiencePage() {
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
                Experience & Achievements
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                A journey of continuous growth and impactful content creation
              </motion.p>
            </div>
          </div>

          {/* Animated background */}
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

        {/* Experience Timeline */}
        <section className="section-light py-24 sm:py-32">
          <div className="container">
            <motion.div
              className="mx-auto max-w-2xl text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary-50 dark:bg-gray-800 mb-4">
                <BriefcaseIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h2 className="heading-2">Professional Journey</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                A track record of creating impactful digital content
              </p>
            </motion.div>

            <motion.div
              className="relative max-w-5xl mx-auto"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2">
                <div className="h-full w-full bg-gradient-to-b from-primary-600 via-primary-500 to-primary-400 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-b from-primary-400 to-primary-600 blur-sm opacity-50" />
              </div>
              <div className="space-y-16">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.year}
                    className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                    variants={fadeInUp}
                  >
                    <motion.div
                      className="w-1/2 group relative"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.gradient} rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`} />
                      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl">
                        <div className="flex items-center gap-4 mb-4">
                          <span className={`px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r ${exp.gradient} text-white`}>
                            {exp.year}
                          </span>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                        </div>
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{exp.company}</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement) => (
                            <motion.li
                              key={achievement}
                              className="flex items-center gap-2"
                              whileHover={{ x: 5 }}
                            >
                              <StarIcon className="h-4 w-4 text-primary-500 dark:text-primary-400" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="relative section-alt py-24 sm:py-32">
          <div className="container">
            <motion.div
              className="mx-auto max-w-2xl text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary-50 dark:bg-gray-800 mb-4">
                <TrophyIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h2 className="heading-2">Certifications</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Professional qualifications and achievements
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  className="group relative"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.gradient} rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`} />
                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cert.gradient}`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <cert.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
                        <p className="text-sm text-primary-600 dark:text-primary-400">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-300">{cert.date}</span>
                      <motion.button
                        className="text-primary-600 dark:text-primary-400 text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        View Certificate →
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-light py-24 sm:py-32">
          <div className="container">
            <motion.div 
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-6">Ready to Create Something Amazing?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Let's collaborate and bring your vision to life with professional content creation
              </p>
              <Link href="/contact" className="btn-primary group relative overflow-hidden">
                <span className="relative z-10">Start a Project</span>
                <motion.span
                  className="absolute inset-0 -z-10 bg-primary-700 dark:bg-primary-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ type: 'tween' }}
                />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 