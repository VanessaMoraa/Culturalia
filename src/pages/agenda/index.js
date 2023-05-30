//funcionando boton de inicio y menu con las paginas, todos redireccionan correctamente

import React, { useState } from 'react';
import Layout from '../layout/layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Agenda() {
  const perfiles = [
    { nombre: 'Perfiles destacados', ruta: '/perfiles' },
    { nombre: 'Agenda cultural', ruta: '/agenda' },
    { nombre: 'Foro', ruta: '/foro' },
    { nombre: 'Usuario', ruta: '/usuario' },
  ];

  const [isOpen, setIsOpen] = useState(false); // Agrega esta línea

  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToHome = () => {
    router.push('/inicio');
  };

  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={toggleMenu}>Abrir menú</button>
        {isOpen && (
          <div
            style={{
              position: 'absolute',
              top: '30px',
              right: '0',
              background: '#fff',
              border: '1px solid #ccc',
              padding: '10px',
              zIndex: '100',
            }}
          >
            <ul>
              {perfiles.map((perfil, index) => (
                <li key={index}>
                  <Link href={perfil.ruta}>{perfil.nombre}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <button onClick={navigateToHome}>Inicio</button>
      </div>

      <h1> aquí va boxes de agenda cultural</h1>
    </Layout>
  );
}
