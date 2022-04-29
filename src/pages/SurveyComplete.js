import "./SurveyComplete.css"
import StandardPage from "../components/StandardPage";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import { useResponse } from "../context/ResponseContext";

export default function SurveyCompletePage() {
    const { response, checkForValidContext, setNewContext } = useResponse();
    const { checkForUserDoc } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(!checkForValidContext()) {
          let userDoc = checkForUserDoc();
          userDoc.then(value => {
            if(value != null) {
              setNewContext(value);
              if (value.consent == false) {
                  navigate("/");
              }
            } else {
              navigate("/");
            }
          })
        }
      }, [])

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
            <div className="SurveyComplete-body">
                <p>
                    The first 126 people to complete the survey below will win a $20 Amazon giftcard.
                </p>
                <p>Your results will remain anonymous.</p>
                <a href=" https://siue.co1.qualtrics.com/jfe/form/SV_40gPJn6Xt8J4Cxw">Survey link</a>
            </div>
        </StandardPage>
    )
}