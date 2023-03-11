import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div<{ bgImg: string }>`
  background-image: url("/porscheInterior.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 667px;
  padding: ${theme.size.xlg};
  display: flex;
  flex-direction: column;
  gap: ${theme.size.xxxxlg};
`;
