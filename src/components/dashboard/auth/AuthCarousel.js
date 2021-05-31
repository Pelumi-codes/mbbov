import React from "react";
import styled from "styled-components";
import { logo } from "../../../assets/dashboard";
import Theme from "../../../utils/theme";
import Spacer from "../global/Spacer";

const Wrapper = styled.div`
  width: 30%;
  flex-shrink: 0;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  filter: ${Theme.filterWhite};
  height: 6rem;
`;

const Track = styled.div`
  display: flex;
  animation: slide 15s infinite linear;
  animation-delay: 3s;
  animation-timing-function: ease;

  @keyframes slide {
    0% {
      transform: translateX(0%);
    }
    20% {
      transform: translateX(-100%);
    }
    40% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(-200%);
    }
    70% {
      transform: translateX(-200%);
    }
    80% {
      transform: translateX(-300%);
    }
    100% {
      transform: translateX(-300%);
    }
  }
`;

const Slide = styled.div`
  height: 100vh;
  width: 100%;
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  background-position: center;
  background-size: cover;
  padding: 4.8rem;

  &.slide_1 {
    background-image: url("../../../assets/dashboard/images/authCarouselImg_1.png");
    background-color: burlywood;
  }

  &.slide_2 {
    background-image: url("../../../assets/dashboard/images/authCarouselImg_2.png");
    background-color: darkslategrey;
  }

  &.slide_3 {
    background-image: url("../../../assets/dashboard/images/authCarouselImg_3.png");
    background-color: black;
  }
`;

const Indicators = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  li {
    display: block;
    background-color: #ffffff;
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
    opacity: 0.5;
    transition: opacity 200ms ease-in;
  }

  li.active {
    opacity: 1;
  }
`;

const AuthCarousel = () => {
  return (
    <Wrapper>
      <Track>
        <Slide className="slide_1">
          <div>
            <Spacer y={9.6} />
            <Logo src={logo} alt="MBBOV" />
          </div>
          <div>
            <p className="textLargeBold">Save today.</p>
            <p className="textLargeBold">Flex tomorrow.</p>
            <Spacer y={2.4} />
            <Indicators>
              <li className="active"></li>
              <Spacer x={1.2} y={1.2} />
              <li></li>
              <Spacer x={1.2} y={1.2} />
              <li></li>
            </Indicators>
            <Spacer y={14} />
          </div>
        </Slide>
        <Slide className="slide_2">
          <div>
            <Spacer y={9.6} />
            <Logo src={logo} alt="MBBOV" />
          </div>
          <div>
            <p className="textLargeBold">Borrow today.</p>
            <p className="textLargeBold">Pay later with little interest.</p>
            <Spacer y={2.4} />
            <Indicators>
              <li></li>
              <Spacer x={1.2} y={1.2} />
              <li className="active"></li>
              <Spacer x={1.2} y={1.2} />
              <li></li>
            </Indicators>
            <Spacer y={14} />
          </div>
        </Slide>
        <Slide className="slide_3">
          <div>
            <Spacer y={9.6} />
            <Logo src={logo} alt="MBBOV" />
          </div>
          <div>
            <p className="textLargeBold">Invest today.</p>
            <p className="textLargeBold">Watch your money grow.</p>
            <Spacer y={2.4} />
            <Indicators>
              <li></li>
              <Spacer x={1.2} y={1.2} />
              <li></li>
              <Spacer x={1.2} y={1.2} />
              <li className="active"></li>
            </Indicators>
            <Spacer y={14} />
          </div>
        </Slide>
        <Slide className="slide_1">
          <div>
            <Spacer y={9.6} />
            <Logo src={logo} alt="MBBOV" />
          </div>
          <div>
            <p className="textLargeBold">Save today.</p>
            <p className="textLargeBold">Flex tomorrow.</p>
            <Spacer y={2.4} />
            <Indicators>
              <li className="active"></li>
              <Spacer x={1.2} y={1.2} />
              <li></li>
              <Spacer x={1.2} y={1.2} />
              <li></li>
            </Indicators>
            <Spacer y={14} />
          </div>
        </Slide>
      </Track>
    </Wrapper>
  );
};

export default AuthCarousel;
