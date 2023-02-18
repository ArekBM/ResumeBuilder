import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;

    }

    html {
        font-size: 62.5%;
        line-height: 1.6;

    }

    body {
        font-size: 1.6rem;

    }

    img {
        display: block;
        width: 100%;
    }

`

export default GlobalStyle