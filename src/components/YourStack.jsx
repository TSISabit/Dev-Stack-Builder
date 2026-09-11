import React from 'react';

const YourStack = ({ selectedStack, onRemove, onRemoveAll }) => {
  const count = selectedStack.length;

  return (
    <aside className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm sticky top-24">
      <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
      <p className="text-xs text-slate-400 mt-0.5">
        {count > 0 ? `${count} ${count === 1 ? 'Technology' : 'Technologies'} Selected` : 'No technologies selected yet.'}
      </p>

      {count === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-2xl py-10 my-4 flex items-center justify-center">
          <p className="text-slate-400 text-xs font-medium">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-2.5 my-4 max-h-[440px] overflow-y-auto pr-0.5">
          {selectedStack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2.5 border border-slate-100 rounded-2xl bg-white hover:border-slate-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-xs leading-tight">{item.name}</h4>
                  <p className="text-[10px] text-slate-400">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-slate-400 hover:text-slate-600 p-1 text-sm font-medium"
                aria-label={`Remove ${item.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {count > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full py-2 border border-red-200 text-red-500 rounded-xl text-xs font-semibold hover:bg-red-50 transition-colors"
        >
          Remove All
        </button>
      )}
    </aside>
  );
};

export default YourStack;