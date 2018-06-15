//make sure they're logged in!
function areYouLoggedIn(){
	$.post("php/login.php", {email:"reject",pass:"reject"}, function(result){
		if(result!=1){window.location.href="login.html";}
	});
}

//on startup:
areYouLoggedIn();
showReqRecording();





function navSel(idStr){
	var navBtns = document.getElementsByClassName('myDashNavBtnClass');
	for(var i=0;i<navBtns.length;i++){
		navBtns[i].style.border="1px solid";
	}
	document.getElementById(idStr).style.border="2px solid";
}



//----------request a recording-------------------
function showReqRecording(){
	navSel("reqRecording");
	var userEmail = "greg@greg.com";
	var userName = "grego";
	
	var str = ""+
	"<div>Article URL*</div>"+
	"<input id='reqArticleURL' placeholder='paste link here'></input>"+
	"<div style='margin-top:25px;'>Your name*</div>"+
	"<input id='reqArticleEmail' placeholder='enter your name' "+
		"class='myDashCommentsClass' value='"+userName+"'></input>"+
	"<div style='margin-top:25px;'>Your email*</div>"+
	"<input id='reqArticleEmail' placeholder='enter your email address' "+
		"class='myDashCommentsClass' value='"+userEmail+"'></input>"+
	"<div style='margin-top:25px;'>Comments</div>"+
	"<input id='reqArticleComments' placeholder='comments for request (optional)' class='myDashCommentsClass'></input>"+
	"<br>"+
	"<div id='reqArticleBtn' class='myDashBigBtnClass btnHover' onclick='reqArticle()'>Request</div>";

	document.getElementById('myDashContent').innerHTML=str;
	
}

function reqArticle(){
	if(!checkArticleLink()){btnErrorMessage('invalid link', 'reqArticleBtn'); return;}
}

function checkArticleLink(){
	return true;
}





//----------make or upload a recording-------------------
function showMakeRecording(){
	navSel("makeRecording");
	document.getElementById('myDashContent').innerHTML="";
}



//-------------show a list of your requested and available recordings-----------------
function showMyRecordings(){
	navSel("myRecordings");
	document.getElementById('myDashContent').innerHTML="";
}

























