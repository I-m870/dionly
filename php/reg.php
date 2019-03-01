<?php
/*	include "public.php";
	$phone = $_POST["phonenum"];
	$pwd = $_POST["pwd1"];
	$sql = "SELECT * FROM `user` WHERE phonenum = '$phone' ";
	$row = mysql_query($sql);
//			echo "<script>alert('$row');</script>";
	$arr = mysql_fetch_array($row);
//			echo "<script>alert('$arr');</script>";
	if( $arr){
		echo "<script>alert('此手机号已注册');location='../reg.html'</script>";
	}else{
//		$sqll = "INSERT INTO `user`(`phonenum`, `pwd`) VALUES (['$phone'],['$pwd'])";
		$sqll = "insert into user (phonenum,pwd)value('$phone','$pwd')";
		$roww = mysql_query($sqll);
		$arrr = mysql_fetch_array($roww);
			echo "<script>alert('$arrr');</script>";
		if($roww){
			echo "<script>alert('$phone');</script>";
			echo "<script>alert('注册成功');location='../login.html';</script>";
		}else{
			echo "<script>alert('失败');location='../reg.html'</script>";
		}
	}
*/
	include "public.php";
	$phone = $_POST["phonenum"];
	$pwd = $_POST["pwd1"];
			$sql = "INSERT INTO user ".
        "(phonenum,pwd) ".
        "VALUES ".
        "('$phone','$pwd')";
		$row=mysql_query($sql);
		if( $row ){
			echo "<script>alert('注册成功');location='../login.html';</script>";
		}else{
			echo "<script>alert('失败');location='../reg.html'</script>";
		}
?>