import Layout from '../layout/layout';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Agenda() {
 
  return (
    <>
      <Layout>
        <div>
          <h1>Aquí va lo de la agenda</h1>
          <button onClick={handleRedirect}>Ir a otra ruta</button>
        </div>
      </Layout>
    </>
  );
}
