import { theme } from "@/styles/theme";
import styled from "styled-components";

export const NavbarContainer = styled.header`
  width: 100%;
  height: 90px;
  background: ${theme.color.white};
`;

export const NavbarContent = styled.div`
  max-width: 1280px;
  height: 100%;
  padding: ${theme.size.lg} ${theme.size.xlg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  > img {
    position: absolute;
    left: 50%;
    right: 50%;
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
  gap: ${theme.size.xsm};
`;

export const Nav = styled.nav`
  display: flex;
`;
