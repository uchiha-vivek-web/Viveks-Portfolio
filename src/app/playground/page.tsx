"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const circleCount = 900;
const colorPalette = ["#1e9858", "#e5372c", "#f19501", "#6b42f4"];

export default function Playground() {
  const [started, setStarted] = useState(false);
  const [hideGrid] = useState(false);

  useEffect(() => {
    if (!started || hideGrid) return;

    const fadeTimers = new WeakMap<HTMLElement, NodeJS.Timeout>();
    const maxDistance = 100;
    const circleNodes = Array.from(document.querySelectorAll(".circle")) as HTMLElement[];

    let circlePositions = circleNodes.map((circle) => {
      const rect = circle.getBoundingClientRect();
      return {
        element: circle,
        centerX: rect.left + rect.width / 2,
        centerY: rect.top + rect.height / 2,
      };
    });

    const updatePositions = () => {
      circlePositions = circleNodes.map((circle) => {
        const rect = circle.getBoundingClientRect();
        return {
          element: circle,
          centerX: rect.left + rect.width / 2,
          centerY: rect.top + rect.height / 2,
        };
      });
    };
    window.addEventListener("resize", updatePositions);

    let animationFrameId: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest(".no-interaction-zone")) return;
      
      if (animationFrameId) return;
      animationFrameId = requestAnimationFrame(() => {
        circlePositions.forEach(({ element, centerX, centerY }) => {
          const dx = e.clientX - centerX;
          const dy = e.clientY - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const opacity = Math.max(0, 1 - distance / maxDistance);

          if (opacity > 0.05) {
            if (fadeTimers.has(element)) {
              clearTimeout(fadeTimers.get(element));
              fadeTimers.delete(element);
            }
            const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            element.style.backgroundColor = randomColor;
            element.style.opacity = `${opacity}`;
            element.classList.remove("fade");
            element.classList.remove("wave");
          } else {
            if (!fadeTimers.has(element)) {
              fadeTimers.set(
                element,
                setTimeout(() => {
                  element.style.backgroundColor = "transparent";
                  element.style.opacity = "1";
                  element.classList.add("fade");
                  fadeTimers.delete(element);
                }, 300)
              );
            }
          }
        });
        animationFrameId = null;
      });
    };

    function flickerEffect(positions: { element: HTMLElement }[]) {
      const flickerCount = 50;
      const flickerDuration = 100;

      for (let i = 0; i < flickerCount; i++) {
        const index = Math.floor(Math.random() * positions.length);
        const { element } = positions[index];
        const original = element.style.backgroundColor;
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];

        setTimeout(() => {
          element.style.backgroundColor = color;
          setTimeout(() => {
            element.style.backgroundColor = original;
          }, flickerDuration);
        }, i * 20);
      }
    }

    const handleClick = (e: MouseEvent) => {
      // wave animation
      circlePositions.forEach(({ element, centerX, centerY }) => {
        const dx = centerX - e.clientX;
        const dy = centerY - e.clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const delay = distance * 0.8;
    
        setTimeout(() => {
          element.classList.add("wave");
          setTimeout(() => {
            element.classList.remove("wave");
          }, 800);
        }, delay);
      });
    
      // immediately flicker after click
      flickerEffect(circlePositions);
    };
    

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", updatePositions);
    };
  }, [started, hideGrid]);

  return (
    <div className="relative w-screen h-screen overflow-hidden transition-colors duration-1000">
      {!started && (
        <div>
            <Link
    href="/"
    className="absolute z-50 px-6 py-2 text-black bg-white hover:text-blue-600 hover:underline transition cursor-pointer no-interaction-zone"
    >
    ← Back to Home
  </Link>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center  z-50 ">
          
          <p className="text-xl text-center max-w-md px-4 mb-6">
            Runs on logic and powered by creativity. In this world and in mine.
          </p>
          <button
            className="px-6 py-2 text-black bg-[#4B51FF] rounded-full  text-white hover:bg-[#e5372c] transition"
            onClick={() => setStarted(true)}
          >
            Start Playground
          </button>
        </div>
        </div>
      )}

{started && (
  <Link
    href="/"
    className="absolute z-50 px-6 py-2 text-black bg-white hover:text-blue-600 hover:underline transition cursor-pointer no-interaction-zone"
    >
    ← Back to Home
  </Link>
)}


      {started && !hideGrid && (
        <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,20px)] grid-rows-[20px] gap-10 justify-center items-center">
          {Array.from({ length: circleCount }).map((_, i) => (
            <div key={i} className="circle w-[25px] h-[25px] rounded-full transition-all duration-300" />
          ))}
        </div>
      )}
    </div>
  );
}

