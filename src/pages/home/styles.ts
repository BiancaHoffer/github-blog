import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    max-width: 54rem;
    margin: 0 auto;

    padding-bottom: 10rem;
`;

export const ContainerSearch = styled.div`
    display: grid;
    grid: auto-flow / 1fr 1fr;
    gap: 12px;   

    margin-top: -3.063rem;
    margin-bottom: 3rem;
    //padding: 0rem 2.5rem;

    p:nth-child(1) {
        font-size: 1.125rem;
        color: ${props => props.theme.white};
        font-weight: 700;
    }

    p:nth-child(2) {
        display: flex;
        justify-content: flex-end;

        font-size: 0.875rem;
        color: ${props => props.theme["blue-200"]};
    }

    form {
        grid-column: 1/3;
    }

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

export const ContainerPublications = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;


   // @media () {}
    //padding: 0rem 2.5rem;
`