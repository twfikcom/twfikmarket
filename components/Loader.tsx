import React from 'react';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div className={`
      fixed inset-0 bg-black flex justify-center items-center z-[9999]
      transition-opacity duration-500 ease-out
      ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}
    `}>
      <div className="flex items-center space-x-4 text-5xl md:text-7xl font-bold tracking-wider text-white">
        {/* The 'T' in a square with flash animation container */}
        <div className="animate-loader-flash-container">
          <svg className="w-16 h-16" viewBox="0 0 80 80" aria-label="TWFIK Logo Initial">
            <rect 
              className="animate-loader-square stroke-cyan-400"
              x="10" y="10" width="60" height="60" 
              strokeWidth="4" fill="none"
              pathLength="240"
            />
            <text 
              className="animate-loader-T fill-white font-bold"
              x="50%" y="50%" 
              dominantBaseline="middle" textAnchor="middle" 
              fontSize="40"
            >
              T
            </text>
          </svg>
        </div>

        {/* The 'WFIK.' text */}
        <div className="flex" aria-label="TWFIK">
          {'WFIK'.split('').map((char, index) => (
            <span
              key={index}
              className="animate-loader-text-reveal"
              style={{ animationDelay: `${1.5 + index * 0.1}s` }}
              aria-hidden="true"
            >
              {char}
            </span>
          ))}
          <span 
            className="animate-loader-dot text-cyan-400"
            style={{ animationDelay: `${1.5 + 4 * 0.1}s` }}
            aria-hidden="true"
          >
            .
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
