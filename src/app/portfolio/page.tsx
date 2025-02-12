'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import {
  VideoCameraIcon,
  PencilSquareIcon,
  CameraIcon,
  MegaphoneIcon,
  RocketLaunchIcon,
  SparklesIcon,
  CommandLineIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

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

const projects = [
  {
    title: "Brand Identity Campaign",
    category: "Digital Marketing",
    description: "A comprehensive brand identity campaign for a tech startup, including social media strategy, content creation, and visual design.",
    image: "/images/projects/content-strategy.jpg",
    tags: ["Branding", "Social Media", "Content Strategy"],
    stats: [
      { label: "Engagement", value: "+200%" },
      { label: "Reach", value: "1M+" },
      { label: "ROI", value: "350%" }
    ],
    gradient: "from-blue-500 to-cyan-500",
    icon: RocketLaunchIcon
  },
  {
    title: "Product Launch Video Series",
    category: "Video Production",
    description: "A series of promotional videos for a new product launch, including concept development, filming, and post-production.",
    image: "/images/projects/video-campaign.jpg",
    tags: ["Video", "Production", "Editing"],
    stats: [
      { label: "Views", value: "2M+" },
      { label: "Conversion", value: "+150%" },
      { label: "Shares", value: "50K+" }
    ],
    gradient: "from-purple-500 to-pink-500",
    icon: VideoCameraIcon
  },
  {
    title: "Corporate Website Redesign",
    category: "Content Writing",
    description: "Complete website content overhaul for a corporate client, focusing on clear messaging and improved user engagement.",
    image: "/images/projects/storytelling.jpg",
    tags: ["Web Content", "Copywriting", "SEO"],
    stats: [
      { label: "Traffic", value: "+180%" },
      { label: "Leads", value: "+120%" },
      { label: "Rankings", value: "Top 3" }
    ],
    gradient: "from-orange-500 to-red-500",
    icon: PencilSquareIcon
  }
]

const categories = [
  'All',
  'Digital Marketing',
  'Video Production',
  'Content Writing',
  'Social Media',
  'Photography',
  'Strategy'
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

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
                Featured Work
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Showcasing impactful projects and creative solutions
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

        {/* Category Filter */}
        <section className="section-light py-12">
          <div className="container">
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={clsx(
                    'relative group overflow-hidden rounded-full px-6 py-2 transition-all duration-300',
                    'hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                    selectedCategory === category 
                      ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg dark:from-primary-500 dark:to-primary-400' 
                      : 'bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
                  )}
                  variants={fadeInUp}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="relative z-10 font-medium"
                    animate={{ 
                      color: selectedCategory === category ? '#ffffff' : undefined 
                    }}
                  >
                    {category}
                  </motion.span>
                  {selectedCategory === category && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400"
                      layoutId="activeCategory"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-light py-12 sm:py-24">
          <div className="container">
            <motion.div
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.title}
                  className="group relative"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                  whileHover={{ y: -5 }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`} />
                  <div className="relative flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full bg-white/10 dark:bg-black/30 backdrop-blur-sm px-2 py-1 text-xs font-medium text-white"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient}`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <project.icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                          <p className="text-sm text-primary-600 dark:text-primary-400">{project.category}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

                      <div className="grid grid-cols-3 gap-4">
                        {project.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative section-alt py-24 sm:py-32">
          <div className="container">
            <motion.div 
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-6">Ready to Create Your Success Story?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Let's collaborate and bring your vision to life with professional content creation
              </p>
              <Link href="/contact" className="btn-primary group relative overflow-hidden">
                <span className="relative z-10">Start Your Project</span>
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