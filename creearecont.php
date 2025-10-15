
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$nume = $_POST["last_name_box"];
$prenume = $_POST["first_name_box"];
$telefon = $_POST["phone_number_box"];
$email=$_POST["email_box"];
$parola=$_POST["password_box"];


$db = mysqli_connect("localhost","root","", "datecont");
if (!$db) {
 exit('Conectare esuata: ' . mysqli_connect_error ());
}
echo 'Conectare reusita';
$interogare = "INSERT INTO creearecont (nume, prenume, telefon,parola, gmail )
 VALUES ('$nume' , '$prenume' , '$telefon','$parola','$email' )";
mysqli_query($db,$interogare);
if (mysqli_errno($db))
exit('<br>Adaugare esuata: '.mysqli_errno($db)."<BR>");
echo "<br> $prenume $nume $telefon $email $parola they have been added with succes in the database.";
mysqli_close($db);
}
else{
	echo"Nu s-a trimis formularul";
	
}



?>