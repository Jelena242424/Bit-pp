var jelena = {
    name: "Jelena",
    age: 21,
    job: "archaeologyst",
    interests: ["read", "design", "shopping"],
    handMade: function () {
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
    job: "engineer",
    interests: ['sports', 'movies', 'cars'],
    run: function () {
        console.log(person.name + ' occasionaly running!')
    },
    haveFun: function () {
        console.log(person.name + ' have fun: ' + person.interests)
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

function makeProgram(description, programmingLanguage, gitRepository, bool) {
    var program = {};
    program.description = description;
    program.programmingLanguage = programmingLanguage;
    program.gitRepository = gitRepository;
    program.boolean = bool;

    program.printRepository = function (gitRepository) {
        console.log(program.gitRepository);
    };

    program.isJS = function (programmingLanguage) {
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
function makeRecipe(name, type, complexity, ingredients, time, instruction) {
    var recipe = {};
    recipe.name = name;
    recipe.type = type;
    recipe.complexity = complexity;
    recipe.ingredients = ingredients;
    recipe.time = time;
    recipe.instruction = instruction;
    recipe.printIngredients = function () {
        return (recipe.ingredients);
    };
    recipe.checkTime = function () {
        return recipe.time <= 15;
    };
    recipe.changeType = function (type) {
        recipe.type = type;
    };
    recipe.deleteIngredient = function (ingredient) {
        for (var i = 0; i < recipe.ingredients.length; i++) {
            if (recipe.ingredients[i] === ingredient) {
                delete recipe.ingredients[i];
            }
        }
        return recipe.ingredients;
    };

    return recipe;
}
var recipe = makeRecipe("Pasta", "Italian", 2, ["onion", "meat", "salt", "tomato", "basil"], 14, "Cut onion and mix with meat and tomato.");
console.log(recipe);
console.log(recipe.printIngredients());
console.log(recipe.checkTime());
recipe.changeType("Greek");
recipe.deleteIngredient("onion");
console.log(recipe);