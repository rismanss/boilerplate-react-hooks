import styled from 'styled-components';

const H2 = styled.h2`
  font-size: 1.5em;
  margin-bottom: 0.25em;
  text-align: ${props => props.format};
`;

export default H2;