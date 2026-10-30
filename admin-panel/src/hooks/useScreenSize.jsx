/**
 * @name Hotel Room Booking System
 * @author Durgesh Bagul
 * @description Hotel Room Booking and Management System Software ~ Developed By Durgesh Bagul under BSquare Softwares
 * @copyright © 2026 BSquare Softwares. All rights reserved.
 * @version v0.0.1
 *
 */

import { useEffect, useState } from 'react';

const useScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { screenWidth, screenHeight };
};

export default useScreenSize;
