// document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('increase').addEventListener('click', clickAdd);
    document.getElementById('decrease').addEventListener('click', clickSub);
	let input = document.getElementById('input');
	document.getElementById()
	input.defaultValue = 1;
	console.log(input)
    
    let displayNumber = 0;
	function clickAdd(e) {
		displayNumber += parseInt(input.value);
		//finalNumber += input
		e.preventDefault();
		number();
		if( displayNumber.textContent >=0){
			displayNumber.style.color = "black";
		}
		
	}
	function clickSub(e) {
        displayNumber -= parseInt(input.value);
		//finalNumber-= input
		e.preventDefault();
		number();
		if( displayNumber.textContent >=0){
			displayNumber.style.color = "red";
		}
        

	}

	function number() {
		document.getElementById('number').innerHTML = displayNumber;
	}
	function turnRed{
		
	}
	
	
