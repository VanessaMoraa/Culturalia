//box de inicio y menu funcionando a su totalidad, caja con color para modificar donde iria  foto, nombre, correo, varias cajas

import React from 'react';
import Layout from "../layout/layout";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


function Tarjeta({ nombre, identificacion, correo, avatar }) {
    const cardStyles = {
      background: "rgb(49,43,145)",
      background: "linear-gradient(169deg, rgba(49,43,145,0.7483368347338936) 0%, rgba(9,85,121,0.46262254901960786) 43%, rgba(0,212,255,1) 91%)",
      color: "white",
      boxShadow: "10px 10px 6px 0px rgba(255,255,255,0.22)",
    };
  
    const avatarStyles = {
      width: "80px",
      height: "80px",
    };
  
    return (
      <div
        className="w-full max-w-md p-4 mb- bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        style={cardStyles}
      >
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-12 h-12 mb-3 rounded-full shadow-lg"
            src={avatar}
            alt="Imagen de perfil"
            style={avatarStyles}
          />
          <h5 className="mb-1 text-xl font-medium text-white-900 dark:text-white">
            {nombre}
          </h5>
          <span className="text-sm text-white-500 dark:text-white-400">
            {identificacion}
          </span>
          <span className="text-sm text-white-500 dark:text-white-400">
            {correo}
          </span>
        </div>
      </div>
    );
  }
  
  export default function Perfiles() {
    const perfiles = [
      { nombre: 'Perfiles destacados', ruta: '/perfiles' },
      { nombre: 'Agenda cultural', ruta: '/agenda' },
      { nombre: 'Foro', ruta: '/foro' },
      { nombre: 'Usuario', ruta: '/usuario' },
    ];
  
    const [isOpen, setIsOpen] = useState(false);
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
        <div className="mt-8">
          <button onClick={navigateToHome}>Inicio</button>
        </div>
  
        <Tarjeta
          nombre="Nombre de ejemplo"
          identificacion="ID de ejemplo"
          correo="correo@example.com"
          avatar="ruta/al/avatar.jpg"
        />
      </Layout>
    );
  }