import React from 'react';
export function ProgressIndicator({
  currentStep,
  totalSteps
}) {
  return <div className="flex justify-center space-x-2">
      {Array.from({
      length: totalSteps
    }).map((_, index) => <div key={index} className={`h-2 w-2 rounded-full transition-all duration-300 ${index + 1 === currentStep ? 'bg-blue-500 w-8' : index + 1 < currentStep ? 'bg-blue-300' : 'bg-gray-200'}`} />)}
    </div>;
}