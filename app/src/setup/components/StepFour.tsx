import React from 'react';
export function StepFour({
  frequency,
  time,
  onFrequencyChange,
  onTimeChange
}) {
  return <div className="flex flex-col flex-1">
      <h2 className="text-2xl font-light text-gray-800 mb-3">
        When would you like to be reminded?
      </h2>
      <p className="text-gray-500 mb-8">
        Set up how often and what time you'd like to receive your focus
        reminders.
      </p>
      <div className="mb-8">
        <label className="block text-gray-700 mb-2">Frequency</label>
        <div className="flex gap-4">
          <button onClick={() => onFrequencyChange('daily')} className={`px-6 py-3 rounded-md text-sm font-medium transition-colors flex-1
              ${frequency === 'daily' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Daily
          </button>
          <button onClick={() => onFrequencyChange('weekly')} className={`px-6 py-3 rounded-md text-sm font-medium transition-colors flex-1
              ${frequency === 'weekly' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Weekly
          </button>
        </div>
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Time of day</label>
        <input type="time" value={time} onChange={e => onTimeChange(e.target.value)} className="w-full p-4 text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
      </div>
    </div>;
}