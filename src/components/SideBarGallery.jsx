import React from 'react';

export const Sidebar = () => {
    return (
      <div className="sidebar" style={{  position: 'fixed', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '15px', background: '#f8f9fa' }}>
        <h3 style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>Secciones</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '8px' }}>Ejemplo 1</li>
          <li style={{ marginBottom: '8px' }}>Ejemplo 2</li>
          <li style={{ marginBottom: '8px' }}>Ejemplo 3</li>
        </ul>
      </div>
    );
  };



