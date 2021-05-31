import React from "react";
import Header from "../components/Contact/Header";
import ContactForm from "../components/global/ContactForm";
import Layout from "../components/global/Layout";
import Address from "../components/Contact/Address";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-gap: 50px;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 480.98px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }
  @media (min-width: 481px) and (max-width: 767.98px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) and (max-width: 1023.98px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1024px) and (max-width: 1199.98px) {
  }
`;
const locations = [
  {
    state: "Abeokuta",
    address: "46/47, Isale Ijeun Street, Amodemaja House Abeokuta",
    email: "abeokuta@mbbov.net",
  },
  {
    state: "Abuja",
    address: "Shop 40/41 Beffs plaza,opp mountain of fire utako.",
    email: "abuja@mbbov.net",
  },
  {
    state: "Ado Ekiti",
    address: "Km 2 Arowolo house Ikere road Ado Ekiti",
    email: "Ilorin@mbbov.net",
  },
  {
    state: "Agbarho",
    address: "1 ohrerhe street, Agbarho junction",
    email: "agbarho@mbbov.net",
  },
  {
    state: "Eket",
    address: "12 Nkubia lane Eket",
    email: "eket@mbbov.nett",
  },
  {
    state: "Ekiti 2 ",
    address: "CAC Shopping complex opposite Fayose market Ado Ekiti",
    email: "ekiti2@mbbov.net",
  },
  {
    state: "Ibadan",
    address:
      "MILO HOUSE, by Olori Egbe stores, Oja Titun , Ilorin, Kwara state",
    email: "ibadan@mbbov.net",
  },
  {
    state: "Ijebu",
    address: "Easy life house, Ilodo town, Ijebu Imusin.",
    email: "Ilorin@mbbov.net",
  },
  {
    state: "Ilorin",
    address: "MILO HOUSE, by Olori Egbe stores, Oja Titun , Ilorin.",
    email: "Ilorin@mbbov.net",
  },
  {
    state: "Isolo ",
    address: "201 mushin road isolo by Total petrol station, isolo",
    email: "isolo@mbbov.net",
  },
  {
    state: "Jesse ",
    address: "Mbbov Plaza, by Idjere Grammar School, Super Junction, Jesse.",
    email: "jesse@mbbov.net",
  },
  {
    state: "Mosogar",
    address: "Ejirofor Plaza, Old Mosogar Oghara road, By Mosogar Market",
    email: "mosogar@mbbov.net",
  },
  {
    state: "Mowe",
    address: "4, Alade Osho Close 09 Bus stop beside the Apostolic Church",
    email: "mowe@mbbov.net",
  },
  {
    state: "Ogbomoso",
    address: "Caretaker Area, Akande Market Shopping Complex",
    email: "ogbomosho@mbbov.net",
  },
  {
    state: "Port Harcourt",
    address:
      "Ship Road Mega Plaza, 13 Agip road, beside Winners church by Ada George",
    email: "portharcourt@mbbov.net",
  },
  {
    state: "Uyo",
    address: "169 Udoumana Uyo",
    email: "uyo@mbbov.net",
  },
];
const Contact = () => {
  return (
    <Layout>
      <Header />
      <ContactForm />
      <Wrapper>
        {locations.map((item) => {
          return (
            <Address
              state={item.state}
              address={item.address}
              email={item.email}
            />
          );
        })}
      </Wrapper>
    </Layout>
  );
};

export default Contact;
