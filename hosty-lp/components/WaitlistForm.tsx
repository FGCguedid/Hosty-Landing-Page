'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { supabase } from '@/lib/supabase';
import confetti from 'canvas-confetti';

export default function WaitlistForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const first_name = formData.get('first_name') as string;
    const user_type = formData.get('userType') as string;

    try {
      console.log('Supabase object state:', supabase);
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email, first_name, user_type }]);

      if (error) {
        console.error('Supabase detailed error:', error);
        console.log('Error Message:', error.message);
        console.log('Error Details:', error.details);
        throw error;
      }

      setStatus('success');
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6C3CE1', '#FFFFFF', '#0D0D2B'],
      });
    } catch (err: any) {
      console.error('Caught Error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'An error occurred while saving your info.');
    }
  }

  if (status === 'success') {
    return (
      <div className="p-12 rounded-3xl bg-primary/20 border border-primary/30 text-white text-center">
        <h3 className="text-3xl font-display font-bold mb-4">{t.final.success.title}</h3>
        <p className="text-lg opacity-80">{t.final.success.desc}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-3xl glass text-left">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-white/60 mb-2">{t.final.form.firstName}</label>
          <input
            name="first_name"
            required
            type="text"
            className="w-full bg-white/5 border border-white/10 text-white h-12 rounded-xl px-4 focus:border-primary outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/60 mb-2">{t.final.form.email}</label>
          <input
            name="email"
            required
            type="email"
            className="w-full bg-white/5 border border-white/10 text-white h-12 rounded-xl px-4 focus:border-primary outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/60 mb-4">{t.final.form.role}</label>
          <div className="flex gap-4">
            <label className="flex-1 cursor-pointer">
              <input type="radio" name="userType" value="host" defaultChecked className="sr-only" />
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-white text-center hover:border-primary transition-all has-[:checked]:bg-primary has-[:checked]:border-primary">
                {t.final.form.host}
              </div>
            </label>
            <label className="flex-1 cursor-pointer">
              <input type="radio" name="userType" value="guest" className="sr-only" />
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-white text-center hover:border-primary transition-all has-[:checked]:bg-primary has-[:checked]:border-primary">
                {t.final.form.guest}
              </div>
            </label>
          </div>
        </div>
        {status === 'error' && (
          <p className="text-red-400 text-sm text-center">{errorMessage}</p>
        )}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-6 text-lg font-bold bg-primary hover:bg-primary/90 text-white rounded-xl transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
        >
          {status === 'loading' ? '...' : t.final.form.btn}
        </button>
      </div>
    </form>
  );
}
