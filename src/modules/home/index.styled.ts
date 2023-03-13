import styled from "styled-components";
import { COLORS, SPACES } from "../theme";
import { SIZES, WEIGHTS } from "../theme/fonts.const";

export const HomeContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${SPACES.l} ${SPACES.m};
`;

export const HomeTitle = styled.h1`
  font-size: ${SIZES.xl};
  text-align: center;
`;

export const HomeGridWrapper = styled.div`
  padding: ${SPACES.l} ${SPACES.s};
  display: grid;
  gap: ${SPACES.m};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const HomeLoadMore = styled.button`
  width: 300px;
  color: ${COLORS.headline};
  background: ${COLORS.highlight};
  border: 0;
  outline: none;
  padding: ${SPACES.m} ${SPACES.s};
  border-radius: ${SPACES.m};
  cursor: pointer;
  font-size: ${SIZES.m};
  font-weight: ${WEIGHTS.bold};
`;
