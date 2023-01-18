import styled from "styled-components";

export const ContainerLoadingPostCard = styled.div`
    background-color: ${props => props.theme["blue-780"]};
    padding: 2rem;

    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.48);

    .content-title-data {
        display: flex;
        justify-content: space-between;
        gap: 2rem
    }

    .content-title {
        width: 100%;

        .title:nth-child(3) {
            width: 6rem;
        }
    }

    .title {
        height: 1.5rem;
        margin-bottom: 0.7rem;
        border-radius: 4px;
    }

    .content-data {
        width: 100%;
        height: 1rem;

        display: flex;
        justify-content: end;
        align-items: flex-end;
    }

    .data {
        width: 4rem;
        height: 1rem;
        border-radius: 4px;
    }

    .content-text {
        width: 100%;
    }

    .text {
        width: 100%;
        height: 1rem;
        margin-bottom: 0.7rem;
        margin-top: 1rem;
        border-radius: 4px;
    }

    // responsiveness
    @media (max-width: 600px) {
        .content-title-data {
            flex-direction: column; 
        }

        .content-data .data {
            margin: 0 auto;
        }
        
    }
`