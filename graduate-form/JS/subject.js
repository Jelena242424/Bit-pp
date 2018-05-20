function Subject(subject) {
    this.subjectName = subject;
}

Subject.prototype.getData = function () {
    return this.subjectName + "";
}