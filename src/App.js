import React from 'react';
import Helmet from 'react-helmet';

import Routes from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projeto Stone </title>
      </Helmet>
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
