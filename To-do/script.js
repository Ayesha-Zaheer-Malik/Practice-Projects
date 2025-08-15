var input=document.getElementById("taskInput");
var tsk=document.getElementById("taskList");
function showTask(){
let li=document.createElement("li");
li.textContent=input.value;
tsk.appendChild(li);
var Del=document.createElement("button");
Del.textContent="Delete";
li.appendChild(Del);
Del.addEventListener("click", () => {
tsk.removeChild(li);
  });

}