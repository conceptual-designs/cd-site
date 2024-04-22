import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: ${({ theme }) => theme.padding.xl};
  background-color: ${({ theme }) => theme.colors.primary};
  height: 1vh;
  color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  place-items: center;
`;

const Copy = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  opacity: 0.8;
  text-align: center;
`;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <Copy>&copy; Conceptual Designs {year} - All rights reserved.</Copy>
    </StyledFooter>
  );
}
