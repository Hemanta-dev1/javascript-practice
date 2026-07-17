function getAverage(scores){
    let sum = 0;

    for(let i = 0; i < scores.length; i++){
      sum += scores[i];
    }

return sum/scores.length;
}

function getGrade(score){
  let grade = "";
  if(score >= 0 && score <=59 ){
   grade = "F"
  };
  if(score >= 60 && score <=69 ){
   grade = "D"
  };
  if(score >= 70 && score <=79 ){
   grade = "C"
  };
  if(score >= 80 && score <=89 ){
   grade = "B"
  };
  if(score >= 90 && score <=99 ){
   grade = "A"
  };
  if(score == 100 ){
   grade = "A+"
  };
return grade;

};

function hasPassingGrade(score){
  let grade = getGrade(score)
  if(grade === "F"){
    return false;
  }
  return true;

}
function studentMsg(scores, score) {
  let average = getAverage(scores);
  let grade = getGrade(score);

  if (hasPassingGrade(score)) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  }

  return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));