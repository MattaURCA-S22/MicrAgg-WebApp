import "./SurveyComplete.css"
import StandardPage from "../components/StandardPage";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext.js";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useResponse } from "../context/ResponseContext";

export default function SurveyCompletePage() {
    const { response, checkForValidContext, setNewContext } = useResponse();
    const { checkForUserDoc, addUserData } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      console.log("this is happening");
      console.log(response);
      if (!checkForValidContext()) {
        console.log("this is happening in the first if")
        let userDoc = checkForUserDoc();
        userDoc.then(value => {
          if (value != null) {
            setNewContext(value);
            if (value.consent == undefined || value.consent == false) {
              navigate("/");
            } else if(value.hasButtonBeenPressed == true && value.isDataComplete == true) {
              navigate("/ThankYouPage");
            } else if (value.isStudent != undefined && value.isStudent == true) {
              navigate("/StudentCompletePage");
            }
          } else {
            navigate("/");
          }
        })
      } else if (response.consent == false) {
        console.log("this is happening in the second if")
        navigate("/");
      } else if(response.isStudent != undefined && response.isStudent == true) {
        console.log("this is happening in the third if")
        navigate("/StudentCompletePage");
      } else if (response.hasButtonBeenPressed == true && response.isDataComplete == true) {
        console.log("this is happening in the fourth if")
        navigate("/ThankYouPage");
      }
    }, [])

    async function handleSurveyClick() {
      response.hasButtonBeenPressed = true;
      await addUserData(response);
      window.location.href="https://siue.co1.qualtrics.com/jfe/form/SV_40gPJn6Xt8J4Cxw";
    }

    return (
        <StandardPage className="Survey-Main">
            <div className="SurveyComplete-head">
                <h2>
                Thank you for participating in this study.
                </h2>
                <p className="paragraph-head">
                We acknowledge that some of you may have felt discomfort in watching moments of insensitivity in the session. We so appreciate your responses as they help bolster the purpose of our study, which is to investigate therapist sensitivity and insensitivity and how we can use the results from this study to better train mental health professionals to be more empathic. Your contribution is vital and we are grateful for your participation.
                </p>
            </div>
            <br></br>
            <div className="divider-line"></div>
            <div className="SurveyComplete-body">
                <br/>
                <p>
                    The first 126 people to complete the survey and enter their contact information on the page linked below will recieve a $20 Amazon giftcard.
                </p>
            </div>
                <br></br>
                <div className="divider-line"></div>
            <div className="SurveyComplete-body">
                <br/>
                <p>Your contact information will NOT be connected to your survey results.</p>
                <p>Your results will remain anonymous.</p>
                <br/>
              <button className="surveyButton" type="button" onClick={handleSurveyClick}>
                Claim Reward
              </button>
            </div>
        </StandardPage>
    )
}