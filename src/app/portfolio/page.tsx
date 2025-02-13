'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import {
  VideoCameraIcon,
  PhotoIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
  HeartIcon,
  StarIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

// Categories for filtering
const categories = [
  'All',
  'Social Media',
  'Branding',
  'Photography',
  'Video',
  'Copywriting',
  'Content Strategy',
  'Campaign Management'
]

// Industries data
const industries = [
  {
    name: 'Automotive Care & Maintenance',
    description: 'Creating engaging content for automotive care products and services.',
    image: '/images/industries/automotive.jpg',
    socialLinks: {
      facebook: 'https://facebook.com/automotive-page',
      instagram: 'https://instagram.com/automotive-page'
    },
    gradient: 'from-blue-500 to-cyan-500',
    icon: RocketLaunchIcon
  },
  {
    name: 'Air Fresheners & Fragrances',
    description: 'Developing content strategies for fragrance and air care products.',
    image: '/images/industries/fragrance.jpg',
    socialLinks: {
      facebook: 'https://facebook.com/fragrance-page',
      instagram: 'https://instagram.com/fragrance-page'
    },
    gradient: 'from-purple-500 to-pink-500',
    icon: HeartIcon
  },
  {
    name: 'Construction & Sealants',
    description: 'Marketing solutions for construction materials and sealant products.',
    image: '/images/industries/construction.jpg',
    socialLinks: {
      facebook: 'https://facebook.com/construction-page',
      instagram: 'https://instagram.com/construction-page'
    },
    gradient: 'from-orange-500 to-red-500',
    icon: StarIcon
  },
  {
    name: 'Food & Beverages',
    description: 'Crafting appetizing content that drives engagement and sales.',
    image: '/images/industries/food.jpg',
    socialLinks: {
      facebook: 'https://facebook.com/food-page',
      instagram: 'https://instagram.com/food-page'
    },
    gradient: 'from-green-500 to-teal-500',
    icon: RocketLaunchIcon
  },
  {
    name: 'Health & Fitness Supplements',
    description: 'Promoting wellness through dynamic content strategies.',
    image: '/images/industries/fitness.jpg',
    socialLinks: {
      facebook: 'https://facebook.com/fitness-page',
      instagram: 'https://instagram.com/fitness-page'
    },
    gradient: 'from-indigo-500 to-violet-500',
    icon: HeartIcon
  },
  {
    name: 'Perfumes & Cosmetics',
    description: 'Elegant content creation for beauty and fragrance brands.',
    image: '/images/industries/cosmetics.jpg',
    socialLinks: {
      facebook: 'https://facebook.com/cosmetics-page',
      instagram: 'https://instagram.com/cosmetics-page'
    },
    gradient: 'from-pink-500 to-rose-500',
    icon: StarIcon
  },
  {
    name: 'Retail & Supermarkets',
    description: 'Comprehensive marketing for retail businesses.',
    image: '/images/industries/retail.jpg',
    socialLinks: {
      facebook: 'https://facebook.com/retail-page',
      instagram: 'https://instagram.com/retail-page'
    },
    gradient: 'from-cyan-500 to-blue-500',
    icon: RocketLaunchIcon
  },
  {
    name: 'Business Services',
    description: 'Strategic content for professional service providers.',
    image: '/images/industries/business.jpg',
    socialLinks: {
      facebook: 'https://facebook.com/business-page',
      instagram: 'https://instagram.com/business-page'
    },
    gradient: 'from-emerald-500 to-teal-500',
    icon: StarIcon
  }
]

// Work/Posts data
const posts = [
  {
    id: 1,
    title: 'Brand Campaign',
    category: 'Branding',
    industry: 'Automotive Care',
    image: '/images/work/post1.jpg',
    description: 'Comprehensive brand identity campaign showcasing product excellence.',
    stats: {
      engagement: '85%',
      reach: '50K+',
      clicks: '2.5K'
    },
    socialLink: 'https://facebook.com/post1'
  },
  // Add more posts here
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 }
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

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedIndustry, setSelectedIndustry] = useState('All')

  const filteredPosts = posts.filter(post => {
    if (selectedCategory === 'All' && selectedIndustry === 'All') return true
    if (selectedCategory === 'All') return post.industry === selectedIndustry
    if (selectedIndustry === 'All') return post.category === selectedCategory
    return post.category === selectedCategory && post.industry === selectedIndustry
  })

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
                My Work
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Explore my portfolio across different industries and content types
              </motion.p>
            </div>
          </div>

          {/* Animated background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-100/20 via-transparent to-secondary-100/20 dark:from-primary-900/20 dark:to-secondary-900/20" />
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <motion.h2 
              className="heading-2 text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Industries I Work With
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry) => (
                <motion.div
                  key={industry.name}
                  className="group relative"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${industry.gradient} rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-300`} />
                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${industry.gradient}`}>
                        <industry.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {industry.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {industry.description}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={industry.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Facebook
                      </a>
                      <a
                        href={industry.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients/Brands Section */}
        <section className="py-24 bg-white dark:bg-gray-800">
          <div className="container">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2">Brands I've Worked With</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Trusted by leading brands across various industries
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { name: 'Brand 1', logo: '/logos/brand1.jpg' },
                { name: 'Brand 2', logo: '/logos/brand2.jpg' },
                { name: 'Brand 3', logo: '/logos/brand3.jpg' },
                { name: 'Brand 4', logo: '/logos/brand4.jpg' },
                { name: 'Brand 5', logo: '/logos/brand5.jpg' },
                { name: 'Brand 6', logo: '/logos/brand6.jpg' },
                { name: 'Brand 7', logo: '/logos/brand7.jpg' },
                { name: 'Brand 8', logo: '/logos/brand8.jpg' },
                { name: 'Brand 9', logo: '/logos/brand9.jpg' },
                { name: 'Brand 10', logo: '/logos/brand10.jpg' },
                { name: 'Brand 11', logo: '/logos/brand11.jpg' },
                { name: 'Brand 12', logo: '/logos/brand12.jpg' },
                { name: 'Brand 13', logo: '/logos/brand13.jpg' },
                { name: 'Brand 14', logo: '/logos/brand14.jpg' },
                { name: 'Brand 15', logo: '/logos/brand15.jpg' },
                { name: 'Brand 16', logo: '/logos/brand16.jpg' },
                { name: 'Brand 17', logo: '/logos/brand17.jpg' },
                { name: 'Brand 18', logo: '/logos/brand18.jpg' },
                { name: 'Brand 19', logo: '/logos/brand19.jpg' },
                { name: 'Brand 20', logo: '/logos/brand20.jpg' }
              ].map((brand, index) => (
                <motion.div
                  key={brand.name}
                  variants={fadeInUp}
                  className="group relative"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Gradient border effect */}
                  <div 
                    className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300"
                    style={{
                      background: `linear-gradient(${index * 20}deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                    }}
                  />
                  
                  {/* Card content */}
                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative h-24 w-full flex items-center justify-center">
                      {/* Placeholder with gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg opacity-50" />
                      
                      {/* Brand name (shown when no image) */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-400 dark:text-gray-500 text-sm font-medium">
                          {brand.name}
                        </span>
                      </div>
                      
                      {/* Image with hover effect */}
                      <div className="relative w-full h-full">
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          fill
                          className="object-contain filter transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110"
                          onError={(e: any) => {
                            e.target.style.display = 'none'
                          }}
                        />
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 rounded-lg transition-colors duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={clsx(
                      'px-6 py-2 rounded-full font-medium transition-all duration-300',
                      selectedCategory === category
                        ? 'bg-primary-600 text-white shadow-lg dark:bg-primary-500'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Industry Filter */}
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              >
                <option value="All">All Industries</option>
                {industries.map((industry) => (
                  <option key={industry.name} value={industry.name}>
                    {industry.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Posts Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                layout
              >
                {filteredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    layout
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-64">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-primary-600/90 rounded-full mb-2">
                          {post.category}
                        </span>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {post.title}
                        </h3>
                        <p className="text-sm text-white/90">{post.industry}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.description}
                      </p>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                            {post.stats.engagement}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Engagement
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                            {post.stats.reach}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Reach
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                            {post.stats.clicks}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Clicks
                          </div>
                        </div>
                      </div>
                      <a
                        href={post.socialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        View Post
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
    </>
  )
} 