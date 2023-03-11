import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerCarousel = styled.div`
  display: flex;
  width: 100%;

  .carouselContainer {
    width: 100%;
    position: relative;
  }
`;

export const CarouselContent = styled.div`
  width: 100%;
  position: absolute;
  height: 100%;
  bottom: 0px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${theme.size.xlg};
  align-items: flex-end;
  padding: ${theme.size.lg} ${theme.size.xlg};

  h1 {
    max-width: 454px;
    text-transform: uppercase;
    color: ${theme.color.white};
    margin-right: auto;
  }

  .dotGroup {
    display: flex;
    border-radius: 4px;
    overflow: hidden;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;

    .carousel__dot--selected {
      background: ${theme.color.white};
    }

    button {
      height: 2px;
      padding: 0;
      background: ${theme.color.gray4};
      width: 100%;
      border-radius: 0;
      z-index: 1;
      border: none;
    }
  }

  .nextArrow {
    padding: 0;
    max-width: fit-content;
    background: transparent;
    border: none;
  }
`;
