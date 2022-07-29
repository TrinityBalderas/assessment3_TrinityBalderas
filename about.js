console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted, you did good...for a servant");
}

function alertCompliment(evt){
alert("Aren't I just beautiful")
}
let form = document.querySelector('#contact');
let image = document.querySelector('#overlord')

form.addEventListener('submit', handleSubmit);
image.addEventListener('mouseover', alertCompliment)