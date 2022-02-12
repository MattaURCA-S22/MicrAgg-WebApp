import React from "react"
import "./DashboardMain.css"

export default class Survey extends React.Component() {
    render(){
        return (
            <div className="Survey-Main">
                <div className="Survey-Body">
                    <iframe 
                        src="https://siue.co1.qualtrics.com/jfe/form/SV_2nP78vxZNrpch9A"
                        height="300vh"
                        width="300vw"
                        title="Qualtrics"
                    >
                    </iframe>
                </div>
            </div>
        )
            
    }   
}