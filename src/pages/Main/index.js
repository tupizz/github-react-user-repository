import React from 'react';
import { FiGithub, FiSearch } from 'react-icons/fi';

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FiGithub></FiGithub>
        Busca por usuário do Github
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Digite o nome do usuário" />

        <SubmitButton>
          <FiSearch color="#FFF" size={16} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
