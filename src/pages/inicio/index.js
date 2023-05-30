import Layout from '../layout/layout';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Inicio() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToHome = () => {
    router.push('/inicio');
  };

  const perfiles = [
    { nombre: 'Perfiles destacados', ruta: '/perfiles' },
    { nombre: 'Agenda cultural', ruta: '/agenda' },
    { nombre: 'Foro', ruta: '/foro' },
    { nombre: 'Usuario', ruta: '/usuario' },
  ];

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
              backgroundColor: 'rgba(9, 58, 121, 0.8)',
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

      {/* Caja de inicio */}
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <h2>
          <Link href="/inicio">Inicio</Link>
        </h2>
      </div>
      {/* Fin de la caja de inicio */}

      <div>
        {/* Cajas */}
        <div
          style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}
        >
          {perfiles.map((perfil, index) => (
            <div
              key={index}
              style={{ border: '1px solid #ccc', padding: '10px', background: '#f1f1f1', width: '200px' }}
            >
              <h2>
                <Link href={perfil.ruta}>{perfil.nombre}</Link>
              </h2>
            </div>
          ))}
        </div>
        {/* Fin de las cajas */}
      </div>
    </Layout>
  );
}