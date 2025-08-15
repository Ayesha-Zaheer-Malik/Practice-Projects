function submitTest(){
const ans={
    q1: "q1a",
    q2: "q2b",
    q3: "q3b",
    q4: "q4b",
    q5: "q5a"
}
for (let q in ans) {  
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    console.log(selected);
    if (selected) {
      const id = selected.id;
      const label = document.querySelector(`label[for="${id}"]`);
      if (id === ans[q]) {
        label.style.backgroundColor = "#26e918ff"; 
      } else {
        label.style.backgroundColor = "#f20f22ff"; 
      }
    }
  }
}




    