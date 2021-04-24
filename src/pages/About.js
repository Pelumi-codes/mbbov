import React from "react";
import Header from "../components/About/Header";
import Who from "../components/About/Who";
import About from "../components/About/About";
import Leaders from "../components/About/Leaders";
import Layout from "../components/global/Layout";

const AboutWho = () => {
  return (
    <Layout>
      <Header />
      <Who />
      <About />
      <Leaders />
    </Layout>
  );
};

export default AboutWho;
