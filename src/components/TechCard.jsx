import React from 'react';

const TechCard = ({ tech, onAdd, isAdded }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-start justify-between mb-3">
          <img src={tech.icon} alt={tech.name} className="w-9 h-9 object-contain" />
          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-600 border border-cyan-100">
            {tech.badge}
          </span>
        </div>

        <h3 className="font-bold text-slate-900 text-lg">{tech.name}</h3>
        <p className="text-gray-500 text-xs mt-1.5 leading-relaxed line-clamp-3">
          {tech.description}
        </p>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <span className="bg-gray-50 border border-gray-100 px-2 py-0.5 rounded text-[11px] text-gray-600 font-medium">
            {tech.category}
          </span>
          <span>{tech.difficulty}</span>
          <span className="flex items-center text-amber-500 font-semibold gap-0.5">
            ★ <span className="text-gray-700">{tech.rating}</span>
          </span>
        </div>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full mt-4 py-2 rounded-xl text-xs font-semibold transition-all ${
          isAdded
            ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed'
            : 'bg-slate-950 text-white hover:bg-slate-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechCard;