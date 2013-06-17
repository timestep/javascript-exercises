
function calculateAge(birthYear){
	var currentYear = new Date();
	currentYear = currentYear.getFullYear();
	age = currentYear - birthYear;
	age2 = age - 1;
	console.log('You are either' + age + 'or' + age2);
})()

calculateAge(1990);
calculateAge(2001);
calculateAge(900);

