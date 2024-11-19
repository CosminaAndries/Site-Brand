<?php
$nume = $_GET["nume"];
$prenume = $_GET["prenume"];
$telefon = $_GET["telefon"];
$email=$_GET["email"];
$parola=$_GET["parola"];
if ($nume<2||$nume>15)
	echo ("Error");
else 
	echo("ok");
if ($prenume<3||$prenume>20)
	echo ("Error");
else 
	echo("ok");
if ($telefon<10||$telefon>15)
	echo ("Error");
else 
	echo("Ok");
if ($email<10||$email>60)
	echo ("Error");
else 
	echo("Ok");
if ($parola<8||$parola>60)
	echo ("Error");
else 
	echo("Ok");

$db = mysqli_connect("localhost", "Cosmina10", "C0smin@01", "datecont");
if (!$db) {
 exit('Conectare esuata: ' . mysqli_connect_error ());
}
echo 'Conectare reusita';
$interogare = "INSERT INTO creearecont (Nume, Prenume, Telefon,Email, Parola )
 VALUES ('$nume' , '$prenume' , '$telefon','$email','$parola' )";
mysqli_query($db,$interogare);
if (mysqli_errno($db))
exit('<br>Adaugare esuata: '.mysqli_errno($db)."<BR>");
echo "<br> $prenume $nume $telefon $email $parola au fost adaugate in datecont.";
mysqli_close($db);
?>