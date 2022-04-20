import "./SurveyComplete.css"
import StandardPage from "../components/StandardPage";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

export default function SurveyCompletePage() {
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
                <a href="https://www.siue.edu/student-life/">Survey link</a>
            </div>
        </StandardPage>
    )
}