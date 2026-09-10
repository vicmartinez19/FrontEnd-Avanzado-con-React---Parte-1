import React, { useState } from 'react';
import Header from './components/Header';
import MessageList from './components/MessageList';
import ChatInput from './components/ChatInput';

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'assistant',
      text: '¡Hola! Soy DevfSeek. ¿En qué puedo ayudarte hoy con respecto al desarrollo en React?',
      timestamp: '12:00 PM'
    }
  ]);

  const handleSendMessage = (text) => {
    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulación de respuesta instantánea para la entrega Parte 1
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        sender: 'assistant',
        text: `Recibí tu consulta: "${text}". En las siguientes partes conectaremos el motor Ollama/Backend para procesarla.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#0b0f19' }}>
      <Header />
      <MessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;