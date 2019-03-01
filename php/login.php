<?php
	include "public.php";
	//接口完成注册和登录
	$phone = $_POST["phonenum"];
	$pwd = $_POST["pwd1"];
	$sql = "select * from user where phonenum='$phone'";
	$res = mysql_query( $sql );
	$arr = mysql_fetch_array($res);
	if( $arr ){
		if( $pwd == $arr["pwd"] ){
			echo "<script>alert('成功');location='../reg.html'</script>";
		}else{
			echo "<script>alert('失败');location='../reg.html'</script>";
		}
	}else{
		echo "<script>alert('用户不存在');location='../reg.html'</script>";
	}
?>