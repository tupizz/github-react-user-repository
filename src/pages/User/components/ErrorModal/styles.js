import styled from 'styled-components';
import { constants } from '../../../../styles/constants';

export const WrapperModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
`;
export const Container = styled.div`
  max-width: 400px;
  padding: 20px 20px;
  background-color: #fff;
  align-items: center;
  margin: 200px auto;
  border-radius: 4px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 720px) {
    margin: 100px auto;
    max-width: 95%;
  }
`;

export const Header = styled.h3`
  text-decoration: underline;
`;

export const Message = styled.p`
  max-width: 350px;
  font-size: 16px;
  text-align: center;
`;

export const Button = styled.button.attrs({ type: 'button' })`
  background: none;
  align-self: flex-end;
  color: ${constants.primaryColor};
  border-radius: 4px;
  border: 1px solid ${constants.primaryColor};
  padding: 10px 30px;
`;

export const ImageGif = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
  margin-bottom: 20px;
  margin-top: 20px;
  object-fit: cover;
`;
