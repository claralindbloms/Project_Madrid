// "use strict";

// let orderedComments;
// let showComments = 0;

// function init(cityId) {
//     orderedComments = COMMENTS_CITY
//         .filter((comment) => comment.cityID === cityId)
//         .sort((comment1, comment2) => compareByDate(comment2.date, comment1.date));
// }

// function compareByDate(date1, date2) {
//     if (date1.year > date2.year) {
//         return 1;
//     } else if (date1.year < date2.year) {
//         return -1;
//     } else {
//         if (date1.month > date2.month) {
//             return 1;
//         } else if (date1.month < date2.month) {
//             return -1;
//         } else {
//             if (date1.day > date2.day) {
//                 return 1;
//             } else if (date1.day < date2.day) {
//                 return -1;
//             } else {
//                 return 0;
//             }
//         }
//     }
// }

// function getComments(numberOfComments) {
//     for (let i = showComments; i < showComments + numberOfComments; i++) {
//         if (i === orderedComments.length) {
//             break;
//         }
//         let comment = orderedComments[i];
//         let div = document.createElement("div");
//         div.classList.add("comment");
//         div.innerHTML = `<p>${comment.alias}, ${comment.date.year}</p>
//         <p>"${comment.text}"</p>`;
//         let box = document.getElementById("box"); //TO DO, get correct element
//         box.append(div);
//     }
//     showComments += numberOfComments;
// }

// //function //TO DO button, skapa en egen funtion för detta?
// function showMoreComments (){
//     let button = document.createElement("button");
//     button.innerText = "Visa fler kommentarer...";
//     document.querySelector("body").append(button); //TO DO append to right element

//     button.addEventListener("click", function() {
//         getComments(2);
//     })
// }

// init(0); //TO DO, correct city ID, dont have a number in init
// getComments(2);
// showMoreComments();
