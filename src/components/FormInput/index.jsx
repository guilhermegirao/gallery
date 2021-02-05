import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background-color: ${props => props.theme.colors.input};
  color: ${props => props.theme.colors.black};
  font-size: 16px;
  padding: 13px;
  ${props => (props.type !== 'checkbox' ? `display: block;` : '')};
  ${props => (props.type !== 'checkbox' ? `width: 100%;` : '')};
  border: 0;
  border-radius: 10px;
  ${props => (props.type !== 'checkbox' ? `margin: 3px 0 25px` : '')};
`;

const Label = styled.label`
  color: ${props => props.theme.colors.gray};
  cursor: pointer;
  font-size: 16px;
  font-weight: 800;
  text-align: left;
`;

const FormInput = ({ handleChange, label, name, ...otherProps }) => (
  <>
    {label ? (
      <Label className="form-input-label" htmlFor={name}>
        {label}
      </Label>
    ) : null}
    <Input onChange={handleChange} {...otherProps} name={name} id={name} />
  </>
);

export default FormInput;
