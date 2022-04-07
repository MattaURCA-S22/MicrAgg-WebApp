export function csvParser(data) {
  //set headers here
  let csvData = "ID,Demographic Question 1,Sensitive Times,Insensitive Times\n";
  for (var i = 0; i < data.length; i++) {
    let user = data[i];
    let demo = notNull(user.demographic);
    //set data here
    csvData += `${user.id},${notNull(demo.question1)},"${timeListHandler(user.sTimes)}","${timeListHandler(user.iTimes)}"\n`;
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