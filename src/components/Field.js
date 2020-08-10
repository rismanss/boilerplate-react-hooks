import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: -webkit-fill-available;
  padding: 12px 20px;
  margin: 8px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Label = styled.span`
  width: 100%;
`;

const Row = styled.div`
  width: ${props => props.width};
  float: left;
`;

const Field = ({label, width, placeholder, type, name, value, onChange, checked, labelCheck}) => {
  return (
    <Row width={width}>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <Label>{labelCheck}</Label>
    </Row>
  );
};

export default Field;