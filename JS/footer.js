"use strict";

function buildFooter (){
    let footer = document.getElementById("footerDiv");
    let footerDiv = document.createElement("div");
    footerDiv.classList.add("footer");

    let instagramLogga = document.createElement ("img")
    instagramLogga.src = "../images/instagram_logo.png"
    instagramLogga.classList.add ("instagramLogga")
    footerDiv.append(instagramLogga)

    let twitterLogga = document.createElement ("img")
    twitterLogga.src = "../images/twitter_logo.png"
    twitterLogga.classList.add ("twitterLogga")
    footerDiv.append(twitterLogga)

    let youtubeLogga = document.createElement ("img")
    youtubeLogga.src = "../images/youtube_logo.png"
    youtubeLogga.classList.add ("youtubeLogga")
    footerDiv.append(youtubeLogga)


    footer.append(footerDiv);

    return footerDiv

}

buildFooter ();