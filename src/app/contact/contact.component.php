<?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$phone=$_POST['number'];
		$msg=$_POST['msg'];

		$to='skyappzsoftwarepvt@gmail.com'; // Receiver Email ID, Replace with your email ID
	
		$subject='Skyappz Enquiry Form';
		$message = $name . " is applying for Enquiry." . "\n" ."Name :". $_POST['name']. "\n" ."Email :".$_POST['email']. "\n" ."Contact number :". $_POST['number']. "\n" ."Message :". $_POST['msg'];
							$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
		}
		else{
			echo "Something went wrong!";
		}
	}
?>



