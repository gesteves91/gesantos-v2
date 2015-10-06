<?php
require 'PHPMailer/PHPMailerAutoload.php';
 
$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';                       // Specify main and backup server
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'esteves.gean@gmail.com';     // SMTP username
$mail->Password = 'rock=1257851';                        // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted
$mail->Port = 587;                                    //Set the SMTP port number - 587 for authenticated TLS

$mail->From = $_POST['email'];
$mail->FromName = $_POST['name'];

$mail->addAddress('esteves.gean@gmail.com', 'Geanderson Esteves');     // Add a recipient                                 
 
$mail->Subject = $_POST['subject'];
$mail->Body    = $_POST['name'] . "(" . $_POST['email'] . ")<br/>" . $_POST['message'];
$mail->AltBody = $_POST['message'];
$mail->isHTML(true);                                  // Set email format to HTML

if(!$mail->send()) {
   echo 'Message could not be sent.';
   echo 'Mailer Error: ' . $mail->ErrorInfo;
   exit;
}

?>