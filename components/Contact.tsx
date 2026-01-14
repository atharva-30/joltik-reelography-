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
        alert("Message sent successfully! I'll get back to you soon.");
        e.currentTarget.reset();
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        alert('Something went wrong. Please try again later.');
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-neutral-900 to-black">
      <div className="container mx-auto px-6">
        <SectionTitle title="Let's Work Together" subtitle="Ready to elevate your content? Get in touch." />

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="flex-1 space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Connect with Me</h3>
            <p className="text-neutral-400 mb-8">
              Whether it's a birthday bash, a wedding day, or a commercial shoot, I'm ready to bring your imagination on your screen.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-neutral-300 p-4 bg-neutral-900 rounded-xl border border-neutral-800">
                <Instagram size={24} className="text-pink-500" />
                <span className="font-medium">@joltikreelography</span>
              </div>
              <div className="flex items-center gap-4 text-neutral-300 p-4 bg-neutral-900 rounded-xl border border-neutral-800">
                <Youtube size={24} className="text-red-500" />
                <span className="font-medium">Atharva Raorane Films</span>
              </div>
              <div className="flex items-center gap-4 text-neutral-300 p-4 bg-neutral-900 rounded-xl border border-neutral-800">
                <MessageCircle size={24} className="text-green-500" />
                <span className="font-medium">+91 7710988631</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-[1.5] bg-neutral-950 p-8 rounded-2xl border border-neutral-800">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white"
                />
                <input
                  type="email"
                  name="reply_to"
                  required
                  placeholder="Email Address"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white"
                />
