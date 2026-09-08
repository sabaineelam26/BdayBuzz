import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fadeIn">
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-party-purple-100 dark:bg-party-purple-900/40 text-party-purple-600 dark:text-party-purple-400 mb-2">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-black text-stone-900 dark:text-white tracking-tight">Privacy Policy</h1>
        <p className="text-stone-500 dark:text-stone-400 text-sm font-medium">Last Updated: September 5, 2026</p>
      </div>

      <div className="bg-white dark:bg-stone-900 rounded-3xl p-8 sm:p-12 shadow-card dark:shadow-card-dark border border-stone-200/80 dark:border-white/10 space-y-8 text-stone-700 dark:text-stone-300 leading-relaxed text-sm">
        
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 dark:text-white">1. Introduction</h2>
          <p>
            Welcome to BdayBuzz. We are committed to protecting your personal information and your right to privacy. 
            If you have any questions or concerns about our policy, or our practices with regards to your personal information, 
            please contact us at <strong>hello@bdaybuzz.in</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 dark:text-white">2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when registering at the Services, expressing an interest 
            in obtaining information about us or our products and services, when participating in activities on the Services or otherwise 
            contacting us.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Personal Info Provided by You:</strong> We collect names, phone numbers, email addresses, contact preferences, and other similar information.</li>
            <li><strong>Payment Data:</strong> We collect data necessary to process your payment if you make purchases, such as your payment instrument number and the security code associated with your payment instrument.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 dark:text-white">3. How We Use Your Information</h2>
          <p>
            We use personal information collected via our Services for a variety of business purposes described below. 
            We process your personal information for these purposes in reliance on our legitimate business interests, 
            in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>To facilitate account creation and logon process.</li>
            <li>To fulfill and manage your orders.</li>
            <li>To respond to user inquiries/offer support to users.</li>
            <li>To send administrative information to you.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 dark:text-white">4. Will Your Information be Shared with Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, 
            or to fulfill business obligations. We may process or share data based on the following legal basis:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information in a specific purpose.</li>
            <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
            <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 dark:text-white">5. How Long Do We Keep Your Information?</h2>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, 
            unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
          </p>
        </section>
        
        <div className="pt-6 border-t border-stone-200 dark:border-stone-800">
          <p className="text-xs text-stone-500 dark:text-stone-500 text-center">
            By using BdayBuzz, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};
