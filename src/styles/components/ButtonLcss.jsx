import styled from "styled-components";
import palette from "../../lib/colorPalette.js";

export const Btn = styled.div`
  width: 400px;
  height: 50px;
  border-radius: 6px;
  background-color: ${palette.black};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: ${palette.gray100};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.48px;
`;