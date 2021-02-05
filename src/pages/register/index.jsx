import React from 'react';
import Head from 'next/head';
import { Container } from '../../components/Container';
import RegisterFrame from '../../components/RegisterFrame';
import { SideFrame } from '../../components/SideFrame';

export default function Register() {
  return (
    <>
      <Head>
        <title>Gallery - Inscrever-se</title>
      </Head>

      <Container>
        <main className="flex">
          <RegisterFrame />
          <SideFrame />
        </main>
      </Container>
    </>
  );
}
