import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContainerCartPost = styled(NavLink)`
    background-color: ${props => props.theme["blue-780"]};
    padding: 2rem;

    display: grid;
    grid-template-columns: auto auto;
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
        color: ${props => props.theme["blue-150"]};

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 1.8rem;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }

    time {
        color: ${props => props.theme["blue-200"]};
        font-size: 0.875rem;

        display: flex;
        justify-content: end;
    }
`

export const ContainerLoading = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
`