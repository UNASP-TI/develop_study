import styled from 'styled-components';
import { FiCheck } from 'react-icons/fi'

export const StateBlock = styled.nav`
  grid-area: HEADER;

  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    font-size: 18px;
  }

  > strong {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 5px;
  }
`;

export const OkIcon = styled(FiCheck)`
  flex-shrink: 1;
  width: 14px;
  height: 14px;
`;
