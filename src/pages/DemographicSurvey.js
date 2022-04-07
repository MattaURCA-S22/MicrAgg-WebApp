import React, { useRef, useContext } from "react";
import StandardPage from "../components/StandardPage";
import * as Survey from "survey-react";
import * as SurveyReact from "survey-react-ui";
import ResponseContext from "../context/ResponseContext";
import "./DemographicSurvey.css";
import { useAuth } from "../context/AuthContext";

export default function DemographicSurveyPage() {
  const count = useRef(0);
  const userData = useContext(ResponseContext);
  Survey.StylesManager.applyTheme("stone");
  const { addUserData } = useAuth();

  console.log(userData.video);

  // var surveyJSON = {"title":"Demographic Questionnaire","logoPosition":"right","pages":[{"name":"page1","elements":[{"type":"radiogroup","name":"question1","title":"Please indicate your professional status:","isRequired":true,"choices":[{"value":"Student","text":"Student        (Thank you, you can end the survey now)"},{"value":"Credentialed professional","text":"Credentialed professional with at lease a Master's degree"}]},{"type":"radiogroup","name":"question2","visibleIf":"{question1}='Credentialed professional'","title":"Age (Check one):","isRequired":true,"choices":["20-24","25-29","30-39","40-49","50-59","60-69","70-79","80+"]},{"type":"radiogroup","name":"question3","visibleIf":"{question1}='Credentialed professional'","title":"Gender (Check one):","isRequired":true,"choices":["Cisgender Male","Cisgender Female","Transgender/gender independent","Other","Do not wish to identify"]},{"type":"radiogroup","name":"question4","visibleIf":"{question1}='Credentialed professional'","title":"Race/Ethnicity (Choose the one that best fits):","isRequired":true,"choices":["White (non Hispanic)","American Indian","African American","Hispanic/Latinx","Asian/Pacific Islander","Bi or Multi Racial","Do not wish to identify"]},{"type":"radiogroup","name":"question5","visibleIf":"{question1}='Credentialed professional'","title":"Sexual Orientation:","isRequired":true,"choices":["Heterosexual","Gay/Lesbian/Bisexual/Questioning/Asexual/Queer","Do not wish to identify"]},{"type":"radiogroup","name":"question6","visibleIf":"{question1}='Credentialed professional'","title":"Religious/Spiritual Affiliation (Select the one that fits best):","isRequired":true,"choices":["Agnostic/Atheist/none","Buddhist","Christian","Hindu","Jain","Jewish","Muslim","Sikh","Zoroastrian"],"hasOther":true},{"type":"radiogroup","name":"question7","visibleIf":"{question1}='Credentialed professional'","title":"What is your current political party affiliation? (Check one)","isRequired":true,"choices":["Republican","Independent","Democrat",{"value":"affiliation","text":"No affiliation"}],"hasOther":true,"otherText":"Other (please specify):"},{"type":"checkbox","name":"question9","visibleIf":"{question1}='Credentialed professional'","title":"Professional Identity (Select all that apply):","isRequired":true,"choices":["Psychologist","Counselor","Marriage and Family Therapist","Social Worker","Art Therapist","Dance Therapist","Music Therapist","Drama Therapist","Psychodramatist"],"hasOther":true,"otherText":"Other (Describe Professional Identity and Credentials):"},{"type":"text","name":"Psychologist credentials","visibleIf":"{question9} contains 'psychologist'","title":"Please write in your credentials in Psychology","isRequired":true},{"type":"text","name":"Counselor credentials","visibleIf":"{question9} contains 'Counselor'","title":"Please write in your credentials in Counselor","isRequired":true},{"type":"text","name":"Marriage and Family Therapist credentials","visibleIf":"{question9} contains 'Marriage and Family Therapist'","title":"Please write in your credentials in Marriage and Family Therapy","isRequired":true},{"type":"text","name":"Social worker credentials","visibleIf":"{question9} contains 'Social Worker'","title":"Please write in your credentials in Social Working","isRequired":true},{"type":"text","name":"Art therapist credentials","visibleIf":"{question9} contains 'Art Therapist'","title":"Please write in your credentials in Art Therapy","isRequired":true},{"type":"text","name":"Dance therapist credentials","visibleIf":"{question9} contains 'Dance Therapist'","title":"Please write in your credentials in Dance Therapy","isRequired":true},{"type":"text","name":"Music therapist credentials","visibleIf":"{question9} contains 'Music Therapist'","title":"Please write in your credentials in Music Therapy","isRequired":true},{"type":"text","name":"Drama therapist credentials","visibleIf":"{question9} contains 'Drama Therapist'","title":"Please write in your credentials in Drama Therapy","isRequired":true},{"type":"text","name":"Psychodramatist credentials","visibleIf":"{question9} contains 'Psychodramatist'","title":"Please write in your credentials in Psychodrama","isRequired":true},{"type":"radiogroup","name":"question8","visibleIf":"{question1}='Credentialed professional'","title":"Number of years in professional experience as a mental health clinician","isRequired":true,"choices":["Less than a year","1 - 5 years","6 - 10 years","11 - 20 years","20+ years"]},{"type":"radiogroup","name":"question10","visibleIf":"{question1}='Credentialed professional'","title":"Number of graduate courses in multicultural counseling or social and cultural dimensions in therapy","isRequired":true,"choices":["None","One course","Two courses","Three courses","Infused throughout the curriculum"]},{"type":"radiogroup","name":"question11","visibleIf":"{question1}='Credentialed professional'","title":"Number of post-graduate continuing educations units and/or workshops in multicultural counseling or social and cultural dimensions in therapy (make your best judgement):","isRequired":true,"choices":["None","1-5 CEUs/workshops","6-10 CEUs/workshops","11+ CEUs/workshops"]},{"type":"checkbox","name":"question12","visibleIf":"{question1}='Credentialed professional'","title":"In which setting do you work? (Select all that apply):","isRequired":true,"choices":["Clinic/Hospital/Rehabilitation/Inpatient or Outpatient mental health","University Counseling","Educator","Private Practice"],"hasOther":true},{"type":"radiogroup","name":"question13","visibleIf":"{question1}='Credentialed professional'","title":"Region in which you practice (Check one):","isRequired":true,"choices":["West (Washington, Oregon, California, Alaska, Nevada, Utah, Idaho, Hawaii)","Great Plains (Montana, Wyoming, Colorado, Oklahoma, Kansas, Nebraska, South Dakota, North Dakota)","Southwest (Arizona, New Mexico, Texas)","Southeast (Louisiana, Arkansas, Missouri, Mississippi, Alabama, Georgia, Tennessee, Florida, Kentucky, Virginia, North Carolina, South Carolina)","Northeast (West Virginia, Maryland, Delaware, Pennsylvania, New Jersey, New York, Maine, New Hampshire, Vermont, Massachusetts, Rhode Island, Connecticut)","Midwest (Illinois, Wisconsin, Michigan, Minnesota, Iowa, Indiana, Ohio)"]}]}]};

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
            type: "radiogroup",
            name: "question7",
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
                name: "PanelTitle",
                visibleIf: "{question1}='Credentialed Professional'",
                title:
                  "Professional Identity and Credentials: Select all that apply",
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
                startWithNewLine: true,
                titleLocation: "hidden",
                isRequired: true,
                placeHolder: "please type credentials here",
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
                startWithNewLine: true,
                titleLocation: "hidden",
                isRequired: true,
                placeHolder: "please type credentials here",
              },
              {
                type: "checkbox",
                name: "MarriageAndFamilyTherapistR",
                visibleIf: "{question1}='Credentialed Professional'",
                titleLocation: "hidden",
                hideNumber: true,
                choices: ["Marriage and Family Therapist"],
              },
              {
                type: "text",
                name: "MarriageAndFamilyTherapist",
                visibleIf: "{MarriageAndFamilyTherapistR} notempty",
                startWithNewLine: true,
                titleLocation: "hidden",
                isRequired: true,
                placeHolder: "please type credentials here",
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
                name: "SocialWorker",
                visibleIf: "{SocialWorkerR} notempty",
                startWithNewLine: true,
                titleLocation: "hidden",
                isRequired: true,
                placeHolder: "please type credentials here",
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
                name: "ArtTherapist",
                visibleIf: "{ArtTherapyR} notempty",
                startWithNewLine: true,
                titleLocation: "hidden",
                isRequired: true,
                placeHolder: "please type credentials here",
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
                name: "DanceTherapist",
                visibleIf: "{DanceTherapistR} notempty",
                startWithNewLine: true,
                titleLocation: "hidden",
                isRequired: true,
                placeHolder: "please type credentials here",
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
                name: "MusicTherapist",
                visibleIf: "{MusicTherapistR} notempty",
                startWithNewLine: true,
                titleLocation: "hidden",
                isRequired: true,
                placeHolder: "please type credentials here",
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
                name: "DramaTherapist",
                visibleIf: "{DramaTherapistR} notempty",
                startWithNewLine: true,
                titleLocation: "hidden",
                placeHolder: "please type credentials here",
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
                startWithNewLine: true,
                titleLocation: "hidden",
                isRequired: true,
                placeHolder: "please type credentials here",
              },
            ],
            isRequired: true,
          },
          {
            type: "radiogroup",
            name: "question9",
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
            name: "question10",
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
            name: "question11",
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
            name: "question12",
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
            name: "question13",
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
    userData.demographic = survey.data;
    // Add function call to log data to database
  }

  return (
    <StandardPage>
      <link
        href="https://unpkg.com/survey-jquery@1.9.20/survey.css"
        type="text/css"
        rel="stylesheet"
      />
      <script src="https://unpkg.com/survey-jquery@1.9.20/survey.jquery.min.js"></script>
      <SurveyReact.Survey model={model} onComplete={submitData} navigateToUrl={"../MicrAgg-WebApp/#/Instructions"}/>
    </StandardPage>
  );
}
