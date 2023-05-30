//Aquí va forms, para agregar imagen, box que redirecciona al inicio y box con menu a las 4 paginas


import Layout from "./layout/layout";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Usuario() {
    const perfiles = [
        { nombre: 'Perfiles destacados', ruta: '/perfiles' },
        { nombre: 'Agenda cultural', ruta: '/agenda' },
        { nombre: 'Foro', ruta: '/foro' },
        { nombre: 'Usuario', ruta: '/usuario' },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navigateToHome = () => {
        router.push('/inicio');
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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

            <div style={{ width: '800px', padding: '40px', border: '5px solid #ccc', borderRadius: '10px' }}>
                <h1 style={{ marginBottom: '20px' }}>Registrate aquí</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="input-style" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="input-style" required />
                    </div>
                  
                   
                    <div className="mb-6">
                        <p> Selecciona una imagen en alta calidad </p>
                        <label htmlFor="user_avatar" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                        <input type="file" id="user_avatar" className="file-input-style" />

                    </div>
                    <button type="submit" className="button-style">Enviar</button>
                </form>
            </div>
        </Layout>
    );
}
