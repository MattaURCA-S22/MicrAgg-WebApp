import React, { useRef, useContext, useDebugValue, useEffect } from "react";
import StandardPage from "../components/StandardPage";
import * as Survey from "survey-react";
import * as SurveyReact from "survey-react-ui";
import "./DemographicSurvey.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useResponse } from "../context/ResponseContext";

export default function DemographicSurveyPage() {
  const count = useRef(0);
  Survey.StylesManager.applyTheme("stone");
  const { addUserData, checkForUserDoc } = useAuth();
  const { response, checkForValidContext, setNewContext } = useResponse();
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

  var surveyJSON = {
    title: "Demographic Questionnaire",
    logoPosition: "right",
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "radiogroup",
            name: "question1",
            title: "Please indicate your professional status:",
            isRequired: true,
            choices: [
              {
                value: "Student",
                text: "Student        (Thank you, you can end the survey now)",
              },
              {
                value: "Credentialed Professional",
                text:
                  "Credentialed Professional with at lease a Master's degree",
              },
            ],
          },
          {
            type: "radiogroup",
            name: "question2",
            visibleIf: "{question1}='Credentialed Professional'",
            title: "Age (Check one):",
            isRequired: true,
            choices: [
              "20-24",
              "25-29",
              "30-39",
              "40-49",
              "50-59",
              "60-69",
              "70-79",
              "80+",
            ],
          },
          {
            type: "radiogroup",
            name: "question3",
            visibleIf: "{question1}='Credentialed professional'",
            title: "Gender (Check one):",
            isRequired: true,
            choices: [
              "Cisgender Male",
              "Cisgender Female",
              "Transgender/gender independent",
              "Other",
              "Do not wish to identify",
            ],
          },
          {
            type: "radiogroup",
            name: "question4",
            visibleIf: "{question1}='Credentialed professional'",
            title: "Race/Ethnicity (Choose the one that best fits):",
            isRequired: true,
            choices: [
              "White (non Hispanic)",
              "American Indian",
              "African American",
              "Hispanic/Latinx",
              "Asian/Pacific Islander",
              "Bi or Multi Racial",
              "Do not wish to identify",
            ],
          },
          {
            type: "radiogroup",
            name: "question5",
            visibleIf: "{question1}='Credentialed Professional'",
            title: "Sexual Orientation:",
            isRequired: true,
            choices: [
              "Heterosexual",
              "Gay/Lesbian/Bisexual/Questioning/Asexual/Queer",
              "Do not wish to identify",
            ],
          },
          {
            type: "radiogroup",
            name: "question6",
            visibleIf: "{question1}='Credentialed Professional'",
            title:
              "Religious/Spiritual Affiliation (Select the one that fits best):",
            isRequired: true,
            choices: [
              "Agnostic/Atheist/none",
              "Buddhist",
              "Christian",
              "Hindu",
              "Jain",
              "Jewish",
              "Muslim",
              "Sikh",
              "Zoroastrian",
            ],
            hasOther: true,
          },
          {
            type: "panel",
            name: "panel2",
            elements: [
              {
                type: "text",
                name: "question7a",
                visibleIf: "{question1}='Credentialed Professional'",
                title:
                  "There are several different aspects of one’s cultural background that may be important to a person, including (but not limited to) race, ethnicity, nationality, gender, age, sexual orientation, religion, disability, socioeconomic status, indigenous heritage, religion, geographic location and size. Some things may be more central or important to one’s identity as a person, whereas other things may be less central or important.<br/><br/>Please identify the aspect of your cultural background that is most central or important to you:",
                isRequired: true,
              },
              {
                type: "matrix",
                name: "question7b",
                visibleIf: "{question1}='Credentialed Professional'",
                title:
                  "How important is this aspect of your cultural background?",
                hideNumber: true,
                isRequired: true,
                columns: [
                  { value: "ni", text: "Not at all important" },
                  { value: "n-s", text: " " },
                  { value: "si", text: "Somewhat important" },
                  { value: "s-v", text: " " },
                  { value: "vi", text: "Very important" },
                ],
              },
            ],
          },
          {
            type: "panel",
            name: "panel3",
            elements: [
              {
                type: "text",
                name: "question8a",
                visibleIf: "{question1}='Credentialed Professional'",
                title:
                  "If there is a 2nd aspect of your cultural background that is important to you, please list:",
              },
              {
                type: "matrix",
                name: "question8b",
                visibleIf: "{question1}='Credentialed Professional'",
                title:
                  "How important is this aspect of your cultural background?",
                hideNumber: true,
                columns: [
                  { value: "ni", text: "Not at all important" },
                  { value: "n-s", text: " " },
                  { value: "si", text: "Somewhat important" },
                  { value: "s-v", text: " " },
                  { value: "si", text: "Very important" },
                ],
              },
            ],
          },
          {
            type: "radiogroup",
            name: "question9",
            visibleIf: "{question1}='Credentialed Professional'",
            title:
              "What is your current political party affiliation? (Check one)",
            isRequired: true,
            choices: [
              "Republican",
              "Independent",
              "Democrat",
              { value: "affiliation", text: "No affiliation" },
            ],
            hasOther: true,
            otherText: "Other (please specify):",
          },
          {
            type: "panel",
            name: "panel1",
            elements: [
              {
                type: "expression",
                name: "question10",
                visibleIf: "{question1}='Credentialed Professional'",
                title:
                  "Professional Identity and Credentials (please write in): Select all that apply",
              },
              {
                type: "checkbox",
                name: "PsychologistR",
                visibleIf: "{question1}='Credentialed Professional'",
                titleLocation: "hidden",
                hideNumber: true,
                choices: ["Psychologist"],
              },
              {
                type: "text",
                name: "Psychologist",
                visibleIf: "{PsychologistR} notempty",
                startWithNewLine: false,
                titleLocation: "hidden",
                isRequired: true,
              },
              {
                type: "checkbox",
                name: "CounselorR",
                visibleIf: "{question1}='Credentialed Professional'",
                titleLocation: "hidden",
                hideNumber: true,
                choices: ["Counselor"],
              },
              {
                type: "text",
                name: "Counselor",
                visibleIf: "{counselorR} notempty",
                startWithNewLine: false,
                titleLocation: "hidden",
                isRequired: true,
              },
              {
                type: "checkbox",
                name: "MarriageAndFamilyTherpistR",
                visibleIf: "{question1}='Credentialed Professional'",
                titleLocation: "hidden",
                hideNumber: true,
                choices: ["Marriage and Family Therapist"],
              },
              {
                type: "text",
                name: "Marriage and Family Therapist",
                visibleIf: "{MarriageAndFamilyTherpistR} notempty",
                startWithNewLine: false,
                titleLocation: "hidden",
                isRequired: true,
              },
              {
                type: "checkbox",
                name: "SocialWorkerR",
                visibleIf: "{question1}='Credentialed Professional'",
                titleLocation: "hidden",
                hideNumber: true,
                choices: ["Social Worker"],
              },
              {
                type: "text",
                name: "Social Worker",
                visibleIf: "{SocialWorkerR} notempty",
                startWithNewLine: false,
                titleLocation: "hidden",
                isRequired: true,
              },
              {
                type: "checkbox",
                name: "ArtTherapyR",
                visibleIf: "{question1}='Credentialed Professional'",
                titleLocation: "hidden",
                hideNumber: true,
                choices: ["Art Therapist"],
              },
              {
                type: "text",
                name: "Art Therapist",
                visibleIf: "{ArtTherapyR} notempty",
                startWithNewLine: false,
                titleLocation: "hidden",
                isRequired: true,
              },
              {
                type: "checkbox",
                name: "DanceTherapistR",
                visibleIf: "{question1}='Credentialed Professional'",
                titleLocation: "hidden",
                hideNumber: true,
                choices: ["Dance Therapist"],
              },
              {
                type: "text",
                name: "Dance Therapist",
                visibleIf: "{DanceTherapistR} notempty",
                startWithNewLine: false,
                titleLocation: "hidden",
                isRequired: true,
              },
              {
                type: "checkbox",
                name: "MusicTherapistR",
                visibleIf: "{question1}='Credentialed Professional'",
                titleLocation: "hidden",
                hideNumber: true,
                choices: ["Music Therapist"],
              },
              {
                type: "text",
                name: "Music Therapist",
                visibleIf: "{MusicTherapistR} notempty",
                startWithNewLine: false,
                titleLocation: "hidden",
                isRequired: true,
              },
              {
                type: "checkbox",
                name: "DramaTherapistR",
                visibleIf: "{question1}='Credentialed Professional'",
                titleLocation: "hidden",
                hideNumber: true,
                choices: ["Drama Therapist"],
              },
              {
                type: "text",
                name: "Drama Therapist",
                visibleIf: "{DramaTherapistR} notempty",
                startWithNewLine: false,
                titleLocation: "hidden",
              },
              {
                type: "checkbox",
                name: "PsychodramaR",
                visibleIf: "{question1}='Credentialed Professional'",
                titleLocation: "hidden",
                hideNumber: true,
                choices: ["Psychodramatist"],
              },
              {
                type: "text",
                name: "Psychodramatist",
                visibleIf: "{PsychodramaR} notempty",
                startWithNewLine: false,
                titleLocation: "hidden",
                isRequired: true,
              },
            ],
            isRequired: true,
          },
          {
            type: "radiogroup",
            name: "question11",
            visibleIf: "{question1}='Credentialed Professional'",
            title:
              "Number of years in professional experience as a mental health clinician",
            isRequired: true,
            choices: [
              "Less than a year",
              "1 - 5 years",
              "6 - 10 years",
              "11 - 20 years",
              "20+ years",
            ],
          },
          {
            type: "radiogroup",
            name: "question12",
            visibleIf: "{question1}='Credentialed Professional'",
            title:
              "Number of graduate courses in multicultural counseling or social and cultural dimensions in therapy",
            isRequired: true,
            choices: [
              "None",
              "One course",
              "Two courses",
              "Three courses",
              "Infused throughout the curriculum",
            ],
          },
          {
            type: "radiogroup",
            name: "question13",
            visibleIf: "{question1}='Credentialed Professional'",
            title:
              "Number of post-graduate continuing educations units and/or workshops in multicultural counseling or social and cultural dimensions in therapy (make your best judgement):",
            isRequired: true,
            choices: [
              "None",
              "1-5 CEUs/workshops",
              "6-10 CEUs/workshops",
              "11+ CEUs/workshops",
            ],
          },
          {
            type: "checkbox",
            name: "question14",
            visibleIf: "{question1}='Credentialed Professional'",
            title: "In which setting do you work? (Select all that apply):",
            isRequired: true,
            choices: [
              "Clinic/Hospital/Rehabilitation/Inpatient or Outpatient mental health",
              "University Counseling",
              "Educator",
              "Private Practice",
            ],
            hasOther: true,
          },
          {
            type: "radiogroup",
            name: "question15",
            visibleIf: "{question1}='Credentialed Professional'",
            title: "Region in which you practice (Check one):",
            isRequired: true,
            choices: [
              "West (Washington, Oregon, California, Alaska, Nevada, Utah, Idaho, Hawaii)",
              "Great Plains (Montana, Wyoming, Colorado, Oklahoma, Kansas, Nebraska, South Dakota, North Dakota)",
              "Southwest (Arizona, New Mexico, Texas)",
              "Southeast (Louisiana, Arkansas, Missouri, Mississippi, Alabama, Georgia, Tennessee, Florida, Kentucky, Virginia, North Carolina, South Carolina)",
              "Northeast (West Virginia, Maryland, Delaware, Pennsylvania, New Jersey, New York, Maine, New Hampshire, Vermont, Massachusetts, Rhode Island, Connecticut)",
              "Midwest (Illinois, Wisconsin, Michigan, Minnesota, Iowa, Indiana, Ohio)",
            ],
          },
        ],
      },
    ],
    clearInvisibleValues: "onHidden",
  };

  var model = new Survey.Model(surveyJSON);

  var c = model.getPageByName("page1");
  var cl = c.cssClasses;
  cl.row = "row_connor";
  model.onErrorCustomText.add(function(sender, options) {
    if (
      options.obj.name === "Psychologist" ||
      options.obj.name === "Counselor" ||
      options.obj.name === "Marriage and Family Therapist" ||
      options.obj.name === "Social Worker" ||
      options.obj.name === "Art Therapist" ||
      options.obj.name === "Dance Therapist" ||
      options.obj.name === "Music Therapist" ||
      options.obj.name === "Drama Therapist" ||
      options.obj.name === "Psychodramatist"
    ) {
      options.obj.clearErrors();
      setError();
    }
  });

  model.onValidatePanel.add(function(sender, options) {
    count.current = 0;
  });

  function setError() {
    if (count.current !== 0) return;
    q.errors.push(new Survey.SurveyError("Please fill in credentials."));
    count.current++;
  }

  var q = model.getPanelByName("panel1");
  var classes = q.cssClasses;
  classes.row = "row_connor_panel";
  classes.error.root = "error_connor";
  model.showCompletedPage = false;

  async function submitData(survey) {
    if (survey.data.question1 == "Student") {
      response.isStudent = true;
      await addUserData(response);
      navigate("/StudentCompletePage");
    } else {
      response.demographic = survey.data;
      await addUserData(response);
      // Add function call to log data to database

      navigate("/Instructions");
    }
  }

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
    <StandardPage>
      <link
        href="https://unpkg.com/survey-jquery@1.9.20/survey.css"
        type="text/css"
        rel="stylesheet"
      />
      <script src="https://unpkg.com/survey-jquery@1.9.20/survey.jquery.min.js"></script>
      <SurveyReact.Survey model={model} onComplete={submitData}/>
    </StandardPage>
  );
}
