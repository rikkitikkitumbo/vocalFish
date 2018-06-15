<?php

//check if a session already exists
include "sessionStuff.php";
if($_SESSION["loggedIn"]==true){echo 1; return;}
if($_POST["email"]=="reject"){echo 0; return;}



//connect to DB and find user
include "/var/DBcred.php";
$conn = new mysqli($HOST, $USERNAME, $PWORD, $DBNAME, $PORT);
$r = $conn->query("select email from users where email='".$_POST["email"].
	"' and password='".$_POST["pass"]."'");




$found=0;
while($g = $r->fetch_assoc()){
	$found++;
	$_SESSION["email"]=$g["email"];
}
if($found==1){$_SESSION["loggedIn"]=true;}
echo $found;



























