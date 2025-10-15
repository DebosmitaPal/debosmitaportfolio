import React, { useState } from "react";
import iconpointing from "../assets/iconpointing.webp";

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "debosmitapal429@gmail.com"; 

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Illustration */}
        <div className="flex justify-center">
          <img
            src={iconpointing}
            alt="Contact Illustration"
            className="w-96 h-auto"
          />
        </div>

        {/* Right Side - Copy Email Button */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-5xl font-bold mb-8 font-serif text-yellow-500">
            Get In Touch
          </h2>
          <p className="text-lg mb-6 text-gray-300">
            Click the button below to copy my email address.
          </p>

          <button
            onClick={handleCopy}
            className="px-8 py-3 bg-gradient-to-r from-orange-950 to-yellow-600 rounded-lg font-semibold text-white hover:opacity-90 transition"
          >
            Copy Email
          </button>

          {copied && (
            <p className="mt-4 text-yellow-400 transition-all duration-300">
              ✅ Email copied to clipboard!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
