var jelena = {
    name: "Jelena",
    age: 21,
    job: "archaeologyst",
    interests: ["read", "design", "shopping"],
    handMade: function (){
        console.log(jelena.name + " likes to make jewelery.")
    },
    havefun: function () {
        var interest = " ";
        for (var i = 0; i < jelena.interests.length; i++) {
            interest += jelena.interests[i] + ", ";
        }
        return interest;
    }
}

jelena.phone = {
    phone1: "iphone",
    phone2: "iphoneX",
};
console.log(jelena);

var person = {
    name: "Marko",
    age: 48,
    job:"engineer",
    interests: ['sports', 'movies', 'cars'],
    run: function (){
      console.log(person.name + ' occasionaly running!')
    },
    haveFun: function (){
        console.log(person.name+ ' have fun: ' + person.interests)
    }
}

person.surname = "Nikolic";
person.phones = {
    mobile: '+381641814250',
    home: '+38164205460',
}
console.log(person);

person.phones.work = '+38134306616';
console.log(person);

delete person.interests[0];
console.log(person);

delete person.phones.home;
console.log(person);

// zadatak 1

var coffee = {
    name: "Nes",
    strength: "medium",
    flavour: "vanilla",
    milk: "yes",
    sugar: "no",
}

console.log(coffee);

// zadatak 2 
var movie = {
    title: "Star Wars",
    actors: ["Harrison Ford", "Mark Hammil", "Carrie Fisher"],
    director: "George Lucas",
    genre: ["SF", "Action", "Thriller"],
    popularity: {
        imdb: 8.6,
        rotten: "93%",
    }
}

console.log(movie);

// zadatak 3

function makeProgram (description, programmingLanguage, gitRepository, bool){
    var program = {};
    program.description = description;
    program.programmingLanguage = programmingLanguage;
    program.gitRepository = gitRepository;
    program.boolean = bool;

    program.printRepository = function (gitRepository) {
        console.log(program.gitRepository);
    };

    program.isJS = function (programmingLanguage){
        if (program.programmingLanguage === "JS") {
            console.log(true);
        } else {
            console.log(false);
        }
    };

    program.isCompletted = function (bool) {
        if (program.boolean) {
            console.log(true);
        } else { 
            console.log(false);
        }
    };

    return program;
}

var jsProgram = makeProgram("frontend", "JS", "markonyck", true);
var phpProgram = makeProgram("frontend", "PHP", "markonyck", true);

jsProgram.printRepository();

//zadatak 4