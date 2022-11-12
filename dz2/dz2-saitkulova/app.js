//первое задание setTimeout
const miniBox = document.querySelector(".TwoBox")

let leftPost = 0;
let topPost = 0;

step = () => {
    if (leftPost <= 380 && topPost === 0) {
        leftPost += 20;
        miniBox.style.left = `${leftPost}px`
        setTimeout(step, 100);
    } else if (leftPost >= 380 && topPost <= 380) {
        topPost += 20;
        miniBox.style.top = `${topPost}px`
        setTimeout(step, 100);
    }else if (topPost >=380 && leftPost !==0){
        leftPost -=20;
        miniBox.style.left = `${leftPost}px`
        setTimeout(step, 100);
    }else   if (leftPost === 0 && topPost !== 0){
        topPost-=20;
        miniBox.style.top = `${topPost}px`
        setTimeout(step, 100)
    }
}
step()

//второк задание ,интервал
let second = 0;

function interval(){
    second++;
    console.log(`${second} секунд прошло`);
    if(second >= 60) {
        clearInterval(stopInterval);
    }}

stopInterval = setInterval(interval,1000);