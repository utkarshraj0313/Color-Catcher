
let targetColor="";
let score =0;
let time=30;
let timer;
let colors=['blue','yellow','red','orange', 'pink','white','green','black',
            'gray','purple','lightgreen','Silver','khaki','brown','lightblue','indigo'];

    const grid= document.getElementById("grid");
    const targetColorDisplay= document.getElementById("targetcolor")
    const scoreDisplay= document.getElementById("score");
    const timeDispaly= document.getElementById("time");


    function shuffleArray(colors){
        for(let i=colors.length-1;i>0;i--){
            const j=Math.floor(Math.random()*(i+1));
            [colors[i],colors[j]]=[colors[j],colors[i]];
        }
        return colors;
    }

    function createGrid(){
        grid.innerHTML="";
        colors=shuffleArray(colors);
        console.log(colors);
        targetColor=colors[Math.floor(Math.random()*16)];
        targetColorDisplay.textContent=targetColor;

        colors.forEach((color)=>{
            const box=document.createElement("div");
            box.className="color-box";
            box.style.backgroundColor=color;
            box.addEventListener('click',()=>{handleClick(color);})
            grid.appendChild(box);
        })
    }

    function handleClick(clickedcolor){
        if (clickedcolor===targetColor){
            score++;
            scoreDisplay.textContent=score;
            createGrid();
        }
    }

function startgame(){
    
    score =0;
    time=30;
    scoreDisplay.textContent=score;
    timeDispaly.textContent=time;
    createGrid();
    
    clearInterval(timer);
    timer=setInterval( ()=>{
        time--;
        timeDispaly.textContent=time;

        if (time===0){
            clearInterval(timer);
            alert("time's up! Your final score"+score);
        }
    },1000);
}

let a=document.getElementById("dark");
    a.addEventListener('click',darkmode);
    function darkmode(){
        document.body.style.backgroundColor="#333333";
        let gc= document.querySelector(".game-container");
        gc.style.backgroundColor="black";
        gc.style.color="white";
        document.getElementById("mode").style.boxShadow="5px 5px 5px white";
        

    }

    let b=document.getElementById("light");
    b.addEventListener('click',lightmode);
    function lightmode(){
        

        document.body.style.backgroundColor="#f0f0f0";
        let gc= document.querySelector(".game-container");
        gc.style.backgroundColor="white";
        gc.style.color="black";
        document.getElementById("mode").style.boxShadow ="5px 5px 5px black";
 

    }