import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Helmet from 'react-helmet';

import UserContent from './components/UserContent';
import RepositoriesContent from './components/RepositoriesContent';
import ErrorModal from './components/ErrorModal';

import { Container, BackLine } from './styles';
import { useUserOnPageLoad } from './hooks';

import 'spectre.css/dist/spectre.min.css';

export default function User() {
  const { username } = useParams();
  const { userData, userRepositories, error } = useUserOnPageLoad({ username });

  return (
    <>
      <Helmet>
        <title>Resultado de busca: {username}</title>
      </Helmet>

      {error ? <ErrorModal /> : <></>}

      <Container error={error}>
        <BackLine>
          <FiArrowLeft />
          <Link to="/">Voltar</Link>
        </BackLine>

        <div className="container">
          <div className="columns">
            <div className="column col-sm-12 col-4">
              <UserContent userData={userData} />
            </div>
            <div className="column col-sm-12 col-8">
              <RepositoriesContent userRepositories={userRepositories} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
