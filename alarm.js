<!DOCTYPE html>
<html>
<body onbeforeunload="return myFunction()">

<p>Close this window, press F5 or click on the link below to invoke the onbeforeunload event.</p>

<a href="file:///C:/xampp/proiect%20site/homepage.html">Click here to go to Homepage</a>
  
<script>
function myFunction() {
  return "test cosmina";
}
</script>

</body>
</html>