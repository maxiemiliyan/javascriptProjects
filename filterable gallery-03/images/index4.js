// marks for three students in three subjects
var student1Marks = [50,30,70];
var student2Marks = [30,70,99];
var student3Marks = [99,20,30];

// calculate average for each student
var sub1Average = (student1Marks[0] + student2Marks[0] + student3Marks[0]) / 3;
var sub2Average = (student1Marks[1] + student2Marks[1] + student3Marks[1]) / 3;
var sub3Average = (student1Marks[2] + student2Marks[2] + student3Marks[2]) / 3;

// find the lowest average
var lowestAverage = Math.min(sub1Average, sub2Average, sub3Average);

// check which subject had the lowest average
if (lowestAverage === sub1Average) {
  // ignore subject 21.e
  student1Marks.splice(0, 1);
  student2Marks.splice(0, 1);
  student3Marks.splice(0, 1);
} else if (lowestAverage === sub2Average) {
  // ignore subject 21.e
  student1Marks.splice(1, 1);
  student2Marks.splice(1, 1);
  student3Marks.splice(1, 1);
} else {
  // ignore subject 21.e
  student1Marks.splice(2, 1);
  student2Marks.splice(2, 1);
  student3Marks.splice(2, 1);
}

// calculate final total for each student
var student1Total = student1Marks.reduce((a, b) => a + b);
var student2Total = student2Marks.reduce((a, b) => a + b);
var student3Total = student3Marks.reduce((a, b) => a + b);

console.log([student1Total, student2Total, student3Total]); // Output: [120, 129, 129]
