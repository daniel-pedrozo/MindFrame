import { useState } from 'react';
import { Mail, MessageCircle, Clock } from 'lucide-react';
import { cn } from '../client/cn';

const steps = ['What', 'Why', 'Method', 'Schedule'];

export default function SetupPage() {
  return (
    <div className='py-10 lg:mt-10'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white'>
            <span className='text-yellow-500'>Focus Plan</span> Setup
          </h2>
          <p className='mt-4 text-lg text-gray-600 dark:text-white'>
            Stay aligned with what matters most — configure reminders to keep you focused.
          </p>
        </div>

        <div className='my-10 border rounded-3xl border-gray-900/10 dark:border-gray-100/10'>
          <div className='sm:w-[90%] md:w-[70%] lg:w-[50%] py-10 px-6 mx-auto my-8 space-y-10'>
            <FocusPlanWizard />
          </div>
        </div>
      </div>
    </div>
  );
}

function FocusPlanWizard() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    focus: '',
    reason: '',
    method: '',
    frequency: 'daily',
    time: '08:00',
  });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className='flex flex-col items-center space-y-10'>
      {/* Step dots */}
      <div className='flex space-x-2'>
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              i <= step ? 'bg-black' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      <div className='w-full space-y-6 text-center'>
        {/* Step 1 */}
        {step === 0 && (
          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold'>What do you want to focus on?</h2>
            <input
              type='text'
              placeholder='e.g. Study, Work, Fitness'
              value={form.focus}
              onChange={(e) => handleChange('focus', e.target.value)}
              className='w-full rounded-md border border-gray-300 p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300'
            />
          </div>
        )}

        {/* Step 2 */}
        {step === 1 && (
          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold'>Why does it matter?</h2>
            <textarea
              placeholder='Write your motivation'
              value={form.reason}
              onChange={(e) => handleChange('reason', e.target.value)}
              rows={4}
              className='w-full rounded-md border border-gray-300 p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300'
            />
          </div>
        )}

        {/* Step 3 */}
        {step === 2 && (
          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold'>Preferred reminder method?</h2>
            <div className='flex justify-center gap-4'>
              <button
                type='button'
                onClick={() => handleChange('method', 'email')}
                className={cn(
                  'flex items-center gap-2 px-6 py-2 rounded-md border',
                  form.method === 'email'
                    ? 'bg-yellow-200 border-yellow-400'
                    : 'border-gray-300 hover:bg-gray-100'
                )}
              >
                <Mail size={20} /> Email
              </button>
              <button
                type='button'
                onClick={() => handleChange('method', 'whatsapp')}
                className={cn(
                  'flex items-center gap-2 px-6 py-2 rounded-md border',
                  form.method === 'whatsapp'
                    ? 'bg-yellow-200 border-yellow-400'
                    : 'border-gray-300 hover:bg-gray-100'
                )}
              >
                <MessageCircle size={20} /> WhatsApp
              </button>
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 3 && (
          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold'>How often & what time?</h2>
            <div className='flex justify-center gap-4'>
              <button
                type='button'
                onClick={() => handleChange('frequency', 'daily')}
                className={cn(
                  'px-4 py-2 rounded-md border',
                  form.frequency === 'daily'
                    ? 'bg-yellow-200 border-yellow-400'
                    : 'border-gray-300 hover:bg-gray-100'
                )}
              >
                Daily
              </button>
              <button
                type='button'
                onClick={() => handleChange('frequency', 'weekly')}
                className={cn(
                  'px-4 py-2 rounded-md border',
                  form.frequency === 'weekly'
                    ? 'bg-yellow-200 border-yellow-400'
                    : 'border-gray-300 hover:bg-gray-100'
                )}
              >
                Weekly
              </button>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <Clock size={20} />
              <input
                type='time'
                value={form.time}
                onChange={(e) => handleChange('time', e.target.value)}
                className='rounded-md border border-gray-300 p-1'
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className='flex justify-between pt-4'>
          <button
            type='button'
            onClick={back}
            disabled={step === 0}
            className='text-sm text-gray-600 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-40'
          >
            Back
          </button>
          <button
            type='button'
            onClick={step < steps.length - 1 ? next : () => console.log(form)}
            className='text-sm font-semibold bg-yellow-200 px-4 py-2 rounded-md hover:bg-yellow-300'
          >
            {step < steps.length - 1 ? 'Next' : 'Finish'}
          </button>
        </div>
      </div>
    </div>
  );
}
