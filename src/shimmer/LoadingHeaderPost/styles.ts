import styled from "styled-components";

export const ContainerLoadingHeaderPost = styled.div`
  background-color: ${props => props.theme["blue-800"]};
  border-radius: 10px;
  box-shadow: 2px -1px 19px 4px rgba(0,0,0,0.26);
  padding: 2rem 2.5rem;

  position: relative;
  top: -7rem;

  .contentbuttons {
    display: flex;
    justify-content: space-between;
  }

  .button {
    width: 6rem;
    height: 1rem;
    border-radius: 4px;
  } 

  .title {
    width: 90%;
    height: 1.5rem;
    border-radius: 4px;
    margin: 1.25rem 0rem 0.5rem 0rem;
  }

  .contentinfos {
    display: flex;
    gap: 2rem;

    .infos {
        width: 8rem;
        height: 1rem;
        border-radius: 4px;
    }
  }

    // responsiveness
    @media (max-width: 600px) {
      .contentbuttons {
        flex-direction: column;
        gap: 0.8rem;
        align-items: center;
      }

      .contentinfos {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
      }

      .title {
        margin: 1.5rem;
      }
        
    }
`