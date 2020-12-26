import React from 'react';

import { StateBlock, OkIcon } from './styles';

const Header = () => {
  return (
    <StateBlock>
      <span>eliasallex</span>
      <strong> - </strong>
      <span>CRUD</span>

      <strong>
        <OkIcon />
      </strong>
    </StateBlock>
  );
}

export default Header;
