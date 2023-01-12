import styled from "styled-components";

export const ContainerGeneralInfosProfile = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;

    p {
      color: ${props => props.theme["blue-100"]};
      font-size: 1rem;  
    }
    

    div {
        color: ${props => props.theme["blue-700"]};
    }
`