var maxAge = 100;

function calculateSupply(age, estimatePerDay){
	total = (maxAge-age)*365*estimatePerDay;
	console.log('You will need'+total+'to last you until the ripe old age of'+maxAge);
})

calculateSupply(19,200);
calculateSupply(20,300);
calculateSupply(50,20);