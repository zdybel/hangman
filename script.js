$(document).ready(function(){

var guesses = 0;

var correctGuesses = 0;

var correctGuessesArray = [""];

$('#guessInput').focus();

$('#guessButton').click(function(){
	var guess= document.getElementById('guessInput').value.toLowerCase();
	if(notGuessed($('guessInput').val()) && guess.match(/[a-z]/i) && $('#guessInput').val().length == 1) {
		answer(guess);
		console.log(correctGuessesArray);
		$('#guessed').append(guess + "              ");
		$('#guessInput').val("");
		$('#guessInput').focus();
		if(guesses ==4){
			alert("You lose");
		};
		if(correctGuesses == 12){
			alert("You win!")
		};
	} 
	else{
		$('#guessInput').val("");
	};
});

 $('#guessInput').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#guessButton').click();//Trigger search button click event
        };
    });

$('#solveButton').click(function(){
	var solve= document.getElementById('solveInput').value.toLowerCase();
	solveArray=[]
	for(i = 0; i < solve.length; i++){
		if(solve[i] != " "){
			solveArray.push(solve[i]);
		};
	};
	if(solveMatch(solveArray) == true){
		alert("You win!");
		$('.l').text("L");
		$('.i').text("I");
		$('.v').text("V");
		$('.e').text("E");
		$('.o').text("O");
		$('.n').text("N");
		$('.g').text("G");
		$('.a').text("A");
		$('.d').text("D");
		$('.p').text("P");
		$('.r').text("R");
		$('.s').text("S");
		$('#solveInput').val("");
	};
	if(solveMatch(solveArray) == false){
		alert('Sorry, no go!')
		$('.bar').eq(guesses).css('background-color', 'gray');
		guesses += 1;
		$('#solveInput').val("");
		$('#solveInput').focus();
	};
});

$('#solveInput').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#solveButton').click();//Trigger search button click event
        }
    });

$('.hint-container').click(function(){
	console.log('it works')
	$('#hint').text('Vulcan blessing');

	
});

function solveMatch(solveArray){
	var answer = ['l','i','v','e','l','o','n','g','a','n','d','p','r','o','s','p','e','r'];
	for(i = 0; i < solveArray.length; i++){
		if(solveArray[i] == answer[i]){
			return true;
		}
		if(solveArray[i] != answer[i]){
			return false;
		}
	}
};

function notGuessed(guess){
	for(i = 0; i < correctGuessesArray.length; i++){
		if(guess != correctGuessesArray[i]){
			return true;
		};
	};
};

function answer(guess){
	if(guess == "l"){
		$('.l').text("L");
		correctGuessesArray.push(guess);
		correctGuesses += 1;
	}
	else if(guess == "i"){
		$('.i').text("I");
		correctGuessesArray.push(guess);
		correctGuesses += 1;
	}
	else if(guess == "v"){
		$('.v').text("V");
		correctGuessesArray.push(guess);
		correctGuesses += 1;
	}
	else if(guess == "e"){
		$('.e').text("E");
		correctGuessesArray.push(guess);
		correctGuesses += 1;
	}
	else if(guess == "o"){
		$('.o').text("O");
		correctGuessesArray.push(guess);	
		correctGuesses += 1;
	}
	else if(guess == "n"){
		$('.n').text("N");
		correctGuessesArray.push(guess);	
		correctGuesses += 1;
	}
	else if(guess == "g"){
		$('.g').text("G");
		correctGuessesArray.push(guess);	
		correctGuesses += 1;
	}
	else if(guess == "a"){
		$('.a').text("A");
		correctGuessesArray.push(guess);	
		correctGuesses += 1;
	}
	else if(guess == "d"){
		$('.d').text("D");
		correctGuessesArray.push(guess);	
		correctGuesses += 1;
	}
	else if(guess == "p"){
		$('.p').text("P");
		correctGuessesArray.push(guess);	
		correctGuesses += 1;
	}
	else if(guess == "s"){
		$('.s').text("S");
		correctGuessesArray.push(guess);	
		correctGuesses += 1;
	}
	else if(guess == "r"){
		$('.r').text("R");
		correctGuessesArray.push(guess);	
		correctGuesses += 1;
	}
	else{
		$('.bar').eq(guesses).css('background-color', 'gray');
		guesses += 1;
	};
};

});

