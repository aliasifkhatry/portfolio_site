"use client";

import { useEffect, useState, CSSProperties, MouseEvent } from 'react';
import Image from 'next/image';
import { useTheme } from '../ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const BackgroundImages = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getStyle = (
    endPosition: number, 
    offset: number
  ): CSSProperties & { [key: string]: string | number } => ({
    '--bounce-up-end': `${endPosition}%`,
    opacity: 1 - (scrollPosition - offset) / 200,
    transform: `translateY(${Math.max(-1 * (1 - (scrollPosition - offset) / 2), endPosition)}%)`
  });

  const handleThemeToggle = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    toggleTheme();
  };

  return (
    <div className={`fixed inset-0 z-0 overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-gray-100'}`}>
      <div className="absolute w-full h-full bottom-0">
        {/* Mountain Layer 1 */}
        <div
          className="absolute inset-0 translate-y-[35%] animate-bounce-up"
          style={getStyle(35, 400)}
        >
          <Image 
            src={isDarkMode ? "/mountains/Layer1.svg" : "/mountainswhite/mount1.svg"} 
            alt="Mountain layer 1" 
            fill
            style={{ 
              objectFit: 'cover',
              filter: isDarkMode ? 'brightness(0.75)' : 'brightness(1.02)',
            }}
            priority
          />
        </div>

        {/* Mountain Layer 2 */}
        <div
          className="absolute inset-0 translate-y-[40%] animate-bounce-up"
          style={getStyle(40, 300)}
        >
          <Image 
            src={isDarkMode ? "/mountains/Layer2.svg" : "/mountainswhite/mount2.svg"} 
            alt="Mountain layer 2" 
            fill
            style={{ 
              objectFit: 'cover',
              filter: isDarkMode ? 'brightness(0.75)' : 'brightness(1.02)',
            }}
          />
        </div>

        {/* Mountain Layer 3 */}
        <div
          className="absolute inset-0 translate-y-[45%] animate-bounce-up"
          style={getStyle(45, 200)}
        >
          <Image 
            src={isDarkMode ? "/mountains/Layer3.svg" : "/mountainswhite/mount3.svg"} 
            alt="Mountain layer 3" 
            fill
            style={{ 
              objectFit: 'cover',
              filter: isDarkMode ? 'brightness(0.75)' : 'brightness(1.02)',
            }}
          />
        </div>

        {/* Mountain Layer 4 */}
        <div
          className="absolute inset-0 translate-y-[50%] animate-bounce-up"
          style={getStyle(50, 100)}
        >
          <Image 
            src={isDarkMode ? "/mountains/Layer4.svg" : "/mountainswhite/mount4.svg"} 
            alt="Mountain layer 4" 
            fill
            style={{ 
              objectFit: 'cover',
              filter: isDarkMode ? 'brightness(0.75)' : 'brightness(1.02)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundImages;