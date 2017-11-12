<?php
	$file = "counterlog.txt";
	$json = json_decode(file_get_contents($file), true);
	$json['count'] = $json['count'] + 1;
	file_put_contents($file, json_encode($json));
	echo 'success';
?>