import styled from "styled-components";

export const ContainerLoading = styled.div`
  background-color: ${props => props.theme["blue-800"]};
  border-radius: 10px;
  box-shadow: 2px -1px 19px 4px rgba(0,0,0,0.26);
  padding: 2rem 2.5rem;
  height:  9.25rem;

  position: relative;
  top: -7rem;

  display: flex;
  justify-content: center;
  align-items: center;
`