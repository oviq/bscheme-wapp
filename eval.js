class Variable{
	constructor(name, value){
		this.name = name
    this.value = value
  }
}

let variables = []
const get_variable = (name) => {
	for (let el of variables){
		if (el.name == name){
			return el
		}
	}
	
	return 0
}

const eval_variables = (expression) => {
	expression = expression.split(' ')
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

const parse = (text) => {
	return eval(text)
}
