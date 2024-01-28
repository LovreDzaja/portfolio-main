import React from 'react';

const SayHello: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white p-4 md:p-8 mx-auto max-w-2xl rounded-lg shadow-lg text-center mb-4">
    <div className="mx-auto"> {/* Center the entire content */}
      <h2 className="text-base md:text-lg lg:text-xl font-extrabold mb-2">Hello, I hope you liked my website!</h2>
      <p className="text-xs md:text-sm lg:text-base mb-4">Contact me via email:</p>
      <div className="flex items-center justify-center">
        <span className="cursor-pointer underline rounded-lg">
          <a href="mailto:youremail@mail.com" className="text-white p-2 md:p-3 font-semibold">Drop me an email &hearts;</a>
        </span>
      </div>
    </div>
  </div>
  );
};

export default SayHello;
