import styled from "styled-components";
import PropTypes from "prop-types";
import Theme from "../../../utils/theme";
import Button from "../global/Button";

const Wrapper = styled.div`
  padding: 3.6rem;
  border-radius: 1rem;
  background-color: ${(props) => props.bg ?? "#ffffff"};

  .title {
    color: ${(props) => props.titleColor ?? Theme.greyShade[0]};
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0px;
    margin-bottom: 0.6rem;
  }

  .subtitle {
    color: #696d96;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0px;
  }

  .btn {
    margin-top: 3.2rem;
  }

  @media screen and (min-width: 769px) {
    margin-bottom: 1.2rem;
    padding: 1.6rem 3.6rem;

    .title {
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: 1px;
    }

    .subtitle {
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 27px;
      letter-spacing: 0px;
    }

    .btn {
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 21px;
      letter-spacing: 0px;
      text-align: center;
    }
  }
`;

const GetStartedCard = ({
  bg,
  title = "",
  subtitle = "",
  btnText = "",
  target = "/dashboard",
  titleColor,
  className,
}) => {
  const styleProps = { bg, titleColor, className };
  return (
    <Wrapper {...styleProps}>
      <div>
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>
      <Button as="a" href={target} text={btnText} className="btn" />
    </Wrapper>
  );
};

GetStartedCard.propTypes = {
  bg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default GetStartedCard;
