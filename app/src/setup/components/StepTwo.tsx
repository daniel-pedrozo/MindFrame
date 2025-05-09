import React from 'react';
export function StepTwo({
  value,
  onChange
}) {
  return <div className="flex flex-col flex-1">
      <h2 className="text-2xl font-light text-gray-800 mb-3">
        Why does this matter to you?
      </h2>
      <p className="text-gray-500 mb-8">
        Understanding your motivation will help you stay committed when things
        get challenging.
      </p>
      <textarea value={value} onChange={e => onChange(e.target.value)} placeholder="Write why this focus area is important to you..." className="w-full p-4 text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all flex-1 resize-none" />
    </div>;
}