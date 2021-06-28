import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  checkedBlue,
  chevronDown,
  investmentPlanIcon,
} from "../../assets/dashboard";
import Button from "../../components/dashboard/global/Button";
import Container from "../../components/dashboard/global/Container";
import Spacer from "../../components/dashboard/global/Spacer";
import Theme from "../../utils/theme";

const Header = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 31px;
  text-align: center;
  color: ${Theme.primary};

  .slideNav {
    display: none;
  }

  @media screen and (min-width: 769px) {
    text-align: left;
    padding: 0 4.8rem;

    .slideNavBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3.6rem;
      width: 3.6rem;
      border-radius: 50%;
      border: 1px solid #8d87b0;

      .icon {
        height: 1.6rem;

        &.prev {
          transform: rotateZ(90deg);
        }
        &.next {
          transform: rotateZ(-90deg);
        }
      }
    }
  }
`;

const Track = styled.div`
  width: 100%;
  overflow: hidden;
`;

const PlansWrapper = styled.div`
  display: grid;
  grid-gap: 4.8rem;
  transition: transform 500ms ease-out;

  @media screen and (min-width: 769px) {
    grid-template-columns: repeat(4, ${(props) => props.slideWidth ?? 320}px);
    grid-gap: 32px;
  }
`;

const PlanCard = styled.div`
  .inner {
    height: 100%;
    background-color: #ffffff;
    border-radius: 1rem;
    padding: 3.2rem 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
    margin-bottom: 2.4rem;
    color: ${Theme.primary};
  }

  .captionIcon {
    height: 10rem;
    margin-bottom: 2.4rem;
  }

  .percentage {
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: center;
    color: ${Theme.primary};
  }

  .percentageInfo {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: center;
    color: ${Theme.greyShade[3]};
    margin-bottom: 3.2rem;
  }

  .detailInfoIcon {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1.2rem;
  }

  .detailInfoText {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    color: ${Theme.greyShade[1]};
  }
`;

function slideScroll(slideWidth) {
  // const slider = document.querySelector(".track");
  const next = document.querySelector(".slideNavBtn.next");
  const prev = document.querySelector(".slideNavBtn.prev");
  const slides = document.querySelectorAll(".planCard");

  // slides.forEach((slide) => {
  //   slide.style.width = `${slider.offsetWidth / 3.2}px`;
  // });

  let position = 0; //slider postion

  prev.addEventListener("click", function () {
    //click previous button
    if (position > 0) {
      //avoid slide left beyond the first item
      position -= 1;
      moveSlide(position, slides, slideWidth); //translate items
    }
  });

  next.addEventListener("click", function () {
    if (position >= 0 && position < slides.length - 3) {
      //avoid slide right beyond the last item
      position += 1;
      moveSlide(position, slides, slideWidth); //translate items
    }
  });
}

function moveSlide(position, slides, slideWidth) {
  const slider = document.querySelector(".slider");

  slider.style.transform = `translateX(${position * -(slideWidth + 32)}px)`;
}

const Investments = () => {
  const [slideWidth, setSlideWidth] = useState(320);

  useEffect(() => {
    let swidth = document.querySelector(".track").offsetWidth / 3.23;
    setSlideWidth(swidth);
    slideScroll(slideWidth);
  }, []);
  return (
    <>
      <Spacer y={4.8} />
      <Header className="flexRow spaceBetween">
        <span>Investment plans</span>
        <div className="flexRow">
          <button className="slideNavBtn prev">
            <img src={chevronDown} alt="previous" className="icon prev" />
          </button>
          <Spacer x={2.4} />
          <button className="slideNavBtn next">
            <img src={chevronDown} alt="next" className="icon next" />
          </button>
        </div>
      </Header>
      <Spacer y={4.8} />
      <Container className="overflowAuto">
        <Track className="track">
          <PlansWrapper className="slider" slideWidth={slideWidth}>
            <PlanCard className="planCard">
              <div className="inner">
                <h3 className="title">Mega plan</h3>
                <img
                  src={investmentPlanIcon}
                  alt="invest"
                  className="captionIcon"
                />
                <p className="percentage">5%</p>
                <p className="percentageInfo">invest per month</p>
                <div className="flexRow fullWidth alignCenter">
                  <img
                    src={checkedBlue}
                    alt="checked"
                    className="detailInfoIcon"
                  />
                  <span className="detailInfoText">6-24 months (duration)</span>
                </div>
                <Spacer y={2} />
                <div className="flexRow fullWidth alignCenter">
                  <img
                    src={checkedBlue}
                    alt="checked"
                    className="detailInfoIcon"
                  />
                  <span className="detailInfoText">
                    N3 Million and above (amount)
                  </span>
                </div>
                <Spacer y={3.2} />
                <Button
                  as="a"
                  href="/dashboard/investments/fill-in-details"
                  text="Invest now"
                  width="100%"
                />
              </div>
            </PlanCard>
            <PlanCard className="planCard">
              <div className="inner">
                <h3 className="title">Sure plan</h3>
                <img
                  src={investmentPlanIcon}
                  alt="invest"
                  className="captionIcon"
                />
                <p className="percentage">4%</p>
                <p className="percentageInfo">invest per month</p>
                <div className="flexRow fullWidth alignCenter">
                  <img
                    src={checkedBlue}
                    alt="checked"
                    className="detailInfoIcon"
                  />
                  <span className="detailInfoText">6-18 months (duration)</span>
                </div>
                <Spacer y={2} />
                <div className="flexRow fullWidth alignCenter">
                  <img
                    src={checkedBlue}
                    alt="checked"
                    className="detailInfoIcon"
                  />
                  <span className="detailInfoText">
                    N1 Million - N2,999,000 (amount)
                  </span>
                </div>
                <Spacer y={3.2} />
                <Button
                  as="a"
                  href="/dashboard/investments/fill-in-details"
                  text="Invest now"
                  width="100%"
                />
              </div>
            </PlanCard>
            <PlanCard className="planCard">
              <div className="inner">
                <h3 className="title">Portfolio plan</h3>
                <img
                  src={investmentPlanIcon}
                  alt="invest"
                  className="captionIcon"
                />
                <p className="percentage">4%</p>
                <p className="percentageInfo">invest per month</p>
                <div className="flexRow fullWidth alignCenter">
                  <img
                    src={checkedBlue}
                    alt="checked"
                    className="detailInfoIcon"
                  />
                  <span className="detailInfoText">3-12 months (duration)</span>
                </div>
                <Spacer y={2} />
                <div className="flexRow fullWidth alignCenter">
                  <img
                    src={checkedBlue}
                    alt="checked"
                    className="detailInfoIcon"
                  />
                  <span className="detailInfoText">
                    N500,000 - N999,000 (amount)
                  </span>
                </div>
                <Spacer y={3.2} />
                <Button
                  as="a"
                  href="/dashboard/investments/fill-in-details"
                  text="Invest now"
                  width="100%"
                />
              </div>
            </PlanCard>
            <PlanCard className="planCard">
              <div className="inner">
                <h3 className="title">Folder plan</h3>
                <img
                  src={investmentPlanIcon}
                  alt="invest"
                  className="captionIcon"
                />
                <p className="percentage">3%</p>
                <p className="percentageInfo">invest per month</p>
                <div className="flexRow fullWidth alignCenter">
                  <img
                    src={checkedBlue}
                    alt="checked"
                    className="detailInfoIcon"
                  />
                  <span className="detailInfoText">3-4 months (duration)</span>
                </div>
                <Spacer y={2} />
                <div className="flexRow fullWidth alignCenter">
                  <img
                    src={checkedBlue}
                    alt="checked"
                    className="detailInfoIcon"
                  />
                  <span className="detailInfoText">
                    N100,000 - N499,000 (amount)
                  </span>
                </div>
                <Spacer y={3.2} />
                <Button
                  as="a"
                  href="/dashboard/investments/fill-in-details"
                  text="Invest now"
                  width="100%"
                />
              </div>
            </PlanCard>
          </PlansWrapper>
        </Track>
      </Container>
    </>
  );
};

export default Investments;
