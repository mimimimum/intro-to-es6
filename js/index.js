function letter(x){
	document.getElementById("type").innerHTML = document.getElementById("type").innerHTML + x;
}

function del(){
	var b = document.getElementById("type").innerHTML;
	var a = document.getElementById("type").innerHTML.length;
	document.getElementById("type").innerHTML = b.substr(0,a-1);
}

function empty(){
	document.getElementById("type").innerHTML = ' ';
}

function space(){
	document.getElementById("type").innerHTML = document.getElementById('type').innerHTML + ' ';
}