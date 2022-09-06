import styled, { keyframes } from "styled-components";

export const revealText = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20%);
  }

  50% {
    opacity: .5;
  }

  100% {
    opacity: 1;
  }
`;

export const revealLink = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  50% {
    opacity: .5;
  }

  100% {
    opacity: 1;
  }
`;

export const AnimationArea = styled.div`
  padding: 4em;
  background: #0a1930;
  color: #ffffff;
  opacity: 0;
  animation: ${revealText} 1s forwards 2s;
`;

export const AnimationItem = styled.div``;
