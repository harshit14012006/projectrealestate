import React from 'react';

function ContactUs() {
  return (
    <div>
      <header className="bg-green-700 text-white text-center py-12">
        <h1 className="text-4xl font-bold mt-16">Contact Us</h1>
      </header>
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          We are here to assist you with all your real estate needs. Contact us through any of the following methods.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
          <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 className="text-xl font-bold">Call Us</h3>
            <p className="text-gray-700 mt-2">+91 98964-*****</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 className="text-xl font-bold">Email Us</h3>
            <p className="text-gray-700 mt-2">realestate@gmail.com</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 className="text-xl font-bold">Visit Us</h3>
            <p className="text-gray-700 mt-2">123 Main Street, Sirsa, Haryana, India</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Office</h2>
            <p className="mt-4 text-lg text-gray-500">
              Come and visit us to discuss your real estate needs and find your dream property.
            </p>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                  width="100%"
                  height="480"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Map"
                />
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                    <p className="mt-1 text-gray-600">123 Main Street, Sirsa, Haryana, India</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Office Hours</h3>
                    <p className="mt-1 text-gray-600">Monday - Friday: 9am - 6pm</p>
                    <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                    <p className="mt-1 text-gray-600">Sunday: Closed</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                    <p className="mt-1 text-gray-600">Email: realestate@gmail.com</p>
                    <p className="mt-1 text-gray-600">Phone: +91 98964-*****</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8">
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
            <h3 className="text-xl font-bold">What types of properties do you handle?</h3>
            <p className="mt-2 text-gray-700">We handle residential, commercial, and rental properties.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">How can I schedule a property viewing?</h3>
            <p className="mt-2 text-gray-700">You can schedule a viewing by contacting us via phone or email.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">Do you offer virtual tours?</h3>
            <p className="mt-2 text-gray-700">Yes, we offer virtual tours of properties upon request.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
