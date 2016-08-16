<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$name = $_POST['txt_name'];
$company = $_POST['txt_company'];
$email = $_POST['txt_email'];
$phone = $_POST['txt_phone'];
$message = $_POST['txt_message'];

//connect to database
$dbserver = "aaa1c1k6w41dwz.cmmmzwqxiwl1.us-east-1.rds.amazonaws.com";
$username="jcreeden";$password="jcreedenroot";$database="jcreeden";
$conn = new mysqli($dbserver,$username,$password,$database);
$sql = "INSERT INTO contact (name,company,email,phone,message) VALUES ('" . $name . "','" . $company . "','" . $email . "','" . $phone . "','" . $message . "')";


$conn->query($sql);
/*
if ($conn->connect_error) {
	echo "Connection error: " . $conn->connect_error;
}
else{
	if ($conn->query($sql) === TRUE) {
	    echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
}
*/

$conn->close();



//send the email


$to = 'johncreeden@hotmail.com';
$subject = 'JCreeden Site Contact Form';
$from = 'email@jcreeden.com';
 
// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
// Create email headers
$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
 
// Compose a simple HTML email message
$email_message = '<html><body>';
$email_message .= '<h1 style="color:#f40;">Contact Form: </h1>';
$email_message .= '<p style="color:#080;font:18px Arial">';
$email_message .= '<b>NAME: </b>' . $name . '<br>';
$email_message .= '<b>COMPANY: </b>' . $company . '<br>';
$email_message .= '<b>PHONE: </b>' . $phone . '<br>';
$email_message .= '<b>EMAIL: </b>' . $email . '<br>';
$email_message .= '<b>MESSAGE: </b>' . $message . '<br>';
$email_message .= '</p>';
$email_message .= '</body></html>';
 
// Sending email
if(mail($to, $subject, $email_message, $headers)){
    echo "Thanks! Your message has been sent.<br>I'll be in touch shortly.";
} else{
    echo "I'm sorry there was an error sending your message.<br>Please try again or send me an email at <a href='mailto:johncreeden@hotmail.com'>johncreeden@hotmail.com</a>.";
}

?>