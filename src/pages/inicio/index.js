//boton de inicio y menu funcionando, cuadro para formulario, adecuarlo al draw.io

import React from 'react';
import Layout from "../layout/layout";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ForumBox = ({ title, content }) => {
    return (
        <div className="forum-box">
            <h2 className="forum-box-title">{title}</h2>
            <p className="forum-box-content">{content}</p>
        </div>
    );
};

export default function Foro() {
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
        router.push('/');
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

            <h1> aquí va foro </h1>

            <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

        </Layout>
    );
}
