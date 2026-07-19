'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Trash2, MessageSquare, Mail, Maximize2 } from 'lucide-react';
import { Logo } from '@/components/shared/logo';

const WHATSAPP_NUMBER = "916201855200";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi CraftBit! 👋 I'm interested in building a website. Could you please share more details about your services and pricing?"
);

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const EMAIL = "hello@craftbit.in";

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

const STORAGE_KEY = "craftbit_chat";

/* ---------------- NORMALIZE TEXT ---------------- */
const normalize = (text: string) => {
  return text.toLowerCase().replace(/[^a-z0-9 ]/g, '');
};

/* ---------------- RESPONSES ---------------- */
const responses = [
  {
    keywords: ['hi', 'hello', 'hey'],
    reply:
      'Hey 👋 Welcome to CraftBit! I’m here to help you with anything related to websites. What would you like to know?',
  },
  {
    keywords: ['price', 'cost', 'pricing', 'charge'],
    reply:
      'Our pricing usually starts from ₹8,000 💰 for a clean and professional website. The final cost depends on your requirements and features.',
  },
  {
    keywords: ['mobile', 'responsive'],
    reply:
      'Yes 👍 your website will be fully responsive and work smoothly on mobile, tablet, and desktop devices.',
  },
  {
    keywords: ['seo'],
    reply:
      'Yes 🚀 we follow SEO best practices like fast loading, proper structure, and clean code to help your website perform better on Google.',
  },
  {
    keywords: ['domain', 'hosting'],
    reply:
      'We provide free hosting using platforms like Vercel or Netlify. For custom domains like .com or .in, you only need to pay for the domain.',
  },
  {
    keywords: ['domain connect', 'own domain'],
    reply:
      'Yes ✅ you can connect your own domain easily. We will help you set everything up without any technical hassle.',
  },
  {
    keywords: ['service', 'services', 'website', 'websites', 'webiste'],
    reply:
      'We create personal websites, portfolios, business sites, e-commerce stores, and custom web applications based on your needs.',
  },
  {
    keywords: ['portfolio', 'work', 'example'],
    reply:
      'You can explore our Work section to see real projects and designs we’ve created for clients.',
  },
  {
    keywords: ['custom'],
    reply:
      'Yes 💡 we can build custom features based on your exact requirements and ideas.',
  },
  {
    keywords: ['redesign'],
    reply:
      'Yes 🔄 we can redesign your existing website to improve its design, speed, and overall user experience.',
  },
  {
    keywords: ['animation'],
    reply:
      'Yes ✨ we add smooth and modern animations to make your website more engaging and interactive.',
  },
  {
    keywords: ['support'],
    reply:
      'We provide 6 months of free support after delivery. This includes bug fixes and small updates whenever needed.',
  },
  {
    keywords: ['contact', 'talk', 'person', 'human'],
    reply:
      'You can easily connect with us on WhatsApp/Email using the button below. We’ll be happy to talk and understand your requirements.',
  },
];

/* ---------------- COMPONENT ---------------- */
export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [expanded, setExpanded] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  /* -------- LOAD FROM STORAGE -------- */
  useEffect(() => {
    const savedChat = localStorage.getItem(STORAGE_KEY);

    if (savedChat) {
      setMessages(JSON.parse(savedChat));
    } else {
      setMessages([
        {
          text: 'Hi 👋 How can I help you today?',
          sender: 'bot',
        },
      ]);
    }
  }, []);

  /* -------- SAVE TO STORAGE -------- */
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  /* -------- AUTO SCROLL -------- */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages, isTyping]);

  const defaultReply =
    'You can ask me about pricing, delivery, or services. I’ll guide you 😊';

  /* -------- GET REPLY -------- */
  const getReply = (text: string) => {
    const cleanText = normalize(text);

    const wordCount = cleanText.trim().split(/\s+/).length;

    if (wordCount > 12) {
      return defaultReply;
    }

    const match = responses.find((item) =>
      item.keywords.some((keyword) =>
        cleanText.includes(normalize(keyword))
      )
    );

    return match ? match.reply : defaultReply;
  };

  /* -------- SEND MESSAGE -------- */
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      text: input,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        text: getReply(userMessage.text),
        sender: 'bot',
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  /* -------- CLEAR CHAT -------- */
  const clearChat = () => {
    const initialMessage: Message[] = [
      {
        text: 'Hi 👋 How can I help you today?',
        sender: 'bot',
      },
    ];

    setMessages(initialMessage);
    localStorage.removeItem(STORAGE_KEY);
  };

  const showClearButton = messages.length > 1;

  return (
    <>
      {/* FLOAT BUTTON */}
      <div
        className="fixed bottom-8 right-8 z-[9999] flex items-center gap-3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && !open && (
          <span className="flex items-center gap-2 bg-ink/90 text-paper text-sm px-4 py-2 rounded-full shadow-lg">
            <span className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce" />
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce [animation-delay:300ms]" />
            </span>
            Let&apos;s Talk
          </span>
        )}

        <button
          onClick={() => {
            if (expanded) return;
            setOpen((prev) => !prev);
          }}
          className="relative w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg hover:scale-110 transition cursor-pointer"
        >
          <span className="absolute inset-0 border border-green-400/30 rounded-full animate-ping" />

          {open ? (
            <X className="text-white w-5 h-5 z-10" />
          ) : (
            <MessageCircle className="text-white w-5 h-5 z-10" />
          )}
        </button>
      </div>

      {/* CHAT PANEL */}
      {open && (
        <div className="fixed bottom-24 right-8 w-[320px] z-[9999]">
          <div className="rounded-3xl bg-paper/90 backdrop-blur shadow-2xl overflow-hidden flex flex-col border border-rule">

            {/* HEADER */}
            <div className="flex items-center justify-between bg-ink text-paper px-4 py-3">

              {/* LEFT SIDE */}
              <div className="flex items-center gap-3">

                {/* LOGO */}
                <div className="relative flex size-9 items-center justify-center rounded-full border-2 border-paper/40 bg-paper/10 text-paper shadow-md">
                  <Logo variant="mark" className="size-6" />
                  <span className="absolute inset-0 rounded-full bg-paper/20 blur-md opacity-40" />
                </div>

                {/* TITLE */}
                <div className="leading-tight">
                  <p className="text-sm font-semibold tracking-wide">
                    CraftBit Assistant
                  </p>
                  <p className="text-[10px] text-paper/70">
                    Online • Ready to help
                  </p>
                </div>
              </div>

              {/* RIGHT ACTIONS */}
              <div className="flex items-center gap-2">

                {/* EXPAND */}
                <button className="relative group w-8 h-8 flex items-center justify-center rounded-full bg-paper/10 hover:bg-paper/20 transition cursor-pointer">

                  <Maximize2
                    className="w-4 h-4"
                    onClick={() => {
                      setExpanded(true);
                      setOpen(false);
                    }} />

                  <span className="absolute -bottom-8 right-0 text-[10px] bg-ink/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    Expand chat
                  </span>
                </button>

                {/* CLEAR CHAT */}
                {showClearButton && (
                  <button
                    onClick={clearChat}
                    className="relative group w-8 h-8 flex items-center justify-center rounded-full bg-paper/10 hover:bg-paper/20 transition cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />

                    <span className="absolute -bottom-8 right-0 text-[10px] bg-ink/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                      Clear chat
                    </span>
                  </button>
                )}

              </div>
            </div>

            {/* MESSAGES */}
            <div className="h-64 overflow-y-auto p-3 space-y-3 bg-paper">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`text-sm px-3 py-2 rounded-2xl max-w-[75%] ${msg.sender === 'user'
                    ? 'ml-auto bg-ember text-paper'
                    : 'bg-ink/5 text-ink'
                    }`}
                >
                  {msg.text}
                </div>
              ))}

              {isTyping && (
                <div className="bg-ink/5 px-3 py-2 rounded-2xl w-fit">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-ember rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-ember rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-ember rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* INPUT */}
            <div className="border-t border-rule p-2">
              <div className="flex items-center bg-ink/5 rounded-full px-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      sendMessage();
                    }
                  }}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent outline-none text-sm text-ink placeholder:text-ink-muted"
                />

                <button
                  onClick={sendMessage}
                  className="w-8 h-8 flex items-center justify-center bg-ink text-paper rounded-full hover:scale-110 transition cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* WHATSAPP/EMAIL CTA */}

            <div className="grid grid-cols-2 border-t border-rule">

              {/* WHATSAPP */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                className="flex items-center justify-center gap-2 py-2 text-sm font-semibold bg-green-500 text-white hover:bg-green-600 transition cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>

              {/* EMAIL */}
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 text-sm font-semibold bg-ink text-paper hover:bg-ink/90 transition cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>

            </div>
          </div>
        </div>
      )}


      {expanded && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-ink/40 p-3">

          <div className="w-full max-w-[420px] sm:w-[420px] bg-paper rounded-2xl shadow-2xl overflow-hidden border border-rule">

            {/* HEADER */}
            <div className="flex items-center justify-between bg-ink text-paper px-4 py-3">

              {/* LEFT SIDE */}
              <div className="flex items-center gap-3">

                {/* LOGO */}
                <div className="flex size-9 items-center justify-center rounded-full border border-paper/40 bg-paper/10 text-paper shadow-md">
                  <Logo variant="mark" className="size-6" />
                </div>

                <div className="leading-tight">
                  <p className="text-sm font-semibold">
                    CraftBit Assistant
                  </p>
                  <p className="text-[10px] text-paper/70">
                    Online • Ready to help
                  </p>
                </div>

              </div>

              {/* RIGHT SIDE ACTIONS */}
              <div className="flex items-center gap-3">

                {/* CLEAR CHAT */}
                <button
                  onClick={() => {
                    setMessages([
                      {
                        text: 'Hi 👋 How can I help you today?',
                        sender: 'bot',
                      },
                    ]);
                    localStorage.removeItem(STORAGE_KEY);
                  }}
                  className="text-paper/80 hover:text-paper cursor-pointer"
                  title="Clear chat"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                {/* CLOSE + COLLAPSE */}
                <button
                  onClick={() => {
                    setExpanded(false);
                    setOpen(true);
                  }}
                  className="text-paper cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

              </div>
            </div>

            {/* CHAT AREA */}
            <div className="h-[70vh] sm:h-[400px] flex flex-col">

              {/* MESSAGES */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-paper">

                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`text-sm px-3 py-2 rounded-2xl max-w-[75%] break-words ${msg.sender === 'user'
                      ? 'ml-auto bg-ember text-paper'
                      : 'bg-ink/5 text-ink'
                      }`}
                  >
                    {msg.text}
                  </div>
                ))}

                {isTyping && (
                  <div className="text-xs text-ink-muted px-2">
                    typing...
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* INPUT */}
              <div className="border-t border-rule p-2 flex items-center gap-2 bg-paper">

                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') sendMessage();
                  }}
                  placeholder="Type your message..."
                  className="flex-1 text-sm outline-none bg-ink/5 text-ink placeholder:text-ink-muted px-3 py-2 rounded-full"
                />

                <button
                  onClick={sendMessage}
                  className="bg-ink text-paper p-2 rounded-full hover:scale-105 transition cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>

              </div>
            </div>
          </div>

        </div>
      )}
    </>
  );
}
