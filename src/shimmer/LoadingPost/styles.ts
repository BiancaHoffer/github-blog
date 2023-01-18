import styled from "styled-components";

export const ContainerLoadingPost = styled.div`
    margin-top: -3.063rem;
    margin-bottom: 3rem;

    .text {
        height: 1rem;
        width: 100%;
        margin-bottom: 0.7rem;
        border-radius: 4px;
    }

    .text:nth-child(6n) {
        width: 80%;
    }
    .text:nth-child(3) {
        width: 90%;
    }
    .text:nth-child(9) {
        width: 98%;
    }
`