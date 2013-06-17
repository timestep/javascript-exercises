function helloWorld('lang'){
	if (lang == 'fr'){
		return "Bonjour tout la monde";
	}
	else if (lang == 'es'){
		return "Hola Mundo";
	}
	else if (lang == 'br'){
		return "Ola Mundo";
	}
	else 
		return 'Hello World';
}

console.log(helloWorld('fr'))
console.log(helloWorld('es'))
console.log(helloWorld('br'))
console.log(helloWorld('en'))