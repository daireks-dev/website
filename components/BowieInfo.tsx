'use client';

import { useState, useEffect } from 'react';

export default function BowieInfo() {
  const [caption, setCaption] = useState('Loading caption...');
  const [photoTime, setPhotoTime] = useState('Loading photo time...');
  const [elapsedTime, setElapsedTime] = useState('Calculating elapsed time...');

  useEffect(() => {
    // Load caption
    fetch('/caption.txt')
      .then(res => res.text())
      .then(text => setCaption(text))
      .catch(() => setCaption('⚠️ Failed to load caption.'));

    // Load photo time and set elapsed timer
    async function fetchUploadTime() {
      const response = await fetch('/latest.jpg', { method: 'HEAD' });
      const lastModified = response.headers.get('Last-Modified');

      if (!lastModified) {
        setPhotoTime('Could not determine upload time.');
        return;
      }

      const uploadedDate = new Date(lastModified);

      const formatted = uploadedDate.toLocaleString('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });

      setPhotoTime(`This was Bowie when it was: ${formatted} EST`);

      function updateElapsed() {
        const now = new Date();
        const diff = now.getTime() - uploadedDate.getTime();

        const seconds = Math.floor(diff / 1000) % 60;
        const minutes = Math.floor(diff / 60000) % 60;
        const hours = Math.floor(diff / 3600000) % 24;
        const days = Math.floor(diff / 86400000);

        let output = `That was `;
        if (days) output += `${days} day${days !== 1 ? 's' : ''}, `;
        if (hours || days) output += `${hours} hour${hours !== 1 ? 's' : ''}, `;
        if (minutes || hours || days) output += `${minutes} minute${minutes !== 1 ? 's' : ''}, `;
        output += `${seconds} second${seconds !== 1 ? 's' : ''} ago.`;

        setElapsedTime(output);
      }

    updateElapsed();
      const interval = setInterval(updateElapsed, 1000);
      return () => clearInterval(interval); // cleanup
    }

    fetchUploadTime();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-4 space-y-2 z-1">
      <h1 className="text-white font-bold text-outline text-[15px]">{caption}</h1>
      <h1 className="text-amber-400 font-bold text-outline text-[15px]">{photoTime}</h1>
      <h1 className="text-blue-400 font-bold text-outline text-[15px]">{elapsedTime}</h1>
    </div>
  );
}
