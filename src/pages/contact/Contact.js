import React from 'react'
import Button from "@material-tailwind/react/Button";

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
                        <input autoComplete="off" id="name" name="name" type="text" className="form-ipt" placeholder="name" />
                        <label htmlFor="name" className="form-lbl">Name*</label>
                      </div>
                      <div className="relative">
                        <input autoComplete="off" id="email" name="email" type="text" className="form-ipt" placeholder="Email address" />
                        <label htmlFor="email" className="form-lbl">Email Address*</label>
                      </div>
                      <div className="relative">
                        <input autoComplete="off" id="subject" name="subject" type="text" className="form-ipt" placeholder="subject" />
                        <label htmlFor="subject" className="form-lbl">Subject*</label>
                      </div>
                      <div className="relative pt-4">
                        <textarea autoComplete="off" id="content" name="content" type="text" className="form-txa" placeholder="content"></textarea>
                        <label htmlFor="content" className="form-lbl">Content*</label>
                      </div>
                      <div className="relative">
                        <Button
                          color="green"
                          ripple="light"
                          type="submit"
                        >
                          Submit
                        </Button>
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
