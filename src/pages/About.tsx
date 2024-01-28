import React from 'react';

const About = () => {
  return (
    <div id="About" className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white p-4 md:p-8 mx-auto max-w-screen-md rounded-lg shadow-lg text-center">
      <div className="mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4">About Me</h1>
        <p className="text-sm md:text-base lg:text-lg mb-4">
          Hi, I am Lovre, a passionate web developer with a love for creating
          amazing and responsive websites. I specialize in front-end technologies
          like React and enjoy bringing designs to life with clean and efficient code.
        </p>
        <p className="text-sm md:text-base lg:text-lg mb-4">
          My goal is to create user-friendly and visually appealing websites that
          leave a lasting impression. I constantly strive to stay updated with the
          latest technologies and trends in web development.
        </p>
        <p className="text-sm md:text-base lg:text-lg mb-4">
          Let's work together to turn your ideas into a stunning reality.
        </p>
      </div>
    </div>
  );
};

export default About;
