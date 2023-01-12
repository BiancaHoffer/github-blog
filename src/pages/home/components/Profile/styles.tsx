import styled from "styled-components";

export const ContainerProfile = styled.div`
    background-color: ${props => props.theme["blue-800"]};
    border-radius: 10px;
    box-shadow: 2px -1px 19px 4px rgba(0,0,0,0.26);

    position: relative;
    top: -7rem;

    padding: 2rem 2.5rem;
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
`;

export const ProfileInfos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    h1 {
        font-size: 1.5rem;
        color: ${props => props.theme.white};
        margin: 8px 0px;
    }

    strong {
        font-size: 0.75rem;
        color: ${props => props.theme["blue-500"]};

        display: flex;
        gap: 8px;
        justify-content: center;
        align-items: center;

        justify-content: end;
        text-transform: uppercase;
    }

    > p {
        color: ${props => props.theme["blue-150"]};
        grid-column: 1/3;
        text-align: justify;
        margin-bottom: 1.5rem;
        
    }
`;

export const GeneralInfos = styled.div`
    grid-column: 1/3;

    max-width: 25rem;

     display: grid;
     grid-template-columns: auto auto auto;
     gap: 24px;

     @media (max-width: 680px) {
        grid-template-columns: auto auto;
        gap: 12px;
        justify-items: start;
     }

     @media (max-width: 514px) {
        grid-template-columns: auto;
        gap: 12px;
        justify-items: center;
     }
`;