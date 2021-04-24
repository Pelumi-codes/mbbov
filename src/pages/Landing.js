import React from "react";
import Simplify from "../components/Landing/Simplify";
import Happy from "../components/Landing/Happy";
import Headline from "../components/global/Headline";
import Features from "../components/global/Features";
import {
  landing_image_3,
  landing_image_4,
  landing_image_5,
} from "../assets/index";
import Layout from "../components/global/Layout";

const Landing = () => {
  return (
    <Layout>
      <Headline
        title="Get your finances back on track today"
        text="Invest today and watch your money grow. Save today, flex tomorrow. Loan today and pay back with little interest."
        hasChild
      />
      <Simplify />

      <Features
        tickColor="blue"
        title="Get up to 5% interest for every investment"
        listArray={[
          "Ad sint cupidatat qui veniam enim labore reprehender.",
          "Ad sint cupidatat qui veniam enim labore reprehender.",
          "Ad sint cupidatat qui veniam enim labore reprehender.",
        ]}
      />
      <Features
        tickColor="purple"
        image={landing_image_5}
        imageLeft
        title="Request a loan and pay with little interest "
        listArray={[
          "Ad sint cupidatat qui veniam enim labore reprehender.",
          "Ad sint cupidatat qui veniam enim labore reprehender.",
          "Ad sint cupidatat qui veniam enim labore reprehender.",
        ]}
      />
      <Features
        tickColor="purple"
        image={landing_image_4}
        title="Apply for a savings plan and enjoy tomorrow"
        listArray={[
          "Ad sint cupidatat qui veniam enim labore reprehender.",
          "Ad sint cupidatat qui veniam enim labore reprehender.",
          "Ad sint cupidatat qui veniam enim labore reprehender.",
        ]}
      />
      <Happy />
    </Layout>
  );
};
export default Landing;
