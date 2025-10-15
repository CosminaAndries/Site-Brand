
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$email=$_POST["email_box"];
$parola=$_POST["password_box"];

$db=mysqli_connect("localhost","root","", "datecont");
if(!$db){
exit("Error with the connection! " .mysqli_connect_error());	
}
else{
	$interogare="SELECT * FROM creearecont WHERE  gmail='$email' AND parola='$parola'";
	$rezultat_interogare=mysqli_query($db , $interogare );	
	if(mysqli_num_rows($rezultat_interogare)>0){
		
		echo "Authetification done well!";
		      mysqli_close($db);
	}
		else{
			echo "Authentification didn't work!";
 mysqli_close(
 $db);			
			}
}
}

?>