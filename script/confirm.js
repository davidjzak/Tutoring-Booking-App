
//prevents duplicate reveal logic from running
var nametxtrevealed;
var phonetxtrevealed;
var emailtxtrevealed;



// var name = "0";
// var email ="0";
// var phone = "0";

$(document).on('click',"div.checked", function(){
    console.log($(this).hasClass("checked")); // has class must be used on jquery object
    this.className ="";
    this.className ="unchecked"

});
// switch unchecked to checked on click and resets event handler using on attribute (this allows you to reuse checkbox)
$(document).on('click',"div.unchecked", function(){
    this.className ="";
    this.className ="checked"


});


function confirminfo(){


//  name = document.getElementsByName("fullname")[0].value;
//  email =document.getElementsByName("email")[0].value;
//  phone = document.getElementsByName("phone")[0].value;
 let comment =  document.getElementById("commentbox").value;
if(localStorage.name.length > 0 && localStorage.email.length > 0 && localStorage.phone.length > 0){
    getShuttle(); //gets shuttle info
    // localStorage.name = name;
    // localStorage.email = email;
    // localStorage.phone = phone;
     if($("#needshuttle").hasClass("checked2")){
        localStorage.shuttle = "Requested";
    }else{
        localStorage.shuttle = "Not Requested"}
    }
    
    
     localStorage.comment = comment;
    window.open("appointmentinfo2.html","_self");
}




function confirmLoad(){
sceduleLoad();

document.getElementById("sceduleDynamicInfo").innerHTML =  localStorage.firstconfirm;
}


/* shuttle service checkbox logic*/

$(document).on('click',"div.checked2", function(){
    console.log($(this).hasClass("checked")); // has class must be used on jquery object
    this.className ="";
    this.className ="unchecked2";
    getShuttle();
   
});
// switch unchecked to checked on click and resets event handler using on attribute (this allows you to reuse checkbox)
$(document).on('click',"div.unchecked2", function(){
    this.className ="";
    this.className ="checked2"
    getShuttle();
});



function getShuttle(){
        console.log('entered shuttle');
        let services = "";
        var elements = $("#contactoptions").find(".checked2");
        var numItems = elements.length;
       if (numItems == 1){		
           services = "Requested";
       }else{
           services = "Not Requested";
       }
        
		localStorage.shuttle = services;

}


/* new confirm textbox functions */


$( document ).ready(function() {
document.getElementById("nametxt").addEventListener("input", function() {
 let text = this.textContent;
 
localStorage.name = text;
 
})});




$( document ).ready(function() {
document.getElementById("phonetxt").addEventListener("input", function() {
 let text = this.textContent;
 localStorage.phone = text;
 
})});

$( document ).ready(function() {
document.getElementById("emailtxt").addEventListener("input", function() {
 let text = this.textContent;
 localStorage.email = text;
 
})});





/*hides default styling for name textbox */
$(document).on('click',"#textname", function(){
	if(nametxtrevealed != 1){
	nametxtrevealed = 1;
	let namedefault = document.getElementsByClassName("defconfirmtext")[0];
	//namedefault.style.display = "none";
	namedefault.innerHTML = "";
	reveal(0);
	}
    });
	
	
	$(document).on('click',"#textphone", function(){
	if(phonetxtrevealed != 1){
	phonetxtrevealed = 1;
	let namedefault = document.getElementsByClassName("defconfirmtext")[1];
	namedefault.innerHTML = "";
	reveal(1);
    }
	});
	
	$(document).on('click',"#textemail", function(){
	if(emailtxtrevealed != 1){
	let namedefault = document.getElementsByClassName("defconfirmtext")[2];
	emailtxtrevealed = 1;
	namedefault.innerHTML = "";
	reveal(2);
	}
    });
	
/* reveal default styling for contact checkboxes */
function reveal( num){
console.log("enter reveal");
	let namedefault = document.getElementsByClassName("texttop")[num];
	namedefault.style.textIndent = "0px";

	console.log(namedefault);
	
    };