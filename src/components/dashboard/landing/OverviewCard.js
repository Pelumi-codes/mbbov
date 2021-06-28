import styled from "styled-components";
import PropTypes from "prop-types";
import Theme from "../../../utils/theme";
import NairaSign from "../global/NairaSign";
import Spacer from "../global/Spacer";

const Wrapper = styled.div`
  position: relative;
  padding: 2.4rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 13.4rem;
  border-radius: 1rem;
  width: 100%;

  .title {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0px;
    color: ${Theme.greyShade[3]};
  }

  .amount {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 31px;
    letter-spacing: 0px;
    color: ${Theme.greyShade[0]};
  }

  .info {
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 13px;
    letter-spacing: 0px;
    color: ${Theme.greyShade[3]};

    &.active {
      color: ${Theme.success};
    }
  }

  .icon {
    position: absolute;
    top: 2.4rem;
    right: 2.4rem;
    height: 2.4rem;
  }

  @media screen and (min-width: 769px) {
    height: 20rem;

    .icon {
      height: 4.8rem;
      width: 4.8rem;
    }
  }
`;

const OverviewCard = ({
  title = "",
  amount = "0.00",
  info = "",
  icon = "",
}) => {
  return (
    <Wrapper>
      <img src={icon} alt="Investments overview" className="icon" />
      <p className="title">{title}</p>
      <div className="amount">
        <NairaSign />
        <Spacer x={1.2} />
        <span>{amount}</span>
      </div>
      <p className="info">{info}</p>
    </Wrapper>
  );
};

OverviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default OverviewCard;
