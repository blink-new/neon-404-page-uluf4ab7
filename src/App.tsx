import { useState, useEffect } from 'react';

function App() {
  const [matrixText, setMatrixText] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);

  // Matrix-style random characters
  const matrixChars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  // Generate random matrix code
  useEffect(() => {
    const generateMatrix = () => {
      let result = '';
      for (let i = 0; i < 150; i++) {
        result += matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        if (i % 15 === 0) result += '\n';
      }
      return result;
    };

    const interval = setInterval(() => {
      setMatrixText(generateMatrix());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleHomeClick = () => {
    // Simple navigation - in a real app you'd use proper routing
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-slate-900 text-cyan-400 font-mono relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute animate-pulse top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full"></div>
        <div className="absolute animate-pulse top-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animation-delay-1000"></div>
        <div className="absolute animate-pulse bottom-20 left-20 w-1.5 h-1.5 bg-cyan-400 rounded-full animation-delay-2000"></div>
        <div className="absolute animate-pulse bottom-10 right-10 w-2 h-2 bg-cyan-400 rounded-full animation-delay-3000"></div>
      </div>

      {/* Matrix code background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
        <pre className="text-xs leading-tight whitespace-pre-wrap break-words p-4 animate-matrix-rain">
          {matrixText}
        </pre>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* 404 Error Code */}
          <h1 className={`text-8xl sm:text-9xl lg:text-[12rem] font-bold mb-8 ${isGlitching ? 'animate-glitch' : ''}`}>
            <span className="relative inline-block">
              4
              <span className="absolute inset-0 text-red-500 animate-glitch-1">4</span>
              <span className="absolute inset-0 text-blue-500 animate-glitch-2">4</span>
            </span>
            <span className="relative inline-block">
              0
              <span className="absolute inset-0 text-red-500 animate-glitch-1">0</span>
              <span className="absolute inset-0 text-blue-500 animate-glitch-2">0</span>
            </span>
            <span className="relative inline-block">
              4
              <span className="absolute inset-0 text-red-500 animate-glitch-1">4</span>
              <span className="absolute inset-0 text-blue-500 animate-glitch-2">4</span>
            </span>
          </h1>

          {/* Neon line separator */}
          <div className="flex justify-center mb-8">
            <div className="w-48 h-1 bg-cyan-400 rounded-full neon-glow animate-pulse"></div>
          </div>

          {/* Error message */}
          <div className="space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider">
              PAGE NOT FOUND
            </h2>
            <p className="text-lg sm:text-xl text-cyan-300 opacity-80">
              We couldn't find what you're looking for
            </p>
            <p className="text-sm sm:text-base text-cyan-500 opacity-60 font-light">
              The page you requested has been moved, deleted, or perhaps never existed.
            </p>
          </div>

          {/* Return home button */}
          <button
            onClick={handleHomeClick}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-cyan-400 bg-transparent border-2 border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/25 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <span className="relative z-10">Return Home</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Additional decorative elements */}
          <div className="mt-16 flex justify-center space-x-8 opacity-30">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping animation-delay-0"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping animation-delay-1000"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-scanline"></div>
      </div>
    </div>
  );
}

export default App;