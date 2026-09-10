import React from 'react';

function MessageList({ messages }) {
  if (messages.length === 0) {
    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#64748b', padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '12px' }}>💬</div>
        <h3 style={{ color: '#94a3b8', fontSize: '1.2rem', marginBottom: '6px' }}>Bienvenido a DevfSeek</h3>
        <p style={{ maxWidth: '400px', fontSize: '0.9rem' }}>
          Escribe tu primer mensaje abajo. El formulario está validado en tiempo real con <strong>React Hook Form</strong> y <strong>Yup</strong>.
        </p>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '24px', maxWidth: '800px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {messages.map((msg) => (
        <div
          key={msg.id}
          style={{
            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            maxWidth: '80%',
            background: msg.sender === 'user' ? '#0284c7' : '#1f2937',
            color: '#f8fafc',
            padding: '14px 18px',
            borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div style={{ fontSize: '0.75rem', color: msg.sender === 'user' ? '#bae6fd' : '#94a3b8', marginBottom: '4px', fontWeight: 600 }}>
            {msg.sender === 'user' ? 'Tú' : 'DevfSeek Assistant'} • {msg.timestamp}
          </div>
          <p style={{ fontSize: '0.95rem', wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>
            {msg.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MessageList;