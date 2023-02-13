import StandardPage from "../components/StandardPage";
import React from "react";

export default function SurveyEnded() {
    return (
        <StandardPage className="Survey-Main">
            <div className="ThankYou-head" style={{textAlign: "center"}}>
                <h2>
                    This survey has ended, but thank you for visiting.
                </h2>
            </div>
        </StandardPage>
    )
}