class MakeMovie {
    constructor(title, duration, genre) {
        this.title = title;
        this.duration = duration;
        this.genre = genre;
    }

    getData() {
        return `${this.title} ${this.duration} ${this.genre}`;
    }
}

module.exports = MakeMovie;