var flag = true;
$(".phone1").blur(function() {
	var $phone = $(".phone1").val();
	var reg = /^1[3578]\d{9}$/;
	if(reg.test($phone)) {
		flag = true;
		$(".phone1+span").html(" ");
	} else {
		$(".phone1+span").html("请输入正确的手机号码");
		flag = false;
	}
})
$("#pwd1").blur(function() {
	var $pwd1 = $("#pwd1").val();
	var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
	if(reg.test($pwd1)) {
		flag = true;
		$("#pwd1+span").html(" ");
	} else {
		$("#pwd1+span").html("设置密码为6-20位必须包含字母和数字");
		flag = false;
	}
})
$("#pwd2").blur(function() {
	var $pwd1 = $("#pwd1").val();
	var $pwd2 = $("#pwd2").val();
	if($pwd1 == $pwd2) {
		flag = true;
		$("#pwd2+span").html(" ");
	} else {
		$("#pwd2+span").html("确认密码与设置密码不一致");
		flag = false;
	}
})
$(".regbtn").click(function() {
	if(flag == false) {
		return false;
		location = "../register.html";
	}
})