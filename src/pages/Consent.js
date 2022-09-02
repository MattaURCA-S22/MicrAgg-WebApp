import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Survey.css";
import "./SurveyPage.css"
import StandardPage from "../components/StandardPage";
import { useAuth } from "../context/AuthContext";
import { useResponse } from "../context/ResponseContext";

export default function Consent() {
  const { signInAnon, currentUser, initializeDoc, currentDocRef, checkForUserDoc } = useAuth();
  const { response, initializeResponseContext, setNewContext, checkForValidContext } = useResponse();
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkForValidContext()) {
      let userDoc = checkForUserDoc();
      userDoc.then(value => {
        if (value != null) {
          setNewContext(value);
          if (value.consent == undefined || value.consent == false) {
            navigate("/");
          } else if (value.isDataComplete == true) {
            navigate("/ThankYouPage");
          } else if (value.isStudent != undefined && value.isStudent == true) {
            navigate("/StudentCompletePage");
          }
        }
      })
    } else if(response.isStudent != undefined && response.isStudent == true) {
      navigate("/StudentCompletePage");
    } else if (response.isDataComplete == true) {
      navigate("/ThankYouPage");
    }
    initializeResponseContext();
  }, [])

  function SignConsent() {
    response.isDataComplete = false;
    response.consent = true;
    response.video = GetVideo();
    signUserInAsAnon();
    giveUserDoc();
  }
  async function signUserInAsAnon() {
    await signInAnon();
    console.log(currentUser.uid)
    response.uid = currentUser.uid;
  }

  async function giveUserDoc() {
    await initializeDoc();
  }

  function GetVideo() {
    var chosenValue = Math.random() < 0.5 ? "A" : "B";
    console.log(chosenValue + " Chosen");
    return chosenValue;
  }

  return (
    <StandardPage className="Survey-Main">
      <div className="Consent-Body">
        <br />
        <div className="Consent-Content Consent-Text">
          <h2 align="center">
              Acknowledgment of Informed Consent
          </h2>
          <p align="center">
              <u>For participants who are 18 or older</u>
              <u></u>
          </p>
          <h3>
              Section I: Participant Rights and Information:
          </h3>
          <p>
              1) <strong><u>Identification of Project and Responsible Investigator</u></strong>
          </p>
          <p>
              I hereby agree to participate in a research project entitled “An
              Experimental Study of Therapist Sensitivity in the Therapist-Client
              Relationship” (Protocol 1483) to be conducted by Jayashree George in the
              SIUE Department of Art and Design, as principal investigator. The
              co-investigators are Drs. Yancey, Boddie, Matta, Nieto and Professor
              Bentley. Protocol 1483 has been approved by SIUE.
          </p>
          <p>
              It is important that you understand this research so that you can decide
              whether or not you want to take part. This process is called informed
              consent. To make your decision, please consider all the information
              included in this document.
          </p><br/>
          <p>
              2) <strong><u>Voluntary Participation</u></strong>
          </p>
          <p>
              You do not have to participate in this research. It is your choice whether
              or not you want to participate. If you choose not to participate, or choose
              to stop participation at any time, there will be no penalty to you or loss
              of benefits to which you are otherwise entitled. If you choose to join our
              research project, your participation will be voluntary. However, should you
              ask to withdraw from the research project after submitting your response,
              we will not be able to find your data due to anonymity.
          </p><br/>
          <p>
              3) <strong><u>Purpose of the Research:</u></strong>
          </p>
          <p>
              The purpose of this study is to examine moments of therapist sensitivity or
              insensitivity in their interactions with the client. Participants will be
              randomly assigned to two groups (Control and Experimental). Both groups
              will respond to a demographic survey, watch a short video of 2 clips of a
              therapy session and respond to a questionnaire evaluating the therapist in
              the video and the client’s responses. Following this, participants will
              have the option to provide contact information so that they can receive
              their incentive payment.
          </p>
          <p>
              The whole experience should take approximately 30 minutes. Upon a fully
              complete survey, participants will be eligible to receive an incentive of
              $20 if they are among the first 126 respondents to participate in this
              study.
          </p><br/>
          <p>
              4) <strong><u>Description of Risks:</u></strong>
          </p>
          <p>
              The risks in this study are minimal. Sometimes, it can be difficult to
              watch perceived insensitivities. If you feel that you are noticing such
              discomfort, you may use the open question in the survey to write down your
              thoughts as a way of dissipating your discomfort.
          </p><br/>
          <p>
              5) <strong><u>Description of Benefits:</u></strong>
          </p>
          <p>
              The indirect benefit to the participants is that they get to participate in
              clarifying what makes for therapist sensitivity in the therapist-client
              relationship. The research on therapeutic alliance is growing and
              experimental studies are few and far between. The benefits of this research
              have implications not only for clinical practice but also to the training
              of mental health practitioners.
          </p><br/>
          <p>
              6) <strong><u>Disclosure of Alternative Procedures:</u></strong>
          </p>
          <p>
              There are no alternative procedures.
          </p><br/>
          <p>
              7) <strong><u>Anonymity of Records:</u></strong>
          </p>
          <p>
              Direct identifiers such as names of subjects, or indirect identifiers, such
              as codes, are never recorded with the research data and therefore cannot be
              linked to the participants. Once you click on the button, agreeing to
              participate, you will be taken to a website where you can record your
              responses, which will not have any identifiers connecting you to your
              responses.
          </p><br/>
          <p>
              8) <strong><u>Available Assistance:</u></strong>
          </p>
          <p>
              As the risk is mild, participants will receive a short debriefing statement
              at the end of their participation.
          </p><br/>
          <p>
              9) <strong><u>Contact Information:</u></strong>
          </p>
          <p>
              If you have any questions about our research project or about your rights
              and activities as a participant, then please contact the project’s
              principal investigator, Dr. Jayashree George. You can call Dr. George
              (618-650-3109), e-mail her at jaygeor@siue.edu or write her at Campus Box
              1774, SIUE, Edwardsville, IL 62026-1774. If you have any questions about
              your rights or any other concerns, you may also contact the SIUE
          Institutional Review Board at (618) 650-3010 or    <a href="mailto:irbtraining@siue.edu">irbtraining@siue.edu</a>.
          </p><br/>
          <p>
              <strong>
                  <u>
                      Clicking on the Agree button signifies that you have read the
                      consent form and agree to participate.
                  </u>
              </strong>
          </p>
        </div>
        <Link to="DemographicSurvey">
          <button className="Consent-Button" onClick={SignConsent}>Agree</button>
        </Link>
      </div>
    </StandardPage>
  );
}
