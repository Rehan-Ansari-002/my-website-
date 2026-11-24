
import { useState, useEffect } from "react";
import "./Chat.css";

function Chat() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("rehanChats")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("rehanChats", JSON.stringify(chatHistory));
  }, [chatHistory]);

  function getReply(text) {
    const msg = text.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
      return "Hello! Welcome to Rehan AI Chat. How can I help you today?";
    }

    if (msg.includes("how are you")) {
      return "I'm doing well! Thanks for asking. How are you?";
    }

    if (msg.includes("your name")) {
      return "I'm Rehan AI, your simple conversation assistant.";
    }

    if (msg.includes("help")) {
      return "Sure! Tell me what you would like to discuss.";
    }

    if (msg.includes("thank")) {
      return "You're welcome! Feel free to continue our conversation.";
    }

    if (msg.includes("bye")) {
      return "Goodbye! Have a nice day.";
    }

    return "I received your message! This is a demo chat, so I can only give predefined replies. Tell me more about what you want to discuss.";
  }

  function handleSend(e) {
    e.preventDefault();

    const text = input.trim();
    if (!text) return;

    const updatedMessages = [
      ...messages,
      { role: "user", content: text }
    ];

    const reply = getReply(text);

    const finalMessages = [
      ...updatedMessages,
      { role: "assistant", content: reply }
    ];

    setMessages(finalMessages);
    setInput("");

    saveChat(finalMessages);
  }

  function saveChat(chatMessages) {
    if (chatMessages.length === 0) return;

    const title =
      chatMessages.find(m => m.role === "user")?.content || "New Chat";

    const newChat = {
      id: Date.now(),
      title,
      messages: chatMessages
    };

    setChatHistory(previous => [
      newChat,
      ...previous.filter(chat => chat.messages !== messages)
    ]);
  }

  function handleNewChat() {
    if (messages.length > 0) {
      saveChat(messages);
    }

    setMessages([]);
    setInput("");
  }

  function openOldChat(chat) {
    setMessages(chat.messages);
  }

  function deleteChat(id) {
    setChatHistory(previous =>
      previous.filter(chat => chat.id !== id)
    );
  }

  return (
    <div className="chat-page">

      {sidebarOpen && (
        <aside className="chat-sidebar">

          <div className="chat-sidebar-top">
            <h2>Rehan AI</h2>
            <button
              className="chat-close"
              onClick={() => setSidebarOpen(false)}
            >
              ×
            </button>
          </div>

          <button
            className="new-chat-btn"
            onClick={handleNewChat}
          >
            + New Chat
          </button>

          <h4>Recent Chats</h4>

          <div className="chat-history">
            {chatHistory.map(chat => (
              <div className="history-item" key={chat.id}>
                <button onClick={() => openOldChat(chat)}>
                  {chat.title.length > 22
                    ? chat.title.slice(0, 22) + "..."
                    : chat.title}
                </button>

                <button
                  className="delete-chat"
                  onClick={() => deleteChat(chat.id)}
                  title="Delete chat"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

        </aside>
      )}

      <main className="chat-main">

        <header className="chat-header">
          <button
            className="menu-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>

          <h2>AI Assistant</h2>
          <span>Conversation Demo</span>
        </header>

        <section className="chat-messages">

          {messages.length === 0 && (
            <div className="chat-welcome">
              <h1>How can I help you today?</h1>
              <p>Start a conversation with Rehan AI.</p>
            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.role}`}
            >
              <div className="chat-avatar">
                {message.role === "user" ? "You" : "AI"}
              </div>

              <p>{message.content}</p>
            </div>
          ))}

        </section>

        <form
          className="chat-input-area"
          onSubmit={handleSend}
        >
          <input
            type="text"
            placeholder="Message Rehan AI..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />

          <button type="submit" disabled={!input.trim()}>
            Send
          </button>
        </form>

        <p className="chat-disclaimer">
          Rehan AI Conversation Demo — Predefined responses only.
        </p>

      </main>
    </div>
  );
}

export default Chat;
