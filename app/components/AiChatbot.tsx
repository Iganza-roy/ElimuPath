"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Minimize2, Maximize2, Bot, User, Loader2 } from "lucide-react";
import { useChat } from "@ai-sdk/react";

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, isLoading } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "init-1",
        role: "assistant",
        content: "Hello! I'm your ElimuPath Guidance Assistant. I can help you understand university placement, career paths, or how to choose the right course. I don't need your grades—just ask me anything!",
      },
    ],
  });

  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput("");
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isMinimized]);

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
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-gray-200" : "bg-[#cce023]"}`}>
                  {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div
                  className={`max-w-[80%] p-3 border-2 border-black text-sm font-medium leading-relaxed ${
                    msg.role === "user"
                      ? "bg-white rounded-tr-none rounded-bl-xl rounded-tl-xl rounded-br-xl"
                      : "bg-[#e5e7eb] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-xl"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
               <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0 bg-[#cce023]">
                     <Bot size={16} />
                  </div>
                  <div className="bg-[#e5e7eb] p-3 border-2 border-black rounded-tr-xl rounded-br-xl rounded-bl-xl flex gap-1 items-center">
                     <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer */}
          <div className="p-3 border-t-2 border-black bg-white">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about courses, TVETs..."
                className="flex-1 p-2 border-2 border-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#cce023]"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2 bg-[#cce023] border-2 border-black hover:translate-y-[-1px] active:translate-y-[1px] disabled:opacity-50"
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </form>
            <p className="text-[10px] text-gray-500 mt-1 text-center font-bold uppercase">
               Not advice. Verify with KUCCPS.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
