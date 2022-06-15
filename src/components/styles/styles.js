import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family: 'sans-serif';
        height: 100%;
    }
    .Description{
        width: 600px;
        text-align: center;
        font-size: 1.2rem;
        font-family: 'sans-serif';
        color: white;
    }
`;
export default GlobalStyle;
