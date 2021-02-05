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

const RegisterContent = styled.div`
  .title {
    margin-bottom: 15px;
  }

  .default-register {
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
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex: none;
        flex-grow: 0;

        label {
          order: 1;
          margin-left: 10px;
        }
      }
    }

    & .form-send {
      margin-bottom: 10px;
    }
  }
`;

const RegisterFrame = () => (
  <>
    <Aside>
      <RegisterContent>
        <div className="title">
          <h1>Inscrever-se na Gallery</h1>
          <h5>Inscreva-se gratuitamente e aproveite a arte</h5>
        </div>
        <div className="social-register">
          <Button className="social-button social-button__facebook">
            <FacebookIcon className="icon" />
            INSCREVER-SE COM O FACEBOOK
          </Button>
          <Button className="social-button social-button__apple">
            <AppleIcon className="icon" />
            INSCREVER-SE COM A APPLE
          </Button>
          <Button className="social-button social-button__google">
            <GoogleIcon className="icon" />
            INSCREVER-SE COM O GOOGLE
          </Button>
        </div>
        <Divider>OU</Divider>
        <div className="default-register">
          <FormInput label="Qual é seu e-mail?" type="email" name="email" />
          <FormInput
            label="Como devemos chamar você?"
            type="text"
            name="username"
          />
          <FormInput
            label="Insira sua senha:"
            type="password"
            name="password"
          />
          <div className="form-actions">
            <div>
              <FormInput
                type="checkbox"
                label="Aceito os Termos de Uso e Política de Privacidade"
                name="remember"
              />
            </div>
          </div>
          <Button className="form-send">INSCREVER-SE</Button>
        </div>
        <Divider>OU</Divider>
        <h5>Já possui uma conta?</h5>
        <Link href="/">
          <Button className="form-send">FAÇA LOGIN</Button>
        </Link>
      </RegisterContent>
    </Aside>
  </>
);

export default RegisterFrame;
