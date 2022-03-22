import React from "react";
import { useCallback } from 'react';
import "./SurveyPage.css";
import StandardPage from "../components/StandardPage";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import { addNewUserData } from "../AuthContext.js"
import Login from "./DashboardLogin";

export default function SurveyPage() {

    Survey.StylesManager.applyTheme("stone");

    var htmlVar = "<p>This is an addition to the question</p>";

    // var surveyJSON = {"logoPosition":"right","pages":[{"name":"question1","elements":[{"type":"text","name":"question1","title":"Question I. Pleast list the cultural themes that emerged within the session.","isRequired":true, maxLength: 100}]},{"name":"question2","elements":[{"type":"matrix","name":"question2","title":"Question II. Overall, how comfortable did therapist appear to you in the session as it relates to dialogue around the client’s cultural identity or cultural issues?","isRequired":true,"columns":[{"value":"strongly disagree","text":"Strongly Disagree"},{"value":"mildly disagree","text":"Mildly Disagree"},{"value":"neutral","text":"Neutral"},{"value":"mildly agree","text":"Mildly Agree"},{"value":"strongly agree","text":"Strongly Agree"}],"rows":[{"value":"comfortable","text":"1. Comfortable"},{"value":"awkward","text":"2. Awkward"},{"value":"tense","text":"3. Tense"},{"value":"nervous","text":"4. Nervous"},{"value":"confident","text":"5. Confident"},{"value":"uneasy","text":"6. Uneasy"},{"value":"relaxed","text":"7. Relaxed"},{"value":"calm","text":"8. Calm"},{"value":"edgy","text":"9. Edgy"},{"value":"genuine","text":"10. Genuine"}]}]},{"name":"question3","elements":[{"type":"matrix","name":"question3","title":"Question III. In this next section, we would like for you to rate the therapist based on the following items. These items reflect therapist’s cultural humility. As above, it is important to keep in mind the interactions specific to cultural issues in session (as opposed to general interactions). As a reminder, cultural humility is an otheroriented mind-frame that is open to explore and understand the other’s worldview and a mind frame that does not assume superiority or expertise. However, this stance does not mean that the therapist is completely deferent to the client’s view, but rather invites the dialogue (two-person philosophy). ","isRequired":true,"columns":[{"value":"strongly disagree","text":"Strongly Disagree"},{"value":"mildly disagree","text":"Mildly Disagree"},{"value":"neutral","text":"Neutral"},{"value":"mildly agree","text":"Mildly Agree"},{"value":"strongly agree","text":"Strongly Agree"}],"rows":[{"value":"is respectful","text":"1. Is Respectful."},{"value":"open to explore","text":"2. Is open to Explore."},{"value":"assumes knows alot","text":"3. Assume he/she already knows alot."},{"value":"considerate","text":"4. Is considerate."},{"value":"genuinely interested in learning more","text":"5. Is genuinely interested in learning more."},{"value":"acts superior","text":"6. Acts superior."},{"value":"open to new perspectives","text":"7. Is open to seeing things from the client's perspective."},{"value":"makes assumptions","text":"8. Makes assumptions about the client."},{"value":"open-minded","text":"9. Is open-minded."},{"value":"is a know-it-all","text":"10. Is a know-it-all."},{"value":"therapist assumes more understanding","text":"11. The therapist seems to assume more understanding than the therapist actually does."},{"value":"asks questions when therapist uncertain","text":"12. Asks questions when the therapist is uncertain."}]}]},{"name":"question4","elements":[{"type":"matrix","name":"question4","title":"Question IV. Please rate the degree to which the therapist in the video addressed (e.g., responded to or elicited) cultural issues within the session. In many cases, there are times where clients and therapists have the opportunity to discuss certain cultural issues more in depth (e.g., a client could mention in passing that their distress has shaken their faith in God, or that they feel empowered via a local social justice group around gay rights). These opportunities come and go. Sometimes they are important and other times, they are not. Please rate the following items regarding these cultural opportunities","isRequired":true,"columns":[{"value":"strongly disagree","text":"Strongly Disagree"},{"value":"mildly disagree","text":"Mildly Disagree"},{"value":"neutral","text":"Neutral"},{"value":"mildly agree","text":"Mildly Agree"},{"value":"strongly agree","text":"Strongly Agree"}],"rows":[{"value":"therapist encouraged client to discuss client's cultural background more","text":"1. The therapist encouraged the client to discuss the client's cultural background more."},{"value":"therapist discussed the client's cultural background in a way that worked","text":"2. The therapist discussed the client’s cultural background in a way that seemed to have worked."},{"value":"therapist avoided topics related to the client's cultural background","text":"3. The therapist avoided topics related to the client’s cultural background."},{"value":"were many chances to have deeper discussion about client's fultural background that never happened","text":"4. There were many chances to have deeper discussions about the client’s cultural background that never happened."},{"value":"therapist missed oppertunities to discuss the client's cultural background","text":"5. The therapist missed opportunities to discuss the client’s cultural background."}]}]},{"name":"question5-a","elements":[{"type":"matrix","name":"question5-a","title":"Question V To the extent that you noticed, please rate the frequencies of the following client responses to the therapist’s interventions as they related to discussing the client’s cultural identities in session. What kind of climate did the therapist establish in session that enabled the client to feel safe enough to discuss their culture? \nIn response to the therapeutic climate, clients may respond in a variety of ways in terms of their cultural identities.In the FIRST half of the session, I noticed the following","isRequired":true,"columns":[{"value":"strongly disagree","text":"Strongly Disagree"},{"value":"mildly disagree","text":"Mildly Disagree"},{"value":"neutral","text":"Neutral"},{"value":"mildly agree","text":"Mildly Agree"},{"value":"strongly agree","text":"Strongly Agree"}],"rows":[{"value":"shut down verbally and/or non-verbally (1)","text":"1. Shut down verbally and/or non-verbally."},{"value":"was receptive to therapist's intervention (1)","text":"2. Was receptive to the therapist’s interventions."},{"value":"become hostile and/or expressed their anger (1)","text":"3. Became hostile and/or expressed their anger/upset."},{"value":"was assertive and communicative (1)","text":"4. Was assertive and communicative."},{"value":"seemed to agree with the therapist in placating manner (1)","text":"5. Seemed to agree with the therapist in a placating manner."}]},{"type":"matrix","name":"question5-b","title":"In the SECOND half of the session, I noticed the following:","isRequired":true,"columns":[{"value":"strongly disagree","text":"Strongly Disagree"},{"value":"mildly disagree","text":"Mildly Disagree"},{"value":"neutral","text":"Neutral"},{"value":"mildly agree","text":"Mildly Agree"},{"value":"strongly agree","text":"Strongly Agree"}],"rows":[{"value":"shut down verbally and/or non-verbally (2)","text":"1. Shut down verbally and/or non-verbally."},{"value":"was receptive to therapist's intervention (2)","text":"2. Was receptive to the therapist’s interventions."},{"value":"become hostile and/or expressed their anger (2)","text":"3. Became hostile and/or expressed their anger/upset."},{"value":"was assertive and communicative (2)","text":"4. Was assertive and communicative."},{"value":"seemed to agree with the therapist in placating manner (2)","text":"5. Seemed to agree with the therapist in a placating manner."}]}]}]}
    var surveyJSON = {
      logoPosition: "right",
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "html",
              name: "question6",
              html:
                '<h2 style= "text-align: center; font-size: 30px">Multicultural Orientation External Rating Form</h2>\n<h3 style="text-align: center">Jesse Owen & Karen Tao</h3>',
            },
            {
              type: "html",
              name: "question5",
              html:
                '<div className="surveyDiv">\n<strong>Please rate the therapist in the video based on how comfortable the therapist appears in \ndiscussing/addressing cultural dynamics or topics with the client. It is important to know that there are no right or wrong answers here. Rather, therapists are human and they have a range of emotions and \nreactions. We are trying to get a sense of how the therapist was with the client in this session. In some \ncases, therapists may be uncomfortable and avoid discussions; whereas in other cases, they may be very comfortable and navigate the conversation with ease (and likely a range between these extremes). It is \nalso important to note that there may be no salient culturally related dialogue in the session. In these \nsituations, we ask for you to just indicate that in the space below</strong></div>',
            },
            {
              type: "text",
              name: "question1",
              title:
                "Please list the cultural themes that emerged within the session.",
              isRequired: true,
              maxLength: 100,
            },
            {
              type: "matrix",
              name: "question2",
              title:
                "Overall, how comfortable did therapist appear to you in the session as it relates to dialogue around the client’s cultural identity or cultural issues?",
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
                "In this next section, we would like for you to rate the therapist based on the following items. These items reflect therapist’s cultural humility. As above, it is important to keep in mind the interactions specific to cultural issues in session (as opposed to general interactions). As a reminder, cultural humility is an otheroriented mind-frame that is open to explore and understand the other’s worldview and a mind frame that does not assume superiority or expertise. However, this stance does not mean that the therapist is completely deferent to the client’s view, but rather invites the dialogue (two-person philosophy). ",
              isRequired: true,
              columns: [
                { value: "sd", text: "Strongly Disagree" },
                { value: "md", text: "Mildly Disagree" },
                { value: "n", text: "Neutral" },
                { value: "ma", text: "Mildly Agree" },
                { value: "sa", text: "Strongly Agree" },
              ],
              rows: [
                { value: "is respectful", text: "1. Is Respectful." },
                { value: "open to explore", text: "2. Is open to Explore." },
                {
                  value: "assumes knows alot",
                  text: "3. Assume he/she already knows alot.",
                },
                { value: "considerate", text: "4. Is considerate." },
                {
                  value: "genuinely interested in learning more",
                  text: "5. Is genuinely interested in learning more.",
                },
                { value: "acts superior", text: "6. Acts superior." },
                {
                  value: "open to new perspectives",
                  text:
                    "7. Is open to seeing things from the client's perspective.",
                },
                {
                  value: "makes assumptions",
                  text: "8. Makes assumptions about the client.",
                },
                { value: "open-minded", text: "9. Is open-minded." },
                { value: "is a know-it-all", text: "10. Is a know-it-all." },
                {
                  value: "therapist assumes more understanding",
                  text:
                    "11. The therapist seems to assume more understanding than the therapist actually does.",
                },
                {
                  value: "asks questions when therapist uncertain",
                  text: "12. Asks questions when the therapist is uncertain.",
                },
              ],
            },
            {
              type: "matrix",
              name: "question4",
              title:
                "Please rate the degree to which the therapist in the video addressed (e.g., responded to or elicited) cultural issues within the session. In many cases, there are times where clients and therapists have the opportunity to discuss certain cultural issues more in depth (e.g., a client could mention in passing that their distress has shaken their faith in God, or that they feel empowered via a local social justice group around gay rights). These opportunities come and go. Sometimes they are important and other times, they are not. Please rate the following items regarding these cultural opportunities.",
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
                    "therapist encouraged client to discuss client's cultural background more",
                  text:
                    "1. The therapist encouraged the client to discuss the client's cultural background more.",
                },
                {
                  value:
                    "therapist discussed the client's cultural background in a way that worked",
                  text:
                    "2. The therapist discussed the client’s cultural background in a way that seemed to have worked.",
                },
                {
                  value:
                    "therapist avoided topics related to the client's cultural background",
                  text:
                    "3. The therapist avoided topics related to the client’s cultural background.",
                },
                {
                  value:
                    "were many chances to have deeper discussion about client's fultural background that never happened",
                  text:
                    "4. There were many chances to have deeper discussions about the client’s cultural background that never happened.",
                },
                {
                  value:
                    "therapist missed oppertunities to discuss the client's cultural background",
                  text:
                    "5. The therapist missed opportunities to discuss the client’s cultural background.",
                },
              ],
            },
            {
              type: "matrix",
              name: "question5-a",
              title:
                "To the extent that you noticed, please rate the frequencies of the following client responses to the therapist’s interventions as they related to discussing the client’s cultural identities in session. What kind of climate did the therapist establish in session that enabled the client to feel safe enough to discuss their culture?<br/> <br/>In response to the therapeutic climate, clients may respond in a variety of ways in terms of their cultural identities.<br/> <br/>In the FIRST half of the session, I noticed the following:",
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
                  value: "shut down verbally and/or non-verbally (1)",
                  text: "1. Shut down verbally and/or non-verbally.",
                },
                {
                  value: "was receptive to therapist's intervention (1)",
                  text: "2. Was receptive to the therapist’s interventions.",
                },
                {
                  value: "become hostile and/or expressed their anger (1)",
                  text: "3. Became hostile and/or expressed their anger/upset.",
                },
                {
                  value: "was assertive and communicative (1)",
                  text: "4. Was assertive and communicative.",
                },
                {
                  value:
                    "seemed to agree with the therapist in placating manner (1)",
                  text:
                    "5. Seemed to agree with the therapist in a placating manner.",
                },
              ],
            },
            {
              type: "matrix",
              name: "question5-b",
              title:
                "In the SECOND half of the session, I noticed the following:",
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
                  value: "shut down verbally and/or non-verbally (2)",
                  text: "1. Shut down verbally and/or non-verbally.",
                },
                {
                  value: "was receptive to therapist's intervention (2)",
                  text: "2. Was receptive to the therapist’s interventions.",
                },
                {
                  value: "become hostile and/or expressed their anger (2)",
                  text: "3. Became hostile and/or expressed their anger/upset.",
                },
                {
                  value: "was assertive and communicative (2)",
                  text: "4. Was assertive and communicative.",
                },
                {
                  value:
                    "seemed to agree with the therapist in placating manner (2)",
                  text:
                    "5. Seemed to agree with the therapist in a placating manner.",
                },
              ],
            },
          ],
        },
      ],
    };
    
    function sendDataToServer(survey) {

        //send Ajax request to your web server.
        // alert("The results are:" + JSON.stringify(survey.data));

        // const size = Buffer.byteLength(JSON.stringify(survey.data), "utf8")
        // window.print(size)
        addNewUserData(survey.data);
        
    }
    var model = new Survey.Model(surveyJSON);

    var q = model.getQuestionByName('question2');
    q.isAllRowRequired = true;
    q = model.getQuestionByName('question3');
    q.isAllRowRequired = true;
    q = model.getQuestionByName('question4');
    q.isAllRowRequired = true;
    q = model.getQuestionByName('question5-a');
    q.isAllRowRequired = true;
    q = model.getQuestionByName('question5-b');
    q.isAllRowRequired = true;


    var showdown  = require('showdown');
    var converter = new showdown.Converter();
    model.onTextMarkdown.add(function( model, options) {
        // if()
        var str = converter.makeHtml(options.text);


        var index = str.indexOf(">");
        str = str.substring(index+1);
        index = str.lastIndexOf("<");
        str = str.substring(0, index);

        options.html = str;
    });

    return (
        <StandardPage className="survey">
            <script src="https://unpkg.com/survey-react@1.9.14/survey.react.min.js"></script>
            <Survey.Survey model={ model } onComplete={ sendDataToServer }/>
        </StandardPage>
    );
}