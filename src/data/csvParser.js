export function csvParser(data) {
  //set headers here
  let csvData =
    "ID," + 
    "Consent," + 
    "Demographic Q1," +
    "Demographic Q2," +
    "Demographic Q3," +
    "Demographic Q4," +
    "Demographic Q5," +
    "Demographic Q6," + 
    "Demographic Q7a," +
    "Demographic Q7b," + 
    "Demographic Q8a," +
    "Demographic Q8b," +
    "Demographic Q9," +
    "Demographic Q10," +
    "Demographic Q11," +
    "Demographic Q12," + 
    "Demographic Q13," + 
    "Demographic Q14," + 
    "Demographic Q15," + 
    "Video," +
    "Sensitive Times," + 
    "Insensitive Times," + 
    "Sensitive Correct," + 
    "Sensitive Incorrect," + 
    "Insensitive Correct," + 
    "Insensitive Incorrect," + 
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
    "Q4: The therapist delved more deeply into theclient’s cultural background," +
    "Q4: There were many chances to have deeperdiscussions about the client’s culturalbackground that never happened," +
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
    notNull(demo.question7a) + '","' +
    parseShorthand(notNull(demo.question7b)) + '","' + 
    notNull(demo.question8a) + '","' + 
    parseShorthand(notNull(demo.question8b))+ '","' +
    notNull(demo.question9) + '","' +
    handleCareer(demo) + '","' +
    notNull(demo.question11) + '","' +
    notNull(demo.question12) + '","' +
    notNull(demo.question13) + '","' +
    listHandler(demo.question14) + '","' +
    notNull(demo.question15) + '","' +
    notNull(user.video) + '","' +
    timeListHandler(user.sTimes) + '","' +
    timeListHandler(user.iTimes) + '","' +
    notNull(user.sCorrect) + '","' +
    notNull(user.sIncorrect) + '","' +
    notNull(user.iCorrect) + '","' +
    notNull(user.iIncorrect) + '","' +
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
    parseShorthand(notNull(survey.question4)._4f) + '","' +
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
  console.log(data)
  if (data != null && data.question3 != null) {
    console.log(data.question3);
    console.log((data.question3)._3a);
    console.log(data.question3._3f);
  }
  if (data != null) {
    return data;
  } else {
    return "N/A11111111";
  }
}


function parseShorthand(shorthand){
  // console.log(shorthand)
  if (shorthand === "sd" || shorthand === "ni") {
    return "1";
  }
  else if (shorthand === "md" || shorthand === "n-s") {
    return "2";
  }
  else if (shorthand === "n" || shorthand === "si") {
    return "3";
  }
  else if (shorthand === "ma" || shorthand === "s-v") {
    return "4";
  }
  else if (shorthand === "sa" || shorthand === "vi") {
    return "5";
  }
  else {
    return "N/A22222222222";
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

export function listHandler(data) {
  if (data != null && data.length > 0) {
    let string = '[ ';
    for (var i = 0; i < data.length - 1; i++) {
      string += data[i] + ', ';
    }
    string += data[data.length - 1] + ' ]';
    return string;
  } else {
    return "N/A";
  }
}

function handleCareer(demo){
  var career = "[ "
  if (demo.question2 != null) {
    if (demo.PsychologistR != null) {
      career += "Psychologist:" + demo.Psychologist + ", ";
    }
    if (demo.CounselorR != null) {
      career += "Counselor:" + demo.Counselor + ", ";
    }
    if (demo.MarriageAndFamilyTherapistR != null) {
      career += "Marriage And Family Therapist:" + demo.MarriageAndFamilyTherapist + ", ";
    }
    if (demo.SocialWorkerR != null) {
      career += "SocialWorker:" + demo.SocialWorker + ", ";
    }
    if (demo.ArtTherapyR != null) {
      career += "ArtTherapist:" + demo.ArtTherapist + ", ";
    }
    if (demo.DanceTherapistR != null) {
      career += "DanceTherapist:" + demo.DanceTherapist + ", ";
    }
    if (demo.MusicTherapistR != null) {
      career += "MusicTherapist:" + demo.MusicTherapist + ", ";
    }
    if (demo.DramaTherapistR != null) {
      career += "DramaTherapist:" + demo.DramaTherapist + ", ";
    }
    if (demo.PsychodramaR != null) {
      career += "Psychodramatist:" + demo.Psychodramatist + ", ";
    }
    if (career.charAt(career.length-2) !== "[" ){
      career = career.slice(0, career.length-2);
    } else { 
      return "N/A";
    }
    career += " ]";
    return career;
  } else {
    return "N/A";
  }
}