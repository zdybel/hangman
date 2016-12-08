$(document).ready(function(){

var guesses = 0;

$('#guessInput').focus();

$('#guessButton').click(function(){
	var guess= document.getElementById('guessInput').value.toLowerCase();
	answer(guess);
	$('#guessed').append(guess + "              ");
	$('#guessInput').val("");
	$('#guessInput').focus();
	if(guesses ==4){
		alert("you lose");
	}
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

function answer(guess){
	if(guess == "l"){
		$('.l').text("L");
	}
	else if(guess == "i"){
		$('.i').text("I");
	}
	else if(guess == "v"){
		$('.v').text("V");
	}
	else if(guess == "e"){
		$('.e').text("E");
	}
	else if(guess == "o"){
		$('.o').text("O");
	}
	else if(guess == "n"){
		$('.n').text("N");
	}
	else if(guess == "g"){
		$('.g').text("G");
	}
	else if(guess == "a"){
		$('.a').text("A");
	}
	else if(guess == "d"){
		$('.d').text("D");
	}
	else if(guess == "p"){
		$('.p').text("P");
	}
	else if(guess == "s"){
		$('.s').text("S");
	}
	else if(guess == "r"){
		$('.r').text("R");
	}
	else{
		$('.bar').eq(guesses).css('background-color', 'gray');
		guesses += 1;
	};
};

});

