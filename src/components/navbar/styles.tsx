import { theme } from "@/styles/theme";
import styled from "styled-components";

export const NavbarContainer = styled.header`
  width: 100%;
  height: 90px;
  background: ${theme.color.white};
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
`;

export const NavbarContent = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  padding: ${theme.size.lg} ${theme.size.xlg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  > img {
    position: absolute;
    left: 45%;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.size.xsm};
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.size.md};
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${theme.size.md};

  a {
    display: flex;
    align-items: center;
    gap: ${theme.size.xsm};
  }
`;
