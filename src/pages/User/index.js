import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import UserContent from './components/UserContent';
import RepositoriesContent from './components/RepositoriesContent';

import { Container, BackLine } from './styles';
import { useUserOnPageLoad } from './hooks';

import 'spectre.css/dist/spectre.min.css';

export default function User() {
  const { username } = useParams();
  const { userData, userRepositories } = useUserOnPageLoad({ username });

  return (
    <Container>
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
  );
}
