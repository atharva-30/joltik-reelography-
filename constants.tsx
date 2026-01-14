import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { WHATSAPP_PHONE_NUMBER } from "../constants";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `
📩 *New Website Enquiry*

👤 Name: ${form.name}
📧 Email: ${form.email}
💬 Message:
${form.message}
    `;

    const url = `https://wa.me/${+917710988631}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let’s create something impactful"
        />

        <form
          onSubmit={handleSubmit}
          className="mt-12 bg-neutral-900 p-8 rounded-xl border border-neutral-800 space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full p-4 rounded-md bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-amber-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            className="w-full p-4 rounded-md bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-amber-500"
          />

          <textarea
            name="message"
            placeholder="Tell me about your project"
            rows={5}
            required
            onChange={handleChange}
            className="w-full p-4 rounded-md bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-amber-500"
          />

          <button
            type="submit"
            className="w-full py-4 font-bold text-white rounded-md bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:scale-[1.02] transition-transform"
          >
            Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
