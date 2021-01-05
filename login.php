<?php

if(isset($_REQUEST['user']) && isset($_REQUEST['password'])){
	if(($_REQUEST['user'] == "rraphael") && ($_REQUEST['password'] == "12345")){
		$arr = array("val"  => 1,"message" => "User Found");
		echo json_encode($arr);
	}
	else {
		$arr = array("val"  => 0,"message" => "User Not Found");
		echo json_encode($arr);
	}
}
else {
		$arr = array("val"  => -1,"message" => "Invalid Request");
		echo json_encode($arr);
}