"use client";
import React, { useContext, useState } from "react";
import Header from "../Header";
import { motion } from "framer-motion";
import { CursorVariantContext } from "@/app/Contexts/CursorVariantContext";
import { Loader2, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const { setCursorVariant } = useContext(CursorVariantContext);
  const [submitting, setSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessageSent(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message || "Message sent!");
      setFormData({ email: "", message: "" });
    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setSubmitting(false);

      // Optional: Reset the icon after some time
      setTimeout(() => setMessageSent(false), 3000);
    }
  };

  return (
    <div
      className="my-20 mt-40 px-4"
      onMouseEnter={() => setCursorVariant("hide")}
      onMouseLeave={() => setCursorVariant("default")}
    >
      <Header heading={"LET'S CONNECT"} center="true" />
      <p className="mb-10 text-center text-lg text-gray-600 lg:text-xl">
        Contact me on my socials or send a mail
      </p>

      <div className="flex w-full gap-4">
        <div className="hidden w-1/2 justify-center lg:flex">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.8 }}
            src="/images/contact.svg"
            alt="Contact Illustration"
            className="h-[450px]"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-full max-w-xl flex-col justify-center gap-2 text-gray-200 lg:mx-0 lg:w-1/2"
        >
          <motion.input
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.8 }}
            name="email"
            placeholder="Your Email/Contact"
            required
            value={formData.email}
            onChange={handleChange}
            className="rounded-xl border-2 border-gray-500 p-3 text-black focus:outline-none focus:ring focus:ring-gray-300"
          />

          <motion.textarea
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.8 }}
            name="message"
            placeholder="Message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="h-56 rounded-xl border-2 border-gray-500 p-3 text-black focus:outline-none focus:ring focus:ring-gray-300"
          />

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.8 }}
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-neutral-900 py-2 text-gray-50 hover:bg-gray-900 hover:text-white disabled:bg-neutral-700"
            disabled={submitting}
          >
            Send Message
            {submitting && <Loader2 className="animate-spin" />}
            {!submitting && (
              <motion.span
                key="sent-icon"
                initial={{ x: -10, y: 10, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Send size={16} />
              </motion.span>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
