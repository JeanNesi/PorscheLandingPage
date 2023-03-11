import styled from "styled-components";
import { theme } from "@/styles/theme";

export const ModelsContainer = styled.div`
  background: ${theme.color.white};
  height: 667px;
  padding: ${theme.size.xlg};
  display: flex;
  flex-direction: column;
  gap: ${theme.size.xxxxlg};
`;

export const ModelsContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.size.sm};

  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const CarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.size.md};
  max-width: 220px;
`;

export const CarImage = styled.div`
  height: 105px;
`;

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.size.xxsm};
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.size.xxsm};
  text-align: center;
  width: 100%;
  margin-top: ${theme.size.xlg};
`;
