import styled from "styled-components";
import palette from "../../lib/colorPalette";

export const MoreBtn = styled.div`
  width: calc(100vw - 360px);
  height: 60px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${palette.black};
  background-color: ${palette.gray50};

  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.42px;
`;