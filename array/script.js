function conv(){
var inp=document.querySelector('#itemInput').value;
var array=inp.split(",");
console.log("your array");
console.log(array);
console.log("poped array");
array.pop();
console.log(array);
console.log("shift array");
array.shift();
console.log(array);
for(let i=0; i<array.length;i++){
    if(array[i].toLowerCase().startsWith("a")){
   array.splice(i,1);
   i--;
   
    }
}
console.log("spliced array");
   console.log(array);

   function newIn(){
var newVal=document.querySelector('#newInput').value;
array.push(newVal);
console.log("pushed array");
console.log(array);
}
return {newIn};

}



