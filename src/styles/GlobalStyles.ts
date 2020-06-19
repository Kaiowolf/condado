import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  *,
  button,
  input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --primary: #35709e;
    --secondary: #335572;
    --tertiary: rgb(30, 61, 93);
    --quaternary: #254159;
    --quinary: #275d87;
    --senary: #3f8ecc;
   
    --white: #fff;
    --black: #000;
    --gray: #999999;
    --grayblue: #50667E;
    --chat-input: rgb(43,72,96);
    --symbol: #B0B0B0;
 
    --notification: #E73E3E;
    --sauron: #f87f0b;
    --mention-detail: #d04f22;
    --mention-message: rgba(169,213,232,0.2);
 
    --link: #FF9900;
 
    --rocketseat: #7159c1;
  }
`;