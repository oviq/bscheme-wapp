const break_up = (text, characters) => {
	let out = []
	out.push("")

	let current_word = 0;
	for(let i = 0; i<text.length; i++){
		let add = 0

		for(let c of characters){
			if(text[i] == c){
				current_word++
				out.push("")
				add = 1
				break
			}
		}

		out[current_word] += text[i]
		if (add == 1){
			out.push("")
			current_word++
		}
	}

	return out		
}

class Variable{
	constructor(name, value){
		this.name = name
    		this.value = value
  	}
}

// global thing to store all variables
let variables = []

// ... and it's functions
const get_variable = (name) => {
	for (let el of variables){
		if (el.name == name){
			return el
		}
	}
	
	return 0
}

const add_variable = (name, value) => {
	variables.push(new Variable(name, value))
}

const eval_variables = (expression) => {
	expression = break_up(expression, ' ')
	let out = []
	for (word of expression){
		if(get_variable(word) != 0){
		  out.push(`get_variable('${word}').value`)
		  continue
	  }
	  
	  out.push(word)
	}
	
	return out.join(' ')
}
