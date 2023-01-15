import styled from "styled-components";

export const ContainerHeaderPost = styled.div`
    background-color: ${props => props.theme["blue-800"]};
    border-radius: 10px;
    box-shadow: 2px -1px 19px 4px rgba(0,0,0,0.26);

    position: relative;
    top: -7rem;

    padding: 2rem 2.5rem; 

    //display: flex;
    
    h1 {
        padding: 1.25rem 0rem 0.5rem 0rem;
    }
`;

export const AreaButtons = styled.div`
    display: flex;
    justify-content: space-between;

    a {
        color: ${props => props.theme["blue-500"]};

        display: flex;
        gap: 8px;
        align-items: center;

        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
    }

`

export const ContainerLoading = styled.div`
    background-color: ${props => props.theme["blue-800"]};
    border-radius: 10px;
    box-shadow: 2px -1px 19px 4px rgba(0,0,0,0.26);

    position: relative;
    top: -7rem;

    padding: 2rem 2.5rem; 

    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const GeneralInfos = styled.div`
 max-width: 25rem;

 display: grid;
 grid-template-columns: auto auto auto;
 gap: 24px;

 justify-items: start;

 @media (max-width: 680px) {
    grid-template-columns: auto auto;
    gap: 12px;
    justify-items: start;
 }

/* @media (max-width: 514px) {
    grid-template-columns: auto;
    gap: 12px;
    justify-items: center;
 }    */

`;