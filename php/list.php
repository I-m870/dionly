<?php
  include "public.php";
   $sql = "SELECT * FROM  `item` ";
   $res = mysql_query($sql);
// $str = '';
	 $brr = array();//定义数组接收数据
   while( $arr = mysql_fetch_array($res)){
   		$brr[] = $arr; //
// 	   echo $arr['src'];
// 	   echo $arr['new'];
// 	   echo $arr['cname'];
// 	   echo $arr['cinter'];
// 	   echo $arr['cny'];
// 	   echo $arr['usd'];
// 	   echo $arr['cheap'];
   }
   echo json_encode($brr);//转成json返回
?>
