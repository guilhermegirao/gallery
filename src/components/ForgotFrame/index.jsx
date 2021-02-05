import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Aside from '../Aside';
import FormInput from '../FormInput';
import Button from '../Button';
import Divider from '../Divider';

const ForgotContent = styled.div`
  .title {
    margin-bottom: 15px;
  }

  .default-forgot {
    text-align: left;

    & .form-send {
      margin-bottom: 10px;
    }
  }
`;

const ForgotFrame = () => (
  <>
    <Aside>
      <ForgotContent>
        <div className="title">
          <h1>Redefinir Senha</h1>
          <h5>
            Insira seu e-mail cadastrado na Gallery e mandaremos um e-mail com
            um link para redefinição de sua senha.
          </h5>
        </div>
        <div className="default-forgot">
          <FormInput label="E-mail:" type="email" name="email" />
          <Button className="form-send">ENVIAR</Button>
        </div>
        <Divider>OU</Divider>
        <h5>Não possui uma conta?</h5>
        <Link href="/register">
          <Button className="form-send">INSCREVER-SE</Button>
        </Link>
      </ForgotContent>
    </Aside>
  </>
);

export default ForgotFrame;
