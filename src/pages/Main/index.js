import React, { useState } from 'react';
import { FiGithub, FiSearch } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';

import { Container, Form, SubmitButton, PageWrapper } from './styles';

export default function Main() {
  const [username, setUsername] = useState('');
  const history = useHistory();

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      return;
    }

    history.push(`/users/${username}`);
  };

  return (
    <PageWrapper>
      <Container>
        <h1>
          <FiGithub />
          Busca por usuário do Github
        </h1>

        <Form onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Digite o nome do usuário"
          />

          <SubmitButton isTyped={Boolean(username)}>
            <FiSearch color="#FFF" size={16} />
          </SubmitButton>
        </Form>
      </Container>
    </PageWrapper>
  );
}
