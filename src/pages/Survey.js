import React from "react"
import "./Survey.css"
import StandardPage from "../components/StandardPage";

export default function Survey() {
        return (
            <StandardPage className="Survey-Main">
                <div className="Survey-Body">
                    <iframe 
                        src="https://siue.co1.qualtrics.com/jfe/form/SV_2nP78vxZNrpch9A"
                        className="Survey-Survey"
                        height="800vh"
                        width="600vw"
                        title="Qualtrics"
                    >
                    </iframe>
                </div>
            </StandardPage>
        );   
}