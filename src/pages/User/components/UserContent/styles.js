import styled from 'styled-components';
import { constants } from '../../../../styles/constants';

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
