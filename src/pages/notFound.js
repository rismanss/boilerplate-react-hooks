import React from 'react';
import {useLocation as local} from "react-router-dom";
import {H1, H2} from '../components';

const notFound = () => {
  const locaction = local();
  return (
    <>
      <H1>erorr 404 !!!</H1>
      <H2>Not found : { locaction.pathname } !</H2>
    </>
  );
};

export default notFound;