import styled from "styled-components";
import { COLORS, SPACES } from "../theme";
import { SIZES } from "../theme/fonts.const";

export const SpellContainer = styled.div`
  max-width: 1200px;
  height: 80vh;
  display: grid;
  place-items: center;
  margin: 0 auto;
  padding: ${SPACES.l} ${SPACES.m} 0;
  position: relative;
`;

export const SpellHeading = styled.h3`
  text-align: center;
  color: ${COLORS.headline};
  font-size: ${SIZES.xl};
  margin-bottom: ${SPACES.lg};
`;

export const SpellDescription = styled.div`
  color: ${COLORS.grey};
  font-size: ${SIZES.m};
  margin-bottom: ${SPACES.ms};

  h5 {
    font-size: ${SIZES.l};
    margin-bottom: ${SPACES.m};
  }
`;

export const SpellHigherLevel = styled.div`
  color: ${COLORS.highlight};
  font-size: ${SIZES.m};
  margin-bottom: ${SPACES.ms};

  h5 {
    font-size: ${SIZES.l};
    margin-bottom: ${SPACES.m};
  }
`;

export const SpellMaterial = styled.div`
  color: ${COLORS.headline};
  font-size: ${SIZES.m};
  margin-bottom: ${SPACES.ms};

  h5 {
    font-size: ${SIZES.l};
    margin-bottom: ${SPACES.m};
  }
`;

export const SpellClasses = styled.div`
  color: ${COLORS.violet};
  font-size: ${SIZES.m};
  margin-bottom: ${SPACES.ms};
  display: flex;
  flex-wrap: wrap;
  gap: ${SPACES.m};
  align-items: center;

  h5 {
    font-size: ${SIZES.l};
  }
`;

export const SpellClassesFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${SPACES.m};
  align-items: center;
`;

export const SpellClassesLink = styled.p`
  padding: ${SPACES.s} ${SPACES.m};
  border-radius: ${SPACES.s};
  color: ${COLORS.primary};
  background: ${COLORS.violet};
  text-decoration: underline;
`;

export const SpellBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${SPACES.m};
  margin-bottom: ${SPACES.ms};

  div {
    background: ${COLORS.stroke};
    padding: ${SPACES.m} ${SPACES.s};
    border-radius: ${SPACES.s};
    color: ${COLORS.primary};
    cursor: pointer;
  }
`;
