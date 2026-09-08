import React from 'react';
import { Sparkles } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fadeIn">
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-party-pink-100 dark:bg-party-pink-900/40 text-party-pink-600 dark:text-party-pink-400 mb-2">
          <Sparkles className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-black text-stone-900 dark:text-white tracking-tight">Terms & Conditions</h1>
        <p className="text-stone-500 dark:text-stone-400 text-sm font-medium">Last Updated: September 5, 2026</p>
      </div>

      <div className="bg-white dark:bg-stone-900 rounded-3xl p-8 sm:p-12 shadow-card dark:shadow-card-dark border border-stone-200/80 dark:border-white/10 space-y-8 text-stone-700 dark:text-stone-300 leading-relaxed text-sm">
        
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 dark:text-white">1. Agreement to Terms</h2>
          <p>
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") 
            and BdayBuzz ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, 
            mobile website or mobile application related, linked, or otherwise connected thereto.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 dark:text-white">2. Booking and Payments</h2>
          <p>
            By booking a party package with BdayBuzz, you agree to the following terms regarding payments:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>A deposit may be required to secure your booking date and time.</li>
            <li>Full payment must be completed prior to the commencement of the event, as specified during the checkout process.</li>
            <li>Prices are subject to change without notice, but the price of your event is locked in once your booking is confirmed.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 dark:text-white">3. Cancellations & Refunds</h2>
          <p>
            We understand that plans can change. Our cancellation policy is as follows:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Full Refund:</strong> Cancellations made 72 hours or more before the scheduled event date will receive a full refund of any amounts paid.</li>
            <li><strong>Partial Refund:</strong> Cancellations made within 72 hours of the event may be subject to a 25% administrative and preparation fee.</li>
            <li><strong>Rescheduling:</strong> You may request to reschedule your event up to 48 hours before the event date without penalty, subject to availability.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 dark:text-white">4. User Representations</h2>
          <p>
            By using the Site, you represent and warrant that: 
            (1) all registration information you submit will be true, accurate, current, and complete; 
            (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; 
            (3) you have the legal capacity and you agree to comply with these Terms and Conditions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 dark:text-white">5. Modifications and Interruptions</h2>
          <p>
            We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. 
            We also reserve the right to modify or discontinue all or part of the Services without notice at any time. We will not be liable to you or any 
            third party for any modification, price change, suspension, or discontinuance of the Services.
          </p>
        </section>
        
        <div className="pt-6 border-t border-stone-200 dark:border-stone-800">
          <p className="text-xs text-stone-500 dark:text-stone-500 text-center">
            If you do not agree with all of these terms and conditions, then you are expressly prohibited from using the site and you must discontinue use immediately.
          </p>
        </div>
      </div>
    </div>
  );
};
