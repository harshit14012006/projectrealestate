import React from 'react';

function Cookies({ onAgree, onDecline }) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center justify-center bg-gray-800 text-white p-4 sm:p-6 lg:p-8"
    >
      <p className="text-lg md:text-xl text-center mb-4">
        We use cookies and other tracking technologies to improve your browsing experience on our website, to show you
        personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are
        coming from.
      </p>
      <div className="flex flex-col md:flex-row gap-2">
        <button
          className="bg-teal-600 w-full min-w-[200px] hover:bg-teal-700 px-4 py-2 text-sm md:text-base font-semibold rounded-lg mb-2 md:mb-0"
          onClick={onAgree}
        >
          I Agree
        </button>
        <button
          className="bg-gray-600 w-full min-w-[200px] hover:bg-gray-700 px-4 py-2 text-sm md:text-base font-semibold rounded-lg"
          onClick={onDecline}
        >
          I Decline
        </button>
      </div>
      <button className="mt-2 text-sm text-gray-300 underline">Change my preferences</button>
    </div>
  );
}

export default Cookies;
