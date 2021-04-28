import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #22254b;
    color: #fff;
    font-family: "Poppins", sans-serif;
    margin: 0;
  }

  .root {
    display: flex;
    flex-direction: column;
  }
  
`;