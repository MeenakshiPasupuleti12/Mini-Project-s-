
let Telugu = 85;
let Hindi = 85;
let English = 80;
let Maths = 89;
let Science = 76;
let Social = 15;

let totalMarks = Telugu + Hindi + English + Maths + Science + Social;

if (Telugu >= 40 && Hindi >= 40 && English >= 40 && Maths >= 40 && Science >= 40 && Social >= 40) {
    console.log("Pass");
    console.log("Total: " + totalMarks);

    // Grading based on total marks
    if (totalMarks >= 500) {
        console.log("Excellent");
    } else if (totalMarks >= 400) {
        console.log("Very Good");
    } else if (totalMarks >= 300) {
        console.log("Good");
    } else {
        console.log("Needs Improvement");
    }
} else {
    console.log("Fail");
    console.log("To be Improved");
}

//OR
// if(Telugu>=40||Hindi>=40||English>=40||Maths>=40||Science>40||Social>=40)
//     {
//         console.log("Pass")
//         console.log("total"+a)
//     }
//     else
//     { 
//         console.log("Fail")
//     }
