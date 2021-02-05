import styled from 'styled-components';
import background from '../../assets/background.png';

export const SideFrame = styled.div`
  flex-grow: 1;
  background: url(${background}) no-repeat;
  background-size: 1920px;
  background-position: 100% 0px;
  animation: animatedBackground 10s linear normal;

  @keyframes animatedBackground {
    from {
      background-position: 0px -450px;
    }

    to {
      background-position: 100% 0px;
    }
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
    background: none;
    animation: none;
  }
`;
