import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  padding: 15px;
  width: 100%;
  border: 0;
  border-radius: 10px;
  margin: 3px 0 25px;
  font-weight: 800;
  font-size: 16px;
  opacity: 0.95;
  transition: all 0.3s;
  vertical-align: middle;

  &:hover {
    opacity: 1;
  }

  &.social-button {
    margin: 3px 0 10px;

    &.social-button__facebook {
      background: #3a61b3;
    }

    &.social-button__apple {
      background: #000000;
    }
    &.social-button__google {
      background: #fff;
      color: #000;
      border: 2px solid #000000;
      padding: 13px;
    }
  }

  .icon {
    vertical-align: -4px;
    margin-right: 10px;
  }
`;

export default Button;
