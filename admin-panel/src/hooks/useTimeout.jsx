/**
 * @name Hotel Room Booking System
 * @author Durgesh Bagul
 * @description Hotel Room Booking and Management System Software ~ Developed By Durgesh Bagul under BSquare Softwares
 * @copyright © 2026 BSquare Softwares. All rights reserved.
 * @version v0.0.1
 *
 */

import {
  useCallback, useEffect, useMemo, useRef
} from 'react';

export default function useTimeout(callback, delay) {
  const timeoutRef = useRef();
  const callbackRef = useRef(callback);

  useEffect(() => { callbackRef.current = callback; }, [callback]);
  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const memoizedCallback = useCallback(
    (args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        callbackRef.current?.(args);
      }, delay);
    },
    [delay, timeoutRef, callbackRef]
  );

  return useMemo(() => [memoizedCallback], [memoizedCallback]);
}
