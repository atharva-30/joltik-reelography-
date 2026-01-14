import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Instagram, Youtube, MessageCircle, Send, Link } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_ih08k9n';
const TEMPLATE_ID = 'template_ia5j40b';
const PUBLIC_KEY = '8bOusqqJ0t1E7zxbw';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.currentTarget,
        PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        e.currentTarget.reset();
        setIsSubmitting(false);
      })
      .catch(() => {
        alert("Failed to send message.");
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-neutral-900 to-black">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Let's Work Together"
          subtitle="Ready to elevate your content? Get in touch."
        />

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">

          <div className="flex-1 space-y-8">
            <h3 className="text-2xl font-bold text-white">Connect with Me</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-neutral-300">
                <Instagram className="text-pink-500" /> @joltikreelography
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <Youtube className="text-red-500" /> Atharva Raorane Films
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <MessageCircle className="text-green-500" /> +91 7710988631
              </div>
            </div>
          </div>

          <div className="flex-[1.5] bg-neutral-950 p-8 rounded-xl border border-neutral-800">
            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                name="from_name"
                required
                placeholder="Your Name"
                className="w-full p-3 rounded bg-neutral-900 text-white"
              />

              <input
                type="email"
                name="reply_to"
                required
                placeholder="Your Email"
                className="w-full p-3 rounded bg-neutral-900 text-white"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                className="w-full p-3 rounded bg-neutral-900 text-white"
              />

              <div className="relative">
                <Link className="absolute top-3 left-3 text-neutral-500" size={16} />
                <input
                  name="reference_link"
                  placeholder="Reference Reel Link (optional)"
                  className="w-full pl-9 p-3 rounded bg-neutral-900 text-white"
                />
              </div>

              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full p-3 rounded bg-neutral-900 text-white"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 py-4 rounded font-bold"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
