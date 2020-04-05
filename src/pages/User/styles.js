import styled from 'styled-components';
import { constants } from '../../styles/constants';

export const BackLine = styled.span`
  svg {
    margin-right: 10px;
  }

  a {
    color: #fff;
  }
`;

export const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 4px;
  color: #4a4a4a;
  padding: 15px 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  h5 {
    font-weight: 600;
  }
`;

export const NumberAnalyticRow = styled.div`
  display: flex;
  margin-top: 5px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    border-right: 1px solid ${constants.lightGrey};
    padding-right: 20px;

    & + div {
      border-right: none;
      padding-right: 0;
    }

    span {
      font-size: 25px;
      line-height: 25px;
      font-weight: 500;
      color: #15ab4a;

      & + span {
        color: #4a4a4a;
        font-size: 12px;
        font-weight: 200;
      }
    }
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 90px auto;
  color: #fff;
`;
