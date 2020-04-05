import styled from 'styled-components';

export const BackLine = styled.span`
  padding-left: 10px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }

  a {
    color: #fff;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 90px auto;
  color: #fff;

  ${(props) =>
    props.error === null
      ? ''
      : `
      -webkit-filter: blur(5px);
      -moz-filter: blur(5px);
      -o-filter: blur(5px);
      -ms-filter: blur(5px);
      filter: blur(5px);
      `};
`;
