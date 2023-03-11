import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;

    ::-webkit-scrollbar {
    width: 6px; /* width of the entire scrollbar */
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.color.gray1}; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.color.gray3}; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid ${theme.color.gray3}; /* creates padding around scroll thumb */
  }
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
    width: 100%;
    max-width: 264px;
    border-radius: ${theme.size.md};
    outline: none;
    padding: ${theme.size.xsm} ${theme.size.xxlg};
    border: 1px solid ${theme.color.black};
    cursor: pointer;
    color: ${theme.color.black};
    background-color: transparent;
    transition: 0.25s;
    :hover {
      opacity: 0.7;
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
