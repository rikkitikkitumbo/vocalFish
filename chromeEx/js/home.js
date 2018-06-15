var glob = {
	home: "http://localhost/vocalFish/"
}



//-------homeDiv-------------

//no recordings for this article and they aren't logged in/signed up
function homeDiv_noRecsNoLogged(){
return "" +
	"<div class='greyText'>There are no audio recordings for this article</div>"+
  "<br>"+
  "<div id='loginDiv'>"+
  	"<span id='loginBtn' class='link'>Login</span> or "+
  	"<span id='signupBtn' class='link'>Sign up</span>"+
  	 " to have have a recording of this article sent to you."+
  "</div>";
}

//there are recordings
function homeDiv_recsAvail(){
	return "There are recordings avail!";
}

//there are no recordings, but they're logged in 
function homeDiv_noRecsYesLogged(){
	return ""+
	"<div class='greyText'>There are no audio recordings for this article</div>"+
  "<br>"+
  "<div id='sendMeAudioBtn' class='sendMeAudioBtnClass'>"+
  	"Send me an <b>audio recording</b> of the article on this page"+
  "</div>";
}
document.getElementById('homeDiv').innerHTML = homeDiv_noRecsNoLogged();



//set up our links
document.getElementById('loginBtn').onclick=goToLoginPage;
document.getElementById('signupBtn').onclick=goToSignupPage;

function goToLoginPage(){
	chrome.tabs.executeScript({code: "window.location.href='"+glob.home+"login.html'"});
	window.close();
}
function goToSignupPage(){
	chrome.tabs.executeScript({code: "window.location.href='"+glob.home+"signup.html'"});
	window.close();
}


//We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
chrome.tabs.executeScript({file: "/js/scrapeArticle.js" }, function(response){
	response = (JSON.parse(response));

	document.getElementById('url').innerHTML='url is: '+ response.url;
});

