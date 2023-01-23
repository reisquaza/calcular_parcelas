import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root {
    --color-red: #C80B0B;
    --color-red-focus: #FD1515;
    --color-gray-4: #D1DCE3;
    --color-gray-3: #212529;
    --color-gray-3-background: rgba(33, 37, 41, 0.85);
    --color-gray-2: #343B41;
    --color-gray-1: #656565;
    --color-gray-0: #656565;
    --color-blue: #5D9CEC;
    --color-blue-focus: #FFDB4D;
    --color-success: #168821;
    --color-error: #E60000;
    
    font-size: 60%; 
    --toastify-icon-color-success: var(--color-success);
    --toastify-icon-color-error: var(--color-error);
    --toastify-color-progress-success: var(--color-success);
    --toastify-color-progress-error: var(--color-error);
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  #root{
    width: 100%;
    height: 100%;
  }
  body {
    background: var(--color-gray-4);
    color: var(--color-gray-0);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Jura', sans-serif;
    font-size: 1.6rem;
  }
  h1, h2 {
    font-weight: bold;
    color: var(--color-gray-0);
    margin-bottom: 15px;
  }
  h3,h4,h5, h6, strong {
    font-weight: 500;
    color: var(--color-blue);
    margin-bottom: 15px;
  }
  button {
    cursor: pointer;
  }
  h1{
    color: var(--color-primary)
  }
  h4{
    color: var(--color-error);
  }
  a {
    text-decoration: none;
    color: var(--color-gray-4);
  }
  ul {
    list-style: none;
  }
  span {
    font-weight: bold;
    color: var(--color-blue)
  }
  p {
    color: var(--color-blue)
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-red);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-gray-2);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-gray-4);
  }

  /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
`;
