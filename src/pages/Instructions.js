import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Survey.css";
import "./SurveyPage.css"
import StandardPage from "../components/StandardPage";
import { useResponse } from "../context/ResponseContext";

export default function Instructions() {
  const { response } = useResponse();
  console.log(response);
  return (
    <StandardPage className="Survey-Main">
      <div className="Consent-Body">
        <br />
        <div className="Consent-Content Consent-Text">
          <h4>INSTRUCTIONS</h4>
          <p>
            You will be shown a video of a therapy session where you will
            observe interactions between a therapist and a client. Some of these
            interactions will involve sensitive and insentive actions. While
            watching, click or tap the corresponding button when you see an
            action of either type.{" "}
            <b>
              Please do not attempt to make the video fullscreen, as you will be
              unable to press the buttons.
            </b>
          </p>
          <p>
            When you are ready to begin, click or tap continue, then click or
            tap the video to begin.
          </p>
        </div>
        <Link to="/VideoPlayer">
          <button className="Consent-Button"> Continue</button>
        </Link>
      </div>
    </StandardPage>
  );
}
