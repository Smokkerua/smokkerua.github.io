<?php

	if ( $_SERVER['REQUEST_METHOD'] !== 'POST' ) {
		exit;
	}

	$project_name = "«Dress»";
	$admin_email  = "kynpan3@gmail.com";
	
	$form_subject = "Заявка с лендинга";

	$c = true;

	function clean($value = "") {
		$value = trim($value);
		$value = stripslashes($value);
		$value = strip_tags($value);
		$value = htmlspecialchars($value);
		
		return $value;
	}


	$message = "<table style='width: 100%;'>$message</table>";

	$message .= '<b>Заявка пришла со страницы:</b> ' . $_SERVER["HTTP_REFERER"] .'<br>';

	function adopt($text) {
		return '=?UTF-8?B?'.base64_encode($text).'?=';
	}

	$headers = "MIME-Version: 1.0" . PHP_EOL .
	"Content-Type: text/html; charset=utf-8" . PHP_EOL .
	'From: '.adopt($project_name).' <'.$sender_email.'>' . PHP_EOL .
	'Reply-To: '.$admin_email.'' . PHP_EOL;

	mail($admin_email, adopt($form_subject), $message, $headers );
	echo '<meta http-equiv="refresh" content="0; url=thanks.html" />';
?>