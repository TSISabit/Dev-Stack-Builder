import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import YourStack from './components/YourStack';
import Footer from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/technologies.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to load technologies.');
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const exists = selectedStack.some((item) => item.id === tech.id);
    if (exists) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id) => {
    const itemToRemove = selectedStack.find((item) => item.id === id);
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from stack.`);
    }
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error('All technologies removed from stack.');
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 flex flex-col justify-between font-sans antialiased">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Explore the <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-xs font-semibold text-slate-500 tracking-wide">Loading technologies...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    onAdd={handleAddToStack}
                    isAdded={selectedStack.some((item) => item.id === tech.id)}
                  />
                ))}
              </div>

              <div className="lg:col-span-4">
                <YourStack
                  selectedStack={selectedStack}
                  onRemove={handleRemove}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
      <ToastContainer position="bottom-right" autoClose={2500} hideProgressBar={false} />
    </div>
  );
}

export default App;