import styled from "styled-components";
import Theme from "../../../utils/theme";

const Sidebar = styled.div`
  height: calc(100vh - 9.6rem);
  width: 24rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0 2.4rem;
  background-color: #ffffff;
  overflow: auto;
  z-index: 5;

  .item {
    display: flex;
    align-items: flex-start;
    padding: 1.6rem 2.4rem;
    color: ${Theme.primaryShade[4]};
    border-radius: 0.4rem;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0px;
    text-align: center;
    transition: all 250ms ease-in;

    .icon {
      height: 2rem;
      width: 2rem;

      &.active {
        display: none;
      }
    }

    &.active {
      color: ${Theme.primary};
      background-color: ${Theme.primary}20;

      .icon {
        display: none;

        &.active {
          display: inline-block;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;
    flex-direction: row;
    width: 100vw;
    height: fit-content;

    .lg {
      display: none;
    }

    .item {
      flex-direction: column;
      align-items: center;
      padding: 1.6rem 0;
      width: 20vw;
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 15px;
      letter-spacing: 0px;
      text-align: center;

      &.active {
        background-color: transparent;
        color: ${Theme.primaryShade[4]};
      }
    }
  }
`;

export default Sidebar;
