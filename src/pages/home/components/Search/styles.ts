import styled from "styled-components";

export const ContainerForm = styled.form` 
    grid-column: 1/3;
 
    input {
        width: 100%;
        grid-column: 1/3;
        background-color: ${props => props.theme["blue-950"]};
        padding: 12px 16px;
        border-radius: 6px;
        color: ${props => props.theme["blue-700"]};
        border: 1px solid ${props => props.theme["blue-750"]};
        font-size: 1rem;
        box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.48);
        


        ::placeholder {
            color: ${props => props.theme["blue-700"]};
        }

        :hover {
            border: 1px solid ${props => props.theme["blue-700"]};
            transition: border 0.2s;
        }

        :focus {
            border: 1px solid ${props => props.theme["blue-700"]};
        }
    }
`