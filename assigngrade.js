function assignGrade(score){
	if (score > 80){
		return "A";
	}
	else if (score > 70){
		return "B";
	}
	else if (score > 60){
		return "C";
	}
	else if (score > 50){
		return "D";
	}
	else
		return "F";
}

assignGrade(100);
assignGrade(80);
assignGrade(50);
assignGrade(30);
assignGrade(75);

function checkGrade(){
	for(i=60, i==100,i++){
		grade = assignGrade(i);
		console.log('For '+i+',you get a '+grade);
	}
}