import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  thead {
    background: black;
    color: white;
  }
  th, td {
    border: 1px solid lightgrey;
    padding: 5px;
  }
  th {
    text-align: left;
  }
`;

export default Table;