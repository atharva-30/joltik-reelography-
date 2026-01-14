import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import {
  Instagram,
  Youtube,
  MessageCircle,
  Send,
  UploadCloud,
} from "lucide-react";
import emailjs from "@emailjs/browser";

/* ================= EMAILJS CONFIG ================= */
const SERVICE_ID = "service_ih08k9n";
const TEMPLATE_ID = "template_ia5j40b";
const PUBLIC_KEY = "8bOusqqJ0t1E7zxbw";
/* ================================================= */

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
      .then(
        () => {
          alert("Message sent successfully! I’ll get back to you shortly.");
          setIsSubmitting(false);
          e.currentTarget.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-neutral-900 to-black"
    >
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Let's Work Together"
          subtitle="Ready to elevate your content? Get in touch."
        />

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* CONTACT INFO */}
          <div className="flex-1 space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Connect with Me
            </h3>

            <p className="text-neutral-400 mb-8">
              Whether it's a birthday bash, a wedding day, or a commercial shoot,
              I'm ready to bring your imagination on your screen.
            </p>

            <div className="space-y-6">
              <a
                href="#"
                className="flex items-center gap-4 text-neutral-300 hover:text-amber-500 transition-colors p-4 bg-neutral-900 rounded-xl border border-neutral-800"
              >
                <Instagram size={24} className="text-pink-500" />
                <span className="font-medium">@joltikreelography</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 text-neutral-300 hover:text-amber-500 transition-colors p-4 bg-neutral-900 rounded-xl border border-neutral-800"
              >
                <Youtube size={24} className="text-red-500" />
                <span className="font-medium">Atharva Raorane Films</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 text-neutral-300 hover:text-amber-500 transition-colors p-4 bg-neutral-900 rounded-xl border border-neutral-800"
              >
                <MessageCircle size={24} className="text-green-500" />
                <span className="font-medium">+91 77109 88631</span>
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="flex-[1.5] bg-neutral-950 p-8 rounded-2xl border border-neutral-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neutral-400 text-sm mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 text-sm mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neutral-400 text-sm mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="user_phone"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="+91XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 text-sm mb-2">
                    Reference Reel (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      disabled
                      className="absolute inset-0 w-full h-full opacity-0 cursor-not-allowed"
                    />
                    <div className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-neutral-500 flex items-center justify-between">
                      <span>File upload disabled</span>
                      <UploadCloud size={18} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 text-sm mb-2">
                  Project Description
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="Tell me about your event or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 hover:bg-amber-500 text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                {isSubmitting ? "Sending..." : <>Send Message <Send size={18} /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
