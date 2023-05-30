import Layout from "./layout/layout";
import { useState } from 'react';
import Link from 'next/link';


export default function Foro() {
    const perfiles = [
        { nombre: 'Perfiles destacados', ruta: '/perfiles' },
        { nombre: 'Agenda cultural', ruta: '/agenda' },
        { nombre: 'Foro', ruta: '/foro' },
        { nombre: 'Usuario', ruta: '/usuario' },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
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
                <div><h1>Aquí va lo del foro</h1></div>
            </Layout>
        </div>
    );
}

