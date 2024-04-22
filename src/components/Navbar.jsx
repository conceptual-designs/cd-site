import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// Components
import { Menu } from "@components/Menu";
import { Logo } from "@components/Logo";

const StyledNavbar = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  height: 5rem;
  width: 100%;
  z-index: 1000;
  color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.padding.xl};
  background-color: ${({ theme, $isScrolled }) =>
    $isScrolled ? theme.colors.background : "transparent"};
  transition: ${({ theme }) => theme.transitions.easeInOut};

  ${({ theme }) => theme.breakpoints.laptop} {
    height: 10rem;
    padding: ${({ theme }) => theme.padding.xxl};
  }
`;

const NavList = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  width: 100vw;
  padding: ${({ theme }) => theme.padding.xxl};
  transition: ${({ theme }) => theme.transitions.easeInOutCubicBezier};
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-180%)")};

  ${({ theme }) => theme.breakpoints.laptop} {
    all: unset;
    display: flex;
    list-style: none;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xxl};
  }
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.black};
  transition: ${({ theme }) => theme.transitions.easeInOut};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export function Navbar({ isScrolled }) {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !ref.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <StyledNavbar $isScrolled={isScrolled}>
      <Menu setOpen={setOpen} menuRef={menuRef} />
      <Logo />
      <NavList $open={open} ref={ref}>
        <NavItem>
          <NavLink href="#home" $active={true}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#services">Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Get in touch</NavLink>
        </NavItem>
      </NavList>
    </StyledNavbar>
  );
}
