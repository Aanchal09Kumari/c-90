function log(){
    var player1name=document.getElementById("us1").value;
   var play2Name=document.getElementById("us2").value;
   localStorage.setItem("play1",player1name);
   localStorage.setItem("play2",play2Name);
   window.location="page2.html";
};

var no_1=document.getElementById("no1").value;
var no_2=document.getElementById("no2").value;
var play1score=0;
var play2score=0;
document.getElementById("pscore1").innerHTML=play1score;
document.getElementById("pscore2").innerHTML=play2score;
document.getElementById("ques_0").innerHTML="Question Turn - "+play1Name;
document.getElementById("ans").innerHTML="Answer Turn - "+play2name;



function Bac(){
  window.location="index.html";
}
 function sen(){
  
   var Q=no_1+"x"+no_2;
   var input="<br>Answer : <input type='number' id='checkbox'>"
   var chek="<br><button onclick='check()' class='btn btn-primary'>Check</button>";
   var di=Q+input+chek;
   document.getElementById("out").innerHTML=di;
   
   
 }