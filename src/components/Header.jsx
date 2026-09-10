import React from 'react';

function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', background: '#111827', borderBottom: '1px solid #1f2937' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '1.5rem' }}>🤖</span>
        <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#38bdf8' }}>DevfSeek</span>
        <span style={{ fontSize: '0.75rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '2px 8px', borderRadius: '9999px', fontWeight: 600 }}>
          Parte 1: Base & Forms
        </span>
      </div>
      <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
        React Hook Form + Yup
      </div>
    </header>
  );
}

export default Header;