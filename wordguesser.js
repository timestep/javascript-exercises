var lettersOfWord = [];
var currentGuess = [];
for(i=0,i<lettersOfWord.length,i++){
	currentGuess[i]='_';
}
var numberOfGuess = lettersOfWord.length

function guessLetter(letter){
	for(i=0, i<lettersOfWord.length, i++){
		if (letter==lettersOfWord[i]){
			currentGuess[i]=letter;
			console.log(letter+'is an answer!')
			numberOfGuess = numberOfGuess - 1;
		}
		else 
			console.log('Searching...Nope.');
	}
	if (numberOfGuess = 0){
		console.log('Congrats!');
	}
	else{ 
		console.log('You have '+numberOfGuess+'left');
		console.log(currentGuess);
	}
}