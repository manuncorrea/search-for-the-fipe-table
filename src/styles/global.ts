import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root{
    --green-200: #DCF5F2;
    --green-500: #00A38C;

    --gray-500: #B0ABA0;
    --gray-100:  rgba(227, 224, 230, 1);
    --gray-50: #FFFFFF;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button, a {
    cursor: pointer;
  }
`
