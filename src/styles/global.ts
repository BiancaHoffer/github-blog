import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 900px) {
            font-size: 93.75%; //15px
        }
        @media (max-width: 600px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background-color: ${props => props.theme['blue-900']};
    }

    body, input, textarea, button  {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        color: ${props => props.theme.white};
        font-size: 1rem;
    }

    a {
        text-decoration: none;
    }
        textarea:focus, input:focus, select:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    } 
    input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
    }
    input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
    }


    // scrollbar
    body::-webkit-scrollbar {
    width: 6px;
    }
    body::-webkit-scrollbar-track {
        background: #E6E5E5;     
    }
    body::-webkit-scrollbar-thumb {
        background-color: #8D8686;
    }
`