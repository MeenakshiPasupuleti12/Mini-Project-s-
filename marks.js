function calculateResults(event) {

    event.preventDefault();

    const telugu = parseInt(document.getElementById("telugu").value);
    const hindi = parseInt(document.getElementById("hindi").value);
    const english = parseInt(document.getElementById("english").value);
    const maths = parseInt(document.getElementById("maths").value);
    const science = parseInt(document.getElementById("science").value);
    const social = parseInt(document.getElementById("social").value);

    const totalMarks = telugu + hindi + english + maths + science + social;

    document.getElementById("telugumarks").textContent = telugu;
    document.getElementById("hindimarks").textContent = hindi;
    document.getElementById("englishmarks").textContent = english;
    document.getElementById("mathsmarks").textContent = maths;
    document.getElementById("sciencemarks").textContent = science;
    document.getElementById("socialmarks").textContent = social;

    if (telugu >= 35 && hindi >= 35 && english >= 35 && maths >= 35 && science >= 35 && social >= 35) {
        let grade;
        if (totalMarks >= 540) {
            grade = "A";
        } else if (totalMarks >= 480) {
            grade = "B";
        } else if (totalMarks >= 420) {
            grade = "C";
        } else if (totalMarks >= 360) {
            grade = "D";
        } else if (totalMarks >= 300) {
            grade = "E";
        } else {
            grade = "F";
        }

        document.getElementById("totalMarks").textContent = totalMarks;
        document.getElementById("grade").textContent = grade;
        document.getElementById("status").textContent = "Pass";
    } else {
        document.getElementById("totalMarks").textContent = "-";
        document.getElementById("grade").textContent = "-";
        document.getElementById("status").textContent = "Fail";
    }
}