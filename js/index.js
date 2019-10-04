//INDEX PAGE//

// for battery capacity

var batterycapacity = document.getElementById("batterycapacity");

var batterycapacityref =  firebase.database().ref().child("batteryvoltage");

batterycapacityref.on('value',function(datasnapshot){
	batterycapacity.innerText = datasnapshot.val()+'v';
});

// for voltage capacity

var solarcapacity = document.getElementById("solarcapacity");

var solarcapacityref =  firebase.database().ref().child("solarvoltage");

solarcapacityref.on('value',function(datasnapshot){
	solarcapacity.innerText = datasnapshot.val()+'v';
});

//water storage level


var watercontainer = document.getElementById("watercontainer");

var watercontainerref =  firebase.database().ref().child("waterlevel");

watercontainerref.on('value',function(datasnapshot){
	watercontainer.innerText = datasnapshot.val()+'% of 100%';
});


//food storage level

var foodcontainer = document.getElementById("foodcontainer");

var foodcontainerref =  firebase.database().ref().child("feedlevel");

foodcontainerref.on('value',function(datasnapshot){
	foodcontainer.innerText = datasnapshot.val()+'% of 100%';
});


//food status level

var foodstatus = document.getElementById("foodstatus");
var foodstatusref =  firebase.database().ref().child("feedstatus");
foodstatusref.on('value',function(datasnapshot)

{
	foodstatus.innerText = datasnapshot.val();
/*
	if('value' == 1){
		  document.getElementById("foodstatus").innerHTML = "OK";
	}
	else if('value' == 2) {
	  document.getElementById("foodstatus").innerHTML = "FULL";
	}
	else{
	  document.getElementById("foodstatus").innerHTML = "NOT OK";
	}
*/

});


//water status level

var waterrstatus = document.getElementById("waterrstatus");

var waterstatusref =  firebase.database().ref().child("waterstatus");

waterstatusref.on('value',function(datasnapshot){
	waterrstatus.innerText = datasnapshot.val();
});

//light button activate
var lighton = document.getElementById("lighton");

function onDisplay() {
	var firebaseref = firebase.database().ref();
	firebaseref.child("ledcontrol").set("1");

  document.getElementById("lightstatus").innerHTML = "Light Activated";
}


//light button deactivate
var lightoff = document.getElementById("lightoff");

function offDisplay() {
	var firebaseref2 = firebase.database().ref();
	firebaseref2.child("ledcontrol").set("0");

  document.getElementById("lightstatus").innerHTML = "Light Deactivated";


}

//force feed
var forcefeed = document.getElementById("forcefeed");

function forcefeedDisplay() {
	var firebaseref3 = firebase.database().ref();
	firebaseref3.child("feedcontrol").set("1");
}
//force watering
var forcewater = document.getElementById("forcewater");

function forcewaterDisplay() {
	var firebaseref4 = firebase.database().ref();
	firebaseref4.child("watercontrol").set("1");
}
//refresh
var forcerefresh = document.getElementById("forcerefresh");

function forcerefreshDisplay() {
	var firebaseref6 = firebase.database().ref();
	firebaseref6.child("watercontrol").set("0");

var firebaseref7 = firebase.database().ref();
	firebaseref7.child("feedcontrol").set("0");


}

//INVENTORY PAGE//

//Chicken Breed//
var breedchicken = document.getElementById("breedchicken");

var breedchickenref =  firebase.database().ref().child("chickenbreed");

breedchickenref.on('value',function(datasnapshot){
	breedchicken.innerText = datasnapshot.val();
});

//age of chicken//
var agechicken = document.getElementById("agechicken");

var agechickenref =  firebase.database().ref().child("chickenage");

agechickenref.on('value',function(datasnapshot){
	agechicken.innerText = datasnapshot.val()+' Weeks';
});

//number of chicken//
var numberchicken = document.getElementById("numberchicken");

var numberchickenref =  firebase.database().ref().child("chickeninventory");

numberchickenref.on('value',function(datasnapshot){
	numberchicken.innerText = datasnapshot.val()+' Chickens';
}

);

//insert age of chickens//
var insertage = document.getElementById("insertage");

var addage = document.getElementById("addage");

function submitAge(){

var firebaseRef6 = firebase.database().ref();

var inputage = insertage.value;

firebaseRef6.child("chickenage").set(inputage);

}
//insert number of chickens//
var insertcount = document.getElementById("insertcount");

var addcount = document.getElementById("addcount");

function submitCount(){

var firebaseRef7 = firebase.database().ref();

var inputcount = insertcount.value;

firebaseRef7.child("chickeninventory").set(inputcount);

}

//INTERVAL PAGE//

//Display Interval Time
var intervalstatus = document.getElementById("intervalstatus");

var intervalstatusref =  firebase.database().ref().child("feedinterval");

intervalstatusref.on('value',function(datasnapshot){
	intervalstatus.innerText = datasnapshot.val()+' Minute/s';
});


//Add Interval Time
var insertinterval = document.getElementById("insertinterval");

var addinterval = document.getElementById("addinterval");

function submitClick(){

var firebaseRef5 = firebase.database().ref();

var inputinterval = insertinterval.value;

firebaseRef5.child("feedinterval").set(inputinterval);

}

