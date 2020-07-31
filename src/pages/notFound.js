import React from 'react';
import {useLocation as local} from "react-router-dom";

const notFound = () => {
  const locaction = local();
  return (
    <div>
      <h1>erorr 404 !!!</h1>
      <h3>Not found : { locaction.pathname } !</h3>
    </div>
  );
};

export default notFound;