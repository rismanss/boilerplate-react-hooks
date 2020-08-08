import React from 'react';
import styled from 'styled-components';

const Alert = styled.div`
  padding: 20px;
  background-color: #f44336;
  color: white;
  display: ${props => props.hidden ? `none` : `block`};
`;

const Close = styled.span`
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    color: black;
  }
`;

const CustomAlert = ({message ,display, hidden, onClick}) => {
  return (
    <Alert hidden={hidden} display={display}>
      <Close onClick={onClick}>
        &times;
      </Close>
      {message}
    </Alert>
  );
};

export default CustomAlert;