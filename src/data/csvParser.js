export function csvParser(data) {
  //set headers here
  let csvData =
    "ID," + 
    "Consent," + 
    "Demographic Question 1," +
    "Demographic Question 2," +
    "Demographic Question 3," +
    "Demographic Question 4," +
    "Demographic Question 5," +
    "Demographic Question 6," + 
    "Video," +
    "Sensitive Times," + 
    "Insensitive Times," + 
    "Q1," + 
    "Q2: Comfortable," + 
    "Q2: Awkward," + 
    "Q2: Tense," +
    "Q2: Nervous," + 
    "Q2: Confident," + 
    "Q2: Uneasy," +
    "Q2: Relaxed," + 
    "Q2: Calm," + 
    "Q2: Edgy," +
    "Q2: Genuine," + 
    "Q3: Is respectful," +     
    "Q3: Is open To explore," + 
    "Q3: Assume he/she already knows alot," + 
    "Q3: Is considerate," + 
    "Q3: Is genuinely interested in learning more," + 
    "Q3: Acts superior," + 
    "Q3: Is open to seeing things from the client's perspective," + 
    "Q3: Makes assumptions about the client," + 
    "Q3: Is open-minded," + 
    "Q3: Is a know-it-all," + 
    "Q3: The therapist seems to assume more understanding than the therapist actually does," + 
    "Q3: Asks questions when the therapist is uncertain," + 
    "Q4: The therapist encouraged the client to discuss the client's cultural background more," +
    "Q4: The therapist discussed the client’s cultural background in a way that seemed to have worked," +
    "Q4: The therapist avoided topics related to the client’s cultural background," +
    "Q4: There were many chances to have deeper discussions about the client’s cultural background that never happened," +
    "Q4: The therapist missed opportunities to discuss the client’s cultural background," +
    "Q5a: Shut down verbally and/or non-verbally," +
    "Q5a: Was receptive to the therapist’s interventions," +
    "Q5a: Became hostile and/or expressed their anger/upset," +
    "Q5a: Was assertive and communicative," +
    "Q5a: Seemed to agree with the therapist in a placating manner," +
    "Q5b: Shut down verbally and/or non-verbally," +
    "Q5b: Was receptive to the therapist’s interventions," +
    "Q5b: Became hostile and/or expressed their anger/upset," +
    "Q5b: Was assertive and communicative," +
    "Q5b: Seemed to agree with the therapist in a placating manner" +
    "\n";
  for (var i = 0; i < data.length; i++) {
    let user = data[i];
    let demo = notNull(user.demographic);
    let survey = notNull(user.postSurvey);
    //set data here
    csvData += '"' +
    notNull(user.uid) + '","' + 
    notNull(user.consent) + '","' +
    notNull(demo.question1) + '","' +
    notNull(demo.question2) + '","' +
    notNull(demo.question3) + '","' +
    notNull(demo.question4) + '","' +
    notNull(demo.question5) + '","' +
    notNull(demo.question6) + '","' +
    notNull(user.video) + '","' +
    timeListHandler(user.sTimes) + '","' +
    timeListHandler(user.iTimes) + '","' +
    notNull(survey.question1) + '","' +
    parseShorthand(notNull(survey.question2).comfortable) + '","' +
    parseShorthand(notNull(survey.question2).awkward) + '","' +
    parseShorthand(notNull(survey.question2).tense) + '","' +
    parseShorthand(notNull(survey.question2).nervous) + '","' +
    parseShorthand(notNull(survey.question2).confident) + '","' +
    parseShorthand(notNull(survey.question2).uneasy) + '","' +
    parseShorthand(notNull(survey.question2).relaxed) + '","' +
    parseShorthand(notNull(survey.question2).calm) + '","' +
    parseShorthand(notNull(survey.question2).edgy) + '","' +
    parseShorthand(notNull(survey.question2).genuine) + '","' +
    parseShorthand(notNull(survey.question3)._3a) + '","' +
    parseShorthand(notNull(survey.question3)._3b) + '","' +
    parseShorthand(notNull(survey.question3)._3c) + '","' +
    parseShorthand(notNull(survey.question3)._3d) + '","' +
    parseShorthand(notNull(survey.question3)._3e) + '","' +
    parseShorthand(notNull(survey.question3)._3f) + '","' +
    parseShorthand(notNull(survey.question3)._3g) + '","' +
    parseShorthand(notNull(survey.question3)._3h) + '","' +
    parseShorthand(notNull(survey.question3)._3i) + '","' +
    parseShorthand(notNull(survey.question3)._3j) + '","' +
    parseShorthand(notNull(survey.question3)._3k) + '","' +
    parseShorthand(notNull(survey.question3)._3l) + '","' +
    parseShorthand(notNull(survey.question4)._4a) + '","' +
    parseShorthand(notNull(survey.question4)._4b) + '","' +
    parseShorthand(notNull(survey.question4)._4c) + '","' +
    parseShorthand(notNull(survey.question4)._4d) + '","' +
    parseShorthand(notNull(survey.question4)._4e) + '","' +
    parseShorthand(notNull(survey.question5a)._5aa) + '","' +
    parseShorthand(notNull(survey.question5a)._5ab) + '","' +
    parseShorthand(notNull(survey.question5a)._5ac) + '","' +
    parseShorthand(notNull(survey.question5a)._5ad) + '","' +
    parseShorthand(notNull(survey.question5a)._5ae) + '","' +
    parseShorthand(notNull(survey.question5b)._5ba) + '","' +
    parseShorthand(notNull(survey.question5b)._5bb) + '","' +
    parseShorthand(notNull(survey.question5b)._5bc) + '","' +
    parseShorthand(notNull(survey.question5b)._5bd) + '","' +
    parseShorthand(notNull(survey.question5b)._5be) + '","' +
    '"\n';
  }
  return csvData;
}

function notNull(data) {
  if (data != null) {
    return data;
  } else {
    return "N/A";
  }
}


function parseShorthand(shorthand){
  if (shorthand === "sd") {
    return "Strongly Disagree";
  }
  else if (shorthand === "md") {
    return "Mildly Disagree";
  }
  else if (shorthand === "n") {
    return "Neutral";
  }
  else if (shorthand === "ma") {
    return "Mildly Agree";
  }
  else if (shorthand === "sa") {
    return "Strongly Agree";
  }
  else {
    return "N/A";
  }
}

function timeConvert(doubleSec) {
  var time = parseInt(doubleSec, 10);
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
}

export function timeListHandler(data) {
  if (data != null && data.length > 0) {
    let string = '[ ';
    for (var i = 0; i < data.length - 1; i++) {
      string += timeConvert(data[i]) + ', ';
    }
    string += timeConvert(data[data.length - 1]) + ' ]';
    return string;
  } else {
    return "No Times Selected";
  }
}