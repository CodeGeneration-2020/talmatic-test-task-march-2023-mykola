import styled from "styled-components";
import { COLORS } from "../../../theme";
import { SIZES } from "../../../theme/fonts.const";

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  color: ${COLORS.stroke};
  font-size: ${SIZES.xl};
`;
