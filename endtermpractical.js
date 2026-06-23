function calculateResult() {
    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);

    let total = s1 + s2 + s3 + s4;
    let percentage = total / 4;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 40) {
        grade = "D";
    } else {
        grade = "F";
    }

    let status =
        (s1 >= 33 && s2 >= 33 && s3 >= 33 && s4 >= 33)
            ? "Pass"
            : "Fail";

    document.getElementById("result").innerHTML = `
        <p><b>Total Marks:</b> ${total}/400</p>
        <p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>
        <p><b>Grade:</b> ${grade}</p>
        <p><b>Status:</b> ${status}</p>
    `;
}