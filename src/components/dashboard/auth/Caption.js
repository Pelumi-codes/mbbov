import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Theme from "../../../utils/theme";
import Spacer from "../global/Spacer";

const Wrapper = styled.div`
  text-align: ${(props) => props.align ?? "left"};
  padding: 0 2.4rem;

  .heading {
    font-size: 22px;
    color: ${Theme.primary};
  }

  .subHeading {
    color: ${(props) => props.subHeadingColor ?? Theme.greyShade[3]};
  }
`;

const Caption = ({ className, heading, subHeading, subHeadingColor }) => {
  const styleProps = { className, subHeadingColor };
  return (
    <Wrapper {...styleProps}>
      <h2 className="heading textLargeBold">
        {heading.split("\n").map((section) => (
          <span key={section}>
            {section}
            <br />
          </span>
        ))}
      </h2>
      <Spacer y={1.2} />
      <h4 className="subHeading textRegular">
        {subHeading.split("\n").map((section) => (
          <span key={section}>
            {section}
            <br />
          </span>
        ))}
      </h4>
    </Wrapper>
  );
};

Caption.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  subHeadingColor: PropTypes.string,
};

export default Caption;
