import React from 'react';
import Head from 'next/head';
import { Container } from '../components/Container';
import LoginFrame from '../components/LoginFrame';
import { SideFrame } from '../components/SideFrame';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gallery - Login</title>
      </Head>

      <Container>
        <main className="flex">
          <LoginFrame />
          <SideFrame />
        </main>
        <Footer />
      </Container>
    </>
  );
}
