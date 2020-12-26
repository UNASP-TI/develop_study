import styled, { css } from 'styled-components';
import { FiTrash2, FiEdit2 } from 'react-icons/fi'

const CSSIcon = css`
  width: 14px;
  height: 14px;
  flex-shrink: 0;

  cursor: pointer;
  fill: transparent;
  border-radius: 6px;

  transition: all 0.2s ease-in-out;

  &:hover {
    width: 24px;
    height: 24px;
  }
`;

export const Container = styled.main`
  border: 1px solid rgba(0,0,0, .2);
  border-radius: 6px;
  position: relative;

  padding: 5px;
  /* height: 350px; */
  min-width: 500px;
  max-width: 670px;
  padding-bottom: 50px;

  overflow: hidden;

  div#notes-group {
    overflow-y: auto;
    overflow-x: hidden;

    span.note-element {
      display: flex;
      font-size: 16px;
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

export const DeleteIcon = styled(FiTrash2)`
  ${CSSIcon};

  &:hover {
    color: var(--notification);
  }
`;

export const UpdateIcon = styled(FiEdit2)`
  ${CSSIcon};

  &:hover {
    color: var(--mention-detail);
  }
`;
