    let show=document.getElementById("my-btn");
    let first_container=document.getElementById("modal");
    let second_container=document.getElementById("first-modal");
    let third_container=document.getElementById("second-modal");
    let fourth_container=document.getElementById("third-modal");
    let back1=document.getElementById("back-1");
    let back2=document.getElementById("back-2");
    let x=document.getElementById("choose-x");
    let o=document.getElementById("choose-o");
    let x_turn=document.getElementById('x-turn');
    let o_turn=document.getElementById('o-turn');
    let won=document.getElementById("won");
    
    
show.addEventListener('click',()=>{
    second_container.style.display="block"; 
    first_container.style.display="none";
});
back1.addEventListener('click',()=>{
    second_container.style.display="none";
    x_turn.style.background="none";
    o_turn.style.background="none";
});
x.addEventListener('click',()=>{
    third_container.style.display="block";
 heads=Math.floor(Math.random() * 2);
    
});
o.addEventListener('click',()=>{
    third_container.style.display="block";
    
});
back2.addEventListener('click',()=>{
    third_container.style.display="none";
    x_turn.style.background="none";
    o_turn.style.background="none"; 
    reset();
});
let count=0;
 function fill(control){
        if((count%2==0)){
         document.getElementById(control.id).innerHTML="O";
         document.getElementById(control.id).style.color="white";
         x_turn.style.background="linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255,0,0,1))";
         document.getElementById(control.id).style.background="green";
         document.getElementById(control.id).style.pointerEvents="none"; 
         o_turn.style.background="none";
        }
        else{
        document.getElementById(control.id).innerHTML="X";
        document.getElementById(control.id).style.color="white";
        document.getElementById(control.id).style.background="red";
        o_turn.style.background="linear-gradient(to left, rgba(255, 0, 0, 0), rgb(105, 245, 11))";
        document.getElementById(control.id).style.pointerEvents="none";
        x_turn.style.background="none";    
     }
     if(checkwin1()||checkwin2()||checkwin3()||checkwin4()||checkwin5()||checkwin6()||checkwin7()||checkwin8()){
        fourth_container.style.display="block";
        third_container.style.display="none";
        won.innerHTML=document.getElementById(control.id).innerHTML+"won the match";
     }
    else if(draw()) {
        fourth_container.style.display="block";
        third_container.style.display="none";
        won.innerHTML="Its draw !!";
    }
     count++;
 }  
 function reset(){
     for(let i=1;i<=9;i++){
    document.getElementById("div"+i).innerHTML="";
    document.getElementById("div"+i).style.background="orange";
    document.getElementById("div"+i).style.pointerEvents="auto";
}
count=0;
}
function myfun1(){
    count=1;
    x_turn.style.background="linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255,0,0,1))";
}
function myfun2(){
    o_turn.style.background="linear-gradient(to left, rgba(255, 0, 0, 0), rgb(105, 245, 11))";
}
function checkwin1(){
    if(document.getElementById("div1").innerHTML!=""&&document.getElementById("div2").innerHTML!=""&&document.getElementById("div3").innerHTML!=""&&document.getElementById("div1").innerHTML==document.getElementById("div2").innerHTML&&document.getElementById("div2").innerHTML==document.getElementById("div3").innerHTML){
        return true;
    }
}
function checkwin2(){
    if(document.getElementById("div4").innerHTML!=""&&document.getElementById("div5").innerHTML!=""&&document.getElementById("div6").innerHTML!=""&&document.getElementById("div4").innerHTML==document.getElementById("div5").innerHTML&&document.getElementById("div5").innerHTML==document.getElementById("div6").innerHTML){
        return true;
    }
}
function checkwin3(){
    if(document.getElementById("div7").innerHTML!=""&&document.getElementById("div8").innerHTML!=""&&document.getElementById("div9").innerHTML!=""&&document.getElementById("div7").innerHTML==document.getElementById("div8").innerHTML&&document.getElementById("div8").innerHTML==document.getElementById("div9").innerHTML){
        return true;
    }
}
function checkwin4(){
    if(document.getElementById("div1").innerHTML!=""&&document.getElementById("div4").innerHTML!=""&&document.getElementById("div7").innerHTML!=""&&document.getElementById("div1").innerHTML==document.getElementById("div4").innerHTML&&document.getElementById("div4").innerHTML==document.getElementById("div7").innerHTML){
        return true;
    }
}
function checkwin5(){
    if(document.getElementById("div2").innerHTML!=""&&document.getElementById("div5").innerHTML!=""&&document.getElementById("div8").innerHTML!=""&&document.getElementById("div2").innerHTML==document.getElementById("div5").innerHTML&&document.getElementById("div5").innerHTML==document.getElementById("div8").innerHTML){
        return true;
    }
}
function checkwin6(){
    if(document.getElementById("div3").innerHTML!=""&&document.getElementById("div6").innerHTML!=""&&document.getElementById("div9").innerHTML!=""&&document.getElementById("div3").innerHTML==document.getElementById("div6").innerHTML&&document.getElementById("div6").innerHTML==document.getElementById("div9").innerHTML){
        return true;
    }
}
function checkwin7(){
    if(document.getElementById("div1").innerHTML!=""&&document.getElementById("div5").innerHTML!=""&&document.getElementById("div9").innerHTML!=""&&document.getElementById("div1").innerHTML==document.getElementById("div5").innerHTML&&document.getElementById("div5").innerHTML==document.getElementById("div9").innerHTML){
        return true;
    }
}
function checkwin8(){
    if(document.getElementById("div3").innerHTML!=""&&document.getElementById("div5").innerHTML!=""&&document.getElementById("div7").innerHTML!=""&&document.getElementById("div3").innerHTML==document.getElementById("div5").innerHTML&&document.getElementById("div5").innerHTML==document.getElementById("div7").innerHTML){
        return true;
    }
}
function draw(){
    if((document.getElementById("div1").innerHTML=="X"||document.getElementById("div1").innerHTML=="O")&&
    (document.getElementById("div2").innerHTML=="X"||document.getElementById("div2").innerHTML=="O")&&
    (document.getElementById("div3").innerHTML=="X"||document.getElementById("div3").innerHTML=="O")&&
    (document.getElementById("div4").innerHTML=="X"||document.getElementById("div4").innerHTML=="O")&&
    (document.getElementById("div5").innerHTML=="X"||document.getElementById("div5").innerHTML=="O")&&
    (document.getElementById("div6").innerHTML=="X"||document.getElementById("div6").innerHTML=="O")&&
    (document.getElementById("div7").innerHTML=="X"||document.getElementById("div7").innerHTML=="O")&&
    (document.getElementById("div8").innerHTML=="X"||document.getElementById("div8").innerHTML=="O")&&
    (document.getElementById("div9").innerHTML=="X"||document.getElementById("div9").innerHTML=="O")
    ){
        return true;
    }
}

function back3(){
    second_container.style.display="block";
    fourth_container.style.display="none";
    reset();
}
function replay(){
    second_container.style.display="block";
    fourth_container.style.display="none";
    reset();
}







