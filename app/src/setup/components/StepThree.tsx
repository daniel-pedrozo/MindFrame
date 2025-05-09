import React from 'react';
import { MailIcon, MessageSquareIcon } from 'lucide-react';
export function StepThree({
  value,
  onChange
}) {
  return <div className="flex flex-col flex-1">
      <h2 className="text-2xl font-light text-gray-800 mb-3">
        How would you like to be reminded?
      </h2>
      <p className="text-gray-500 mb-8">
        Choose your preferred method for receiving focus reminders.
      </p>
      <div className="grid grid-cols-2 gap-6 mt-4">
        <button onClick={() => onChange('email')} className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all
            ${value === 'email' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
          <MailIcon size={32} className={value === 'email' ? 'text-blue-500' : 'text-gray-400'} />
          <span className={`mt-4 text-lg ${value === 'email' ? 'text-blue-500 font-medium' : 'text-gray-600'}`}>
            Email
          </span>
        </button>
        <button onClick={() => onChange('whatsapp')} className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all
            ${value === 'whatsapp' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
          <MessageSquareIcon size={32} className={value === 'whatsapp' ? 'text-blue-500' : 'text-gray-400'} />
          <span className={`mt-4 text-lg ${value === 'whatsapp' ? 'text-blue-500 font-medium' : 'text-gray-600'}`}>
            WhatsApp
          </span>
        </button>
      </div>
    </div>;
}