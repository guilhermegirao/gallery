import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Aside from '../Aside';
import FormInput from '../FormInput';
import Button from '../Button';
import Divider from '../Divider';

import FacebookIcon from '../../assets/icons/facebook.svg';
import AppleIcon from '../../assets/icons/apple.svg';
import GoogleIcon from '../../assets/icons/google.svg';

const LoginContent = styled.div`
  .title {
    margin-bottom: 15px;
  }

  .default-login {
    text-align: left;

    & .form-actions {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 25px;
      text-align: left;

      & > div:first-child {
        align-items: center;
        width: 50%;
        flex: none;
        order: 0;
        flex-grow: 0;
      }

      & > div:nth-child(2) {
        align-items: center;
        width: 50%;
        display: flex;
        justify-content: flex-end;
        flex: none;
        order: 1;
        flex-grow: 0;

        label {
          order: 1;
          margin-left: 5px;
          line-height: 30px;
        }
      }
    }

    & .form-send {
      margin-bottom: 10px;
    }
  }
`;

const LoginFrame = () => (
  <>
    <Aside>
      <LoginContent>
        <div className="title">
          <h1>Login na Gallery</h1>
          <h5>Para acessar o conteúdo de nosso site, faça login.</h5>
        </div>
        <div className="social-login">
          <div className="social-register">
            <Button className="social-button social-button__facebook">
              <FacebookIcon className="icon" />
              CONTINUAR COM O FACEBOOK
            </Button>
            <Button className="social-button social-button__apple">
              <AppleIcon className="icon" />
              CONTINUAR COM A APPLE
            </Button>
            <Button className="social-button social-button__google">
              <GoogleIcon className="icon" />
              CONTINUAR COM O GOOGLE
            </Button>
          </div>
        </div>
        <Divider>OU</Divider>
        <div className="default-login">
          <FormInput label="E-mail:" type="email" name="email" />
          <FormInput label="Senha:" type="password" name="password" />
          <div className="form-actions">
            <div>
              <Link href="/forgot-password">Esqueceu sua senha?</Link>
            </div>
            <div>
              <FormInput
                type="checkbox"
                label="Lembrar de mim?"
                name="remember"
              />
            </div>
          </div>
          <Button className="form-send">ENTRAR</Button>
        </div>
        <Divider>OU</Divider>
        <h5>Não possui uma conta?</h5>
        <Link href="/register">
          <Button className="form-send">INSCREVER-SE</Button>
        </Link>
      </LoginContent>
    </Aside>
  </>
);

export default LoginFrame;
