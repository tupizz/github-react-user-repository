import styled from 'styled-components';

export const RepositoryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const RepositoryItem = styled.div`
  width: 45%;
  border: 1px solid #eee;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 5px;

  @media only screen and (max-width: 720px) {
    width: 100%;
  }

  p {
    text-align: left;
    text-overflow: ellipsis;
    height: 60px;
    line-height: 20px;
    font-size: 14px;
    white-space: pre-wrap;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  div.stars-count {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
`;

export const ItemHeader = styled.div`
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #eee;

  svg {
    margin-right: 10px;
  }
`;
