"use strict";

/*function getComments ()
	create commentsDiv
	
	loop through all comments 
		get the newest comments 
		filter the two newest to show
		create commentBox
		class to style later

	return commentsDiv
 
*/

//absolut inte klar mest test
function getComments (){
    let commentsDiv = [];
    for (let i = 0; i < COMMENTS_CITY.length; i++ ){
        let div = document.createElement("div");
        if (COMMENTS_CITY.cityID == CITIES.id)
        let comment = div.innerHTML = `
        <h4>${COMMENTS_CITY.alias}</h4>
        <p>${COMMENTS_CITY.text}</p>`;
        //commentsDiv.sort((a, b) => b.date.year - a.date.year).push(comment).splice(0, 3);
    }
    return commentsDiv.toString().split(",").join("");
}