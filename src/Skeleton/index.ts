import styled from "styled-components";

export default styled.div`
    background-image: linear-gradient(
    -90deg,
    #A8A8A8 0%,
    #484848 50%,
    #A8A8A8 100%
  );

  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%; 
    }

    100% {
      background-position: -135% 0%;
    }
  }
`