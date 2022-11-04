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
    "Sensitive Lines Identified," + 
    "Sensitive Correct Part 1," + 
    "Sensitive Incorrect Part 1," + 
    "Sensitive Correct Part 2," + 
    "Sensitive Incorrect Part 2," + 
    "Insensitive Lines Identified," +
    "Insensitive Correct Part 1," + 
    "Insensitive Incorrect Part 1," + 
    "Insensitive Correct Part 2," + 
    "Insensitive Incorrect Part 2," + 
    "Q1," + 
    "Q2 Part 1: Comfortable," + 
    "Q2 Part 1: Awkward," + 
    "Q2 Part 1: Tense," +
    "Q2 Part 1: Nervous," + 
    "Q2 Part 1: Confident," + 
    "Q2 Part 1: Uneasy," +
    "Q2 Part 1: Relaxed," + 
    "Q2 Part 1: Calm," + 
    "Q2 Part 1: Edgy," +
    "Q2 Part 1: Genuine," + 
    "Q2 Part 2: Comfortable," + 
    "Q2 Part 2: Awkward," + 
    "Q2 Part 2: Tense," +
    "Q2 Part 2: Nervous," + 
    "Q2 Part 2: Confident," + 
    "Q2 Part 2: Uneasy," +
    "Q2 Part 2: Relaxed," + 
    "Q2 Part 2: Calm," + 
    "Q2 Part 2: Edgy," +
    "Q2 Part 2: Genuine," + 
    "Q3 Part 1: Is respectful," +     
    "Q3 Part 1: Is open To explore," + 
    "Q3 Part 1: Assume he/she already knows alot," + 
    "Q3 Part 1: Is considerate," + 
    "Q3 Part 1: Is genuinely interested in learning more," + 
    "Q3 Part 1: Acts superior," + 
    "Q3 Part 1: Is open to seeing things from the client's perspective," + 
    "Q3 Part 1: Makes assumptions about the client," + 
    "Q3 Part 1: Is open-minded," + 
    "Q3 Part 1: Is a know-it-all," + 
    "Q3 Part 1: The therapist seems to assume more understanding than the therapist actually does," + 
    "Q3 Part 1: Asks questions when the therapist is uncertain," + 
    "Q3 Part 2: Is respectful," +     
    "Q3 Part 2: Is open To explore," + 
    "Q3 Part 2: Assume he/she already knows alot," + 
    "Q3 Part 2: Is considerate," + 
    "Q3 Part 2: Is genuinely interested in learning more," + 
    "Q3 Part 2: Acts superior," + 
    "Q3 Part 2: Is open to seeing things from the client's perspective," + 
    "Q3 Part 2: Makes assumptions about the client," + 
    "Q3 Part 2: Is open-minded," + 
    "Q3 Part 2: Is a know-it-all," + 
    "Q3 Part 2: The therapist seems to assume more understanding than the therapist actually does," + 
    "Q3 Part 2: Asks questions when the therapist is uncertain," + 
    "Q4 Part 1: The therapist encouraged the client to discuss the client's cultural background more," +
    "Q4 Part 1: The therapist discussed the client’s cultural background in a way that seemed to have worked," +
    "Q4 Part 1: The therapist avoided topics related to the client’s cultural background," +
    "Q4 Part 1: The therapist delved more deeply into theclient’s cultural background," +
    "Q4 Part 1: There were many chances to have deeperdiscussions about the client’s culturalbackground that never happened," +
    "Q4 Part 1: The therapist missed opportunities to discuss the client’s cultural background," +
    "Q4 Part 2: The therapist encouraged the client to discuss the client's cultural background more," +
    "Q4 Part 2: The therapist discussed the client’s cultural background in a way that seemed to have worked," +
    "Q4 Part 2: The therapist avoided topics related to the client’s cultural background," +
    "Q4 Part 2: The therapist delved more deeply into theclient’s cultural background," +
    "Q4 Part 2: There were many chances to have deeperdiscussions about the client’s culturalbackground that never happened," +
    "Q4 Part 2: The therapist missed opportunities to discuss the client’s cultural background," +
    "Q5 Part 1: Shut down verbally and/or non-verbally," +
    "Q5 Part 1: Was receptive to the therapist’s interventions," +
    "Q5 Part 1: Became hostile and/or expressed their anger/upset," +
    "Q5 Part 1: Was assertive and communicative," +
    "Q5 Part 1: Seemed to agree with the therapist in a placating manner," +
    "Q5 Part 2: Shut down verbally and/or non-verbally," +
    "Q5 Part 2: Was receptive to the therapist’s interventions," +
    "Q5 Part 2: Became hostile and/or expressed their anger/upset," +
    "Q5 Part 2: Was assertive and communicative," +
    "Q5 Part 2: Seemed to agree with the therapist in a placating manner" +
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
    listHandler(user.sLinesCorrect) + '","' +
    notNull(user.sCorrect1) + '","' +
    notNull(user.sIncorrect1) + '","' +
    notNull(user.sCorrect2) + '","' +
    notNull(user.sIncorrect2) + '","' +
    listHandler(user.iLinesCorrect) + '","' +
    notNull(user.iCorrect1) + '","' +
    notNull(user.iIncorrect1) + '","' +
    notNull(user.iCorrect2) + '","' +
    notNull(user.iIncorrect2) + '","' +
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
    parseShorthand(notNull(survey.question2_part2).comfortable) + '","' +
    parseShorthand(notNull(survey.question2_part2).awkward) + '","' +
    parseShorthand(notNull(survey.question2_part2).tense) + '","' +
    parseShorthand(notNull(survey.question2_part2).nervous) + '","' +
    parseShorthand(notNull(survey.question2_part2).confident) + '","' +
    parseShorthand(notNull(survey.question2_part2).uneasy) + '","' +
    parseShorthand(notNull(survey.question2_part2).relaxed) + '","' +
    parseShorthand(notNull(survey.question2_part2).calm) + '","' +
    parseShorthand(notNull(survey.question2_part2).edgy) + '","' +
    parseShorthand(notNull(survey.question2_part2).genuine) + '","' +
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
    parseShorthand(notNull(survey.question3)._3a_part2) + '","' +
    parseShorthand(notNull(survey.question3)._3b_part2) + '","' +
    parseShorthand(notNull(survey.question3)._3c_part2) + '","' +
    parseShorthand(notNull(survey.question3)._3d_part2) + '","' +
    parseShorthand(notNull(survey.question3)._3e_part2) + '","' +
    parseShorthand(notNull(survey.question3)._3f_part2) + '","' +
    parseShorthand(notNull(survey.question3)._3g_part2) + '","' +
    parseShorthand(notNull(survey.question3)._3h_part2) + '","' +
    parseShorthand(notNull(survey.question3)._3i_part2) + '","' +
    parseShorthand(notNull(survey.question3)._3j_part2) + '","' +
    parseShorthand(notNull(survey.question3)._3k_part2) + '","' +
    parseShorthand(notNull(survey.question3)._3l_part2) + '","' +
    parseShorthand(notNull(survey.question4)._4a) + '","' +
    parseShorthand(notNull(survey.question4)._4b) + '","' +
    parseShorthand(notNull(survey.question4)._4c) + '","' +
    parseShorthand(notNull(survey.question4)._4d) + '","' +
    parseShorthand(notNull(survey.question4)._4e) + '","' +
    parseShorthand(notNull(survey.question4)._4f) + '","' +
    parseShorthand(notNull(survey.question4)._4a_part2) + '","' +
    parseShorthand(notNull(survey.question4)._4b_part2) + '","' +
    parseShorthand(notNull(survey.question4)._4c_part2) + '","' +
    parseShorthand(notNull(survey.question4)._4d_part2) + '","' +
    parseShorthand(notNull(survey.question4)._4e_part2) + '","' +
    parseShorthand(notNull(survey.question4)._4f_part2) + '","' +
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
    return "N/A";
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
    if (demo.OtherR != null) {
      career += "Other:" + demo.Other + ", ";
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