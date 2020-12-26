import styled from 'styled-components';
import { FiTrash2 } from 'react-icons/fi'

export const Container = styled.main`
  border: 1px solid rgba(0,0,0, .2);
  border-radius: 6px;
  position: relative;

  padding: 5px;
  height: 400px;
  padding-bottom: 50px;

  overflow: hidden;

  div#notes-group {
    overflow-y: auto;
    overflow-x: hidden;

    span.note-element {
      display: flex;
      /* justify-content: center; */
      align-items: center;

      &:hover {
        background: var(--note-element-delete);
      }
    }
  }

  > form {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;

    input {
      height: 40px;
      font-size: 14px;
      padding: 5px;
      border: 1px solid rgba(0,0,0, .3);
      width: calc(100% - 12px);
    }
  }
`;

export const ButtonDelete = styled(FiTrash2)`
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  cursor: pointer;

  &:hover {
    color: var(--notification);
  }
`;
