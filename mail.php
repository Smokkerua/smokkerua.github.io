<?php
if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
	$txt="";
	foreach ( $_POST as $key => $value ) { 
		$txt .= "<b>".strip_tags($key)."</b>: ".strip_tags($value)."%0A";
	}
    
$phone = $_POST['user_phone'];
$token = "932362949:AAGLtExhw26y2KUj8dzlATC9gkQJOrG6LN4";
$chat_id = "-384350654";
$arr = array(

);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 if ($sendToTelegram) {
	?>
	 <script language="javascript" type="text/javascript">
        alert('ок');
        
    </script>
    
	<?php
     header('Location: thank-you.html');
} 
else {
?>
    <script language="javascript" type="text/javascript">
        alert('Ошибка');
    </script>
<?php
}
}
