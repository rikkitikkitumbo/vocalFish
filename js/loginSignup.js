/*todo
	validation
	forgotten password stuff
*/

function login(){
	var email = document.getElementById('email').value;
	var pass=  document.getElementById('password').value;
	if(!validateLogin(email,pass)){errorMessage('loginBtn');}
	
	$.post('php/login.php', {email:email,pass:pass}, function(result){
//		console.log(result);
		if(result==1){window.location.href="mydashboard.html";}
		else{loginErrorMessage('invalid email/password')}
	});
	
}


function signup(){
	var el=document.getElementById('email');
	
}


function loginErrorMessage(str){
	var el = document.getElementById("loginBtn");
	var orig = el.innerHTML;
	var origColor = el.style.color;
	el.innerHTML = str;
	el.style.color="red";
	setTimeout(function(){el.innerHTML=orig; el.style.color=origColor;},1000);
}


//todo!!!!
function validateSignup(){
	return true;
}
function validateLogin(email,pass){
	return true;
}










