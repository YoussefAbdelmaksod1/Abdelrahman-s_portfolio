'use client'

import { Navigation } from '@/components/Navigation'
import {
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import { SVGProps, FormEvent } from 'react'
import React from 'react'

type HeroIconType = typeof EnvelopeIcon;
type CustomIconType = (props: SVGProps<SVGSVGElement>) => JSX.Element;

interface ContactMethod {
  name: string;
  description: string;
  icon: HeroIconType | CustomIconType;
  contact: string;
  href?: string;
}

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const contactMethods: ContactMethod[] = [
  {
    name: 'Email',
    description: 'Send me an email anytime',
    icon: EnvelopeIcon,
    contact: 'abdelrahmany99@gmail.com',
  },
  {
    name: 'WhatsApp',
    description: 'Message me on WhatsApp',
    icon: WhatsAppIcon,
    contact: '+20 01210233451',
    href: 'https://wa.me/201210233451',
  },
  {
    name: 'LinkedIn',
    description: 'Connect with me',
    icon: LinkedInIcon,
    contact: 'linkedin.com/in/abdelrahman-younes',
    href: 'https://www.linkedin.com/in/abdelrahman-younes-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
]

export default function ContactPage() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Here you would typically send the form data to your API
    // For now, we'll just log it
    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    });
  };

  return (
    <>
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden section-gradient pt-32 lg:pt-40">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="heading-1 animate-fade-in">Get in Touch</h1>
              <p className="mt-6 animate-fade-in text-lg leading-8 text-gray-600 dark:text-gray-300 [animation-delay:200ms]">
                Let's discuss your project and explore how we can work together
              </p>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-secondary-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-light py-24 sm:py-32">
          <div className="container">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {/* Contact Methods */}
                <div className="max-w-xl lg:max-w-lg">
                  <h2 className="heading-2">Contact Information</h2>
                  <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    Feel free to reach out through any of these channels
                  </p>
                  <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                    {contactMethods.map((method) => (
                      <div key={method.name} className="relative pl-9 group">
                        <dt className="inline font-semibold text-gray-900 dark:text-white">
                          <span className="absolute left-1 top-1 text-primary-600 dark:text-primary-400 transition-transform duration-300 group-hover:scale-110">
                            <method.icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          {method.name}
                        </dt>{' '}
                        <dd className="inline">
                          {method.description} - {' '}
                          {method.href ? (
                            <a 
                              href={method.href} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary-600 dark:text-primary-400 hover:underline transition-colors duration-300"
                            >
                              {method.contact}
                            </a>
                          ) : (
                            <span className="select-all">{method.contact}</span>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Contact Form */}
                <div className="flex flex-col gap-10 rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          autoComplete="name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:focus:ring-primary-400 sm:text-sm sm:leading-6"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                      >
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          autoComplete="email"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:focus:ring-primary-400 sm:text-sm sm:leading-6"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                      >
                        Subject
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          required
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:focus:ring-primary-400 sm:text-sm sm:leading-6"
                          placeholder="Project inquiry"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                      >
                        Message
                      </label>
                      <div className="mt-2">
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          required
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:focus:ring-primary-400 sm:text-sm sm:leading-6"
                          placeholder="Tell me about your project..."
                        />
                      </div>
                    </div>
                    <div>
                      <button 
                        type="submit" 
                        className="btn-primary w-full"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="section-alt py-24 sm:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="heading-2">Connect With Me</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Follow me on social media for updates and insights
              </p>
              <div className="mt-10 flex justify-center gap-6">
                {contactMethods
                  .filter(method => method.href)
                  .map((method) => (
                    <a
                      key={method.name}
                      href={method.href}
                      className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{method.name}</span>
                      <method.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 