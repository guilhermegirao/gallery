import React from 'react';
import styled from 'styled-components';

const DividerContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.gray};
  line-height: 1px;
  position: relative;
  margin: 20px 0;
  text-align: center;

  .divider__title {
    background-color: ${props => props.theme.colors.white};
    padding: 0 24px;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 2px;
  }
`;

const Divider = ({ children }) => (
  <DividerContainer>
    <span className="divider__title">{children}</span>
  </DividerContainer>
);

export default Divider;
