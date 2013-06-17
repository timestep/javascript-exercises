function squareNumber(num){
	var ans = num * num;
	console.log('The result of squaring the number'+num+'is'+ans);
	return ans;
};

function halfNumber(num){
	var ans = num/2;
	console.log('Half of'+num+'is'+ans);
	return ans;
};

function percentOf(x,y){
	var ans = x/y*100;
	console.log(x+'is'+ans+'% of'+y);
	return ans;
};

function areaOfCircle(radius){
	var pi = Math.PI;
	var area = pi*radius*radius;
	console.log('The area for a circle with radius '+radius+'is '+area);
	return area;
};

function calculation(num){
	var half = halfNumber(num);
	var square = squareNumber(num);
	var area = areaOfCircle(square);
	var percentage = percentOf(square,area);
};

