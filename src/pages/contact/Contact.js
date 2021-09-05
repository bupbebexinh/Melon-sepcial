import React from 'react'

const Contact = () => {

  return (
    <>
    <section className="pb-5">
      <div className="container mx-auto">
        <div className="bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 w-full sm:max-w-3xl sm:mx-auto">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-2 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="w-full mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">Contact Us</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <form id="contactForm">
                   <div className="py-8 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="relative">
                        <input autoComplete="off" id="name" name="name" type="text" className="placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 px-3 text-base" placeholder="name" />
                        <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all">Name*</label>
                      </div>
                      <div className="relative">
                        <input autoComplete="off" id="email" name="email" type="text" className="placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 px-3 text-base" placeholder="Email address" />
                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all">Email Address*</label>
                      </div>
                      <div className="relative">
                        <input autoComplete="off" id="subject" name="subject" type="text" className="placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 px-3 text-base" placeholder="subject" />
                        <label htmlFor="subject" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all">Subject*</label>
                      </div>
                      <div className="relative pt-4">
                        <textarea autoComplete="off" id="content" name="content" type="text" className="placeholder-transparent h-60 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 px-3 text-base" placeholder="content"></textarea>
                        <label htmlFor="content" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all">Content*</label>
                      </div>
                      <div className="relative">
                        <button
                          className="flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-2.5 px-6 text-xs leading-normal text-white bg-green-500 hover:bg-green-700 focus:bg-green-400 active:bg-green-800 shadow-md-green hover:shadow-lg-green"
                          ripple="light"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
