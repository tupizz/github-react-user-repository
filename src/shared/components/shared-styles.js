import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 4px;
  color: #4a4a4a;
  padding: 15px 20px;
  min-height: 200px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
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
    margin-bottom: 0;
  }

  span {
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    text-align: center;
  }
`;
