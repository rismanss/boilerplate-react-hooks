import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const NavBar = styled.div`
  text-align: center;
  margin-bottom: 2em;
  background: #05111d;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 61%);
`;

const HeaderLink = styled(NavLink)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;
  &:hover {
    background: #41addd;
    color: #fff;
  }
  &.active {
    background: #41addd;
    color: #fff;
  }
`;

const Header = () => {
  return (
    <NavBar>
      <HeaderLink exact to="/">Home</HeaderLink>
      <HeaderLink exact to="/movie">Movie</HeaderLink>
      <HeaderLink exact to="/crud">Crud</HeaderLink>
    </NavBar>
  );
};

export default Header;