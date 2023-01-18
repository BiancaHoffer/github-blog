import styled from "styled-components";

export const ContainerLoadingHeaderProfile = styled.div`
  background-color: ${props => props.theme["blue-800"]};
  border-radius: 10px;
  box-shadow: 2px -1px 19px 4px rgba(0,0,0,0.26);
  padding: 2rem 2.5rem;

  position: relative;
  top: -7rem;
`

export const ContentLoadingProfile = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;

    // responsiveness
    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`;

export const ContentPhotoShimmer = styled.div`
  border-radius: 6px;

  .photo {
    min-width: 9.25rem;
    max-width: 9.25rem;
    height: 9.25rem;
    border-radius: 6px;
  }
`

export const ContentInfosProfileShimmer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;

  .name {
    height: 1.5rem;
    max-width: 15rem;
    border-radius: 4px;
  }

  .containerbutton {
    height: 1rem;
    max-width: 100%;
    display: flex;
    border-radius: 4px;
    justify-content: end;
  }

  .button {
    width: 5rem;
    border-radius: 4px;
  }

  .bio {
    height: 1rem;
    max-width: 100%;
    grid-column: 1/3;
    border-radius: 4px;
  }

  div:nth-child(4) {
    max-width: 25rem;
  }

  // responsiveness
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .name {
      min-width: 60%;
      margin: 1rem 0rem;
    }

    .bio {
      min-width: 100%;
      margin-top: 0.8rem;
    }
  }

`

export const ContentGeneralInfosShimmer = styled.div`
  grid-column: 1/3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;;

  margin-top: 0.5rem;
 
  .infos {
    height: 1rem;
    border-radius: 4px;
  }

   // responsiveness
   @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 60%;
    gap: 16px;
    margin-top: 1rem;
    
    .infos {
      min-width: 100%;
    }
  }
`