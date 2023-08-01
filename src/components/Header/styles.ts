import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => {
    return css`
      border-bottom: 1px solid #e3e3e3;
      filter: drop-shadow(0 4px 2px rgba(0, 0, 0, 0.1));

      background: ${theme.colors.primary};
    `;
  }}
`;

export const Content = styled.div`
  ${({ theme }) => {
    return css`
      max-width: 120rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: ${theme.sizes.xsmall} ${theme.sizes.medium};
    `;
  }}
`;

export const Logo = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;

      align-items: center;
      justify-content: center;

      gap: ${theme.sizes.small};

      svg {
        width: ${theme.sizes.giant};
      }

      h2 {
        font-size: ${theme.sizes.big};
        font-weight: 800;
      }
    `;
  }}
`;

interface MenuLinksProps {
  isOpen: boolean;
}

export const MenuLinks = styled.nav<MenuLinksProps>`
  ${({ theme, isOpen }) => {
    return css`
      display: flex;

      gap: ${theme.sizes.medium};

      svg {
        display: none;
      }

      a {
        font-size: ${theme.sizes.medium};
      }

      span {
        transition: color 0.2s ease-in-out;
      }

      a span:hover {
        color: ${theme.colors.secondary};
      }

      ${theme.medias.mobile} {
        position: ${isOpen ? "absolute" : "static"};
        inset: 0;

        background: ${theme.colors.primary};

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        svg {
          display: ${isOpen ? "none" : "inline"};

          cursor: pointer;

          color: ${theme.colors.secondary};

          path {
            color: ${theme.colors.secondary};
          }
        }

        svg:first-child {
          display: ${isOpen ? "inline" : "none"};
          position: absolute;
          right: ${theme.sizes.small};
          top: ${theme.sizes.small};
        }
        a {
          display: ${isOpen ? "inline" : "none"};
        }
      }
    `;
  }}
`;
