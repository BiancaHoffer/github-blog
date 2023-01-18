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
    
`;

export const ContentPhotoShimmer = styled.div`
  border-radius: 6px;
  .photo {
    min-width: 9.25rem;
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
    width: 15rem;
    border-radius: 4px;
  }

  .containerbutton {
    height: 1rem;
    display: flex;
    border-radius: 4px;
    justify-content: end;
  }

  .button {
    width: 6rem;
    border-radius: 4px;
  }

  .bio {
    height: 1rem;
    grid-column: 1/3;
    border-radius: 4px;
  }

  div:nth-child(4) {
    width: 25rem;
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

`