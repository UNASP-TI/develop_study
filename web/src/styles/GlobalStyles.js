import { CreateGlobalStyle } from 'styled-components';

export default CreateGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, #root {
    height: 100%;
  }

  input, button, * {
    outline: none;
    font-family: 'Roboto', arial, sans-serif;
  }
`;
