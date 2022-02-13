import React from "react"
import "./Survey.css"

export default function Survey() {
        return (
            <div className="Survey-Main">
                <div className="Survey-Nav">

                </div>
                <div className="Survey-Body">
                    <iframe 
                        src="https://siue.co1.qualtrics.com/jfe/form/SV_2nP78vxZNrpch9A"
                        height="800vh"
                        width="600vw"
                        title="Qualtrics"
                    >
                    </iframe>
                </div>
            </div>
        );   
}