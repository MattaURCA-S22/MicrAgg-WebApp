import StandardPage from "../components/StandardPage";
import React from "react";

export default function ThankYouPage() {
    return (
        <StandardPage className="Survey-Main">
            <div className="ThankYou-head" style={{textAlign: "center"}}>
                <h2>
                    You have already completed this survey, thank you for your participation.
                </h2>
            </div>
        </StandardPage>
    )
}