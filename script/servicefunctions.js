var checkedcount = 0;




//counters for numbers checked in each category
var tirecounter = 0;
var repaircounter = 0;
var oilcounter = 0;
var brakecounter = 0;
var batterycounter = 0;

// holds the string of services selected
var services = "";

// sets dyanmic info for vehicle services selected
  function serviceLoad(){
    document.getElementById("vehicleDynamicInfo").innerHTML = localStorage.year + " " + localStorage.make + " " + 
    localStorage.model;

}

function serviceLoad1(){
    document.getElementById("vehicleDynamicInfo").innerHTML = localStorage.year + " " + localStorage.make + " " + 
    localStorage.model;

}

// check and uncheck checkboxes - assigning class updates checkbox appearance through classes background-img attribute
    $(document).on('click',"div.checked", function(){
        console.log($(this).hasClass("checked")); // has class must be used on jquery object
        this.className ="";
        this.className ="unchecked"
        console.log("registered");
        assignServices(); // calls assign services function to update number of services checked and to update service descripti
    });
// switch unchecked to checked on click and resets event handler using on attribute (this allows you to reuse checkbox)
    $(document).on('click',"div.unchecked", function(){
        this.className ="";
        this.className ="checked"
      

        assignServices(); // calls assign services function to update number of services checked and to update service description
        console.log("registered 2");
    });


function assignServices(){
    var string0 =  getSingleCheckBox();
    var string1 = getTireServices();
    var string2 = getRepairServices();
   
    var string3 = getOilServices();
    var string4 = getBrakeServices();
    var string5 = getBatteryServices();
    let checkcount = totalChecked();
    localStorage.services = string0 + string1 + string2 + string3 + string4 + string5;
    
    if(checkcount > 0){ // hide or show next button based on number of services selected
        document.getElementById("nextconfirm").style.display = "block";
    } else{
        document.getElementById("nextconfirm").style.display = "none";
    }
    }

    function getSingleCheckBox(){
        
        let services = "";
        var elements = $("#outsidebox").find(".checked");
        var numItems = elements.length;
       
        //gets service description from checked elements name description
		for(var i = 0; i < numItems; i++){
		if(i == 0){
		services = elements[i].dataset['forx']; + ", "
		} 
        }
        
        
        return services; // returns services string to assigned services function

    }

    function getTireServices(){
        console.log("enter tire get services");
        let services = "";
        var elements = $("#tiredrop").find(".checked");
        var numItems = elements.length;

        //gets service description from checked elements name description
		for(var i = 0; i < numItems; i++){
		if(i == 0){
        services = elements[i].dataset['forx'];
        console.log('text content is' + elements[i].dataset['forx']);
        //console.log('innerHTML is' +elements[i].data-forx);
		} else {
            console.log('text content is' + elements[i].dataset['forx']);
          //  console.log('innerHTML is' +elements[i].data-forx);
		services +=  ", " + elements[i].dataset['forx'];
		}
		//console.log(elements[i].name);
		}
            // sets number of items selected symbol on menu
        if (numItems != 0){
        document.getElementById("tirecheckcounter").innerHTML = "(" + numItems + ")";
        } else {  // removes number of items symbol
            document.getElementById("tirecheckcounter").innerHTML = "";
        }
        console.log(services);
        return services; // returns services string to assigned services function

    }




    function getOilServices(){
        console.log("enter oil");
        let services = "";
        var elements = $("#oilchangea").find(".checked");
        var numItems = elements.length;

        //gets service description from checked elements name description
		for(var i = 0; i < numItems; i++){
		if(i == 0){
		services = elements[i].dataset['forx'];
		} else {

		services +=  ", " + elements[i].dataset['forx'];
		}
		//console.log(elements[i].name);
		}
            // sets number of items selected symbol on menu
        if (numItems != 0){
        document.getElementById("oilcheckcounter").innerHTML = "(" + numItems + ")";
        } else {  // removes number of items symbol
            document.getElementById("oilcheckcounter").innerHTML = "";
        }
        console.log(services);
        return services; // returns services string to assigned services function

    }



    function  getRepairServices(){
        console.log("enter oil");
        let services = "";
        var elements = $("#repaira").find(".checked");
        var numItems = elements.length;

        //gets service description from checked elements name description
		for(var i = 0; i < numItems; i++){
		if(i == 0){
		services = elements[i].dataset['forx'];
		} else {

		services +=  ", " + elements[i].dataset['forx'];
		}
		//console.log(elements[i].name);
		}
            // sets number of items selected symbol on menu
        if (numItems != 0){
        document.getElementById("repaircheckcounter").innerHTML = "(" + numItems + ")";
        } else {  // removes number of items symbol
            document.getElementById("repaircheckcounter").innerHTML = "";
        }
        console.log(services);
        return services; // returns services string to assigned services function

    }


   
   function getBrakeServices(){
    console.log("brake");
    let services = "";
    var elements = $("#brakea").find(".checked");
    var numItems = elements.length;

    //gets service description from checked elements name description
    for(var i = 0; i < numItems; i++){
    if(i == 0){
    services = elements[i].dataset['forx'];
    } else {

    services +=  ", " + elements[i].dataset['forx'];
    }
    //console.log(elements[i].name);
    }
        // sets number of items selected symbol on menu
    if (numItems != 0){
    document.getElementById("brakecheckcounter").innerHTML = "(" + numItems + ")";
    } else {  // removes number of items symbol
        document.getElementById("brakecheckcounter").innerHTML = "";
    }
    console.log(services);
    return services; // returns services string to assigned services function


   }

   function getBatteryServices(){
    console.log("enter battery");
    let services = "";
    var elements = $("#batterya").find(".checked");
    var numItems = elements.length;

    //gets service description from checked elements name description
    for(var i = 0; i < numItems; i++){
    if(i == 0){
    services = elements[i].dataset['forx'];
    } else {

    services +=  ", " + elements[i].dataset['forx'];
    }
    //console.log(elements[i].name);
    }
        // sets number of items selected symbol on menu
    if (numItems != 0){
    document.getElementById("batterycheckcounter").innerHTML = "(" + numItems + ")";
    } else {  // removes number of items symbol
        document.getElementById("batterycheckcounter").innerHTML = "";
    }
    console.log(services);
    return services; // returns services string to assigned services function


   }

   function totalChecked(){
    var itemschecked = document.getElementsByClassName("checked");
    return itemschecked.length;
   }

   function getServiceComment(){

     let servicecomment =  document.getElementById("commentbox2").value;

         localStorage.servicecomment = servicecomment;
       
    }
    



    function changetextareasize(o) {
        o.style.height = "0px";
        o.style.height = (5+o.scrollHeight)+"px";
      };