import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 4rem auto;

  grid-template-areas:
    "HEADER"
    "MAIN";
`;

export const  NavAside = styled.main`
  grid-area: MAIN;

  display: flex;
  justify-content: center;
  margin: 0 auto;

  > aside {
    max-width: 250px;
    min-width: 180px;

    border: 1px solid rgba(0,0,0, .3);
    border-radius: 6px;
    height: 400px;
    margin-right: 23px;

    > li {
      border-bottom: 0.1px solid rgba(0,0,0, .1);
      box-sizing: border-box;
      padding: 10px;

      &.actived {
        background: var(--item);
        border-radius: 6px;
      }
      &:hover,
      &:focus {
        background: var(--discord);
      }
    }
  }
`;
