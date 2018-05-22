var dataModule = (function () {

    var allStudentsData = {
        studentList: []
    }

    //     function validation(inputValues){

    //     function hasValidInput(){
    //         var hasValidInput = (inputValues.nameValue && inputValues.subjectValue && inputValues.gradeValue) ? true : false;
    //         return hasValidInput;
    //     }

    //     function hasNameAndSurname(){
    //         var nameSurnameArray = inputValues.nameValue.split(" ");
    //         var hasNameAndSurname = nameSurnameArray.length >= 2;
    //     }

    //     return {
    //         hasValidInput:hasValidInput,
    //     }
    // }


    function Student(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    Student.prototype.getInfo = function () {
        return this.name + " " + this.surname;
    }

    function createStudent(name, surname) {
        var createdStudent = new Student(name, surname);

        return createdStudent;
    }

    function addStudentToList(student) {

        return allStudentsData.studentList.push(student);
    }

    function Exam(student, subject, grade) {
        this.student = student;
        this.subject = subject;
        this.grade = grade;
    }

    Exam.prototype.getInfo = function () {
        return this.student.getInfo() + " " + this.subject;
    }


    function createExam(student, subject, grade) {
        var exam = new Exam(student, subject, grade);
        return exam;
    }




    return {
        createdStudent: createStudent,
        addStudentToList: addStudentToList,
        createdExam: createExam

    }

})();

var uiModule = (function () {
    var DOMSelectors = {
        btnAdd: "#add-button",
        chooseSubject: "#choose-subject",
        nameInput: ".name-input",
        gradeInput: ".grade-input",
        ulPassed: "#passed-student-list",
        ulFailed: "#failed-student-list"

    }

    function collectInputs() {
        var subject = $(DOMSelectors.chooseSubject);

        var nameSurname = $(DOMSelectors.nameInput);
        var nameSurnameValue = nameSurname.val();
        var nameSurnameArray = nameSurnameValue.split(" ");
        var name = nameSurnameArray[0];
        var surname = nameSurnameArray[1];

        var grade = $(DOMSelectors.gradeInput);

        var inputValues = {
            subjectValue: subject.val(),
            nameValue: name,
            surnameValue: surname,
            gradeValue: grade.val()
        }
        return inputValues;
    }

    // function displayPassed(exam) {
    //     var ulPassedElement = $(DOMSelectors.ulPassed);
    //     var li = $("<li>");
    //     li.text(exam.getInfo);
    //     ulPassedElement.append(li);
    // }

    // function displayFailed(exam) {
    //     var ulFailedElement = $(DOMSelectors.ulFailed);
    //     var li = $("<li>");
    //     li.text(exam.getInfo);
    //     ulFailedElement.append(li);
    // }

    return {
        DOMSelectors: DOMSelectors,
        collectInputs: collectInputs,
        displayFailed: displayFailed,
        displayPassed: displayPassed
    }

})();

var mainController = (function (data, ui) {

    function setEvent() {
        var btnAdd = $(ui.DOMSelectors.btnAdd);
        btnAdd.on("click", createExamStat)
    }

    function createExamStat() {
        // dom selectors
        var domSelectors = ui.DOMSelectors;
        // collect inputs
        var collectedInputs = ui.collectInputs();
        // validation/display error

        // create student/ add to array 
        var createdStudent = data.createdStudent(collectedInputs.nameValue, collectedInputs.surnameValue);

        var listOfAllStudents = data.addStudentToList(createdStudent);
        // create exam / exam data  / display in lists

        var createdExam = data.createdExam(createdStudent, collectedInputs.subjectValue, collectedInputs.gradeValue);

        // console.log(createdExam.getInfo());

        if (createdExam.grade > 5) {
            ui.displayPassed(createdExam)
        } else {
            ui.displayFailed(createdExam)
        }

        // calculate total / calculate passed and failed / display all total
        // set month
    }

    function init() {
        setEvent();
    }

    return {
        init: init
    }
})(dataModule, uiModule)