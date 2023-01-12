import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContainerCartPost = styled(NavLink)`
    background-color: ${props => props.theme["blue-780"]};
    padding: 2rem;

    display: grid;
    grid-template-columns: auto 4rem;
    gap: 16px;

    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.48);

    :hover {
        opacity: 0.8;
        transition: opacity 0.2s;
    }

    h1 {
        font-size: 1.25rem;
        color: ${props => props.theme.white};
    }

    p {
        grid-column: 1/3;
        text-align: justify;
        color: ${props => props.theme["blue-150"]}
    }

    time {
        color: ${props => props.theme["blue-200"]};
        font-size: 0.875rem;
    }
`