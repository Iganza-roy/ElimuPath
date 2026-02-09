"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Minimize2, Maximize2, Bot, User } from "lucide-react";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const INITIAL_MESSAGE: Message = {
  id: "init-1",
  text: "Hello! I'm your ElimuPath Guidance Assistant. I can help you understand university placement, career paths, or how to choose the right course. I don't need your grades—just ask me anything!",
  sender: "bot",
  timestamp: new Date(),
};

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isMinimized]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Mock Rule-Based Logic (To be replaced with real AI backend)
    setTimeout(() => {
      const lowerInput = userMsg.text.toLowerCase();
      let responseText = "I'm not sure about that specific detail yet, but generally, it's best to check the official KUCCPS portal for the most up-to-date information.";

      if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        responseText = "Hi there! How can I help you navigate your education journey today?";
      } else if (lowerInput.includes("cluster") || lowerInput.includes("points")) {
        responseText = "Cluster points are calculated based on your grades in specific subjects relevant to a course. You can use our 'Recommendations' tool to calculate yours automatically!";
      } else if (lowerInput.includes("kuccps") || lowerInput.includes("portal")) {
        responseText = "KUCCPS is the body responsible for placing students. You'll need to log in to students.kuccps.net to select your courses specifically when the window opens.";
      } else if (lowerInput.includes("cutoff")) {
        responseText = "Cutoff points change every year based on the performance of students. If you meet the minimum subject requirements, you qualify, but a higher score improves your chances depending on competition.";
      } else if (lowerInput.includes("grade") || lowerInput.includes("score")) {
        responseText = "I don't need your exact grades! My goal is to help you understand the *process*. If you want to check specific course matches, try the Recommendations page.";
      } else if (lowerInput.includes("career") || lowerInput.includes("job")) {
        responseText = "When choosing a career, consider your interests and strengths first. What do you enjoy doing? Money is important, but passion drives long-term success.";
      } else if (lowerInput.includes("medicine") || lowerInput.includes("doctor")) {
        responseText = "Medicine requires strong Biology, Chemistry, and Math/Physics grades. It's very competitive! Have you considered related fields like Nursing, Pharmacy, or Public Health?";
      } else if (lowerInput.includes("engineering")) {
        responseText = "Engineering is great if you love solving problems. It usually requires good grades in Math and Physics. There are many types: Civil, Electrical, Mechanical, and more.";
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500); // Simulate delay
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Minimized Button
  if (!isOpen) {
    return (
      <button
        id="ai-chatbot-toggle"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-[#cce023] text-black border-2 border-black p-4 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all z-50 flex items-center gap-2"
      >
        <MessageCircle size={28} />
        <span className="font-black text-sm uppercase hidden md:inline">Ask AI Guide</span>
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-50 transition-all duration-300 flex flex-col ${
        isMinimized ? "w-72 h-14" : "w-[90vw] md:w-96 h-[500px] max-h-[80vh]"
      }`}
    >
      {/* Header */}
      <div className="bg-black text-[#fffef3] p-3 flex items-center justify-between cursor-pointer" onClick={() => !isMinimized && setIsMinimized(!isMinimized)}>
        <div className="flex items-center gap-2">
          <div className="p-1 bg-[#cce023] rounded-full text-black">
             <Bot size={16} />
          </div>
          <h3 className="font-bold text-sm uppercase tracking-wide">ElimuPath AI Guide</h3>
        </div>
        <div className="flex items-center gap-2">
           <button 
              onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
              className="hover:text-[#cce023]"
           >
              {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
           </button>
           <button 
              onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
              className="hover:text-red-400"
           >
              <X size={18} />
           </button>
        </div>
      </div>

      {/* Body */}
      {!isMinimized && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fffef3]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0 ${msg.sender === "user" ? "bg-gray-200" : "bg-[#cce023]"}`}>
                  {msg.sender === "user" ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div
                  className={`max-w-[80%] p-3 border-2 border-black text-sm font-medium leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-white rounded-tr-none rounded-bl-xl rounded-tl-xl rounded-br-xl"
                      : "bg-[#e5e7eb] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-xl"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
               <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0 bg-[#cce023]">
                     <Bot size={16} />
                  </div>
                  <div className="bg-[#e5e7eb] p-3 border-2 border-black rounded-tr-xl rounded-br-xl rounded-bl-xl flex gap-1 items-center">
                     <span className="w-2 h-2 bg-black rounded-full animate-bounce"></span>
                     <span className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:0.2s]"></span>
                     <span className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer */}
          <div className="p-3 border-t-2 border-black bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about courses, TVETs..."
                className="flex-1 p-2 border-2 border-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#cce023]"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="p-2 bg-[#cce023] border-2 border-black hover:translate-y-[-1px] active:translate-y-[1px] disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-gray-500 mt-1 text-center font-bold uppercase">
               Not advice. Verify with KUCCPS.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
