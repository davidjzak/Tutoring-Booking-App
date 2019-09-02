// used to make sure more than one date cannot be checked at once
var checkdatecounter = 0;
//used to verify which date list to use
var datelist = 0;
var day = 1;
var month = "January";
var preferredTime = 0;
var weekday = 0;
var year = "2019";
var newtimeselected = 0;
//var week =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function serviceLoad(){
    document.getElementById("vehicleDynamicInfo").innerHTML = localStorage.year + " " + localStorage.make + " " + 
    localStorage.model;

}

// display vehicle services selected
function sceduleLoad(){

let serviceinfo = document.getElementById('serviceDynamicInfo');
serviceinfo.innerHTML = localStorage.services;

serviceLoad1();
}

//scroll to time selectors after choosing a date
// $( document ).ready(function() {
//     $(".cal").click(function() {
//         console.log("inside scroll logic");
//         $('#app').animate({
//             scrollTop: $("#morning").offset().top},
//         550);
//     });
// });




// moves the calender selected date
$(document).on('click',"td.cal", function(){
  console.log("enter add calendar effect");
    day = $(this).text();
    let highlighted = $(".container").find(".selecteddate");
    let numselected = highlighted.length;
    console.log(numselected);
    for(let i = 0; i < numselected; i++){
    highlighted[i].classList.remove("selecteddate");
    //console.log(i);
    }
    // scrolls screen to select time 


   if($(this).hasClass("greyedout") == 1){
           $(this).addClass("selecteddate");
           console.log("entered greyed out");
      
        scedulepopup2();



  }else if($(this).hasClass("alttime3") == 1){
    console.log("entered not greyed out");
     $(this).addClass("selecteddate");
  
    scedulepopup3();

  }else{
    console.log("entered not greyed out");
    $(this).addClass("selecteddate");
    scedulepopup();

  }
//scroll to confirm section
  $('#app').animate({
    scrollTop: $("#blankconfirmicon").offset().top},
550);

        
    //     //determine number of day selected on calender used to determine day of week based on week array, e.g. sunday
    //     let parent = $(this).parent();
    //     //console.log(parent);
    //     parent = parent[0].children; // children is dom element which return collection of children
    //    // console.log(parent[0].children);
    //     for(let y=0; y < parent.length; y++){
    //         if(parent[y].classList.contains("selecteddate")){
    //         weekday = week[y] // sets day of week to appropriate day in the array
    //     }
    // }
          
    clearTimes(); // remove selected from time state
          
      });// end move date function







// moves checkbox to selected checkbox new version (dans)
$(document).on('click',"button.dtime", function(){
  //used to make sure select time only closes time picker if new time is selected
  newtimeselected = 1;
    //  get checked checkbox elements
  let highlighted = $("body").find(".dtimeselected");
 
  let numselected = highlighted.length;
  

  for(let i = 0; i < numselected; i++){
  highlighted[i].classList.remove("dtimeselected");
  console.log("entered remove class");
  }
  
          // adds class checkradio and changed background image to checked
        $(this).addClass("dtimeselected");
        // sets preferred time to name of selected checkbox, e.g. morning, evening afternoon
       localStorage.timename = $(this).attr('name');
        prefferedTime = $(this).attr('name');
        console.log(localStorage.timename);
     localStorage
console.log(preferredTime);
        //scroll to confirm section
        $('#app').animate({
          scrollTop: $("#blankconfirmicon").offset().top},
      550);
      
      // setTimeout(function() {
      //   document.getElementById("modalcontainer").style.display = "none";
      // }, 500);


      
    });

   
         

         // stores sceduling info in LocalStorage.dropoff

  function nextConfirm(){
    if (day != 0 && prefferedTime != 0){

        localStorage.dropoff = prefferedTime + " on " + " " + month + " " + day + " " + year;
        localStorage.firstconfirm = "Dropping off in the " + prefferedTime.toLowerCase() + " "  + month + " "  + 
        day + " " + year;
      return true;
    }
        return false;
  }


/*drop off section radios or waiting  for car*/


$(document).on('click',"div.unfilledradio", function(){

//remove other checked radios
let highlighted = $("#leavecarcontainer").find(".filledradio");
let numselected = highlighted.length;

for(let i = 0; i < numselected; i++){
highlighted[i].classList.remove("filledradio");
highlighted[i].classList.add("unfilledradio");
}
// add filled radio appearance
  this.classList.add("filledradio");
if($(this).hasClass("selecttime")){
  console.log("selecttime1")
  if($(this).hasClass("required")){
    console.log("enter dropping off car")
  document.getElementsByClassName("shuttlecontainer")[0].style.display = "block";
  }else {
    console.log('enter wait at store');
    document.getElementsByClassName("shuttlecontainer")[0].style.display = "none";
  }

                              }else {
    if($(this).hasClass("required")){
      document.getElementsByClassName("shuttlecontainer")[1].style.display = "block";
      }else {
        document.getElementsByClassName("shuttlecontainer")[1].style.display = "none";
      }


  }
  
});

//new wrapper document ready


/* clear time state when switching dates */

function clearTimes(){
  let highlighted = $(".container").find(".dtimeselected");
  let numselected = highlighted.length;
  for(let i = 0; i < numselected; i++){
    highlighted[i].classList.remove("dtimeselected");
    console.log("entered remove class");
    }
};



//reveals calendar to slect new drop offf date, hides next button, undos most of action done in contbooking2 in modal.js
function edittime(){

  $("#monthhide").slideDown("slow");
  document.getElementById("dropofftime").style.display = "none";
  document.getElementById("toconfirm").style.display = "none";

}
