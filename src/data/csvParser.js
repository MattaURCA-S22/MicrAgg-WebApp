export function csvParser(data) {
  let csvData = "ID,Demographic Question 1,Sensitive Times,Insensitive Times\n";
  for (var i = 0; i < data.length; i++) {
    let user = data[i];
    let demo = user.demographic;
    //customize data in row below, headings put also be modified further down
    csvData += `${user.id},${demo.question1},${timeListHandler(user.sTimes)},${timeListHandler(user.iTimes)}\n`;
  }
}

function timeConvert(seconds) {
  var minutes = Math.floor(seconds / 60);
  var seconds = seconds % 60;
  return minutes + ":" + seconds;
}

function timeListHandler(data) {
  string = '"[';
  for (var i = 0; i < data.length - 1; i++) {
    string += timeConvert(data[i]) + ',';
  }
  string += timeConvert(data[data.length - 1]) + ']"';
  return string;
}