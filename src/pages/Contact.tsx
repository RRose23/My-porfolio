import React, { useState } from "react";

// Cabeçalho reutilizável
function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block mb-4 px-4 py-2 text-sm bg-purple-700 text-white rounded-full">
        {tag}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        {title.split(" ")[0]}{" in "}
        <span className="text-purple-400">{title.split(" ")[2]}</span>
      </h2>
    </div>
  );
}

// Wrapper reutilizável
function SectionWrapper({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 px-6 bg-gray-800 text-white scroll-mt-24">
      <div className="max-w-2xl mx-auto">{children}</div>
    </section>
  );
}

// Componente principal
export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  return (
    <SectionWrapper id="contact">
      <SectionHeader tag="Contact" title="Get in Touch" />

      <p className="text-lg text-gray-300 leading-relaxed text-center mb-12">
        Feel free to reach out via email or connect with me on LinkedIn. I'm always open to new opportunities and collaborations.
      </p>

      {/* Formulário real via Formspree */}
      <form
        action="https://formspree.io/f/mvgzqwjv"
        method="POST"
        onSubmit={() => setStatus("success")}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm text-gray-300 mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Write your message..."
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded transition"
        >
          Send
        </button>
      </form>

      {/* Mensagem de feedback */}
      {status === "success" && (
        <p className="mt-4 text-green-400 text-center">
          ✅ Your message has been sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-400 text-center">
          ❌ Something went wrong. Please try again.
        </p>
      )}
    </SectionWrapper>
  );
}
