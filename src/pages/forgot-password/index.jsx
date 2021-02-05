import React from 'react';
import Head from 'next/head';
import { Container } from '../../components/Container';
import ForgotFrame from '../../components/ForgotFrame';
import { SideFrame } from '../../components/SideFrame';

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Gallery - Redefinir Senha</title>
      </Head>

      <Container>
        <main className="flex">
          <ForgotFrame />
          <SideFrame />
        </main>
      </Container>
    </>
  );
}
