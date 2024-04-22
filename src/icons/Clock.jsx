import styled from 'styled-components';

const StyledClock = styled.div`
  height: 2.4rem;
  width: 2.4rem;
`;

export function Clock() {
  return (
    <StyledClock>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </StyledClock>
  );
}
