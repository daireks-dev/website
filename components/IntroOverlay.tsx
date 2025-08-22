'use client';

import { useEffect, useRef, useState } from 'react';

export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const gifRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const gif = gifRef.current;
    if (!gif) return;

    gif.style.display = 'none';

    const originalSrc = gif.src.split('?')[0];
    const newSrc = `${originalSrc}?t=${Date.now()}`;

    gif.onload = () => {
      gif.style.display = 'block';

      setTimeout(() => {
        const overlay = gif.parentElement as HTMLElement;
        overlay.style.opacity = '0';

        setTimeout(() => setVisible(false), 500);
      }, 3000);
    };

    gif.src = newSrc;
  }, []);

  if (!visible) return null;

  return (
    <div
      id="intro-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        transition: 'opacity 0.5s ease',
      }}
    >
      <img
        ref={gifRef}
        src="/Intro.gif"
        alt="Intro Animation"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  );
}
