<?php
if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
	$txt="";
	foreach ( $_POST as $key => $value ) { 
		$txt .= "<b>".strip_tags($key)."</b>: ".strip_tags($value)."%0A";
	}
	 $sendToTelegram = fopen("https://api.telegram.org/bot495280394:AAF5dZgUmgJV7aoMOCNrB4tZsyb_h3mfSss/sendMessage?chat_id=-281150953&parse_mode=html&text={$txt}","r");
 if ($sendToTelegram) {
	?>
	 <script language="javascript" type="text/javascript">
        alert('ок');
    </script>
	<?php
} 
else {
?>
    <script language="javascript" type="text/javascript">
        alert('Ошибка');
    </script>
<?php
}
}