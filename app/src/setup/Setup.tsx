import React, { useState } from 'react';
import { StepOne } from './components/StepOne';
import { StepTwo } from './components/StepTwo';
import { StepThree } from './components/StepThree';
import { StepFour } from './components/StepFour';
import { ProgressIndicator } from './components/ProgressIndicator';
import { NavigationButtons } from './components/NavigationButtons';
export function Setup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [focusPlan, setFocusPlan] = useState({
    focusArea: '',
    motivation: '',
    reminderMethod: '',
    frequency: 'daily',
    time: '09:00'
  });
  const updateFocusPlan = (field, value) => {
    setFocusPlan(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Focus Plan completed:', focusPlan);
      // Here you would typically submit the data or proceed to the next page
      alert('Focus Plan created successfully!');
    }
  };
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne value={focusPlan.focusArea} onChange={value => updateFocusPlan('focusArea', value)} />;
      case 2:
        return <StepTwo value={focusPlan.motivation} onChange={value => updateFocusPlan('motivation', value)} />;
      case 3:
        return <StepThree value={focusPlan.reminderMethod} onChange={value => updateFocusPlan('reminderMethod', value)} />;
      case 4:
        return <StepFour frequency={focusPlan.frequency} time={focusPlan.time} onFrequencyChange={value => updateFocusPlan('frequency', value)} onTimeChange={value => updateFocusPlan('time', value)} />;
      default:
        return null;
    }
  };
  return <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="w-full max-w-2xl mx-auto px-4 py-8 flex-1 flex flex-col">
        <h1 className="text-3xl font-light text-center text-gray-800 mb-2">
          Create Your Focus Plan
        </h1>
        <p className="text-center text-gray-500 mb-10">
          Set up reminders to stay focused on what matters most
        </p>
        <div className="mb-8">
          <ProgressIndicator currentStep={currentStep} totalSteps={4} />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8 flex-1 flex flex-col">
            {renderStep()}
          </div>
          <NavigationButtons currentStep={currentStep} totalSteps={4} onNext={handleNext} onBack={handleBack} />
        </div>
      </div>
    </div>;
}