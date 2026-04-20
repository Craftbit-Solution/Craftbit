"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "916201855200";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi CraftBit! 👋 I'm interested in building a website. Could you please share more details about your services and pricing?"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-8 right-8 z-[9999] flex items-center justify-end gap-3 no-underline group"
    >
      {/* Hover Label */}
      {hovered && (
        <span className="flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-full border border-green-500/20 shadow-lg whitespace-nowrap">
          <span className="flex items-center gap-[3px]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-bounce [animation-delay:0ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-bounce [animation-delay:150ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-bounce [animation-delay:300ms]" />
          </span>
          Let&apos;s Talk
        </span>
      )}

      {/* Button Circle */}
      <span className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-[0_4px_16px_rgba(34,197,94,0.3)] transition-transform duration-200 ease-out group-hover:scale-110 group-active:scale-95">

        {/* Single subtle ripple ring */}
        <span className="absolute inset-0 rounded-full border border-green-400/30 animate-ping [animation-duration:2.5s]" />

        {/* Lucide Icon */}
        <MessageCircle
          className="w-5 h-5 text-white relative z-10 transition-transform duration-300 group-hover:-rotate-12"
          strokeWidth={2}
          fill="rgba(255,255,255,0.15)"
        />
      </span>
    </a>
  );
}
