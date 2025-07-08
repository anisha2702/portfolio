'use client';

import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thanks for reaching out!");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="space-y-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          required
          placeholder="Your email"
          className="w-full px-4 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          required
          placeholder="Your message"
          className="w-full px-4 py-2 border rounded min-h-[100px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Send
        </button>
      </form>
    </section>
  );
}
