import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${theme.color.background};
    color: ${theme.color.text};
    overflow-x: hidden;



    @media (max-width: 900px) {
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }

  a {
    font-weight: 500;
    text-decoration: none;
    color: ${theme.color.text};
    transition: 0.25s;
    :hover {
      opacity: 0.7;
      color: ${theme.color.primary}
    }
  }

  input {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    font-style: normal;
    outline: none;
    width: 100%;
    background-color: transparent;
    border: none;
    height: 53px;


    @media (max-width: 900px) {
      font-size: 14px;
      line-height: 18px;
    }
  }


  button {
    width: fit-content;
    border-radius: ${theme.size.xsm};
    padding: ${theme.size.sm} ${theme.size.lg};
    outline: none;
    border: none;
    cursor: pointer;
    color: ${theme.color.white};
    background-color: ${theme.color.primary};
    transition: 0.25s;
    :hover {
      opacity: 0.7;
    }
    z-index: 10;
    @media (max-width: 900px) {
      padding: 12px 32px;
      width: 100%;
    }
  }

  /* [disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  } */


  ul {
    list-style: none;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 42px;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
  }

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
  }

  h5 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
  }

  h6 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
  }

  .h7 {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }

  .h {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
  }

  .p1 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;

  }

  .p2 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }

  .p3 {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }

  .p4 {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
  }

  .p5 {
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
  }

`;
