import "./StudentCompletionPage.css";
import StandardPage from "../components/StandardPage";
import React from "react";

export default function StudentCompletionPage() {
    return (
        <StandardPage className = "Survey-Main">
            <div className="StudentCompletion-head">
                <h1>
                    Thank you for participating.
                </h1>
            </div>
            <div className="StudentCompletion-body">
                <p>
                    Unfortunately you are ineligible for this study.
                </p>
            </div>
        </StandardPage>
    )
}