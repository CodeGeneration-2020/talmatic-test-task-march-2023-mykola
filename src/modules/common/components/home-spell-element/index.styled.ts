import styled from "styled-components";
import { COLORS, SPACES } from "../../../theme";
import { SIZES } from "../../../theme/fonts.const";

export const HomeSpellEl = styled.div`
  background: ${COLORS.headline};
  padding: ${SPACES.m};
  color: ${COLORS.background};
  border-radius: 2px;
  font-size: ${SIZES.s};
`;

export const HomeSpellFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${SPACES.m};

  h6 {
    font-size: ${SIZES.l};
  }

  svg {
    fill: ${COLORS.highlight};
    width: ${SPACES.lg};
    height: ${SPACES.lg};
    cursor: pointer;
  }
`;

export const HomeSpellBtn = styled.div`
  width: 100%;
  background: ${COLORS.stroke};
  padding: ${SPACES.s} ${SPACES.m};
  border-radius: ${SPACES.s};
  color: ${COLORS.primary};
  text-align: center;
  cursor: pointer;
`;
