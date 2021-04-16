import React from "react";
import styled from "styled-components";
import FormGroup from "./FormGroup";
import {phone,
  net,
  locate} from '../../assets/index'
const Wrapper = styled.div`
background: #F7F7FC;
  margin: -4.6rem 72px;
  .contact{
    display: flex;
    flex-wrap: wrap;
  }
  .real{
    width:65%;
  }
  .form {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.8rem 4rem;
    padding:48px;
  }
  .form>:last-child{
    grid-column:1/3;
  }
  .size-24{
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
}
  textarea{
    grid-column:1/3;
  }
  .flex{
    display:flex;
  }
  .center{
    text-align:center;
  }
  .flex-center{
    align-items:center;
  }
  .between{
    justify-content:space-between;
  }
  .mb{
    display:none;
  }

  .family{
    font-family: DM Sans;
    font-style: normal;
    color: #1C0F61;
  }
  .size-24{
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
  }
  .size-20{
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
  }
    .offices {
      width: 35%;
      background: #FF7742;
      color:#FFFFFF;
      padding:48px 24px;


      .heading {
        margin-top: 4.8rem;
      }
    }

    .submit {
      padding: 1.6rem 7.2rem;
      grid-column: 1/2;
    }
    .pad-t{
      padding-top:2rem;
      padding-left:48px;
    }
    .pad-3{
      padding-top:3rem;
    }
    .pad-28{
      padding-left:28px;
    }

  @media screen and (max-width: 768px) {
    margin: 7.2rem 0;

    .form,
    .offices {
      width: 100%;
      padding: 0;
    }
    .form {
      grid-template-columns: 1fr;
    }
  }
`;

const fields = [
  {
    style: "shortText",
    inputType: "text",
    name: "fullName",
    placeholder: "Full name",
  },
  {
    style: "shortText",
    inputType: "text",
    name: "LastName",
    placeholder: "Last name",
  },
  {
    style: "shortText",
    inputType: "text",
    name: "phone",
    placeholder: "Phone",
  },
  {
    style: "shortText",
    inputType: "email",
    name: "email",
    placeholder: "Email address",
  },
  {
    style: "longText",
    inputType: "text",
    name: "links",
    placeholder: "How can we help?",
  }
];

const ContactForm = () => {
  return (
    <Wrapper>
      <div className="contact">
        <div className="real">
          <p className="size-24 pad-t">Send a message</p>
          <form className="form">
            {fields.map((field) => (
              <FormGroup
                key={field.name}
                fieldStyle={field.style}
                inputType={field.inputType}
                name={field.name}
                placeholder={field.placeholder}
              />
            ))}
          </form>
        </div>
        <div className="offices">
          <p className="size-24">Contact info</p>
          <div className="flex flex-center pad-3">
              <div>
                <img src={phone} alt="" />
              </div>
              <div className="pad-28">
                <p className="size-20">+2349017217256</p>
                <p className="size-20">+2348109264165</p>
              </div>
          </div>
          <div className="flex flex-center pad-3">
                <div>
                <img src={net} alt="" />
                </div>
                <div className="pad-28"> 
                  <a href="" className="size-20">customercare@mbbov.net</a>
                </div>
          </div>
          <div className="flex flex-center pad-3">
                <div>
                <img src={locate} alt="" />
                </div>
                <div className="pad-28">
                  <p className="size-20">No 177, Jakpa Road, Effurun,<br />Warri, Delta State.</p>
                </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactForm;
