import styled from "styled-components";

const StyledMenu = styled.div`
  height: 2.8rem;
  width: 2.8rem;

  ${({ theme }) => theme.breakpoints.laptop} {
    display: none;
  }
`;

export function Menu({ setOpen, menuRef }) {
  return (
    <StyledMenu onClick={() => setOpen(true)} ref={menuRef}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    </StyledMenu>
  );
}
