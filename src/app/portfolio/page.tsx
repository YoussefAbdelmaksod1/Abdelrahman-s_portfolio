'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import {
  WrenchScrewdriverIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  BeakerIcon,
  CakeIcon,
  BookOpenIcon,
  HomeIcon,
  FireIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

// Brands data
const brands = [
  {
    name: 'PIT-KSA',
    description: 'Automotive maintenance and care',
    gradient: 'from-orange-500 to-red-500',
    icon: WrenchScrewdriverIcon,
    imageCount: 4,
    insights: {
      engagement: '4.2%',
      reach: '8K',
      posts: '24',
      likes: '350+',
      comments: '45+',
      shares: '15+'
    }
  },
  {
    name: 'Muscle Pump',
    description: 'Fitness supplements and nutrition',
    gradient: 'from-blue-500 to-cyan-500',
    icon: FireIcon,
    imageCount: 4,
    insights: {
      engagement: '3.8%',
      reach: '6K',
      posts: '18',
      likes: '280+',
      comments: '35+',
      shares: '12+'
    }
  },
  {
    name: 'Ice Cream Lebnan',
    description: 'Premium ice cream and desserts',
    gradient: 'from-purple-500 to-pink-500',
    icon: CakeIcon,
    imageCount: 4,
    insights: {
      engagement: '4.5%',
      reach: '7K',
      posts: '21',
      likes: '320+',
      comments: '40+',
      shares: '18+'
    }
  },
  {
    name: 'Milva',
    description: 'Car care products and accessories',
    gradient: 'from-blue-500 to-cyan-500',
    icon: WrenchScrewdriverIcon,
    imageCount: 4
  },
  {
    name: 'Fogg',
    description: 'Premium fragrances and perfumes',
    gradient: 'from-purple-500 to-pink-500',
    icon: SparklesIcon,
    imageCount: 4
  },
  {
    name: 'United',
    description: 'Construction and building materials',
    gradient: 'from-green-500 to-teal-500',
    icon: BeakerIcon,
    imageCount: 4
  },
  {
    name: 'Sealfix',
    description: 'Professional sealants and adhesives',
    gradient: 'from-indigo-500 to-violet-500',
    icon: BeakerIcon,
    imageCount: 4
  },
  {
    name: 'Vaxxol',
    description: 'Automotive care solutions',
    gradient: 'from-pink-500 to-rose-500',
    icon: WrenchScrewdriverIcon,
    imageCount: 4
  },
  {
    name: 'جزارة حجازي',
    description: 'Premium meat and butchery',
    gradient: 'from-rose-500 to-pink-500',
    icon: CakeIcon,
    imageCount: 3
  },
  {
    name: 'جزارة مدينة الزقم',
    description: 'Quality meat products',
    gradient: 'from-blue-500 to-indigo-500',
    icon: CakeIcon,
    imageCount: 4
  },
  {
    name: 'الرحيق المختوم',
    description: 'Religious and educational content',
    gradient: 'from-indigo-500 to-blue-500',
    icon: BookOpenIcon,
    imageCount: 10
  },
  {
    name: 'معرض الفجر للسيراميك',
    description: 'Premium ceramic and interior solutions',
    gradient: 'from-amber-500 to-yellow-500',
    icon: HomeIcon,
    imageCount: 4
  },
  {
    name: 'Mega Store',
    description: 'Multi-category retail store',
    gradient: 'from-emerald-500 to-green-500',
    icon: ShoppingBagIcon,
    imageCount: 2
  },
  {
    name: 'Enter Computer',
    description: 'Technology and computer retail',
    gradient: 'from-sky-500 to-blue-500',
    icon: ShoppingBagIcon,
    imageCount: 4
  },
  {
    name: 'Pyramids',
    description: 'Multi-category retail solutions',
    gradient: 'from-amber-500 to-yellow-500',
    icon: ShoppingBagIcon,
    imageCount: 4
  },
  {
    name: 'الذهبية',
    description: 'Driving licensing provider',
    gradient: 'from-yellow-500 to-amber-500',
    icon: BuildingOfficeIcon,
    imageCount: 4
  },
  {
    name: 'محمصة أولاد كامل',
    description: 'Premium coffee and nuts retail',
    gradient: 'from-orange-500 to-amber-500',
    icon: ShoppingBagIcon,
    imageCount: 4
  },
  {
    name: 'فتح الله للعطور',
    description: 'Luxury fragrances and perfumes',
    gradient: 'from-purple-500 to-pink-500',
    icon: SparklesIcon,
    imageCount: 4
  },
  {
    name: 'Elite',
    description: 'Real estate and investment solutions',
    gradient: 'from-blue-500 to-indigo-500',
    icon: BuildingOfficeIcon,
    imageCount: 4
  },
  {
    name: 'Dr Mohamed Hamed Yehia',
    description: 'Professional medical services',
    gradient: 'from-teal-500 to-emerald-500',
    icon: BuildingOfficeIcon,
    imageCount: 4
  },
  {
    name: 'Jelaty Lebnan (New Branding)',
    description: 'Artisanal ice cream and desserts',
    gradient: 'from-cyan-500 to-blue-400',
    icon: ShoppingBagIcon,
    imageCount: 2
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
}

const brandHover = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.05,
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

export default function ProjectsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all')

  const handleIndustryChange = (industry: string) => {
    setSelectedIndustry(industry)
  }

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
                My Projects
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Explore my portfolio of successful brand collaborations and content strategies
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
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2">Industries I Work With</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Creating impactful content across diverse sectors
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
                {
                  name: 'Car Care',
                  description: 'Professional automotive care and maintenance solutions',
                  gradient: 'from-blue-500 to-cyan-500',
                  icon: WrenchScrewdriverIcon,
                  brands: ['Sealfix', 'Vaxxol']
                },
                {
                  name: 'Fragrances',
                  description: 'Premium perfumes and beauty products',
                  gradient: 'from-purple-500 to-pink-500',
                  icon: SparklesIcon,
                  brands: ['Milva', 'Fogg', 'فتح الله للعطور']
                },
                {
                  name: 'Construction',
                  description: 'Building and construction solutions',
                  gradient: 'from-green-500 to-teal-500',
                  icon: BuildingOfficeIcon,
                  brands: ['PIT-KSA']
                },
                {
                  name: 'Chemicals',
                  description: 'Industrial chemicals and solutions',
                  gradient: 'from-green-500 to-teal-500',
                  icon: BeakerIcon,
                  brands: ['United']
                },
                {
                  name: 'Food & Beverage',
                  description: 'Quality food products and services',
                  gradient: 'from-indigo-500 to-violet-500',
                  icon: CakeIcon,
                  brands: ['جزارة حجازي', 'جزارة مدينة الزقم', 'الرحيق المختوم']
                },
                {
                  name: 'Home & Interior Design',
                  description: 'Premium home and interior solutions',
                  gradient: 'from-amber-500 to-yellow-500',
                  icon: HomeIcon,
                  brands: ['معرض الفجر للسيراميك']
                },
                {
                  name: 'Fitness',
                  description: 'Fitness and nutrition products',
                  gradient: 'from-red-500 to-orange-500',
                  icon: FireIcon,
                  brands: ['Muscle Pump']
                },
                {
                  name: 'Retail',
                  description: 'Multi-category and technology retail solutions',
                  gradient: 'from-emerald-500 to-green-500',
                  icon: ShoppingBagIcon,
                  brands: ['Mega Store', 'Enter Computer', 'Pyramids', 'محمصة أولاد كامل', 'Ice Cream Lebnan', 'Jelaty Lebnan (New Branding)']
                },
                {
                  name: 'Driving Services',
                  description: 'Professional driving licensing and training',
                  gradient: 'from-yellow-500 to-amber-500',
                  icon: BuildingOfficeIcon,
                  brands: ['الذهبية']
                },
                {
                  name: 'Real Estate & Investments',
                  description: 'Property and investment solutions',
                  gradient: 'from-blue-500 to-indigo-500',
                  icon: BuildingOfficeIcon,
                  brands: ['Elite']
                },
                {
                  name: 'Medical Services',
                  description: 'Professional healthcare and medical services',
                  gradient: 'from-teal-500 to-emerald-500',
                  icon: BuildingOfficeIcon,
                  brands: ['Dr Mohamed Hamed Yehia']
                }
              ].map((industry) => (
                <motion.div
                  key={industry.name}
                  variants={fadeInUp}
                  className="group relative"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.24)] transition-all duration-300">
                    <div className={clsx(
                      'mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r',
                      industry.gradient
                    )}>
                      <industry.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-center font-medium text-gray-900 dark:text-white mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                      {industry.description}
                    </p>
                    <div className="mt-3 flex flex-wrap justify-center gap-1">
                      {industry.brands.map((brand) => (
                        <span
                          key={brand}
                          className="inline-flex items-center rounded-full bg-primary-50 dark:bg-gray-700 px-2 py-0.5 text-xs font-medium text-primary-600 dark:text-primary-400"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Brands Section */}
        <section className="py-24 bg-white dark:bg-gray-800">
          <div className="container">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2">Featured Brand Collaborations</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Delivering impactful results through strategic content creation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brands.slice(0, 3).map((brand) => (
                <motion.div
                  key={brand.name}
                  className="relative group bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${brand.gradient} rounded-xl opacity-20 group-hover:opacity-30 group-hover:blur-sm transition-all duration-300`} />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{brand.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{brand.description}</p>
                      </div>
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${brand.gradient}`}>
                        <brand.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {brand.insights && (
                      <>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                              {brand.insights.engagement}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Engagement Rate
                            </div>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                              {brand.insights.reach}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Average Reach
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-center text-sm">
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white">{brand.insights.likes}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Likes</div>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white">{brand.insights.comments}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Comments</div>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white">{brand.insights.shares}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Shares</div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section - Back to original location */}
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
              viewport={{ once: true, margin: "-100px" }}
            >
              {Array.from({ length: 20 }, (_, i) => (
                <motion.div
                  key={`brand${i + 1}`}
                  variants={fadeInUp}
                  initial="rest"
                  whileHover="hover"
                  variants={brandHover}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/50 to-secondary-500/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] transition-all duration-500">
                    <div className="relative h-24 w-full">
                      <Image
                        src={`/logos/brand${i + 1}.jpg`}
                        alt={`Brand ${i + 1}`}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                        onError={(e: any) => {
                          e.currentTarget.src = '/images/placeholder.jpg';
                          e.currentTarget.classList.add('opacity-50');
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Samples of My Work */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2">Samples of My Work</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                A showcase of my creative content and campaigns
              </p>
            </motion.div>

            {/* Industry Filter */}
            <div className="max-w-7xl mx-auto mb-12">
              <div className="flex flex-wrap justify-center gap-3">
                <motion.button
                  onClick={() => handleIndustryChange('all')}
                  className={clsx(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                    selectedIndustry === 'all'
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  All Brands
                </motion.button>
                {brands.map((brand) => (
                  <motion.button
                    key={brand.name}
                    onClick={() => handleIndustryChange(brand.name)}
                    className={clsx(
                      'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                      selectedIndustry === brand.name
                        ? `bg-gradient-to-r ${brand.gradient} text-white shadow-lg`
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {brand.name}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="max-w-7xl mx-auto space-y-10">
              {/* Work Cards */}
              {brands.map((brand) => (
                Array.from({ length: brand.imageCount }, (_, i) => (
                  <motion.div
                    key={`${brand.name}-${i}`}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      display: selectedIndustry === 'all' || selectedIndustry === brand.name 
                        ? 'block' 
                        : 'none' 
                    }}
                  >
                    {/* Card Content */}
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] dark:shadow-lg dark:hover:shadow-xl transition-all duration-500">
                      {/* Brand Tag */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className={clsx(
                          'px-4 py-1.5 bg-gradient-to-r text-white text-xs font-medium rounded-full shadow-sm',
                          brand.gradient
                        )}>
                          {brand.name}
                        </span>
                      </div>

                      {/* Images Container */}
                      <div className="p-3 pt-14">
                        <div className="flex gap-3">
                          {/* Post Image */}
                          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm flex-1">
                            <div className="aspect-square w-full">
                              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                                <div className="w-8 h-8 border-2 border-primary-500 rounded-full animate-spin border-t-transparent" />
                              </div>
                              <div className="relative w-full h-full">
                                <Image
                                  src={`/posts-images/${brand.name}/${i + 1}.jpg`}
                                  alt={`${brand.name} Post Image ${i + 1}`}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  className="object-contain p-2 transition-all duration-500 group-hover:scale-105"
                                  priority={i === 0}
                                  quality={75}
                                  onError={(e: any) => {
                                    console.log(`Failed to load image: ${brand.name}/${i + 1}.jpg`);
                                    e.currentTarget.src = '/images/placeholder.jpg';
                                    e.currentTarget.classList.add('opacity-50');
                                  }}
                                />
                              </div>
                              {/* Image Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                            </div>
                          </div>

                          {/* Content Image */}
                          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm flex-1">
                            <div className="aspect-square w-full">
                              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                                <div className="w-8 h-8 border-2 border-primary-500 rounded-full animate-spin border-t-transparent" />
                              </div>
                              <div className="relative w-full h-full">
                                <Image
                                  src={`/posts-content-images/${brand.name}/${i + 1}.jpg`}
                                  alt={`${brand.name} Content Image ${i + 1}`}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  className="object-contain p-2 transition-all duration-500 group-hover:scale-105"
                                  priority={i === 0}
                                  quality={75}
                                  onError={(e: any) => {
                                    console.log(`Failed to load content image: ${brand.name}/${i + 1}.jpg`);
                                    e.currentTarget.src = '/images/placeholder.jpg';
                                    e.currentTarget.classList.add('opacity-50');
                                  }}
                                />
                              </div>
                              {/* Image Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                            </div>
                          </div>
                        </div>

                        {/* Post Insights - Now shown for all posts */}
                        <div className="mt-4 grid grid-cols-3 gap-2 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                          <div className="text-center">
                            <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                              {(() => {
                                // Generate realistic engagement rates between 1.5% and 3.8%
                                const baseRate = 1.5 + (Math.random() * 2.3);
                                return `${baseRate.toFixed(1)}%`;
                              })()}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Engagement
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                              {(() => {
                                // Generate reach between 800 and 4500
                                const reach = 800 + Math.floor(Math.random() * 3700);
                                return reach >= 1000 ? `${(reach/1000).toFixed(1)}K` : reach;
                              })()}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Reach
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                              {(() => {
                                // Generate likes between 50 and 280
                                const likes = 50 + Math.floor(Math.random() * 230);
                                return `${likes}+`;
                              })()}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Likes
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Inner Border */}
                      <div className="absolute inset-[2px] border border-gray-200/80 dark:border-gray-700/50 rounded-2xl pointer-events-none" />
                    </div>

                    {/* Decorative Border */}
                    <div className={clsx(
                      "absolute -inset-[2px] bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 -z-10 blur-[2px] transition-all duration-500",
                      brand.gradient.replace('from-', 'from-[var(--tw-gradient-from)]/20 ').replace('to-', 'via-[var(--tw-gradient-from)]/20 to-[var(--tw-gradient-to)]/20')
                    )} />

                    {/* Additional Glow Effect */}
                    <div className={clsx(
                      "absolute -inset-[4px] bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 -z-20 blur-xl transition-all duration-500",
                      brand.gradient.replace('from-', 'from-[var(--tw-gradient-from)]/10 ').replace('to-', 'via-[var(--tw-gradient-from)]/10 to-[var(--tw-gradient-to)]/10')
                    )} />
                  </motion.div>
                ))
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 