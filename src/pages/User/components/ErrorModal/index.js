import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  WrapperModal,
  Header,
  Message,
  Button,
  ImageGif,
} from './styles';
import gif from '../../../../assets/errorReaction.gif';

export default function ErrorModal() {
  const history = useHistory();

  const handleButtonClick = (e) => {
    e.preventDefault();
    history.push(`/`);
  };

  return (
    <WrapperModal>
      <Container>
        <Header>Ocorreu um erro</Header>
        <ImageGif src={gif} alt="loading..." />

        <Message>
          Não foi possivel encontrar o usuário seleciondo, clique em voltar
          abaixo e preencha corretamente o campo.
        </Message>
        <Button onClick={handleButtonClick}>Voltar e corrigir</Button>
      </Container>
    </WrapperModal>
  );
}
