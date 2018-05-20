"use strict";

var addButton = document.querySelector(".add");
addButton.addEventListener("click", initialize);
var allExams = [];

function initialize() {
    var subjectInput = document.querySelector("#subject");
    var subject = subjectInput.value;

    var nameSurnameInput = document.querySelector(".nameSurname")
    var nameSurname = nameSurnameInput.value;

    var nameSurnameHasErrors = checkNameSurnameHasErrors(nameSurname);

    var errorName = document.querySelector(".error-alert");
    errorName.textContent = "";

    if (nameSurnameHasErrors) {
        errorName.textContent = nameSurnameHasErrors;
        return;
    }


    var gradeInput = document.querySelector(".grade");
    var grade = gradeInput.value;
    var gradeHasErrors = checkValidGradeHasErrors(grade);

    if (gradeHasErrors) {
        errorName.textContent = gradeHasErrors;
        return;
    }

    var nameArray = nameSurname.split(" ");
    var name = nameArray[0];
    var surname = nameArray[1];
    var student = new Student(name, surname);
    var subject = new Subject(subject);
    var exam = new Exam(subject, student, grade);
    allExams.push(exam);
    var passed = 0;
    var failed = 0;

    var passedUl = document.querySelector(".passed-list-student-list");
    passedUl.innerHTML = "";

    var failedUl = document.querySelector(".failed-list-student-list");
    failedUl.innerHTML = "";

    allExams.forEach(function (element) {
        if (element.hasPassed()) {
            var passedLi = document.createElement("li");
            passedLi.textContent = element.student.name + " " + element.student.surname + " " + element.grade;
            passedUl.appendChild(passedLi);
            passed++;
        } else {
            var failedLi = document.createElement("li");
            failedLi.textContent = element.student.name + " " + element.student.surname + " " + element.grade;
            failedUl.appendChild(failedLi);
            failed++;
        }
    });

    var failedPercentage = failed > 0 ? (failed / allExams.length) * 100 : 0;
    var passedPercentage = passed > 0 ? (passed / allExams.length) * 100 : 0;

    console.log(exam, passed, passedPercentage, failed, failedPercentage);

    var passNumber = document.querySelector(".pass-number");
    passNumber.textContent = passed;

    var passPercent = document.querySelector(".pass-percent");
    passPercent.textContent = Math.round(passedPercentage) + "%";

    var failedNumber = document.querySelector(".failed-number");
    failedNumber.textContent = failed;

    var failedPercent = document.querySelector(".failed-percent");
    failedPercent.textContent = Math.round(failedPercentage) + "%";
    
    var totalStudent = document.querySelector(".total-student");
    totalStudent.textContent = allExams.length;
}













