'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import {
  VideoCameraIcon,
  PencilSquareIcon,
  PresentationChartBarIcon,
  CameraIcon,
  MegaphoneIcon,
  CommandLineIcon,
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

const services = [
  {
    name: 'Video Production',
    description: 'Professional video content creation including filming, editing, and post-production for various platforms and purposes.',
    icon: VideoCameraIcon,
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      'Cinematic Storytelling',
      'Motion Graphics',
      'Sound Design',
      'Color Grading'
    ]
  },
  {
    name: 'Content Writing',
    description: 'Engaging written content for websites, blogs, social media, and marketing materials that connects with your target audience.',
    icon: PencilSquareIcon,
    gradient: 'from-purple-500 to-pink-500',
    features: [
      'SEO Optimization',
      'Brand Voice',
      'Technical Writing',
      'Creative Copy'
    ]
  },
  {
    name: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns that drive engagement and deliver measurable results across multiple channels.',
    icon: PresentationChartBarIcon,
    gradient: 'from-orange-500 to-red-500',
    features: [
      'Campaign Strategy',
      'Analytics',
      'A/B Testing',
      'ROI Tracking'
    ]
  },
  {
    name: 'Photography',
    description: 'High-quality photography services for products, events, portraits, and commercial purposes.',
    icon: CameraIcon,
    gradient: 'from-green-500 to-teal-500',
    features: [
      'Product Shots',
      'Event Coverage',
      'Portrait Sessions',
      'Photo Editing'
    ]
  },
  {
    name: 'Social Media',
    description: 'Comprehensive social media management including content creation, scheduling, and community engagement.',
    icon: MegaphoneIcon,
    gradient: 'from-pink-500 to-rose-500',
    features: [
      'Content Calendar',
      'Community Management',
      'Growth Strategy',
      'Analytics Reports'
    ]
  },
  {
    name: 'Technical Content',
    description: 'Technical writing and content creation for software documentation, tutorials, and educational materials.',
    icon: CommandLineIcon,
    gradient: 'from-indigo-500 to-violet-500',
    features: [
      'Documentation',
      'API Guides',
      'Tutorial Videos',
      'Knowledge Base'
    ]
  },
]

export default function ServicesPage() {
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
                Services
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Elevate your digital presence with professional content creation services
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

        {/* Services Grid */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <motion.div
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service) => (
                <motion.div
                  key={service.name}
                  className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl ring-1 ring-gray-200/50 dark:ring-gray-700/50"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient}`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{service.name}</h3>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{service.description}</p>
                  <div className="mt-6 space-y-2">
                    {service.features.map((feature) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2"
                        whileHover={{ x: 5 }}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/contact" className="btn-primary group relative overflow-hidden">
                <span className="relative z-10">Start a Project</span>
                <motion.span
                  className="absolute inset-0 -z-10 bg-primary-700"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ type: 'tween' }}
                />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative section-alt py-24 sm:py-32">
          <div className="container">
            <motion.div
              className="mx-auto max-w-2xl text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2">How I Work</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                A streamlined process focused on delivering exceptional results
              </p>
            </motion.div>

            <motion.div
              className="relative"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary-600 to-secondary-600" />
              <div className="space-y-16">
                {[
                  {
                    step: '01',
                    title: 'Discovery',
                    description: 'Understanding your goals, audience, and requirements through in-depth consultation.',
                    gradient: 'from-blue-500 to-cyan-500'
                  },
                  {
                    step: '02',
                    title: 'Strategy',
                    description: 'Developing a tailored plan that aligns with your objectives and maximizes impact.',
                    gradient: 'from-purple-500 to-pink-500'
                  },
                  {
                    step: '03',
                    title: 'Creation',
                    description: 'Bringing ideas to life with professional execution and attention to detail.',
                    gradient: 'from-orange-500 to-red-500'
                  },
                  {
                    step: '04',
                    title: 'Refinement',
                    description: 'Fine-tuning and optimizing to ensure the highest quality deliverables.',
                    gradient: 'from-green-500 to-teal-500'
                  }
                ].map((step, index) => (
                  <motion.div
                    key={step.step}
                    className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                    variants={fadeInUp}
                  >
                    <motion.div
                      className="w-1/2 group relative"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.gradient} rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000`} />
                      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl">
                        <div className="flex items-center gap-4">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.gradient} text-white font-bold`}>
                            {step.step}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                        </div>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">{step.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 