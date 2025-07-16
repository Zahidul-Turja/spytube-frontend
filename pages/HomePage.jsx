"use client";

import NavTop from "@/components/NavTop";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Navigation */}
      <NavTop />

      {/* Hero Section */}
      <main className="flex items-center justify-between px-8 py-20 max-w-7xl h-[74vh] mx-auto">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-6xl font-bold leading-tight mb-6">
            The easiest way to
            <br />
            <span className="text-gray-400">monitor YouTube</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Build, deploy, and scale your YouTube monitoring applications with
            zero DevOps. Get insights, analytics, and notifications in seconds,
            not hours.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="/login"
              className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium text-lg"
            >
              Get Started for Free
            </a>
            <a
              href="/login"
              className="text-gray-300 hover:text-white transition-colors text-lg"
            >
              View Documentation →
            </a>
          </div>
        </div>

        {/* Right Animation */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-96 h-96">
            {/* Subtle Background Grid */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-8 grid-rows-8 gap-4 h-full">
                {[...Array(64)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-gray-600 rounded-full"
                    style={{
                      opacity: Math.random() * 0.5 + 0.1,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute border border-gray-700 rounded-lg opacity-40"
                  style={{
                    width: `${60 + i * 20}px`,
                    height: `${60 + i * 20}px`,
                    left: `${30 + i * 15}%`,
                    top: `${20 + i * 25}%`,
                    animation: `float ${6 + i * 2}s ease-in-out infinite`,
                    animationDelay: `${i * 0.8}s`,
                  }}
                />
              ))}
            </div>

            {/* Central Minimalist Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-24 rounded-full border-2 border-gray-700 flex items-center justify-center relative">
                <div className="w-16 h-16 rounded-full border border-gray-600 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center">
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-pulse"
                      style={{ animationDuration: "3s" }}
                    ></div>
                  </div>
                </div>
                {/* Subtle expanding ring */}
                <div
                  className="absolute inset-0 rounded-full border border-gray-600 opacity-30"
                  style={{
                    animation: "ping 4s cubic-bezier(0, 0, 0.2, 1) infinite",
                  }}
                ></div>
              </div>
            </div>

            {/* Elegant Flowing Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30">
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#6B7280" stopOpacity="0" />
                  <stop offset="50%" stopColor="#6B7280" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#6B7280" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[...Array(4)].map((_, i) => (
                <path
                  key={i}
                  d={`M ${50 + i * 30} 100 Q ${200 + i * 20} ${50 + i * 30} ${
                    300 + i * 10
                  } ${200 + i * 40}`}
                  stroke="url(#gradient1)"
                  strokeWidth="1"
                  fill="none"
                  className="animate-pulse"
                  style={{
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: "4s",
                  }}
                />
              ))}
            </svg>

            {/* Subtle Particle System */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-px h-px bg-gray-500 rounded-full opacity-60"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `drift ${
                      8 + Math.random() * 4
                    }s linear infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>

            {/* Minimalist Data Points */}
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-40"
                  style={{
                    left: `${25 + i * 15}%`,
                    top: `${60 + Math.sin(i) * 20}%`,
                    animation: `pulse ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* CSS Animations */}
          <style jsx>{`
            @keyframes float {
              0%,
              100% {
                transform: translateY(0px) rotate(0deg);
              }
              50% {
                transform: translateY(-10px) rotate(2deg);
              }
            }
            @keyframes drift {
              0% {
                transform: translateY(0px) translateX(0px);
                opacity: 0;
              }
              50% {
                opacity: 1;
              }
              100% {
                transform: translateY(-20px) translateX(10px);
                opacity: 0;
              }
            }
            @keyframes pulse {
              0%,
              100% {
                opacity: 0.4;
                transform: scale(1);
              }
              50% {
                opacity: 1;
                transform: scale(1.2);
              }
            }
          `}</style>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <div className="text-gray-400">
            © 2025 SpyTube. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
