//box de inicio y menu funcionando a su totalidad, caja con color para modificar donde iria  foto, nombre, correo, varias cajas

import React from 'react';
import Layout from "../layout/layout";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import './perfiles.css';

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
    router.push('/');
  };

  function Tarjeta({ nombre, identificacion, correo, avatar, conoce }) {
    return (
      <div className="tarjeta">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-12 h-12 mb- rounded-full shadow-lg"
            src={avatar}
            alt="Imagen de perfil"
          />
          <h5 className="mb-1 text-xl font-medium text-white-900">
            {nombre}
          </h5>
          <div className="text-sm text-white-500">
            <span>{correo}</span>
          </div>
          <div className="text-sm text-white-500">
            <span>{identificacion}</span>
          </div>
          <div className="text-sm text-white-500">
            <span>{conoce}</span>
          </div>
          <form>
            <p className="clasificacion">
              <input id="radio1" type="radio" name="estrellas" value="5" checked />
              <label htmlFor="radio1">★</label>
              <input id="radio2" type="radio" name="estrellas" value="4" />
              <label htmlFor="radio2">★</label>
              <input id="radio3" type="radio" name="estrellas" value="3" />
              <label htmlFor="radio3">★</label>
              <input id="radio4" type="radio" name="estrellas" value="2" />
              <label htmlFor="radio4">★</label>
              <input id="radio5" type="radio" name="estrellas" value="1" />
              <label htmlFor="radio5">★</label>
            </p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="mt-6">
        <button onClick={navigateToHome}>InicioFuncional</button>
      </div>

      <div className="tarjetas-container">
        <Tarjeta
          nombre="Michael Lawson"
          identificacion="Nómada digital"
          correo="michael.lawson@reqres.in"
          conoce="Trabajo y viajo alrededor del mundo, recomiendo los mejores sitios para nómadas digitales como yo."
          avatar="https://reqres.in/img/faces/7-image.jpg"
        />

        <Tarjeta
          nombre="Rachel Howell"
          identificacion="Foodie"
          correo="rachel.howell@reqres.in"
          conoce="Todo sobre comidas tipicas a un buen precio."
          avatar="https://reqres.in/img/faces/12-image.jpg"
        />

        <Tarjeta
          nombre="Lindsay Ferguson"
          identificacion="Viajera"
          correo="lindsay.ferguson@reqres.in"
          conoce="Te recomiendo los mejores y más económicos lugares culturales."
          avatar="https://reqres.in/img/faces/8-image.jpg"
        />

        <Tarjeta
          nombre="Tobias Funke"
          identificacion="Gestor cultural"
          correo="tobias.funke@reqres.in"
          conoce="Desde mi experiencia te comparto las mejores experiencias culturales."
          avatar="https://reqres.in/img/faces/9-image.jpg"
        />


        <Tarjeta
          nombre="Byron Fields"
          identificacion="Influencer"
          correo="byron.fields@reqres.in"
          conoce="Todo tipo de experiencia cultural recomendado por mis seguidores."
          avatar="https://reqres.in/img/faces/10-image.jpg"
        />



        <Tarjeta
          nombre="George Edwards"
          identificacion="Cinéfilo"
          correo="george.edwards@reqres.in"
          conoce="Te recomiendo todo sobre el cine y la cultura."
          avatar="https://reqres.in/img/faces/11-image.jpg"
        />



        <Tarjeta
          nombre="Tobias Funke"
          identificacion="Gestor cultural"
          correo="tobias.funke@reqres.in"
          conoce="Desde mi experiencia te comparto las mejores experiencias culturales."
          avatar="https://reqres.in/img/faces/9-image.jpg"
        />

        <Tarjeta
          nombre="George Edwards"
          identificacion="Cinéfilo"
          correo="george.edwards@reqres.in"
          conoce="Te recomiendo todo sobre el cine y la cultura."
          avatar="https://reqres.in/img/faces/11-image.jpg"
        />

        <Tarjeta
          nombre="Michael Lawson"
          identificacion="Nómada digital"
          correo="michael.lawson@reqres.in"
          conoce="Trabajo y viajo alrededor del mundo, recomiendo los mejores sitios para nómadas digitales como yo."
          avatar="https://reqres.in/img/faces/7-image.jpg"
        />

        <Tarjeta
          nombre="Rachel Howell"
          identificacion="Foodie"
          correo="rachel.howell@reqres.in"
          conoce="Todo sobre comidas tipicas a un buen precio."
          avatar="https://reqres.in/img/faces/12-image.jpg"
        />

        <Tarjeta
          nombre="Byron Fields"
          identificacion="Influencer"
          correo="byron.fields@reqres.in"
          conoce="Todo tipo de experiencia cultural recomendado por mis seguidores."
          avatar="https://reqres.in/img/faces/10-image.jpg"
        />

        <Tarjeta
          nombre="Tobias Funke"
          identificacion="Gestor cultural"
          correo="tobias.funke@reqres.in"
          conoce="Desde mi experiencia te comparto las mejores experiencias culturales."
          avatar="https://reqres.in/img/faces/9-image.jpg"
        />

        <Tarjeta
          nombre="Rachel Howell"
          identificacion="Foodie"
          correo="rachel.howell@reqres.in"
          conoce="Todo sobre comidas tipicas a un buen precio."
          avatar="https://reqres.in/img/faces/12-image.jpg"
        />

        <Tarjeta
          nombre="George Edwards"
          identificacion="Cinéfilo"
          correo="george.edwards@reqres.in"
          conoce="Te recomiendo todo sobre el cine y la cultura."
          avatar="https://reqres.in/img/faces/11-image.jpg"
        />

        <Tarjeta
          nombre="Michael Lawson"
          identificacion="Nómada digital"
          correo="michael.lawson@reqres.in"
          conoce="Trabajo y viajo alrededor del mundo, recomiendo los mejores sitios para nómadas digitales como yo."
          avatar="https://reqres.in/img/faces/7-image.jpg"
        />

        <Tarjeta
          nombre="Lindsay Ferguson"
          identificacion="Viajera"
          correo="lindsay.ferguson@reqres.in"
          conoce="Te recomiendo los mejores y más económicos lugares culturales."
          avatar="https://reqres.in/img/faces/8-image.jpg"

        />


      </div>
    </Layout>
  );
}
