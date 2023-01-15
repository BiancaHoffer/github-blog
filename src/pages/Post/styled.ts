import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    max-width: 54rem;
    margin: 0 auto;

    padding-bottom: 10rem;
`;

export const ContainerPost = styled.div`
    margin-top: -3.063rem;
    margin-bottom: 3rem;
    
    p {
        text-align: justify;
        color: ${props => props.theme["blue-150"]};
        margin-bottom: 1rem;
    }

    a {
        color: ${props => props.theme["blue-500"]}
    }
`