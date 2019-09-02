
function finalconfirmLoad(){

    // sets display for vehicle information
   
document.getElementById("vehicleDynamicInfo").innerHTML = localStorage.year + " " + localStorage.make + " " + 
localStorage.model;
    
document.getElementById("serviceDynamicInfo").innerHTML = localStorage.services;
document.getElementById("serviceDynamicComment").innerHTML = '"' + localStorage.servicecomment + '"';
document.getElementById("sceduleDynamicInfo").innerHTML = localStorage.dropoff;
document.getElementById("contactDynamicName").innerHTML = localStorage.name;
document.getElementById("contactDynamicEmail").innerHTML = localStorage.email;
document.getElementById("contactDynamicPhone").innerHTML = localStorage.phone;
if (typeof localStorage.comment !== "undefined"){
document.getElementById("commentDynamicInfo").innerHTML = localStorage.comment;
document.getElementById("shuttleDynamicInfo").innerHTML = localStorage.shuttle;

$('.test1').height($('#serviceDynamicInfo').outerHeight());
console.log("")
$('.test2').height($('#sceduleDynamicInfo').outerHeight());
}
}