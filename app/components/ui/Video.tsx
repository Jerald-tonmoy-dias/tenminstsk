import React, { useState } from "react";

interface VideoProps {
  value: string; // YouTube video ID
}

export default function Video({ value }: VideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full h-full aspect-video">
      {!isPlaying && (
        <>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>

          {/* Play Button */}
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={56}
              height={56}
              fill="none"
              viewBox="0 0 56 56"
            >
              <circle cx={28} cy={28} r={28} fill="#fff" fillOpacity="0.5" />
              <circle cx="27.999" cy={28} r="25.415" fill="#fff" />
              <path
                fill="#1CAB55"
                d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
              />
            </svg>
          </button>
        </>
      )}

      {/* YouTube Video */}
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${value}${isPlaying ? "?autoplay=1" : ""}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
