import React from "react";
import "./SurveyCompletePage.css";
import StandardPage from "../components/StandardPage";


export default function SurveyCompletePage() {

    return (
        <StandardPage className="surveyComplete">
            <div className="surveyCompleteHead">
                <h1>
                    Thank you for completing the survey!
                </h1>
            </div>
            <div className="surveyCompleteBody">
                <p>
                    For a chance to receive a $25 Amazon giftcard, consider completing the following (optional) survey: 
                </p>
                <form action="https://www.siue.edu/">
                    <input type="submit" className="goToSurvey" value="Go to survey" />
                </form>
                <p>
                    Your response will remain anonymous.
                </p>
            </div>
        </StandardPage>
    )
}