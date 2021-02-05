import React from 'react';
import styled from 'styled-components';

const AsideContainer = styled.div`
  background: ${props => props.theme.colors.white};
  min-height: 100vh;
  width: 600px;

  @media screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const AsideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  min-height: 100vh;
  max-width: 400px;
  padding-top: 10px;

  @media screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 60%;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    max-width: 75%;
  }
`;

const Aside = ({ children }) => (
  <>
    <AsideContainer>
      <AsideContent>{children}</AsideContent>
    </AsideContainer>
  </>
);

export default Aside;
