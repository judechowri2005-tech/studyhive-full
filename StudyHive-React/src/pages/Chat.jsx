import { useEffect, useRef, useState } from "react";
import api from "../api";
import { useAuth } from "../components/AuthContext";

export default function Chat() {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const bottomRef = useRef(null);

  const fetchMessages = async () => {
    try {
      const res = await api.get("/messages");
      setMessages(res.data);
    } catch (err) {
      // silently ignore poll failures so the UI doesn't flicker errors
    }
  };

  // Poll every 3 seconds for new messages — simple stand-in for real-time sockets
  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      const res = await api.post("/messages", { sender: user.name, text });
      setMessages((prev) => [...prev, res.data]);
      setText("");
    } catch (err) {
      // ignore for simplicity
    }
  };

  return (
    <div className="mx-auto flex max-w-2xl flex-col px-4 py-8" style={{ minHeight: "70vh" }}>
      <h1 className="mb-4 text-xl font-bold text-slate-800">Group Chat</h1>

      <div className="flex flex-1 flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex-1 space-y-2 overflow-y-auto p-4" style={{ maxHeight: "50vh" }}>
          {messages.length === 0 ? (
            <p className="text-center text-sm text-slate-400">No messages yet — say hello!</p>
          ) : (
            messages.map((m) => {
              const isMine = m.sender === user?.name;
              return (
                <div key={m._id} className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm ${
                      isMine
                        ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {!isMine && <p className="mb-0.5 text-xs font-semibold text-indigo-500">{m.sender}</p>}
                    <p>{m.text}</p>
                  </div>
                </div>
              );
            })
          )}
          <div ref={bottomRef} />
        </div>

        <form onSubmit={handleSend} className="flex gap-2 border-t border-slate-200 p-3">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
