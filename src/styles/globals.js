import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.black};
    font-family: 'Nunito', sans-serif, 'Segoe UI', Verdana, Arial; 
    font-size: 16px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  input, button {
    font-family: 'Nunito', sans-serif, 'Segoe UI', Verdana, Arial; 
  }

  button {
    cursor: pointer;
  }

  .flex {
    display: flex;
    min-height: 100vh;
  }

  a {
    font-weight: bold;
    font-size: 16px;
    line-height: 30px;
    text-decoration-line: underline;
    color: ${props => props.theme.colors.accent};
  }

  h1 {
    font-weight: 800;
    line-height: 1.5em;
  }

  h5 {
    font-weight: 600;
    font-size: 1em;
    line-height: 1.5em;
    color: ${props => props.theme.colors.gray};
  }
`;
