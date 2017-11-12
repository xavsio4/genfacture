<?php
	$file = "counterlog.txt";
	$json = json_decode(file_get_contents($file), true);
	header('Content-Type: application/json');
	echo json_encode($json);
?>