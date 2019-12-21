<?php
if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
	$txt="";
	foreach ( $_POST as $key => $value ) { 
		$txt .= "<b>".strip_tags($key)."</b>: ".strip_tags($value)."%0A";
            
	} 
$phone = $_POST['user_phone'];
$token = "1007845349:AAHk9psxFSVjPAwVzfom1BaJDtor-9uQbo4";
$chat_id = "-347377817";
$arr = array(

);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 if ($sendToTelegram) {
     
} 
else {
?>

<?php
}
}