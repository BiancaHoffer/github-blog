import styled from "styled-components";

export const ContainerProfile = styled.div`
    background-color: ${props => props.theme["blue-800"]};
    border-radius: 10px;
    box-shadow: 2px -1px 19px 4px rgba(0,0,0,0.26);
    padding: 2rem 2.5rem;

    position: relative;
    top: -7rem; 
`;

export const ContentProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    
    img {
        border-radius: 8px;
        width: 9.25rem;
        height: 9.25rem;
    }

    // responsiveness
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const ProfileInfos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    h1 {
        font-size: 1.5rem;
        color: ${props => props.theme.white};
        margin: 8px 0px;
    }

    a {
        font-size: 0.75rem;
        text-transform: uppercase;
        color: ${props => props.theme["blue-500"]};

        display: flex;
        gap: 8px;
        justify-content: center;
        align-items: center;
        justify-content: end;
    }

    > p {
        grid-column: 1/3;
         
        color: ${props => props.theme["blue-150"]};
        text-align: justify;
        margin-bottom: 1.5rem;
    }

    // responsiveness
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > p {
            text-align: center;
            margin-top: 1rem;
        }
    }
`;

export const GeneralInfos = styled.div`
    grid-column: 1/3;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 24px;

    max-width: 30rem;

    // responsiveness
    @media (max-width: 700px) {
        grid-template-columns: auto auto;
        gap: 12px;
        justify-items: start;
    }

    @media (max-width: 514px) {
        grid-template-columns: auto;
        gap: 12px;
        //justify-items: center;
        max-width: 100%;
    }
`;