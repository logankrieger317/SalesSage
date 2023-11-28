import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Terms() {
  return (
    <>
        <Header />
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-grey-600">More Legal Stuff</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Terms & Conditions</h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                This is the Terms and Conditions section. Please read these terms and conditions carefully before using our website. By accessing or using our website, you agree to be bound by these terms and conditions.

              </p>
              <p className="mt-8">
                1. Use of the Website - You must be at least 18 years old to use this website. - You are responsible for ensuring the accuracy of the information you provide on the website. - You agree not to use the website for any illegal or unauthorized purposes.

              </p>
            </div>
            <div>
              <p>
                2. Intellectual Property - The content on this website, including text, graphics, logos, and images, is the property of our company and is protected by intellectual property laws. - You may not reproduce, distribute, modify, or create derivative works of the content without our prior written consent.

              </p>
              <p className="mt-8">
                3. Limitation of Liability - We strive to provide accurate and up-to-date information on our website, but we do not guarantee its completeness or accuracy. - We are not liable for any direct, indirect, incidental, or consequential damages arising out of your use of the website.

              </p>
               <p className="mt-8">
                4. Links to Third-Party Websites - Our website may contain links to third-party websites that are not owned or controlled by us. - We are not responsible for the content or privacy practices of these third-party websites.

              </p>
              <p className="mt-8">
                5. Governing Law - These terms and conditions are governed by and construed in accordance with the laws of The United States Of America. - Any disputes arising out of or relating to these terms and conditions shall be resolved in the courts of The United States Of America.


              </p>
              <p className="mt-8">
              Please note that this is a boilerplate text and should not be considered legal advice. If you have any questions about these terms and conditions, please contact us. This Website is a project for a coding bootcamp and is not a real business. 
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-700">
                This is a project for a coding bootcamp. It is not a real business.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  )
}