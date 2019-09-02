
var blankvehicleicon;
var filledvehicleicon;
var vehicleopen;
var serviceopen;
var sceduleopen;
var confirmopen;
var blankserviceactiveicon;
var blankserviceicon;
var blanksceduleicon;
var blanksceduleactiveicon; 
var filledserviceicon;
var filledsceduleicon;
var filledconfirmicon;
var blankconfirmicon;
var blankconfirmacticveicon;

var vehicledone;
var servicedone;
var sceduledone;

//  used for new onclick logic 
var vehicleopened;
var serviceopened;
var sceduleopened;
var confirmopened;
var headerapp;

/* initializing global variables */
$(document).ready(function() {
    headerapp = document.getElementById("headerapp");
     blankvehicleicon = document.getElementById("blankvehicleicon");
    filledvehicleicon = document.getElementById("filledvehicleicon");
    blankserviceactiveicon = document.getElementById("blankserviceactiveicon");
    blankserviceicon = document.getElementById("blankserviceicon");
    blanksceduleicon = document.getElementById("blanksceduleicon");
    blanksceduleactiveicon = document.getElementById("blanksceduleactiveicon");
    filledserviceicon = document.getElementById("filledserviceicon");
    filledconfirmicon = document.getElementById('filledconfirmicon');
    filledsceduleicon = document.getElementById('filledsceduleicon');
    blankconfirmicon = document.getElementById("blankconfirmicon");
    blankconfirmacticveicon = document.getElementById("blankconfirmacticveicon");
    vehicleopen = 1;
    serviceopen = 0;
    sceduleopen = 0;
    confirmopen = 0;
    vehicleopened = 1;
    serviceopened = 0;
    sceduleopened = 0;
    confirmopened = 0;


    vehicledone = 0;
 servicedone = 0;
sceduledone = 0;



});


function serviceopentrans(){
    //prevents duplicate logic form running
    if(serviceopened == 0){
        blankserviceicon.setAttribute('onclick','serviceopentrans();');
    }
    vehicledone = 1;
   
 /* service section slide open */
        $("#servicecontainer").slideDown("slow");
        serviceopen = 1;
/*switch header to service header */
      
       
       headerapp.className = "headerappservice";
/*switch icons */   
/* vehicle icon switch to filled state */
      blankvehicleicon.style.display = "none";
      filledvehicleicon.style.display = "block";

      correctEditIcons();

/* serviceicon switch to active not filled state */
blankserviceactiveicon.style.display = "block";
blankserviceicon.style.display = "none";   
filledserviceicon.style.display = "none";
       /*should calll update info function? */
/* close vehicle section */
if(vehicleopen == 1){
    vehicleopen = 0;
       $("#vehiclewrapper").slideUp("slow");
}

if(sceduleopen == 1){
    $("#scedulewrapper").slideUp("slow");
    sceduleopen = 0;
}

if(confirmopen == 1 ){
    $("#confirmwrapper").slideUp("slow");
    confirmopen = 0;
}


serviceopened = 1;
serviceLoad1();
}


function vehicleopentrans(){
    $("#vehiclewrapper").slideDown("slow");
     vehicleopen = 1;
     /* switches to vehicle header, specifically bar position */
     headerapp.className = "headerappvehicle";
    
     if(serviceopen == 1){
        $("#servicecontainer").slideUp("slow");
        serviceopen = 0;
     }

     /* close vehicle section */

    if(sceduleopen == 1){
        $("#scedulewrapper").slideUp("slow");
        sceduleopen = 0;
    }

    if(confirmopen == 1 ){
        $("#confirmwrapper").slideUp("slow");
        confirmopen = 0;
    }

/* serviceactiveicon switch to hidden */
blankserviceactiveicon.style.display = "none";
blankserviceicon.style.display = "block";

correctEditIcons();
filledvehicleicon.style.display = "none";
blankvehicleicon.style.display = "block";
}










/* opens scedule section dropdown */
function sceduleopentrans(){
// prevents duplicate logic running
    if(sceduleopened == 0){
        console.log("enter scedule opened add attribute logic");
        blanksceduleicon.setAttribute('onclick','sceduleopentrans();');
    }
    
servicedone = 1;

    sceduleLoad()
    $("#scedulewrapper").slideDown("slow");
    sceduleopen = 1;

    /*switches header bar to appropriate position */
    headerapp.className = "headerappscedule";
    
    if(serviceopen == 1){
        $("#servicecontainer").slideUp("slow");
        serviceopen = 0;
     }

     /* close vehicle section */
    if(vehicleopen == 1){
    vehicleopen = 0;
       $("#vehiclewrapper").slideUp("slow");
    }

    if(confirmopen == 1 ){
        $("#confirmwrapper").slideUp("slow");
        confirmopen = 0;
    }
    /*change icons */
    filledserviceicon.style.display ="block";
    blankserviceicon.style.display = "none";
    blankserviceactiveicon.style.display = "none";

    correctEditIcons();

    blanksceduleactiveicon.style.display = "block";
    filledsceduleicon.style.display = "none";
    blanksceduleicon.style.display = "none";

    //if (sceduledone == 1){
        console.log("entered scedule move");
        $( document ).ready(function() {
                $('#app').animate({
                    scrollTop: $("#month").offset().top},
                900);
            });
        
    
   // }
   getServiceComment();

   sceduleopened = 1;
}


/*open confirm dropdown */

function confirmopentrans(){
//prevents duplicate logic running
    if(confirmopened == 0){
        blankconfirmicon.setAttribute('onclick','confirmopentrans();');
    }
    
    
    if(nextConfirm()){
    sceduledone = 1;
    confirmLoad();
    $("#confirmwrapper").slideDown("slow");
    confirmopen = 1;
   /*switches header bar to appropriate position */
   headerapp.className = "headerappconfirm";

    blanksceduleactiveicon.style.display = "none";
    filledsceduleicon.style.display = "block";

    correctEditIcons();

    blankconfirmicon.style.display = "none";
    blankconfirmacticveicon.style.display = "block";

    if(serviceopen == 1){
        $("#servicecontainer").slideUp("slow");
        serviceopen = 0;
     }

     /* close vehicle section */
    if(vehicleopen == 1){
       $("#vehiclewrapper").slideUp("slow");
       vehicleopen = 0;
    }

    if(sceduleopen == 1){
        $("#scedulewrapper").slideUp("slow");
        sceduleopen = 0;
    }
}

confirmopened = 1;
}


/* put this function before change of current icon and after change of other 
icons to correct icons to appropriate states after using the edit button*/
function correctEditIcons(){
    if(vehicledone == 1){
        blankvehicleicon.style.display = "none";
        filledvehicleicon.style.display = "block";
    }
    if(servicedone == 1){
        filledserviceicon.style.display = "block";
        blankserviceactiveicon.style.display = "none";
        blankserviceicon.style.display = "none";
    }

if( sceduleopened == 1 && sceduledone == 0 && sceduleopen != 0){
blanksceduleicon.style.display = "block";
blanksceduleactiveicon.style.display = "none";
}

    if(sceduledone == 1){
        filledsceduleicon.style.display = "block";
        blanksceduleactiveicon.style.display = "none";
        blanksceduleactiveicon.style.display = "none";
    }

    

    blankconfirmicon.style.display = "block";
    blankconfirmacticveicon.style.display =" none";

}