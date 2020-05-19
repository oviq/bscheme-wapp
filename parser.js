// PARSE FUNCTION
const parse = (text) => {
	return eval(eval_variables(text))
}

const to_output = (output, text) => {
	output.innerHTML += '<div class="out"> ' + text + "</div> \n"
}

document.getElementById("enter").onclick = () => {
	let input = document.getElementById("in")
	let output = document.getElementById("out")

	if (input.value == "") return

	to_output(output, parse(input.value))

	input.value = ""
}
