import React from 'react';
import bannerImg from '../assets/banner-stack.png';

const Hero = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Build Your Ideal <br />
            <span className="text-gradient">Development Stack</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#technologies"
              className="px-5 py-2.5 rounded-lg bg-brand font-medium text-sm shadow-md hover:opacity-95 transition-opacity"
            >
              Explore Technologies
            </a>
            <button
              type="button"
              className="px-5 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Graphic Banner */}
        <div className="lg:col-span-5 flex justify-center">
          <img 
            src={bannerImg} 
            alt="Dev Stack Illustration" 
            className="w-72 sm:w-84 max-h-96 object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;