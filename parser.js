const REGEX='/^[^a-zA-Z]*$/'

let variables = []

class Variable{
	constructor(_name, _value){
		this.name = _name;
		this.value = _value
	}

	static GetOne(name){
		for(let i = 0; i<variables.length; i++){
			if(variables[i].name == name){
				return variables[i]
			}
		}

		return 0;
	}
}

class Int extends Variable{
	constructor(_name, _value){
		super(_name, _value);

		if (!Number.isInteger(this.value)){
			alert('type error!');
		}
	}
}

// HELPER FUNCTIONS
const hasNumbers = (input) => {
	return /\d/.test(input)
}

const isMadeOfLetters = (input) => { 
	var letters = /^[a-zA-Z]+$/

	if(hasNumbers(input))
	{
		return false
	}
	
	return true
}

// PROCESSES EACH EXPRESSION
const process = (expression) => {
	let words = expression.split(' ')
	console.log(words)

	for(i = 0; i<words.length; i++){
		let word = words[i]
		console.log(i + ' - ' + word)

		// some words are actually keywords
		if (word == "write"){
			if (words.length-1>i){
				let variable = Variable.GetOne(words[i+1])
				if(variable==0){
					alert(words[i+1]);
				} else {
					alert(variable.name + ': ' + variable.value);
				}
				return 0
			}
			return 1
		}

		// a word made of letters is a variable
		if(isMadeOfLetters(word)){ 
			// localizing the variable (if it doesnt exist its gonna create one)
			variable = Variable.GetOne(word) 
			if (variable == 0){ 
				variables.push(new Int(word, 0));
				variable = Variable.GetOne(word) 
			}

			console.log(variable)

			// looks for any more operations
			if(words.lenght-1<i+2){
				return 0;
			}
			
			// looks for an assignment operation
			if (words[i+1]=='='){
				// if it is one then tries to find out what to assign
				if(hasNumbers(words[i+2])){

				}
				if(isMadeOfLetters(words[i+2])){
					as_variable = Variable.GetOne(words[i+2]) 
					if (as_variable == 0){ 
						variables.push(new Int(words[i+2], 0));
					}

					console.log(as_variable)

					variable.value = as_variable.value;
				}

				return 0
			}

			continue
		}

		// a word that has numbers is a number
		if (hasNumbers(word)) {

		}

	}
}

// PARSE FUNCTION
const parse = (text) => {
	// trims expressions and makes them separate words
	let trimed_text=text.trim()
	let expressions=trimed_text.split(';')	
	console.log(expressions)
	
	for(i = 0; i<expressions.length; i++){
		let expression = expressions[i]
		console.log(expression)
		process(expression)
	}
}
