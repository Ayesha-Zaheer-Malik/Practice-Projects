function Submit_btn() {
    let username = document.getElementById("username").value;
    let pass=document.getElementById("password").value;
    let gender=document.querySelector('input[name="Gender"]:checked');
    let inter=document.querySelector('input[name="Interest"]:checked');
    let file=document.getElementById("file").value;
    if (username === "") { 
        alert("Please enter  username.");
        preventDefault(); 
    }
    if(pass==="" || pass.length<4){
        alert("password should be of length 4");
         preventDefault(); 

    }
    if(pass==="" || pass.length<4){
        alert("password should be of length 4");
         preventDefault(); 

    }
    if(!gender){
      alert("Select your gender");
    }
    if(!inter){
alert("select area of interest any");
    }
    if(!file){
        alert("plz upload the image");
    }
    else
        alert("Submitted Succesfully");

}