import { Navigation } from '@/components/Navigation'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  LinkIcon,
} from '@heroicons/react/24/outline'

const contactMethods = [
  {
    name: 'Email',
    description: 'Send me an email anytime',
    icon: EnvelopeIcon,
    contact: 'abdelrahmany99@gmail.com',
  },
  {
    name: 'Phone',
    description: 'Available for calls',
    icon: PhoneIcon,
    contact: '+20 01210233451',
  },
  {
    name: 'LinkedIn',
    description: 'Connect with me',
    icon: LinkIcon,
    contact: 'linkedin.com/in/abdelrahman-younes',
    href: 'https://www.linkedin.com/in/abdelrahman-younes-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
]

export default function ContactPage() {
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
                      <div key={method.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900 dark:text-white">
                          <method.icon
                            className="absolute left-1 top-1 h-5 w-5 text-primary-600 dark:text-primary-400"
                            aria-hidden="true"
                          />
                          {method.name}
                        </dt>{' '}
                        <dd className="inline">
                          {method.description} - {' '}
                          {method.href ? (
                            <a 
                              href={method.href} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary-600 dark:text-primary-400 hover:underline"
                            >
                              {method.contact}
                            </a>
                          ) : (
                            method.contact
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Contact Form */}
                <div className="flex flex-col gap-10 rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
                  <form action="#" method="POST" className="flex flex-col gap-6">
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
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:focus:ring-primary-400 sm:text-sm sm:leading-6"
                          placeholder="Tell me about your project..."
                        />
                      </div>
                    </div>
                    <div>
                      <button type="submit" className="btn-primary w-full">
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
                {/* Add social media links here */}
                {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{platform}</span>
                    {/* Add social media icons here */}
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