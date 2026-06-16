<?php

//error_reporting(E_ALL);
error_reporting(E_STRICT);


date_default_timezone_set('Asia/Kolkata');

require_once('../class.phpmailer.php');
//include("class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded

$mail             = new PHPMailer();

$body             = 'Mail From Ayuluxir';
// $body             = preg_replace('/[\]/','',$body);


$hours = date("H");
$min = date("i");

$defaulttimestamp=time();
$indiatimestamp  = $defaulttimestamp;
  


$FromName=$_POST["name"];
$FromEmail=$_POST["email"];
$FromPhone=$_POST["phone"];
$FromMessage=$_POST["message"];

 
$address = "sujithcwd@gmai.com";


$message = "
<table style='width: 100%; font-family: helvetica' cellpadding='20' cellspacing='1' border='0'>
      <thead style= 'background: #f8b10a !important;
     text-align:left;'>
		<tr style= 'color: #fff; font-family: helvetica;'>
		  <th >Valartech</th><th>Contact Page</th>              
		</tr>
      </thead>
		  
	  <tbody>
		<tr style='color: #222;'>
				  <td>Name</td><td>$FromName</td>
				</tr>
			    <tr>
				  <td>Phone</td><td>$FromEmail</td>
				</tr>
		          <tr>
				  <td>Phone</td><td>$FromPhone</td>
				</tr>
            
				<tr>
				  <td>Message</td><td>$FromMessage</td>
				</tr>
       
			  </tbody>
	</table>
";



$to = 'sujithcwd@gmail.com';

$subject = 'Mail From Ayuluxir';

$headers  = "From: " . "sujithcwd@gmail.com" . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

if($FromEmail && $FromName){
mail($to, $subject, $message, $headers);
    echo "Message sent!";
}
else{
  echo "please fill the details";
}


?>
this my smt code 


I can see a few issues in your code that are causing the mail error.

Problems in your code