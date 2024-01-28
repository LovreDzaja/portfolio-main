import React from 'react';

const Skills = () => {
  const skillsList = [
    'JavaScript',
    'React',
    'TypeScript',
    'Next.js',
    'TailwindCSS',
    'PHP',
    'SQL',
    'MongoDB',
    'PostgreSQL',
    'HTML5',
    'CSS3',
    'Responsive Web Design',
    'Git',
    'RESTful APIs',
    'Three.js'
  ];

  return (
    <div id="Skills" className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white p-4 md:p-8 mx-auto rounded-lg shadow-lg">
    <h1 className="text-xl md:text-4xl font-extrabold mb-4 text-center">Skills</h1>
    <ul className="list-inside list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-base md:text-lg">
      {skillsList.map((skill, index) => (
        <li key={index} className="mb-2">
          <div className="flex items-center bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 mr-2 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="font-bold">{skill}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Skills;
