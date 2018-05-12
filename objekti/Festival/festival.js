'use strickt';
(function () {
    console.log('Hi');

    // create constractor functions
    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var firstLetter = this.name[0].toUpperCase();
            var lastLetter = this.name[name.length - 1].toUpperCase();
            var genreCode = firstLetter + lastLetter;
            return genreCode + "";
        };
    }

    function Movie(title, genre, length) {
        if (!(genre instanceof Genre)) {
            console.log("genre is not instance of Genre");
        }
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.getData = function () {
            return "\t" + this.title + ": " + this.length + ", " + genre.getData() + "\n";
        }
    }

    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.numOfMovies = this.listOfMovies.length;

        this.addMovie = function (movie) {
            this.numOfMovies++;
            this.listOfMovies.push(movie);
        }

        this.lengthAllMovies = function () {
            var lengthAllMovies = 0;
            this.listOfMovies.forEach(function (movie) {
                lengthAllMovies += parseFloat(movie.length);
            });
            return lengthAllMovies + "min";
        }

        this.moviesData = function () {
            var movieData = "";
            this.listOfMovies.forEach(function (movie) {
                movieData += movie.getData();

            });
            return movieData;
        }

        this.getData = function () {
            return this.date.toUTCString() + " program duration " + this.lengthAllMovies() + "\n" + this.moviesData();
        }
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numOfAllMovies = 0;
        this.addProgram = function (program) {
            this.numOfAllMovies++;
            return this.listOfPrograms.push(program);
        }

        this.festivalData = function () {
            var festivalData = "";
            this.listOfPrograms.forEach(function(program) {
                festivalData += program.getData() + "\n";
            });
            return festivalData;
        }

        this.getData = function () {
            return this.name + " has " + this.numOfAllMovies + " movies titles \n" + this.festivalData();
        }
    }
    
    function createMovie (nameStr, genreStr, length){
        var genre = new Genre(genreStr)
        return new Movie(nameStr, genre, length);
    };

    function createProgram (date) {
        return new Program(date);
    };

   
    var festival = new Festival("Summer Fest");
    var oscars = createProgram("08 14 2018");
    var cartoons = createProgram("08 16 2018");
    var starWars = createMovie("Star Wars", "SF", "205"); 
    var covenant = createMovie("Covenant", "horror SF", "195");
    var frozen = createMovie("Frozen", "kids", "100");
    var vajana = createMovie("Vajana", "kids", "95");
    oscars.addMovie(starWars);
    oscars.addMovie(covenant);
    cartoons.addMovie(frozen);
    cartoons.addMovie(vajana);
    festival.addProgram(oscars);
    festival.addProgram(cartoons);
    console.log(festival.getData());

    

    
    
    
  
})();

// var action = new Genre("action");
    // var drama = new Genre("drama");
    // var kids = new Genre("kids");
    // var sf = new Genre("scien fiction");

    //var revenant = new Movie("Revenent", drama, "200min");
    //var revenant = createMovie("Revenent", "drama", "200min");
    //var frozen = new Movie("Frozen", kids, '100min');
    //console.log(revenant);
    //var oscarMovies = new Program('06 22 2018');
    //oscarMovies.addMovie(revenant);
    // console.log(oscarMovies.getData());
    

    //var cartoons = new Program("06 23 2018");
    //cartoons.addMovie(frozen);

    // var sf = createProgram("06 24 2018");
    // console.log(sf);

    // console.log(cartoons.getData());

    //
    //summerFest.addProgram(oscarMovies);
    //summerFest.addProgram(cartoons);
    //console.log(summerFest.getData());

    //var starWars = new Movie("Star Wars", action, "180");
    //var covenant = new Movie("Star Wars", action, "180");
    //var newProgram = new createProgram("08 18 2018");
    //console.log(newProgram);


    // console.log(action);
    // console.log(revenant.getData());
    // console.log(revenant);
    // console.log(oscarMovies.listOfMovies);
    // console.log(oscarMovies.numOfMovies);
    // console.log(summerFest.listOfPrograms);
    // console.log(summerFest.numOfAllMovies);
    // console.log(summerFest.lengthAllMovies);
