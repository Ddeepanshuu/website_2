'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-muted mt-2">Get in touch for enterprise engagements, partnerships, or data governance consultations.</p>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: wire to /api/lead or external CRM
          setSent(true);
        }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">Company</label>
          <input required className="mt-1 block w-full border rounded-md px-3 py-2" name="company" placeholder="Your company name" />
        </div>

        <div>
          <label className="block text-sm font-medium">Work Email</label>
          <input required type="email" name="email" className="mt-1 block w-full border rounded-md px-3 py-2" placeholder="name@company.com" />
        </div>

        <div>
          <label className="block text-sm font-medium">Project Overview</label>
          <textarea required name="message" className="mt-1 block w-full border rounded-md px-3 py-2 h-32" placeholder="Brief description, requirements, timeline" />
        </div>

        <button type="submit" className="inline-flex items-center bg-accent text-white px-4 py-2 rounded-md font-semibold">Request consultation</button>

        {sent && <div className="mt-4 text-sm text-green-700">Thanks — we will be in touch within 2 business days.</div>}
      </form>
    </div>
  );
}