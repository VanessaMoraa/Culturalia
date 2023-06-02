//boton de inicio y menu funcionando, cuadro para formulario, adecuarlo al draw.io

import React from 'react';
import Layout from "./layout/layout";
import { useState } from 'react';
//import Link from 'next/link';
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
        description: "Fue un elemento de adoración para los indígenas que en tiempos prehispánicos habitaron la región, y durante la época colonial se gestaron leyendas tan famosas como la del diablo que intentó llevársela varias veces",
        image: "/Piedra.jpg"

    },

    {
        title: "Mina de Sal",
        description: "Con más de 500 años de historia bajo tierra se ha convertido en un nuevo atractivo turístico de Colombia para el Mundo",
        image: "/Mina de sal.jpg"
    },
    {
        title: "La Candelaria",
        description: "La Candelaria como centro histórico cultural se fortaleció con el proceso de descentralización política, administrativa y fiscal de Santa Fe de Bogotá, D.C., mediante la ley primera de 1992, que reglamentó la división territorial del Distrito",
        image: "/Candelaria.jpg"
    },
    {
        title: "Finlandia",
        description: "Se sitúa en la cima de una colina que ofrece vistas panorámicas de algunos de los paisajes más magníficos del eje cafetero",
        image: "/finlandia.jpg"
    },
    {
        title: "Bahia Solano",
<<<<<<< HEAD
        description: "Tiene unos paisajes inimaginables, la selva húmeda se siente a flor de piel, el sol da un calor húmedo y las lluvias generan una increíble necesidad de adentrarse en el mar",
        image: "/Bahia Solano.jpg"
    },
    {
        title: "Islas de los Monos",
        description: "Se trata de un centro de rescate ubicado a 30 km de Iquitos, donde lo único que se respira es vegetación y libertad. Aquí pasarás divertidos e inolvidables momentos en compañía de muchos monitos que viven temporalmente en este lugar",
        image: "/Islas del mico.jpg"
=======
        description: "Tiene unos paisajes inimaginables, la selva húmeda se siente a flor de piel, el sol da un calor húmedo y las lluvias generan una increíble necesidad de adentrarse en el mar"
        //Falta imagen 
    },
    {
        title: "Islas de los Monos",
        description: "Se trata de un centro de rescate ubicado a 30 km de Iquitos, donde lo único que se respira es vegetación y libertad. Aquí pasarás divertidos e inolvidables momentos en compañía de muchos monitos que viven temporalmente en este lugar"
        //Falta imagen 
>>>>>>> 727b4ef581b3715fc40a68202e4279645592d6f5
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
            <div>
                <h1> Culturalia </h1>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "80vw", gap: "10px", }}>

                    {places.map((place, index) => {

                        return <Card key={index} title={place.title} description={place.description} image={place.image} />
                    })}
                </div>
            </div>
        </Layout>
    );

}
