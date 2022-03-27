import React, { useContext} from "react";
import { Link } from "react-router-dom";
import "./Survey.css";
import "./SurveyPage.css"
import StandardPage from "../components/StandardPage";
import ResponseContext from "../context/ResponseContext";

export default function Consent() {
  const userData = useContext(ResponseContext);

  function SignConsent() {
    userData.consent = true;
  }

  return (
    <StandardPage className="Survey-Main">
      <div className="Consent-Body">
        <br />
        <div className="Consent-Content Consent-Text">
          <h4>WELCOME AND NOTE ON INFORMED CONSENT</h4>
          <p>
            You are invited to participate in a survey to explore the impact of
            the COVID-19 pandemic and digitalization on scientists. Your
            participation will provide valuable insight into how the pandemic
            and digitalization have impacted you and your scientific work. As
            part of this survey, stressors and other psychological ailments you
            experience in your work may be evoked. Answering this survey should
            take about 15-20 minutes of your time.
          </p>
          <p>
            The expected outcome of this survey is a peer-reviewed article in a
            reputable scientific journal. You will have the option at the end of
            the survey to go to another page and indicate if you would like to
            be sent a copy of the published study.
          </p>
          <p>
            Your information is anonymous (except for IP address and other
            metadata) and confidential.
          </p>
          <p>
            Participation is voluntary. If you choose to participate, you are
            free to withdraw your consent and stop participating at any time.
          </p>
          <p>
            The survey display is optimized for laptop or desktop computer
            screens. However, you can also answer the survey on your cell phone
            or tablet computer.
          </p>
          <p>
            Upon completion, you can choose charities to receive a donation on
            your behalf, and you may have the chance of winning a $100 gift
            card.
          </p>
          <p>
            If you have any questions, please contact Ass.-Prof. Dr. Magdalena
            Bekk at bekk@wiso.uni-koeln.de or magdalena.bekk@uni-seeburg.at
          </p>
          <p>
            YOU MAKE A DECISION WHETHER YOU WANT TO PARTICIPATE OR NOT. IF YOU
            CLICK ON THE “CONTINUE” BUTTON, THIS MEANS THAT YOU HAVE DECIDED TO
            PARTICIPATE. You may print a copy of this notice for your records.
          </p>
        </div>
        <Link to="/Instructions">
          <button className="Consent-Button" onClick={SignConsent}> Continue</button>
        </Link>
      </div>
    </StandardPage>
  );
}
