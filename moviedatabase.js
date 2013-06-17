var favmovie = {
	title: 'TI',
	duration: 360,
	stars: ['john','jason']
}

(function(){
	msg = favmovie.title + "lasts for" + favmovie.duration + " and stars " 
	var Stars 
	for(var i=0, i<favmovie.stars.length, i++){
		Stars += favmovie.stars[i];
		if(i!=favmovie.stars.length-1){
			Stars += ', ';
		}
	}

	console.log(msg + Stars);
})()