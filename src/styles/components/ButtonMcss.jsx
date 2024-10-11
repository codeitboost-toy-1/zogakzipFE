import styled from "styled-components";
import palette from "../../lib/colorPalette.js";

export const Btn = styled.div`
  width: 200px;
  height: 45px;
  border-radius: 6px;
  background-color: ${palette.black};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: ${palette.gray100};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.42px;
`;