'use client';
import React, { useEffect, useState } from 'react';
import Sphere from '@/pages/Sphere';
import About from '../pages/About';
import Skills from '../pages/Skills';
import SayHello from '@/pages/SayHello';

interface Section {
  component: JSX.Element;
  key: string;
  duration: number;
}

const sections: Section[] = [
  { component: <About />, key: 'about', duration: 15000 },
  { component: <Skills />, key: 'skills', duration: 9000 },
  { component: <SayHello />, key: 'sayHello', duration: 5000 },
];

export default function Home() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [showThankYou, setShowThankYou] = useState<boolean>(false);

  useEffect(() => {
    const transition = () => {
      if (currentSectionIndex < sections.length - 1) {
        setCurrentSectionIndex(currentSectionIndex + 1);
      } else {
        setShowThankYou(true);
      }
    };

    let timeout: NodeJS.Timeout | null = setTimeout(() => {
      transition();
      if (currentSectionIndex < sections.length - 1) {
        setTimeout(() => setCurrentSectionIndex(currentSectionIndex + 1), 500);
      }
    }, sections[currentSectionIndex]?.duration || 0);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [currentSectionIndex]);

  return (
    <main className="min-h-screen flex-row p-2 md:p-4 lg:p-24 relative">
      <div className="absolute top-0 right-0">
        <Sphere />
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <div
          key={section.key}
          id={section.key}
          className={`absolute rounded-lg mx-auto opacity-0 transition-opacity mx-auto duration-500 ${index === currentSectionIndex ? 'opacity-100' : ''}`}
          style={{
            top: section.key === 'sayHello' && 'about' ? 'auto' : section.key === 'about' ? '50%' : '22.5%',
            bottom: section.key === 'skills' ? '10%' : section.key === 'sayHello' ? '20%' : 'auto',
            right: section.key === 'skills' ? 'auto' :'auto',
            left: section.key === 'skills' ? '50%' : section.key === 'about' ? '50%' : '50%',
            transform: section.key === 'skills' ? 'translateX(-50%)' : 'translate(-50%, -50%)',
          }}
        >
          {section.component}
        </div>
      ))}

      {showThankYou && (
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="p-4 rounded-lg shadow-md text-white text-xs sm:text-sm md:text-lg lg:text-2xl font-bold">
            <p className="animate-pulse">Thank you for visiting my portfolio website &hearts;</p>
          </div>
        </div>
      )}
    </main>
  );
}
