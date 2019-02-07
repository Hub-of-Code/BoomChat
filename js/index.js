var d = 0;
var p = 0;
function _(elem){
	return document.getElementById(elem);
}
function drop(){
  if (d == 0){
  	var x = document.getElementById("options");
  	x.style.display ="grid";
  	d = 1;
  }
  else{
  	var x = document.getElementById("options");
  	x.style.display="none";
  	d = 0;
  }
}
function pst(){
  if (p == 0){
  	var x = document.getElementById("postnow");
  	x.style.visibility ="visible";
  	p = 1;
  }
  else{
  	var x = document.getElementById("postnow");
  	x.style.visibility="hidden";
  	p = 0;
  }
}
function cl(){
   _("postnow").style.visibility = "hidden";
   _("postbox").value="";
}
