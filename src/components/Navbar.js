import { NavLink } from 'react-router-dom';
import { HiOutlineMenu, MdClose } from '../proxy/react-icons-proxy';
import {useState} from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--white);
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--red-light);
      }
    }
    a {
      display: inline-block;
      font-family: 'Roboto';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--black);
      outline: none;
      &:hover {
        color: var(--white);
      }
    }
    .active {
      color: var(--red-light);
      border-radius: 8px;
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    color: var(--black);
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  .closeNavIcon {
    color: var(--white);
  }
  @media only screen and (max-width: 1024px) {
    img {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--red-light);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
      a {
        color: var(--white);
      }
      .active {
        color: var(--black);
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);

  return (
    <NavStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => {
          setShowNav(!showNav) 
        }}
        role="button"
        onKeyDown={() => {
          setShowNav(!showNav) 
        }}
        tabIndex={0}
      >
        <HiOutlineMenu />
      </div>
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => {
            setShowNav(!showNav) 
          }}
          role="button"
          onKeyDown={() => {
            setShowNav(!showNav) 
          }}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Resume"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Portfolio"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Portfolio
          </NavLink>
        </li>
      </ul>
    </NavStyles>
  );
}