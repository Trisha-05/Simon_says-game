let gameSeq = [];
let userSeq = [];

let btns=["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function () {
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },550);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randidx=Math.floor(Math.random()*3);
    let randcol=btns[randidx];
    let randbtn=document.querySelector(`.${randcol}`);
    // console.log(randidx);
    // console.log(randcol);
    // console.log(randbtn);
    gameSeq.push(randcol);
    console.log(gameSeq);
    gameflash(randbtn);
}
let idx=userSeq.length-1;
function checkAns(idx){
    // let idx=level-1;
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
       }
    }else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br> Press any key`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }
}

function btnpress(){
    let btn=this;
    userflash(btn);
    userCol=btn.getAttribute("id");
    userSeq.push(userCol);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    level=0;
    started=false;
    gameSeq=[];
    userSeq=[];

}
