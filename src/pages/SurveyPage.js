import React, { useEffect } from "react";
import "./SurveyPage.css";
import StandardPage from "../components/StandardPage";
import * as Survey from "survey-react";
import * as SurveyReact from "survey-react-ui";
import "survey-react/survey.css";
import { useAuth } from "../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import { useResponse } from "../context/ResponseContext";

export default function SurveyPage() {
  const { addUserData, checkForUserDoc } = useAuth();
  const navigate = useNavigate();
  const { response, checkForValidContext, setNewContext } = useResponse();

  Survey.StylesManager.applyTheme("stone");

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
        } else {
          navigate("/");
        }
      })
    } else if (response.consent == false) {
      navigate("/");
    } else if(response.isStudent != undefined && response.isStudent == true) {
      navigate("/StudentCompletePage");
    } else if (response.isDataComplete == true) {
      navigate("/ThankYouPage");
    }
  }, [])

  console.log(response);

  var surveyJSON = {
    logoPosition: "right",
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "html",
            name: "question5",
            html:
              '<div className="surveyDiv">\n<strong>It is important to know that there are no right or wrong answers here. Rather, therapists are human, and they have a range of emotions and reactions. We are trying to get a sense of how the therapist was with the client in these sessions (Parts 1 & 2). In some cases, therapists may be uncomfortable and avoid discussions; whereas in other cases, they may be very comfortable and navigate the conversation with ease (and likely a range between these extremes). It is also important to note that there may be no salient culturally related dialogue in the sessions. In these situations, we ask for you to just indicate that in the space below. </strong></div>',
          },
          {
            type: "text",
            name: "question1",
            title: "Please list the themes that emerged within the sessions.",
            isRequired: true,
            maxLength: 500,
          },
          {
            type: "html",
            name: "question6",
            html:
              '<div className="surveyDiv">\n<strong>Please rate the therapist in the video based on how comfortable the therapist appears in discussing/addressing cultural dynamics or topics with the client.  </strong></div>',
          },
          {
            type: "matrix",
            name: "question2",
            title:
              "In your overall assessment, how comfortable did the therapist appear to you in the sessions (Parts 1 & 2) as they relate to dialogue around the client’s cultural identity or cultural issues?",
            isRequired: true,
            columns: [
              { value: "sd", text: "Strongly Disagree" },
              { value: "md", text: "Mildly Disagree" },
              { value: "n", text: "Neutral" },
              { value: "ma", text: "Mildly Agree" },
              { value: "sa", text: "Strongly Agree" },
            ],
            rows: [
              { value: "comfortable", text: "1. Comfortable" },
              { value: "awkward", text: "2. Awkward" },
              { value: "tense", text: "3. Tense" },
              { value: "nervous", text: "4. Nervous" },
              { value: "confident", text: "5. Confident" },
              { value: "uneasy", text: "6. Uneasy" },
              { value: "relaxed", text: "7. Relaxed" },
              { value: "calm", text: "8. Calm" },
              { value: "edgy", text: "9. Edgy" },
              { value: "genuine", text: "10. Genuine" },
            ],
          },
          {
            type: "matrix",
            name: "question3",
            title:
              "In this next section, we would like for you to rate the therapist based on the following items. These items reflect the therapist’s cultural humility. As above, it is important to keep in mind the interactions specific to cultural issues in session (as opposed to general interactions). As a reminder, cultural humility is an other oriented mind-frame that is open to explore and understand the other’s worldview and a mind frame that does not assume superiority or expertise. However, this stance does not mean that the therapist is completely deferent to the client’s view, but rather invites the dialogue (two-person philosophy).<br/><br/>Overall, regarding the client’s cultural background, the therapist….",
            isRequired: true,
            columns: [
              { value: "sd", text: "Strongly Disagree" },
              { value: "md", text: "Mildly Disagree" },
              { value: "n", text: "Neutral" },
              { value: "ma", text: "Mildly Agree" },
              { value: "sa", text: "Strongly Agree" },
            ],
            rows: [
              { value: "_3a", text: "1. Is respectful." },
              { value: "_3b", text: "2. Is open to explore." },
              {
                value: "_3c",
                text: "3. Assumes she already knows a lot.",
              },
              { value: "_3d", text: "4. Is considerate." },
              {
                value: "_3e",
                text: "5. Is genuinely interested in learning more.",
              },
              { value: "_3f", text: "6. Acts superior." },
              {
                value: "_3g",
                text:
                  "7. Is open to seeing things from the client's perspective.",
              },
              {
                value: "_3h",
                text: "8. Makes assumptions about the client.",
              },
              { value: "_3i", text: "9. Is open-minded." },
              { value: "_3j", text: "10. Is a know-it-all." },
              {
                value: "_3k",
                text:
                  "11. The therapist seems to assume more understanding than the therapist actually has.",
              },
              {
                value: "_3l",
                text:
                  "12. The therapist asks questions when the therapist is uncertain.",
              },
            ],
          },
          {
            type: "matrix",
            name: "question4",
            title:
              "Overall, please rate the degree to which the therapist in the video addressed (e.g., responded to or elicited) cultural issues within the sessions (Parts 1 & 2). In many cases, there are times where clients and therapists have the opportunity to discuss certain cultural issues more in depth (e.g., a client could mention in passing that their distress has shaken their faith in God, or that they feel empowered via a local social justice group around gay rights). These opportunities come and go. Sometimes they are important and other times, they are not. Please rate the following items regarding these cultural opportunities.",
            isRequired: true,
            columns: [
              { value: "sd", text: "Strongly Disagree" },
              { value: "md", text: "Mildly Disagree" },
              { value: "n", text: "Neutral" },
              { value: "ma", text: "Mildly Agree" },
              { value: "sa", text: "Strongly Agree" },
            ],
            rows: [
              {
                value:
                  "_4a",
                text:
                  "1. The therapist encouraged the client to discuss the client's cultural background more.",
              },
              {
                value:
                  "_4b",
                text:
                  "2. The therapist discussed the client’s cultural background in a way that seemed to have worked.",
              },
              {
                value:
                  "_4c",
                text:
                  "3. The therapist avoided topics related to the client’s cultural background.",
              },
              {
                value: "_4d",
                text:
                  "4. The therapist delved more deeply into the client’s cultural background.",
              },
              {
                value:
                  "_4e",
                text:
                  "5. There were many chances to have deeper discussions about the client’s cultural background that never happened.",
              },
              {
                value:
                  "_4f",
                text:
                  "6. The therapist missed opportunities to discuss the client’s cultural background.",
              },
            ],
          },
          {
            type: "matrix",
            name: "question5a",
            title:
              "To the extent that you noticed, please rate the frequencies of the following <u>CLIENT RESPONSES</u> to the therapist’s interventions as they related to discussing the client’s cultural identities in session. What kind of climate did the therapist establish in session that enabled the client to feel safe enough to discuss their culture?<br/> <br/>In response to the therapeutic climate, clients may respond in a variety of ways in terms of their cultural identities.<br/> <br/>In PART 1 of the session, I noticed the following:<br/><br/>In terms of the client’s cultural identities, the client",
            isRequired: true,
            columns: [
              { value: "sd", text: "Never" },
              { value: "md", text: "Seldom" },
              { value: "n", text: "Sometimes" },
              { value: "ma", text: "Frequently" },
              { value: "sa", text: "Always" },
            ],
            rows: [
              {
                value: "_5aa",
                text: "1. Shut down verbally and/or non-verbally.",
              },
              {
                value: "_5ab",
                text: "2. Was receptive to the therapist’s interventions.",
              },
              {
                value: "_5ac",
                text: "3. Became hostile and/or expressed their anger/upset.",
              },
              {
                value: "_5ad",
                text: "4. Was assertive and communicative.",
              },
              {
                value:
                  "_5ae",
                text:
                  "5. Seemed to agree with the therapist in a placating manner.",
              },
            ],
          },
          {
            type: "matrix",
            name: "question5b",
            title:
              "In PART 2 of the session, I noticed the following:<br/><br/>In terms of the client’s cultural identities, the client",
            isRequired: true,
            columns: [
              { value: "sd", text: "Never" },
              { value: "md", text: "Seldom" },
              { value: "n", text: "Sometimes" },
              { value: "ma", text: "Frequently" },
              { value: "sa", text: "Always" },
            ],
            rows: [
              {
                value: "_5ba",
                text: "1. Shut down verbally and/or non-verbally.",
              },
              {
                value: "_5bb",
                text: "2. Was receptive to the therapist’s interventions.",
              },
              {
                value: "_5bc",
                text: "3. Became hostile and/or expressed their anger/upset.",
              },
              {
                value: "_5bd",
                text: "4. Was assertive and communicative.",
              },
              {
                value:
                  "_5be",
                text:
                  "5. Seemed to agree with the therapist in a placating manner.",
              },
            ],
          },
        ],
      },
    ],
  };

  async function sendDataToServer(survey) {
    response.isDataComplete = true;
    response.postSurvey = survey.data;
    await addUserData(response);
    navigate("/SurveyComplete")
  }
  var model = new Survey.Model(surveyJSON);

  var q = model.getQuestionByName("question2");
  q.isAllRowRequired = true;
  q = model.getQuestionByName("question3");
  q.isAllRowRequired = true;
  q = model.getQuestionByName("question4");
  q.isAllRowRequired = true;
  q = model.getQuestionByName("question5a");
  q.isAllRowRequired = true;
  q = model.getQuestionByName("question5b");
  q.isAllRowRequired = true;

  model.showCompletedPage = false;

  var showdown = require("showdown");
  var converter = new showdown.Converter();
  model.onTextMarkdown.add(function(survey, options) {
    var str = converter.makeHtml(options.text);

    var index = str.indexOf(">");
    str = str.substring(index + 1);
    index = str.lastIndexOf("<");
    str = str.substring(0, index);

    options.html = str;
  });

  return (
    <StandardPage className="survey">
      <script src="https://unpkg.com/survey-react@1.9.14/survey.react.min.js"></script>
      <SurveyReact.Survey model={model} onComplete={sendDataToServer} />
    </StandardPage>
  );
}
