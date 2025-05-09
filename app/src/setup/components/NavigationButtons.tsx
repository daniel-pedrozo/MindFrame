import React from 'react';
export function NavigationButtons({
  currentStep,
  totalSteps,
  onNext,
  onBack
}) {
  return <div className="flex justify-between mt-4">
      <button onClick={onBack} disabled={currentStep === 1} className={`px-6 py-3 rounded-md text-sm font-medium transition-colors
          ${currentStep === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
        Back
      </button>
      <button onClick={onNext} className="px-6 py-3 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">
        {currentStep === totalSteps ? 'Complete' : 'Next'}
      </button>
    </div>;
}