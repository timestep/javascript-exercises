listOfBooks = [
	{title:"The art of man",
	author: 'Jesus',
	alreadyRead: true},
	{title:"Hobbits and Taste",
	author: 'Smeagol',
	alreadyRead:false},
	{title:'God and His Toys',
	author: 'Matt Damon',
	alreadyRead:false}
];

for (i=0, i<listOfBooks.length, i++){
	message = listOfBooks[i].title+' by '+listOfBooks[i].author);
	if (listOfBooks[i].alreadyRead){
		conole.log('You already read '+message);
	}
	else
		conole.log("You haven't read "+message);
}
