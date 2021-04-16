import React from 'react'
import styled from 'styled-components'




const Wrapper = styled.div`
        padding: 50px 72px;
        .frequently{
            padding:0px 128px;
        }
        .flex{
            display:flex;
        }
        .center{
            text-align:center;
        }
        .flex-center{
            justify-content:center;
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
        .size-48{
            font-weight: bold;
            font-size: 48px;
            line-height: 150%;
        }
        .size-20{
            font-weight: 500;
            font-size: 20px;
            line-height: 150%;
        }
        .size-24{
            font-weight: bold;
            font-size: 24px;
            line-height: 150%;
        }
        .pad-2{
            padding:1rem 0rem;
        }
        .pad-3{
            padding:3rem 0rem;
        }
        .column{
            flex-direction:column;
        }
        .width-416{
            width:416px;
        }

        @media (max-width: 768px) {
            .pad-2{
            padding-top:2rem;
           }
            .width{
                width:100%;
            }
            .flex{
                flex-direction:column;
            }
            .mb{
                display:block;
            }
            .lg{
                display:none;
            }
        }
        @media (max-width: 480.98px) {
            padding: 50px 24px;
            .width-416 {
                width: auto;
                padding-top: 1rem;
            }
            .frequently {
                padding: 0px 0px;
            }
        }
        @media (min-width: 481px) and (max-width: 767.98px) {
            padding: 50px 48px;
            .width-416 {
                width: auto;
                padding-top: 1rem;
            }
            .frequently {
                padding: 0px 0px;
            }
            

        }
        @media (min-width: 768px) and (max-width: 1023.98px){
            .frequently {
                padding: 0px 0px;
            }
            .width-416{
                width:306px;
            }
        }
        @media (min-width: 1024px) and (max-width: 1199.98px){
            .frequently {
                padding: 0px 58px;
            }
            .width-416{
                width:356px;
            }
        }

`;

const Header= () => {
    return (
      <Wrapper>
        <div className="frequently family">
            <h1 className="center size-48 pad-3">Frequently Asked <br />Questions</h1>
            <div className="family">
                <div className="flex between pad-2">
                        <div className="width-416">
                            <h3 className="size-24"> How do I become a member?</h3>
                            <p className="size-20">You become a member by registering with Mbbov.</p>
                        </div>
                        <div className="width-416">
                            <h3 className="size-24">Do I need collateral?</h3>
                            <p className="size-20">Mbbov runs strictly on a "No Collateral" policy</p>
                        </div>
                </div>
                <div className="flex between pad-2">
                        <div className="">
                            <div className="width-416">
                                <h3 className="size-24"> How do I get registered?</h3>
                                <p className="size-20">You can register by simply pay a non-refundable fee of #2,000:00 to any of our account officer, collect a receipt, then an account number will be generated and sent to you.</p>
                            </div>
                            <div className="width-416 pad-2">
                                <h3 className="size-24">How can I get a loan?</h3>
                                <p className="size-20">You can get a loan by registering as one of our membe`rs. Membership guarantees eligibility to loan facility.</p>
                            </div>
                        </div>

                        <div className="width-416">
                            <h3 className="size-24">How do I start saving?</h3>
                            <p className="size-20">You can register by simply pay a non-refundable fee of #2,000:00 to any of our account officer, collect a receipt, then an account number will be generated and sent to you. (always ensure you collect a receipt for any payment you make) you can also make payments directly to the company’s account, then send proof of payments to our account officers through our e -mail contacts.</p>
                        </div>
                </div>
                <div className="flex between pad-2">
                        <div className="width-416">
                            <h3 className="size-24"> How much is the interest on the loan?</h3>
                            <p className="size-20">Our interest rate come in forms and percentages for different products. Generally our interest rates range from between 10% - 15%</p>
                        </div>
                        <div className="width-416">
                            <h3 className="size-24">What is the lowest amount I can save?</h3>
                            <p className="size-20">Yes, a customer may choose to withdraw his/her savings at any point, even while still saving</p>
                        </div>
                </div>
                <div className="flex between pad-2">
                        <div className="width-416">
                            <h3 className="size-24"> Can I just dump a large into the Cooperative account and request for a loan that is double my contribution?</h3>
                            <p className="size-20">Mbbov does not approve or give our loans based on contribution. Mbbov cooperative, is not an association, it has its policy for giving out loans.</p>
                        </div>
                        <div className="width-416">
                            <h3 className="size-24">Can I withdraw my money while am still saving?</h3>
                            <p className="size-20">Personal loan is the obvious choice if you need a finance for Personal finance, Medical emergency, Wedding purposes, Abroad travel, Holidays, Child education and for buying consumer durable things.</p>
                        </div>
                </div>
                <div className="flex between pad-2">
                        <div className="width-416">
                            <h3 className="size-24"> What is the duration for repayment of my loan?</h3>
                            <p className="size-20">Our loan tenure span from between 6(six)weeks - 3(three) months.</p>
                        </div>
                        <div className="width-416">
                            <h3 className="size-24">How do I then access my money?</h3>
                            <p className="size-20">Simply by filling a withdrawal for, after which such withdrawal will be processed, and the customer gets his/her money within 48hours</p>
                        </div>
                </div>
                <div className="flex between pad-2">
                        <div className="width-416">
                            <h3 className="size-24"> Can I access another loan if I have an existing loan?</h3>
                            <p className="size-20">No a customer is entitled to only one loan running at a time. Were he or she wants to access another loan, any previous or already running loan must be cleared before he/she can access a new loan facility.</p>
                        </div>
                        <div className="width-416">
                            <h3 className="size-24">Can I access more than 150% of my savings?</h3>
                            <p className="size-20">Yes you can access more than 150% of your savings. In fact, once you save 30% Of the amount you want to collect with us, you can access the loan.</p>
                        </div>
                </div>
                <div className="flex between pad-2">
                        <div className="width-416">
                            <h3 className="size-24"> How much can I access as loan?</h3>
                            <p className="size-20">Our loan facility provides a wide range of options when it comes to the amount to collect as loan. Our different products carry different amount to be collected.</p>
                        </div>
                        <div className="width-416">
                            <h3 className="size-24">How long do I need to save in order to qualify for a loan facility?</h3>
                            <p className="size-20">Mbbov usually gives its customers the period of 1 month (one month) to save the amount tagged ‘30%’. Also, can decide to pay the saving in bulk at once (lump sum payment)</p>
                        </div>
                </div>
            </div>
        </div>
      </Wrapper>
    )
  }
  export default Header