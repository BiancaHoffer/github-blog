import styled from "styled-components";
import background from '../../assets/cover.png'

export const ContainerHeader = styled.header`
    width: 100%;
    height: 18.5rem;
    box-shadow: 0px 7px 12px 0px rgba(0,0,0,0.39);

    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

export const Logo = styled.div`
    text-transform: uppercase;
    color: ${props => props.theme["blue-500"]};
    font-size: 1.5rem;
    font-family: 'Coda', sans-serif;

    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    max-width: 52.875rem;
    margin: 0 auto;
    padding: 4rem 0;
`;