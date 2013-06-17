function pluralize(noun,number){
	if (number!=1){
		noun = noun + 's';
		return number + ' ' +noun;
	}
	else
		return number + ' ' +noun;
}

pluralize(dog,4);
pluralize(cat,1);
pluralize(frog,0);