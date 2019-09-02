function xres() {
  //creating popup menu after clicking x asking if your sure you want to quit and start over
  let body = document.getElementsByTagName("body")[0];
  var xpopup = document.createElement("DIV");
  xpopup.id = "modalcontainer";
  var message = document.createElement("DIV");
  message.id = "message";
  var xmodal = document.createElement("IMG");
  xmodal.id = "xmodal";
  xmodal.src = "imgs/xsym.png";
  xmodal.setAttribute("onclick", "javascript: contbooking();");
  var exitxmodal = document.createElement("IMG");
  exitxmodal.id = "exitxmodal";
  exitxmodal.src = "imgs/exit.png";
  let text = document.createElement("P");
  text.innerHTML = "By exiting you will lose your reserved appointment time";
  text.style.textAlign = "left";
  text.style.marginLeft = "38px";
  let contbooking = document.createElement("BUTTON");
  contbooking.className = "greenbutton";
  contbooking.innerHTML = "continue booking";
  contbooking.setAttribute("onclick", "javascript: contbooking();");
  let exit = document.createElement("BUTTON");
  exit.className = "greenbuttonreverse";
  exit.innerHTML = "exit";
  exit.setAttribute("onclick", "javascript: resetpage();");
  //appending popup to main document, its positioned absolutely over content
  message.appendChild(xmodal);
  message.appendChild(exitxmodal);
  message.appendChild(text);
  message.appendChild(contbooking);
  message.appendChild(exit);
  xpopup.appendChild(message);
  body.insertBefore(xpopup, body.childNodes[0]);
  let firstx = document.getElementById("xreset");
  console.log(firstx);
  firstx.style.display = "none";
}

//unhides the origninal x after exiting popup
function showox() {
  let firstx = document.getElementById("xreset");
  firstx.style.display = "block";
}

function resetpage() {
  window.location.replace("index.html");
}

function contbooking() {
  var main = document.getElementById("modalcontainer");
  main.outerHTML = "";
  showox();
}

/* closes select time modal if time has been picked */

function contbooking2() {
  if (newtimeselected) {
    var main = document.getElementById("modalcontainer");
    main.outerHTML = "";
    showox();
    $("#monthhide").slideUp("slow");
    //document.getElementById("monthhide").style.display = "none";
    document.getElementById("dropofftime").style.display = "block";

    document.getElementById("dynamicdropofftime").innerHTML =
      month + " " + day + " " + localStorage.timename + " 2019";
    document.getElementById("toconfirm").style.display = "block";
  }
}

// creates vin elements
function vin() {
  let body = document.getElementsByTagName("body")[0];
  var xpopup = document.createElement("DIV");
  xpopup.id = "modalcontainer";
  var message = document.createElement("DIV");
  message.id = "message";
  var xmodal = document.createElement("IMG");
  xmodal.id = "xmodal";
  xmodal.src = "imgs/xsym.png";
  xmodal.setAttribute("onclick", "javascript: contbooking();");
  let vinmodaltext = document.createElement("P");
  vinmodaltext.id = "vinmodaltext";
  vinmodaltext.innerHTML = "VIN";

  // input element
  let valinput = document.createElement("INPUT");
  valinput.id = "valinput";
  valinput.type = "text";
  let validateb = document.createElement("button");
  validateb.id = "validate";
  validateb.innerHTML = "Validate";
  validateb.setAttribute("onclick", "javascript: valvin();");
  let vininfo = document.createElement("IMG");
  vininfo.id = "vininfo";
  vininfo.src = "imgs/vininfo.png";
  let firstx = document.getElementById("xreset");
  firstx.style.display = "none";
  //Appendinng created element into order flow, making popup appear

  message.appendChild(xmodal);
  message.appendChild(vinmodaltext);
  message.appendChild(valinput);
  message.appendChild(validateb);
  message.appendChild(vininfo);
  xpopup.appendChild(message);
  body.insertBefore(xpopup, body.childNodes[0]);
}

function valvin() {
  var vin = document.getElementById("valinput").value;
  console.log(vin.length);
  if (vin.length > 16) {
    localStorage.year = "2018";
    localStorage.make = "lamborghini";
    localStorage.model = "aventador";
    localStorage.body = " 2 Dr";
    localStorage.mileage = "under 10,000";
    //window.location.replace("service.html");
    document.getElementById("modalcontainer").style.display = "none";
    serviceopentrans();
  }
}

function servicedesc() {
  console.log($(this)[0].innerHTML);
}

// generate box with description for each service on click
$(document).on("click", "span.sdesc", function() {
  var check = $(this).prev("object")[0];
  var desc = $(this)[0].innerHTML;
  let body = document.getElementsByTagName("body")[0];
  var xpopup = document.createElement("DIV");
  xpopup.id = "modalcontainer";
  var message = document.createElement("DIV");
  message.id = "message";
  var xmodal = document.createElement("IMG");
  xmodal.id = "xmodal";
  xmodal.src = "imgs/xsym.png";
  xmodal.setAttribute("onclick", "javascript: contbooking();");
  // main header for modal
  var servicemodalheader = document.createElement("P");
  servicemodalheader.id = "servicemodalheader";
  //dynamically set from spans text
  servicemodalheader.innerHTML = desc;
  // sub headers for service modals
  sdtext1 = document.createElement("P");
  sdtext1.className = "servicedesctext";
  sdtext1.innerHTML = "Why?";

  sdtext2 = document.createElement("P");
  sdtext2.className = "servicedesctext";
  sdtext2.innerHTML = "When?";

  sdtext3 = document.createElement("P");
  sdtext3.className = "servicedesctext";
  sdtext3.innerHTML = "Whats Included?";

  //paragraph content goes below subheaders
  sditext1 = document.createElement("P");
  sditext1.className = "serviceinnerdesctext";
  sditext1.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in lacus tristique, eleifend massa vel, fringilla tortor. Donec volutpat euismod diam in porttitor.";

  sditext2 = document.createElement("P");
  sditext2.className = "serviceinnerdesctext";
  sditext2.innerHTML =
    "Aliquam efficitur lorem velit, nec tincidunt quam molestie hendrerit. Aliquam metus odio, tincidunt eu malesuada quis, euismod at ante.";

  sditext3 = document.createElement("P");
  sditext3.className = "serviceinnerdesctext";
  sditext3.innerHTML =
    "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Suspendisse in tincidunt enim, nec dapibus erat.";

  var sservice = document.createElement("BUTTON");
  sservice.className = "greenbutton";
  sservice.innerHTML = "SELECT SERVICE";
  //sservice.setAttribute( "onclick", "javascript: setservice('+check+');" );
  sservice.onclick = function() {
    setservice(check);
  };
  var cancel = document.createElement("BUTTON");
  cancel.className = "greenbuttonreverse";
  cancel.innerHTML = "CANCEL";
  cancel.setAttribute("onclick", "javascript: contbooking();");

  // appending content to parent elements and document body
  message.appendChild(xmodal);
  message.appendChild(servicemodalheader);
  message.appendChild(sdtext1);
  message.appendChild(sditext1);
  message.appendChild(sdtext2);
  message.appendChild(sditext2);
  message.appendChild(sdtext3);
  message.appendChild(sditext3);
  message.appendChild(sservice);
  message.appendChild(cancel);
  xpopup.appendChild(message);
  body.insertBefore(xpopup, body.childNodes[0]);

  let firstx = document.getElementById("xreset");
  firstx.style.display = "none";
});

function setservice(check) {
  console.log("entered set service");
  console.log(check);
  check.setAttribute("class", "checked");

  contbooking();
  assignServices();
}

function changelocation(location, address) {
  console.log(location);
  localStorage.location = location;
  console.log(address);
  document.getElementById("modalcontainer").style.display = "none";
}

// creates scedulepopup with first sequence of times
function scedulepopup() {
  // sets a time slected to 0, stop select time from closing window until time is picked
  newtimeselected = 0;
  let body = document.getElementsByTagName("body")[0];
  var xpopup = document.createElement("DIV");
  xpopup.id = "modalcontainer";
  var message = document.createElement("DIV");
  message.id = "message2";
  var xmodal = document.createElement("IMG");
  xmodal.id = "xmodal";
  xmodal.src = "imgs/xsym.png";
  xmodal.setAttribute("onclick", "javascript: contbooking();");

  let pheader = document.createElement("P");
  pheader.innerHTML = "Scedule a dropoff time for " + month + " " + day + ":";
  pheader.className = "boldtext pheader";
  let ptimeslotsava = document.createElement("p");
  ptimeslotsava.innerHTML = "Time slots available:";
  ptimeslotsava.className = "tinytext tmodalindent";

  let timeslottimes = document.createElement("p");
  timeslottimes.innerHTML = "8:00 AM  - 9:00 PM";
  timeslottimes.className = "tinytext boldtext block tmodalindent bottomindent";

  // creating times
  let time1 = document.createElement("BUTTON");
  time1.className = "dtime";
  time1.innerHTML = "9:00 AM";
  time1.name = "9:00 AM";
  let time2 = document.createElement("BUTTON");
  time2.className = "dtime";
  time2.innerHTML = "10:00 AM";
  time2.name = "10:00 AM";
  let time3 = document.createElement("BUTTON");
  time3.className = "dtime";
  time3.innerHTML = "11:00 AM";
  time3.name = "11:00 AM";
  let time4 = document.createElement("BUTTON");
  time4.className = "dtime";
  time4.innerHTML = "12:00 PM";
  time4.name = "12:00 PM";
  let time5 = document.createElement("BUTTON");
  time5.className = "dtime";
  time5.innerHTML = "1:00 PM";
  time5.name = "1:00 PM";
  let time6 = document.createElement("BUTTON");
  time6.className = "dtime";
  time6.innerHTML = "4:00 PM";
  time6.name = "4:00 PM";
  let time7 = document.createElement("BUTTON");
  time7.className = "dtime";
  time7.innerHTML = "5:00 PM";
  time7.name = "5:00 PM";

  var stime = document.createElement("BUTTON");
  stime.className = "greenbutton";
  stime.innerHTML = "SELECT TIME";
  stime.setAttribute("onclick", "javascript: contbooking2();");

  var cancel = document.createElement("BUTTON");
  cancel.className = "greenbuttonreverse";
  cancel.innerHTML = "CANCEL";

  cancel.setAttribute("onclick", "javascript: contbooking();");

  let firstx = document.getElementById("xreset");
  firstx.style.display = "none";
  //Appending created element into order flow, making popup appear

  message.appendChild(xmodal);
  message.appendChild(pheader);
  message.appendChild(ptimeslotsava);
  message.appendChild(timeslottimes);
  message.appendChild(time1);
  message.appendChild(time2);
  message.appendChild(time3);
  message.appendChild(time4);
  message.appendChild(time5);
  message.appendChild(time6);
  message.appendChild(time7);
  message.appendChild(stime);
  message.appendChild(cancel);
  xpopup.appendChild(message);
  body.insertBefore(xpopup, body.childNodes[0]);
}

// creates scedulepopup with second array of times
function scedulepopup2() {
  // sets a time slected to 0, stop select time from closing window until time is picked
  newtimeselected = 0;
  let body = document.getElementsByTagName("body")[0];
  var xpopup = document.createElement("DIV");
  xpopup.id = "modalcontainer";
  var message = document.createElement("DIV");
  message.id = "message2";
  var xmodal = document.createElement("IMG");
  xmodal.id = "xmodal";
  xmodal.src = "imgs/xsym.png";
  xmodal.setAttribute("onclick", "javascript: contbooking();");

  let pheader = document.createElement("P");
  pheader.innerHTML = "Scedule a dropoff time for " + month + " " + day + ":";
  pheader.className = "boldtext pheader";
  let ptimeslotsava = document.createElement("p");
  ptimeslotsava.innerHTML = "Time slots available:";
  ptimeslotsava.className = "tinytext tmodalindent";

  let timeslottimes = document.createElement("p");
  timeslottimes.innerHTML = "8:00 AM  - 9:00 PM";
  timeslottimes.className = "tinytext boldtext block tmodalindent bottomindent";

  // creating times
  let time4 = document.createElement("BUTTON");
  time4.className = "dtime";
  time4.innerHTML = "12:00 PM";
  time4.name = "12:00 PM";
  let time5 = document.createElement("BUTTON");
  time5.className = "dtime";
  time5.innerHTML = "1:00 PM";
  time5.name = "1:00 PM";
  let time6 = document.createElement("BUTTON");
  time6.className = "dtime";
  time6.innerHTML = "2:00 PM";
  time6.name = "2:00 PM";
  let time7 = document.createElement("BUTTON");
  time7.className = "dtime";
  time7.innerHTML = "3:00 PM";
  time7.name = "3:00 PM";
  let time8 = document.createElement("BUTTON");
  time8.className = "dtime";
  time8.innerHTML = "4:00 PM";
  time8.name = "4:00 PM";
  let time9 = document.createElement("BUTTON");
  time9.className = "dtime";
  time9.innerHTML = "5:00 PM";
  time9.name = "5:00 PM";

  var stime = document.createElement("BUTTON");
  stime.className = "greenbutton";
  stime.innerHTML = "SELECT TIME";
  stime.setAttribute("onclick", "javascript: contbooking2();");

  var cancel = document.createElement("BUTTON");
  cancel.className = "greenbuttonreverse";
  cancel.innerHTML = "CANCEL";

  cancel.setAttribute("onclick", "javascript: contbooking();");

  let firstx = document.getElementById("xreset");
  firstx.style.display = "none";
  //Appendinng created element into order flow, making popup appear

  message.appendChild(xmodal);
  message.appendChild(pheader);
  message.appendChild(ptimeslotsava);
  message.appendChild(timeslottimes);
  message.appendChild(time4);
  message.appendChild(time5);
  message.appendChild(time6);
  message.appendChild(time7);
  message.appendChild(time8);
  message.appendChild(time9);
  message.appendChild(stime);
  message.appendChild(cancel);
  xpopup.appendChild(message);
  body.insertBefore(xpopup, body.childNodes[0]);
}

function scedulepopup3() {
  // sets a time slected to 0, stop select time from closing window until time is picked
  newtimeselected = 0;
  let body = document.getElementsByTagName("body")[0];
  var xpopup = document.createElement("DIV");
  xpopup.id = "modalcontainer";
  var message = document.createElement("DIV");
  message.id = "message2";
  var xmodal = document.createElement("IMG");
  xmodal.id = "xmodal";
  xmodal.src = "imgs/xsym.png";
  xmodal.setAttribute("onclick", "javascript: contbooking();");

  let pheader = document.createElement("P");
  pheader.innerHTML = "Scedule a dropoff time for " + month + " " + day + ":";
  pheader.className = "boldtext pheader";
  let ptimeslotsava = document.createElement("p");
  ptimeslotsava.innerHTML = "Time slots available:";
  ptimeslotsava.className = "tinytext tmodalindent";

  let timeslottimes = document.createElement("p");
  timeslottimes.innerHTML = "8:00 AM  - 9:00 PM";
  timeslottimes.className = "tinytext boldtext block tmodalindent bottomindent";

  // creating times
  let time4 = document.createElement("BUTTON");
  time4.className = "dtime";
  time4.innerHTML = "9:00 AM";
  time4.name = "9:00 AM";
  let time5 = document.createElement("BUTTON");
  time5.className = "dtime";
  time5.innerHTML = "11:00 AM";
  time5.name = "11:00 AM";
  let time6 = document.createElement("BUTTON");
  time6.className = "dtime";
  time6.innerHTML = "4:00 PM";
  time6.name = "4:00 PM";
  let time7 = document.createElement("BUTTON");
  time7.className = "dtime";
  time7.innerHTML = "7:00 PM";
  time7.name = "7:00 PM";
  let time8 = document.createElement("BUTTON");
  time8.className = "dtime";
  time8.innerHTML = "9:00 PM";
  time8.name = "9:00 PM";

  var stime = document.createElement("BUTTON");
  stime.className = "greenbutton";
  stime.innerHTML = "SELECT TIME";
  stime.setAttribute("onclick", "javascript: contbooking2();");

  var cancel = document.createElement("BUTTON");
  cancel.className = "greenbuttonreverse";
  cancel.innerHTML = "CANCEL";

  cancel.setAttribute("onclick", "javascript: contbooking();");

  let firstx = document.getElementById("xreset");
  firstx.style.display = "none";
  //Appendinng created element into order flow, making popup appear

  message.appendChild(xmodal);
  message.appendChild(pheader);
  message.appendChild(ptimeslotsava);
  message.appendChild(timeslottimes);
  message.appendChild(time4);
  message.appendChild(time5);
  message.appendChild(time6);
  message.appendChild(time7);
  message.appendChild(time8);
  message.appendChild(stime);
  message.appendChild(cancel);
  xpopup.appendChild(message);
  body.insertBefore(xpopup, body.childNodes[0]);
}

function commentmodal() {
  let body = document.getElementsByTagName("body")[0];
  var xpopup = document.createElement("DIV");
  xpopup.id = "modalcontainer";
  var message = document.createElement("DIV");
  message.id = "message2";
  var xmodal = document.createElement("IMG");
  xmodal.id = "xmodal";
  xmodal.src = "imgs/xsym.png";
  xmodal.setAttribute("onclick", "javascript: contbooking();");

  let pheader = document.createElement("P");
  pheader.innerHTML = "I don't know what needs to be done";
  pheader.className = "boldtext cmodalheader";

  let timeslottimes = document.createElement("p");
  timeslottimes.innerHTML =
    "No problem, we have you covered. Just come in and we can get you a personalized learning assesment.";
  timeslottimes.className = "csmalltext block tmodalindent bottomindent";

  let tbox = document.createElement("textarea");
  tbox.id = "commentbox3";
  tbox.placeholder =
    "Please include any additional information you would like us to know.";

  var stime = document.createElement("BUTTON");
  stime.className = "greenbutton nobotmar commentbuttonwidth";
  stime.innerHTML = "ADD NOTE";
  stime.setAttribute("onclick", "javascript: contbooking3();");

  var cancel = document.createElement("BUTTON");
  cancel.className = "greenbuttonreverse notopmar commentbuttonwidth";
  cancel.innerHTML = "CANCEL";

  cancel.setAttribute("onclick", "javascript: contbooking();");

  let firstx = document.getElementById("xreset");
  firstx.style.display = "none";
  //Appendinng created element into order flow, making popup appear

  message.appendChild(xmodal);
  message.appendChild(pheader);

  message.appendChild(timeslottimes);
  message.appendChild(tbox);
  message.appendChild(stime);
  message.appendChild(cancel);
  xpopup.appendChild(message);
  body.insertBefore(xpopup, body.childNodes[0]);
}

function contbooking3() {
  putServiceComment();
  var main = document.getElementById("modalcontainer");
  main.outerHTML = "";
  showox();
  //makes sure next button is displayed
  document.getElementById("nextconfirm").style.display = "block";
}

function putServiceComment() {
  let comment = document.getElementById("commentbox3").value;
  let mainbox = document.getElementById("commentbox2");
  mainbox.value += comment;
  document.getElementById("singlecheckidk").className = "checked";

  changetextareasize(mainbox);
}

$(document).on("click", "span.idkdesc", function() {
  commentmodal();
});

// for service dheckbox checks if popup needs to be displayed based on checked state
function checkpopup() {
  console.log("enter check popup");

  if ($("#singlecheckidk").hasClass("unchecked")) {
    console.log("enter check popup if");
    commentmodal();
  }
}
