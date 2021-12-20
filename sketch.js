



alert("there are no upper case letters");

//noprotect
var words = [
  "remember",
  "to",
  "call",
  "max",
  "hi",
  "hello",
  "messi",
  "yo",
  "snake",
  "catchphrase",
  "jordan",
  "bryant",
  "goat",
  "nba",
  "hiya",
  "lego",
  "code",
  "blackjack",
  "poker",
  "movies",
  "books",
  "games",
  "chess",
  "super",
  "bad",
  "test",
  "assesment",
  "country",
  "continent",
  "dawid",
  "man",
  "human",
  "aj",
  "hangman",
  "dumb",
  "lamborghini",
  "ferrari",
  "volkswagen",
  "fiat",
  "audi",
  "bmw",
  "come",
  "hockey",
  "ducks",
  "nhl",
  "roswell",
  "mighty",
  "bully",
  "cobra",
  "kai",
  "alert",
  "school",
  "jumper",
  "crayons",
  "sweaters",
  "cool",
  "it",
  "jason",
  "date",
  "rat",
  "food",
  "pizza",
  "pasta",
  "mafia",
  "mandolino",
  "eminem",
  "rap",
  "dre",
  "barcelona",
  "murcia",
  "spain",
  "italy",
  "england",
  "scotland",
  "germany",
  "hungary",
  "czech"

];


var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_ ";
    }

var remainingLetters = word.length;

while  (remainingLetters > 0){
  alert(answerArray.join(""));
  var guess = prompt("Guess a letter");
  if (guess == null) {
    alert("you failed!");
   break;
   } else if (guess.length !== 1){
     alert("Please enter a single letter");
   } else{
     
     for (var j = 0; j < word.length; j++){
       if (word[j] === guess) {
         answerArray[j] = guess;
           
            remainingLetters--;          
     }
    }              
     
  }
  
}
answerArray = answerArray.join("")

answerArray = answerArray.toString()

if (answerArray === word) {alert("congratulations! you guessed the word!");}



