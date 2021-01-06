import React from 'react';
import { Helmet } from 'react-helmet';
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
} from 'react-share';
import { H1, H2, Link, Button } from '../components';
import Logo from '../logo.svg';

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <title>boilerplate for react hooks</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="this is boilerplate for react hooks"
        />
        <meta
          property="og:url"
          content="https://rismanss.github.io/boilerplate-react-hooks/#/"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="boilerplate for react hooks" />
        <meta
          property="og:description"
          content="this is boilerplate for react hooks"
        />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </Helmet>
      <H1 format="center">Hello...</H1>
      <H2 format="center">this is boilerplate for react hooks</H2>
      <img src={Logo} alt="logo-react" width="100%" height="200px" />
      <H2 format="center">
        <Link
          href="https://github.com/rismanss/boilerplate-react-hooks"
          target="blank"
        >
          <Button>Github Repository</Button>
        </Link>
      </H2>
      <div style={{textAlign: "center"}}>
        <FacebookShareButton
          url="https://rismanss.github.io/boilerplate-react-hooks/#/"
          quote="boilerplate for react hooks"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <div>
          <FacebookShareCount
            url="https://rismanss.github.io/boilerplate-react-hooks/#/"
          >
            {(count) => count}
          </FacebookShareCount>
        </div>
      </div>
    </>
  );
};

export default Home;
