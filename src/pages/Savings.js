import React from "react";
import Headline from "../components/global/Headline";
import Terms from "../components/Savings.js/Terms";
import Need from "../components/Savings.js/Need";
import Automate from "../components/Savings.js/Automate";
import Steps from "../components/Savings.js/Steps";
import Layout from "../components/global/Layout";
const Savings = () => {
  return (
    <Layout>
      <Headline
        title="Save with ease automatically."
        text="Savings are amazing, automate your savings and flex tomorrow. Save automatically or manually either daily, weekly or monthly."
      />
      <Terms />
      <Need />
      <Automate />
      <Steps />
    </Layout>
  );
};
export default Savings;
