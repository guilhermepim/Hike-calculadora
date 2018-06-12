document.getElementById('calculate-button').onclick = function() {

	//colect information inside input's boxes
	let elem1 = document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');

	//transform information in value
	let val1 = parseInt(elem1.value);
	let val2 = parseInt(elem2.value);

	if(isNaN(val1)) {
        alert('Por favor, digite um número na caixa.');
        document.getElementById('elem-1').focus();

    } else if(isNaN(val2)) {
        alert('Por favor, digite um número na caixa.');
        document.getElementById('elem-2').focus();
    } else { 

	//take the radio button checked
	let choice = document.querySelector('input[name="operation"]:checked');

	//Show which operation was choose.
	let operation = choice.value;

	//show the result inside id element 'result"
	let operationResult = getResult(val1, val2, operation);
	let resultElement = document.getElementById('result');
	resultElement.innerText = operationResult;
	}
}

	function getResult(val1, val2, operation) {
		if(operation==="+"){
			return val1+val2;
		} else if(operation==="-"){
			return val1-val2;
		} else if(operation==="*"){
			return val1*val2;
		} else {
			return val1/val2;	
		}
	}

