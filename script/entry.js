var open;

$(document).ready(function(){

     open = 1;


})


function showentryopen(){
    console.log("enter");

if(open == 0){
    console.log("enter show");
    document.getElementById("homedrop").style.display = "block";
    open = 1;
}
else if(open == 1){
    console.log("enter close");
    document.getElementById("homedrop").style.display = "none";
    open = 0;
}

}


function showlocation(){
console.log('enter show location');
document.getElementById("locationcontainer").style.display = "block";
}