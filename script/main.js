
   
var year;


function checkYear() {
  console.log("enter check year");
    var year = document.getElementById('dynamicyear').innerHTML;
    console.log(year);
    localStorage.year = year;
    console.log(localStorage.year)
    if( localStorage.year != 0){
        console.log("entered year change")
        //obsolete with dans updates potentially readd
        // document.getElementsByName("Year")[0].disabled = true;
        // document.getElementsByName("Make")[0].disabled = false;
    }
  }
function clearVehicleInfo(){
    localStorage.year = 0;
    localStorage.make = 0;
    localStorage.model = 0;
    localStorage.body = 0;
    localStorage.mileage = 0;
}

function checkMake() {
    var make = document.getElementById('dynamicmake').innerHTML;
    console.log(make);
    localStorage.make = make;
    console.log(localStorage.make);
    if( localStorage.make != 0){
       
        // document.getElementsByName("Make")[0].disabled = true;
        // document.getElementsByName("Model")[0].disabled = false;
    }
  }

//   function checkit(){
//       console.log("entered check it");
//       console.log($(this)).click;
//       if($(this).hasClass("unchecked")){
//             console.log('yo');
//       }
//   }

  
  
  function checkModel() {
    var model = document.getElementById('dynamicmodel').innerHTML;
    console.log(model);
    localStorage.model = model;
    console.log(localStorage.model);
    checkVComplete();
    if( localStorage.model != 0){
       
        // document.getElementsByName("Model")[0].disabled = true;
        // document.getElementsByName("Body")[0].disabled = false;
    }
  }

  function checkBody() {
    var body = document.getElementsByName('Body')[0].value;
    console.log(body);
    localStorage.body = body;
    console.log(localStorage.body);
    checkVComplete();
    if( localStorage.body != 0){
        console.log("entered year change")
        document.getElementsByName("Body")[0].disabled = true;
        document.getElementsByName("Mileage")[0].disabled = false;
    }
  }

  function checkMileage() {
    var mileage = document.getElementById('dynamicmileage').innerHTML;
    console.log(mileage);
    localStorage.mileage = mileage;
    console.log(localStorage.mileage);
    checkVComplete();
            
    };
  

  function checkVComplete(){
    if (localStorage.year != 0 && localStorage.make !=0 && localStorage.model !=0){
        console.log(true);

        document.getElementById("nextservice").style.display = "block";
    }else{
        document.getElementById("nextservice").style.display = "none";
    }
  }


  // displays tire drop down
  function openTire(){
      //let gtire = document.getElementById("tiredrop");
      if($("#tiredrop").hasClass("closeddrop")) {
        $("#tiredrop").removeClass("closeddrop");
      console.log("enter tire");
   var tire = document.getElementById("tiredrop").children;
   var tirelength  = document.getElementById("tiredrop").children.length;
  switchArrow();
   for (var i=0; i < tirelength; i++){
        tire[i].style.display ="block";
        }
        switchArrow(tiredrop, 0);
    }else{ // closing dropdown logic
        $("#tiredrop").addClass("closeddrop");
        var tire = document.getElementById("tiredrop").children;
        var tirelength  = document.getElementById("tiredrop").children.length;
       switchArrow(tiredrop, 1);
        for (var i=1; i < tirelength; i++){
             tire[i].style.display ="none";
             }
             switchArrow(tiredrop, 1);

    }
  }


// opens oil dropdown and switches arrow to appropriate states
  function openOil(){
    //let gtire = document.getElementById("oilchangea");
    if($("#oilchangea").hasClass("closeddrop")) {
      $("#oilchangea").removeClass("closeddrop");
    console.log("enter tire");
 var tire = document.getElementById("oilchangea").children;
 var tirelength  = document.getElementById("oilchangea").children.length;
switchArrow();
 for (var i=0; i < tirelength; i++){
      tire[i].style.display ="block";
      }
      switchArrow(oilchangea, 0);
  }else{ // closing dropdown logic
      $("#oilchangea").addClass("closeddrop");
      var tire = document.getElementById("oilchangea").children;
      var tirelength  = document.getElementById("oilchangea").children.length;
     switchArrow(oilchangea, 1);
      for (var i=1; i < tirelength; i++){
           tire[i].style.display ="none";
           }
           switchArrow(oilchangea, 1);

  }
}


function openBattery(){
  //let gtire = document.getElementById("oilchangea");
  if($("#batterya").hasClass("closeddrop")) {
    $("#batterya").removeClass("closeddrop");
  console.log("enter tire");
var tire = document.getElementById("batterya").children;
var tirelength  = document.getElementById("batterya").children.length;
switchArrow();
for (var i=0; i < tirelength; i++){
    tire[i].style.display ="block";
    }
    switchArrow(batterya, 0);
}else{ // closing dropdown logic
    $("#batterya").addClass("closeddrop");
    var tire = document.getElementById("batterya").children;
    var tirelength  = document.getElementById("batterya").children.length;
   switchArrow(batterya, 1);
    for (var i=1; i < tirelength; i++){
         tire[i].style.display ="none";
         }
         switchArrow(batterya, 1);

}
}


function openBrake(){
  if($("#brakea").hasClass("closeddrop")) {
    $("#brakea").removeClass("closeddrop");
  console.log("enter tire");
var tire = document.getElementById("brakea").children;
var tirelength  = document.getElementById("brakea").children.length;
switchArrow();
for (var i=0; i < tirelength; i++){
    tire[i].style.display ="block";
    }
    switchArrow(brakea, 0);
}else{ // closing dropdown logic
    $("#brakea").addClass("closeddrop");
    var tire = document.getElementById("brakea").children;
    var tirelength  = document.getElementById("brakea").children.length;
   switchArrow(brakea, 1);
    for (var i=1; i < tirelength; i++){
         tire[i].style.display ="none";
         }
         switchArrow(brakea, 1);

  
}}

function openRepair(){
  if($("#repaira").hasClass("closeddrop")) {
    $("#repaira").removeClass("closeddrop");
  console.log("enter tire");
var tire = document.getElementById("repaira").children;
var tirelength  = document.getElementById("repaira").children.length;
switchArrow();
for (var i=0; i < tirelength; i++){
    tire[i].style.display ="block";
    }
    switchArrow(repaira, 0);
}else{ // closing dropdown logic
    $("#repaira").addClass("closeddrop");
    var tire = document.getElementById("repaira").children;
    var tirelength  = document.getElementById("repaira").children.length;
   switchArrow(repaira, 1);
    for (var i=1; i < tirelength; i++){
         tire[i].style.display ="none";
         }
         switchArrow(repaira, 1);

  
}}




// gets id of dropdownmenu section finds first arrow and switches icon to correct state
 function switchArrow(idofdropdown, num){
    let arrow = $(idofdropdown).find(".arrow");
    if (num == 0){ // switches to dropdown menu open icon
    $(arrow[0]).attr("src","imgs/arrowclose.png");
        }
    else if(num == 1){ //switches to dropdown menu closed
        $(arrow[0]).attr("src","imgs/arrowopen.png");
   }
 }