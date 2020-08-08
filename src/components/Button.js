import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: white;
  cursor: pointer;
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  &:hover {
    background: linear-gradient(45deg, #3f6d82, transparent);
  }
`;

export default Button;