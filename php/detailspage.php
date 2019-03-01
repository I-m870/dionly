<?php
  include "public.php";
  $id = $_GET["id"];
	$sql =  "SELECT * FROM  `item` where id = '$id'";
	$res = mysql_query($sql);
	$arr = mysql_fetch_array($res);
	$brr = array();
	if($arr){
		$brr[] = $arr;
	}
//echo $id;
 $crr = json_encode($brr);
 echo $crr;  
?>