import React from 'react';
const SUGGESTIONS = ['Study', 'Work', 'Fitness', 'Reading', 'Meditation', 'Learning a skill'];
export function StepOne({
  value,
  onChange
}) {
  return <div className="flex flex-col flex-1">
      <h2 className="text-2xl font-light text-gray-800 mb-3">
        What do you want to focus on?
      </h2>
      <p className="text-gray-500 mb-8">
        Choose an area of your life you want to dedicate more focused time to.
      </p>
      <div className="mb-8">
        <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder="Enter your focus area..." className="w-full p-4 text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
      </div>
      <div className="mt-auto">
        <p className="text-sm text-gray-500 mb-3">Suggestions:</p>
        <div className="flex flex-wrap gap-2">
          {SUGGESTIONS.map(suggestion => <button key={suggestion} onClick={() => onChange(suggestion)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200 transition-colors">
              {suggestion}
            </button>)}
        </div>
      </div>
    </div>;
}