import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { chevronDown, hamburger } from "../../assets";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";

const Wrapper = styled.nav`
  width: 100%;
  background-color: ${(props) => (props.bg ? props.bg : "#ffffff")};
  padding: 1.6rem 0;
  position: sticky;
  top: 0;
  z-index: 5;

  .inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .navLeft {
  }

  .navRight {
    display: flex;
    align-items: center;
  }

  .navLinks {
    display: flex;
    align-items: center;
  }

  .linkWrapper {
    padding: 1rem;
    margin-right: 4.8rem;
    position: relative;
    cursor: pointer;
  }

  .navLink {
    display: flex;
    align-items: center;
    color: ${(props) => (props.bg ? "#ffffff" : "#1a1a1a")};
    font-weight: 500;
    white-space: nowrap;

    img {
      height: 0.6rem;
      margin-left: 1.6rem;
      filter: ${(props) =>
        props.bg ? props.theme.colors.filterWhite : "unset"};
    }
  }

  .hamburger.mb {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .navCollapse {
      display: none;
    }

    .navLeft {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .hamburger.mb {
      display: block;
      height: 3.2rem;
      filter: ${(props) =>
        props.bg ? props.theme.colors.filterWhite : "unset"};
    }
  }
`;

const Brand = styled.a`
  width: fit-content;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  border-radius: 1rem;
  z-index: 10;
  box-shadow: 0px 16px 40px 0px rgba(112, 144, 176, 0.2);
  padding: 1.2rem;
  opacity: 0;
  pointer-events: none;

  &.open {
    opacity: 1;
    pointer-events: all;
  }

  .item {
    display: block;
    padding: 1rem;

    a {
      color: #1a1a1a;
      white-space: nowrap;
    }
  }
`;

const caseStudies = [
  {
    text: "Heroshe",
    href: "/",
  },
  {
    text: "Anike Natural",
    href: "/",
  },
  {
    text: "MyGSTzone",
    href: "/",
  },
];

const services = [
  {
    text: "Sales Funnel Management",
    href: "/sales-funnel-management",
  },
  {
    text: "Social Media Marketing",
    href: "/social-media-marketing",
  },
  {
    text: "Search Engine Optimisation",
    href: "/search-engine-optimization",
  },
  {
    text: "Google Search Ads",
    href: "/google-search-ads",
  },
  {
    text: "Wordpress Website Creation",
    href: "/wordpress-website-creation",
  },
  {
    text: "UI/UX Design",
    href: "/ui-ux-design",
  },
  {
    text: "Web Development",
    href: "/web-development",
  },
];

const showDropdown = (selector) => {
  // document.querySelector(".backdrop").classList.add("open");
  document.querySelector(selector).classList.add("open");

  return null;
};

const hideDropDown = () => {
  document
    .querySelectorAll(".dropdown")
    .forEach((el) => el.classList.remove("open"));
};

const Navbar = ({ bg }) => {
  return (
    <Wrapper bg={bg}>
      <Container>
        <div className="inner">
          <div className="navLeft">
            <Brand href="/">
              <Logo light={bg ? true : false} />
            </Brand>
            <img src={hamburger} alt="menu" className="hamburger mb" />
          </div>
          <div className="navRight navCollapse">
            <ul className="navLinks">
              <li
                className="linkWrapper"
                onMouseOver={() => showDropdown(".dropdown__casestudies")}
                onMouseLeave={hideDropDown}
              >
                <span className="navLink textSmall">
                  <span>Case studies</span>
                  <img src={chevronDown} alt="dropdown" />
                </span>
                <Dropdown className="dropdown dropdown__casestudies">
                  {caseStudies.map((item) => (
                    <li key={item.text} className="item">
                      <a href={item.href} className="textXSmall">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </Dropdown>
              </li>
              <li
                className="linkWrapper"
                onMouseOver={() => showDropdown(".dropdown__services")}
                onMouseLeave={hideDropDown}
              >
                <span className="navLink textSmall">
                  <span>Services</span>
                  <img src={chevronDown} alt="dropdown" />
                </span>
                <Dropdown className="dropdown dropdown__services">
                  {services.map((item) => (
                    <li key={item.text} className="item">
                      <a href={item.href} className="textXSmall">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </Dropdown>
              </li>
              <li className="linkWrapper">
                <a className="navLink textSmall" href="/about">
                  <span>About us</span>
                </a>
              </li>
              <li className="linkWrapper">
                <a className="navLink textSmall" href="/contact">
                  <span>Contact us</span>
                </a>
              </li>
            </ul>
            <Button
              as="a"
              href="/get-proposal"
              text="Get a free proposal"
              bg={bg ? "white" : undefined}
              color={bg ? "primary" : undefined}
            />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

Navbar.propTypes = {
  bg: PropTypes.string,
};

export default Navbar;
