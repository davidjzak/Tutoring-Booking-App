var newyear = 0;
var newmake = 0;
var newmodel = 0;

/*Year dropdown logic start */

/* open year dropdown */
$(document).on('click',"#dropyear div.closed", function(){
    //  get checked checkbox elements
	var x = document.getElementById("yearul"); 
	$(this).removeClass("closed");
	 $(this).addClass("open");
	x.style.display = "block";

	switchArrow("#dropyear", 0);
      
    });
	
	/* close year dropdown */
	$(document).on('click',"#dropyear div.open", function(){
    //  get checked checkbox elements
	var x = document.getElementById("yearul"); 
	$(this).removeClass("open");
	 $(this).addClass("closed");
	x.style.display = "none";
		switchArrow("#dropyear", 1);
    });


$(document).on('click',"#yearul .innerd", function(){
    //  get checked checkbox elements
	console.log("inner click");
	let inneryear = document.getElementById("dynamicyear");
	
	inneryear.innerHTML = $(this).text();
    newyear = $(this).text();
	
	let dropyear = document.getElementById("dropyear");
   dropyear.getElementsByClassName("untoucheddrop")[0].style.display = "none";
	dropyear.getElementsByClassName("state2")[0].style.display = "block";
	dropyear.getElementsByClassName("state2")[1].style.display = "block";
	/* close dropdown */
	var x = document.getElementById("yearul"); 
	$(this).removeClass("open");
	 $(this).addClass("closed");
	x.style.display = "none";
		switchArrow("#dropyear", 1);
		checkYear();
    });

/* Year DropDown Logic End */


/* Make DropDown Logic Start */
$(document).on('click',"#make div.closed", function(){
    //  get checked checkbox elements
	var x = document.getElementById("makeul"); 
	$(this).removeClass("closed");
	 $(this).addClass("open");
	x.style.display = "block";

	switchArrow("#make", 0);
      
    });
	
	/* close make dropdown */
	$(document).on('click',"#make div.open", function(){
    //  get checked checkbox elements
	var x = document.getElementById("makeul"); 
	$(this).removeClass("open");
	 $(this).addClass("closed");
	x.style.display = "none";
		switchArrow("#make", 1);
    });


$(document).on('click',"#makeul .innerd", function(){
    //  get checked checkbox elements
	console.log("inner click");
	let innermake = document.getElementById("dynamicmake");
	
	innermake.innerHTML = $(this).text();
    newmake = $(this).text();
	
	let make = document.getElementById("make");
   make.getElementsByClassName("untoucheddrop")[0].style.display = "none";
	make.getElementsByClassName("state2")[0].style.display = "block";
	make.getElementsByClassName("state2")[1].style.display = "block";
	
	/* close dropdown */
	var x = document.getElementById("makeul"); 
	$(this).removeClass("open");
	 $(this).addClass("closed");
	x.style.display = "none";
		switchArrow("#make", 1);
		checkMake();
    });



/* Model Drop Down Logic */

$(document).on('click',"#model div.closed", function(){
    //  get checked checkbox elements
	var x = document.getElementById("modelul"); 
	$(this).removeClass("closed");
	 $(this).addClass("open");
	x.style.display = "block";

	switchArrow("#model", 0);
      
    });
	
	/* close year dropdown */
	$(document).on('click',"#model div.open", function(){
    //  get checked checkbox elements
	var x = document.getElementById("modelul"); 
	$(this).removeClass("open");
	 $(this).addClass("closed");
	x.style.display = "none";
		switchArrow("#model", 1);
    });


$(document).on('click',"#modelul .innerd", function(){
    //  get checked checkbox elements
	console.log("inner click");
	let innermodel = document.getElementById("dynamicmodel");
	
	innermodel.innerHTML = $(this).text();
    newmodel = $(this).text();
	
	let model = document.getElementById("model");
   model.getElementsByClassName("untoucheddrop")[0].style.display = "none";
	model.getElementsByClassName("state2")[0].style.display = "block";
	model.getElementsByClassName("state2")[1].style.display = "block";
	
	/* close dropdown */
	var x = document.getElementById("modelul"); 
	$(this).removeClass("open");
	 $(this).addClass("closed");
	x.style.display = "none";
		switchArrow("#model", 1);
		checkModel();
	});
	





/* Mileage Dropdown start */

/* Make DropDown Logic Start */
$(document).on('click',"#mileage div.closed", function(){
    //  get checked checkbox elements
	var x = document.getElementById("mileageul"); 
	$(this).removeClass("closed");
	 $(this).addClass("open");
	x.style.display = "block";

	switchArrow("#mileage", 0);
      
    });
	
	/* close make dropdown */
	$(document).on('click',"#mileage div.open", function(){
    //  get checked checkbox elements
	var x = document.getElementById("mileageul"); 
	$(this).removeClass("open");
	 $(this).addClass("closed");
	x.style.display = "none";
		switchArrow("#mileage", 1);
    });


$(document).on('click',"#mileageul .innerd", function(){
    //  get checked checkbox elements
	console.log("inner click");
	let innermileage = document.getElementById("dynamicmileage");
	
	innermileage.innerHTML = $(this).text();
    newmileage = $(this).text();
	
	let mileage = document.getElementById("mileage");
   mileage.getElementsByClassName("untoucheddrop")[0].style.display = "none";
	mileage.getElementsByClassName("state2")[0].style.display = "block";
	mileage.getElementsByClassName("state2")[1].style.display = "block";
	
	/* close dropdown */
	var x = document.getElementById("mileageul"); 
	$(this).removeClass("open");
	 $(this).addClass("closed");
	x.style.display = "none";
		switchArrow("#mileage", 1);
		checkMileage();
    });




















function switchArrow(idofdropdown, num){
console.log(idofdropdown);
    let arrow = $(idofdropdown).find(".arrow");
	console.log(arrow);
    if (num == 0){ // switches to dropdown menu open icon
    $(arrow[0]).attr("src","imgs/arrowclose.png");
        }
    else if(num == 1){ //switches to dropdown menu closed
        $(arrow[0]).attr("src","imgs/arrowopen.png");
   }
 }