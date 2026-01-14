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
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
      .then(() => {
        alert('Message sent successfully!');
        e.currentTarget.reset();
        setIsSubmitting(false);
      })
      .catch(() => {
        alert('Failed to send message. Please try again.');
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

          {/* CONNECT WITH ME */}
          <div className="flex-1 space-y-8">
            <h3 className="text-2xl font-bold text-white">Connect with Me</h3>

            <div className="space-y-4">

              <a
                href="https://www.instagram.com/joltikreelography"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-300 hover:text-amber-500 transition"
              >
                <Instagram className="text-pink-500" />
                @joltikreelography
              </a>

              <a
                href="https://www.youtube.com/@AtharvaRaoraneFilms"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-300 hover:text-amber-500 transition"
              >
                <Youtube className="text-red-500" />
                Atharva Raorane Films
              </a>

              <a
                href="https://wa.me/917710988631"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-300 hover:text-amber-500 transition"
              >
                <MessageCircle className="text-green-500" />
                +91 77109 88631
              </a>

            </div>
          </div>

          {/* CONTACT FORM */}
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
                className="w-full bg-amber-600 hover:bg-amber-500 py-4 rounded font-bold flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : <>Send Message <Send size={16} /></>}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
