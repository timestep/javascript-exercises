var currentAge;
var maxAge;
var estimatePerDay;

(function(){
	total = (maxAge-currentAge)*365*estimatePerDay;
	console.log('You will need'+total+'to last you until the ripe old age of'+maxAge);
})()