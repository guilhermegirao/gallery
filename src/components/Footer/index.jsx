import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.div`
  background: ${props => props.theme.colors.white};
  border-top: 1px solid ${props => props.theme.colors.border};
  display: block;
  width: 100%;
  padding: 20px 40px;

  .link {
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
    line-height: 30px;
    text-decoration-line: underline;
    color: ${props => props.theme.colors.accent};
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
    text-align: center;
  }
`;

const Footer = () => (
  <>
    <FooterContainer>
      <span>
        Interface e código desenvolvidos com ❤️ por{' '}
        <Link href="https://github.com/guilhermegirao" passHref>
          <span className="link">Guilherme Girão Alves</span>
        </Link>
      </span>
    </FooterContainer>
  </>
);

export default Footer;
