
function checkNameSurnameHasErrors(nameSurname) {
    var nameSurnameArray = nameSurname.split(" ");

    if (nameSurnameArray.length < 2) {
        return "You must enter name and surname.";
    }

    var captialLetterOk = "";

    nameSurnameArray.forEach(function(element) {
        if (element[0] !== element[0].toUpperCase()) {
            captialLetterOk = "You have to capitalise your name and surname.";
        } 
    });
    
    if(captialLetterOk) {
        return captialLetterOk;
    }

    return false;
}

function checkValidGradeHasErrors (grade) {
    grade = parseInt(grade);
    console.log(1, grade, grade < 1 || grade > 10);
    if (grade < 1 || grade > 10) {

        return "Grade must be between 1 and 10.";
    }
    return false;
};