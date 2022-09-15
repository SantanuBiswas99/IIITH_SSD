document.addEventListener('keypress',keyhandler);

ctrl=false;
dark=true;

function keyhandler(event){
    console.log("key pressed:",event.key);
    if(event.ctrlKey){
        ctrl=true;
        console.log("key pressed: ctrl",ctrl);
    }
    if((event.key=="m"||event.key=="M")&&ctrl==true){
        if(dark==true){
            dark=false;
            console.log("been there!");
            document.getElementById("bod").style.backgroundColor="white";
            document.getElementById("ele1").style.color="black";
            document.getElementById("ele2").style.color="black";
            document.getElementById("ele3").style.color="black";
            document.getElementById("ele4").style.color="black";
            document.getElementById("ele5").style.color="black";
            document.getElementById("ele6").style.color="black";
            document.getElementById("ele8").style.color="black";
            document.getElementById("ele7").style.color="black";
        }
        else{
            dark=true;
            console.log("been there!");
            document.getElementById("bod").style.backgroundColor="grey";
            document.getElementById("ele1").style.color="white";
            document.getElementById("ele2").style.color="white";
            document.getElementById("ele3").style.color="white";
            document.getElementById("ele4").style.color="white";
            document.getElementById("ele5").style.color="white";
            document.getElementById("ele6").style.color="white";
            document.getElementById("ele8").style.color="white";
            document.getElementById("ele7").style.color="white";
        }
    }
    else{
        ctrl=false;
    }
}


function validateForm() {
    alert("Name must be filled out");
}

function emailValidate(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.match(validRegex)) {
       return true;

    } else {

       // alert("Invalid email address!");
       document.form1.text1.focus();
       return false;
    }
}

function validateUname(input){

  var uname = document.forms["myForm"]["uname"].value;
   // let uname = "Mayank1";
   var i=0;
   // var char='';
   var isnum = 0;
   var isupper = 0;
   console.log(uname.length);
   while (i <= uname.length){
       var char = uname.charAt(i);
       if (char >= '0' && char <= '9'){
           isnum = 1;
       }
       else if(char === char.toUpperCase()) {
           isupper = 1;
       }
       i++;
   }
   // console.log(num, upper);
   if(isnum != 1 || isupper != 1) {
       alert("Wrong Username");
   }
}

function validatePass(){

  var password1 = document.forms["myForm"]["cpass"].value;
  var password2 = document.forms["myForm"]["spass"].value;

  if (password1 == '')
    alert ("Please enter Password");
                else if (password2 == '')
                    alert ("Please enter confirm password");
                else if (password1 != password2) {
                    alert ("\nPassword did not match: Please try again...")
                    return false;
                }
                else{
                    return true;
                }
}

function validateForm(){
  var name = document.getElementById("mname").value;
  var email = document.getElementById("email").value;
  var uname = document.getElementById("uname").value;
  var tlead = document.getElementById("tlead").value;
  // var Members = document.getElementById("uname").value;
  // alert(name + " " + email + " " + uname + " " + tlead);
  alert("HI");
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
