function clearAll() {
    const meme = document.querySelector(".meme-box");
    const joke = document.querySelector(".joke-box");
    const quote = document.querySelector(".quote-box");
    const riddle = document.querySelector(".riddle-box");

    meme.innerHTML = "";
    joke.innerHTML = "";
    quote.innerHTML = "";
    riddle.innerHTML = "";
}

function showMeme() {
    const randomMemeUrl = getRandomData("memes");
    const memeContainer = document.querySelector(".meme-box");
    const newMeme = document.createElement("img");
    newMeme.setAttribute("src", randomMemeUrl);
    clearAll();
    memeContainer.appendChild(newMeme);
}

function showJoke() {
    const randomJokeText = getRandomData("jokes");
    const jokeContainer = document.querySelector(".joke-box");
    const newJoke = document.createElement("p");
    newJoke.textContent = randomJokeText;
    clearAll();
    jokeContainer.appendChild(newJoke);
}

function showQuote() {
    const randomQuote = getRandomData("quotes");
    const quoteContainer = document.querySelector(".quote-box");
    const newQuoteText = document.createElement("p");
    const newQuoteAuthor = document.createElement("p");
    newQuoteText.textContent = randomQuote.quote;
    newQuoteAuthor.textContent = "- " + randomQuote.author;
    clearAll();
    quoteContainer.appendChild(newQuoteText);
    quoteContainer.appendChild(newQuoteAuthor);
}

function showRiddle() {
    const randomRiddle = getRandomData("riddles");
    const riddleContainer = document.querySelector(".riddle-box");
    const newRiddleText = document.createElement("p");
    const newRiddleAnswer = document.createElement("p");
    newRiddleText.textContent = randomRiddle.question;
    newRiddleAnswer.textContent = "- " + randomRiddle.answer;
    newRiddleAnswer.setAttribute("id", "riddle-answer");
    clearAll();
    newRiddleAnswer.hidden = true;
    riddleContainer.appendChild(newRiddleText);
    riddleContainer.appendChild(newRiddleAnswer);
}

function revealAnswers() {
    const riddleContent = document.querySelector(".riddle-box");
    const riddle = riddleContent.querySelector("p");
    const riddleAnswer = document.querySelector("#riddle-answer");

    if (riddle && riddleAnswer.hidden) {
        riddleAnswer.hidden = false;
    } else if (riddle && riddleAnswer) {
        alert("The riddle answer is already exposed!");
    } else {
        alert("There is no riddle to show the answer for!");
    }
}

function getRandomData(type) {
    return data[type][rn(data[type].length)];
}

const memes = [
    "https://i.redd.it/4t9s42upc7091.jpg",
    "https://i.redd.it/egbwru6tqbb71.jpg",
    "https://i.redd.it/rx2pkbwm52k61.jpg",
    "https://i.redd.it/7acsqtyuunr81.jpg",
    "https://i.redd.it/ozl1m20y95991.jpg",
    "https://i.redd.it/63ncc0gtkq4a1.png",
    "https://i.redd.it/8ba2g2q00rd71.png",
    "https://i.redd.it/uy86iygaq5l51.jpg",
    "https://i.redd.it/pw1e4hnbdbc91.jpg",
    "https://i.redd.it/273akvb6u5k41.png",
    "https://i.redd.it/8qaem5gzbj921.jpg",
    "https://i.redd.it/edymr6dvaw6a1.jpg",
    "https://i.redd.it/3srhjbw9toh41.jpg",
];


const jokes = [
    "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
    "Why don't programmers like nature? It has too many bugs.",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Why did the programmer quit his job? He didn't get arrays.",
    "Why did the programmer break up with his girlfriend? She had too many trust issues – she couldn't C#",
    "Why did the programmer get stuck in the shower? He couldn't find the right SOAP.",
    "Why was the computer cold? It left its Windows open!",
];


const quotes = [
    {
        quote:
            "Programs must be written for people to read, and only incidentally for machines to execute.",
        author: "Harold Abelson",
    },
    {
        quote:
            "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
        author: "Rick Cook",
    },
    {
        quote:
            "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
        author: "John Woods",
    },
    {
        quote:
            "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler",
    },
    {
        quote: "Truth can only be found in one place: the code.",
        author: "Robert C. Martin",
    },
    {
        quote:
            "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
        author: "Larry Niven",
    },
    {
        quote:
            "You've baked a really lovely cake, but then you've used dog shit for frosting.",
        author: "Steve Jobs",
    },
    {
        quote:
            "A language that doesn't affect the way you think about programming is not worth knowing.",
        author: "Alan J. Perlis",
    },
    {
        quote:
            "The most disastrous thing that you can ever learn is your first programming language.",
        author: "Alan Kay",
    },
    {
        quote:
            "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
        author: "Joseph Weizenbaum",
    },
    {
        quote:
            "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
        author: "Brian Kernighan",
    },
    {
        quote:
            "No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
        author: "Ram Ray",
    },
];


const riddles = [
    {
        question:
            "What comes once in a minute, twice in a moment, but never in a thousand years?",
        answer: "The letter ' M '",
    },
    {
        question:
            "What has keys but can't open locks?",
        answer: "A piano",
    },
    {
        question:
            "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
        answer: "An echo",
    },
    {
        question:
            " The more you take, the more you leave behind. What am I?",
        answer: "Footsteps",
    },
    {
        question:
            "What has cities but no houses, forests but no trees, and rivers but no water?",
        answer: "A map",
    },
    {
        question:
            " I have keys but open no locks. I have space but no room. You can enter, but you can't go outside. What am I?",
        answer: "A keyboard",
    },
];

function rn(len) {
    return Math.floor(Math.random() * len);
}

const data = {
    memes,
    jokes,
    quotes,
    riddles,
};