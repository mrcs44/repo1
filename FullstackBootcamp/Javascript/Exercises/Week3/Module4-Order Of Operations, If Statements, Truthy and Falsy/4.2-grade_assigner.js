// Instructions
// Create a function that takes 1 argument, a number score. Returns either “A”, ”B”, “C”, “D”, “F”.
// score of:
// 0-64 is a “F”
// 65-69 is a “D” 
// 70-79 is a “C” 
// 80-89 is a “B” 
// 90-100 is an “A

console.log(gradeScore(prompt('Enter your grade: ')));

function gradeScore (score){
    if (score >= 0 && score <= 64){
        return "F";
    } else if (score > 64 && score <= 69) {
        return "D";
    } else if (score > 69 && score <= 79) {
        return "C";
    } else if (score > 79 && score <= 89) {
        return "B";
    } else if (score > 89 && score <= 100) {
        return "A";        
    } else {
        return "Invalid Grade!";
    }
}