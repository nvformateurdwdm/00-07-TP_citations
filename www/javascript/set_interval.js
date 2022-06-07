let timer = 0;
const limit = 3000;
const gap = 10;
function mrPatel(){
    const percent = Math.round(timer * 100 / limit);
    console.log("percent", percent);
    timer += gap;
    if(timer >= limit){
        timer = 0;
        // clearInterval(intervalID);
    }
}
let countdown = 3;
let intervalID = setInterval(mrPatel, gap);