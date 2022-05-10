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
function getComments() {
    let commentsDiv = [];
    console.log(COMMENTS_CITY);
    for (let i = 0; i < COMMENTS_CITY.length; i++) {
        for (let j = 0; j < CITIES.length; j++) {
            let div = document.createElement("div");
            div.innerHTML = `
        <h4>${COMMENTS_CITY.alias}</h4>
        <p>${COMMENTS_CITY.text}</p>`;
            if (COMMENTS_CITY[i].cityID == CITIES[j].id) {
                commentsDiv.push(div)
                //commentsDiv.sort((a, b) => b.date.year - a.date.year).push(comment).splice(0, 3);
            }
        }
    }
    return commentsDiv.toString().split(",").join("");
}
getComments()