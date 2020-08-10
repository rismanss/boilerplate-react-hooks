import React from 'react';
import {H1, H2, Link, Button} from '../components';
import Logo from '../logo.svg';

const Home = () => {
  return (
    <>
      <H1 format='center'>Hello...</H1>
      <H2 format='center'>this is boilerplate for react hooks</H2>
      <img src={Logo} alt='logo-react' width='100%' height='200px' />
      <H2 format='center'>
        <Link href='https://github.com/rismanss/boilerplate-react-hooks' target='blank'>
          <Button>Github Repository</Button>
        </Link>
      </H2>
    </>
  );
};

export default Home;