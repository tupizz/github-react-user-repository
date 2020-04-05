import styled from 'styled-components';
import { constants } from '../../styles/constants';

export const PageWrapper = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 700px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid ${constants.lightGrey};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  background-color: ${(props) =>
    props.isTyped ? constants.primaryColor : constants.lightGrey};
  cursor: ${(props) => (props.isTyped ? 'pointer' : 'default')};

  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
