import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Survey.css";
import "./SurveyPage.css"
import StandardPage from "../components/StandardPage";
import "./VideoPlayer.css";
import { useResponse } from "../context/ResponseContext";

export default function Instructions() {
  const { response } = useResponse();
  console.log(response);
  useEffect(() => {
    document.body.style.zoom = "100%";
  });
  return (
    <StandardPage className="Survey-Main">
      <div className="Consent-Body">
        <br />
        <div className="Consent-Content Consent-Text">
          <h4>INSTRUCTIONS</h4>
          <p>
            You will be shown a video of a therapy session where you will
            observe interactions between a therapist and a client. 
          </p>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <br></br>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
              <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "1vw"}}>
                <p style={{textAlign: "center"}}>Click or tap this button <br></br> <button class="VideoPlayer-button VideoPlayer-button1">Sensitive</button> <br></br>if you see the therapist in the video say something sensitive.</p>
              </div>
              <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "1vw"}}>
                <p style={{textAlign: "center"}}>Click or tap this button <br></br><button class="VideoPlayer-button VideoPlayer-button2">Insensitive</button> <br></br>if you see the therapist in the video say something insensitive.</p>
              </div>
            </div>
            <br></br>
            <p style={{textAlign: "center"}}>
              <b>
                Please do not attempt to make the video fullscreen, as you will be unable to press the buttons.
              </b>
            </p>
          </div>
          <br></br>
          <p style={{textAlign: "center"}}>
            When you are ready to begin, click or tap continue, then click or
            tap the video to begin.
          </p>
          <Link to="/VideoPlayer">
          <button className="Consent-Button"> Continue</button>
        </Link>
        </div>
      </div>
    </StandardPage>
  );
}

// Some of these
//             interactions will involve sensitive and insentive actions. While
//             watching, click or tap the corresponding button when you see an
//             action of either type.{" "}