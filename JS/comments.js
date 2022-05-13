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
    //console.log(COMMENTS_CITY); //TA BORT
    for (let i = 0; i < COMMENTS_CITY.length; i++) {
        let divv = document.createElement("div");
        for (let j = 0; j < CITIES.length; j++) {
           // if (COMMENTS_CITY[i].cityID == CITIES[j].id) {
                divv.innerHTML = `
                <div class="comments">
                <h4>${COMMENTS_CITY[0].alias}</h4>
                <p>${COMMENTS_CITY[0].text}</p>
                </div>`;
                commentsDiv.push(divv); //TA FRAM IGEN`?
                
                //console.log(COMMENTS_CITY[].alias);
                //COMMENTS_CITY.filter(COMMENTS_CITY.length).sort((a, b) => a.alias - b.alias).map((comment) => `${comment.alias}`).splice(0, 3);
                //commentsDiv.sort((a, b) => b.date.year - a.date.year).push(comment).splice(0, 3);
           // }
        }
    }//console.log(commentsDiv[0]);
    return commentsDiv.toString().split(",").join("");
}
getComments()

