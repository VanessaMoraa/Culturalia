//boton de inicio y menu funcionando, cuadro para formulario, adecuarlo al draw.io

import React from 'react';
import Layout from "./layout/layout";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Card from '@/components/card';


const ForumBox = ({ title, content }) => {
    return (
        <div className="forum-box">
            <h2 className="forum-box-title">{title}</h2>
            <p className="forum-box-content">{content}</p>
        </div>
    );
};
const places = [
    {
        title: "Piedra el Peñol",
        description: "Fue un elemento de adoración para los indígenas que en tiempos prehispánicos habitaron la región, y durante la época colonial se gestaron leyendas tan famosas como la del diablo que intentó llevársela varias veces"
        //Falta imagen 
    },
    {
        title: "Mina de Sal",
        description: "Con más de 500 años de historia bajo tierra se ha convertido en un nuevo atractivo turístico de Colombia para el Mundo"
        //Falta imagen 
    },
    {
        title: "La Candelaria",
        description: "La Candelaria como centro histórico cultural se fortaleció con el proceso de descentralización política, administrativa y fiscal de Santa Fe de Bogotá, D.C., mediante la ley primera de 1992, que reglamentó la división territorial del Distrito"
        //Falta imagen 
    },
    {
        title: "Finlandia",
        description: "Se sitúa en la cima de una colina que ofrece vistas panorámicas de algunos de los paisajes más magníficos del eje cafetero"
        //Falta imagen 
    },
    {
        title: "Bahia Solano",
        description: "llllllll"
        //Falta imagen 
    },
    {
        title: "Piedra el Peñol 6",
        description: "llllllll"
        //Falta imagen 
    },
]
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

            <h1> Culturalia </h1>

            <div style={{ display: "flex", justifyContent: "space-between" }}>

                {places.map((place, index) => {

                    return <Card key={index} title={place.title} description={place.description} image={"imagen"} />
                })}
            </div>
        </Layout>
    );

}
