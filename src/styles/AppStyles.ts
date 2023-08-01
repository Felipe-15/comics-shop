import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      max-width: 120rem;
      margin: 0 auto;

      padding: ${theme.sizes.medium};
    `;
  }}
`;
