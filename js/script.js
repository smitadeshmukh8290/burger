
function validate(){
var myname = document.getElementById("myname").value;
var mydate = document.getElementById("mydate").value;
var people = document.getElementById("people").value;
var myemail = document.getElementById("myemail").value;
var mytel = document.getElementById("mytel").value;

if(myname == ""){
    document.getElementById("name").innerHTML = "customer name is required";
    return false;
}
if(mydate == ""){
    document.getElementById("date").innerHTML = "customer order date is required";
    return false;
}
if(people == ""){
    document.getElementById("mobile").innerHTML = "customer mobile is required";
    return false;
}
if(myemail == ""){
    document.getElementById("email").innerHTML = "customer mobile is required";
    return false;
}
if(mytel == ""){
    document.getElementById("tel").innerHTML = "customer mobile is required";
    return false;
}
else{
    
    alert("congratulation");
}
}
