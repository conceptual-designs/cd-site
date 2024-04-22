import styled from "styled-components";

import logo from "@assets/images/logo.png";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.padding.sm};
`;

const LogoImage = styled.img`
  height: 2.5rem;
`;

export function Logo() {
  return (
    <StyledLogo>
      <LogoImage src={logo} alt="conceptual designs" />
    </StyledLogo>
  );
}
