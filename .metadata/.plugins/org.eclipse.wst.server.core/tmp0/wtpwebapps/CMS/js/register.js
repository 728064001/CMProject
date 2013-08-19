//载入-->

$(function(){
		//get register button
		$("#regbut").attr({"disabled":true});
		$("#formregister").attr("action","RegisterServlet");
		
			$("#regbut").click(function(){
//				alert(register());
				if(register()){
					$("#formregister").submit();
				}
			});
			
					
		//即时验证  -->
		// 用户名验证 -->
		$("#username").blur(function(){
			var usernameStr = $.trim($("#username").val());
			var usernamelen = usernameStr.length;
			var usernametipobj = $("#usernametip");
			var reg = /[\u4e00-\u9fa5],{0,}$/;
			if(usernamelen>1&&usernamelen<5){
				if(reg.test(usernameStr)){
					$("#username").css("border-color","#0000FF","border-width","2px","border-style","solid");
					usernametipobj.html("OK");
					usernametipobj.css("color","#0000FF");
				}else{
					$("#username").css("border-color","red","border-width","2px","border-style","solid");
					usernametipobj.html("请输入中文字符");
					usernametipobj.css("color","red");
				}
			}else{
				$("#username").css("border-color","red","border-width","2px","border-style","solid");
				usernametipobj.html("2-4个中文字符");
				usernametipobj.css("color","red");
			}
		});
		
		// 密码验证 -->
		$("#password").blur(function(){
			var passwordStr = $.trim($("#password").val());
			var passwordlen = passwordStr.length;
			var passwordtipobj = $("#passwordtip");
			if(passwordlen>=8&&passwordlen<=16){
				$("#password").css("border-color","#0000FF","border-width","2px","border-style","solid");
				passwordtipobj.html("OK");
				passwordtipobj.css("color","#0000FF");
			}else{
				$("#password").css("border-color","red","border-width","2px","border-style","solid");
				passwordtipobj.html("密码长度为8-16个字符");
				passwordtipobj.css("color","red");	
			}
		});
		
		// 重复密码验证 -->
		$("#repeatpassword").blur(function(){
			var passwordStr = $.trim($("#password").val());
			var passwordlen = passwordStr.length;
			var repeatpasswordStr = $.trim($("#repeatpassword").val());
			var repeatpasswordlen = repeatpasswordStr.length;
			var repeatpasswordtipobj = $("#repeatpasswordtip");
			if(repeatpasswordlen!=0&&repeatpasswordlen==passwordlen&&passwordStr==repeatpasswordStr){
				$("#repeatpassword").css("border-color","#0000FF","border-width","2px","border-style","solid");
				repeatpasswordtipobj.html("OK");
				repeatpasswordtipobj.css("color","#0000FF");	
			}else{
				$("#repeatpassword").css("border-color","red","border-width","2px","border-style","solid");
				repeatpasswordtipobj.html("与前一次输入的密码不匹配!");
				repeatpasswordtipobj.css("color","red");		
			}
		});
		
		//验证性别
		$(":radio").mouseout(function(){
			var getsexradio = $("input:radio[name='sex']");
			var sextipobj = $("#sextip");
		//	alert(getsexradio.is(":checked"));
			if(getsexradio.is(":checked")){
				sextipobj.html("OK");
				sextipobj.css("color","#0000FF");			
			}else{
				sextipobj.html("请选择性别！");
				sextipobj.css("color","red");		
			}
		});
			
		// 验证电话号码 -->
		$("#tel").blur(function(){
			var telStr = $.trim($("#tel").val());
			var tellen = telStr.length;
			var teltipobj = $("#teltip");
			var telReg=/^\d*$/;
			var querytelservletstr = "/CMS/registerQueryTelServlet?"+"&tel="+telStr;
			if(tellen>=7&&tellen<=12){
				if(telReg.test(telStr)){
					ajaxreturn(querytelservletstr,$("#tel"),teltipobj);
					$("#tel").css("border-color","#0000FF","border-width","2px","border-style","solid");
					teltipobj.html("OK");
					teltipobj.css("color","#0000FF");				
				}else{
					$("#tel").css("border-color","red","border-width","2px","border-style","solid");
					teltipobj.html("电话号码格式错误!(请输入合法的号码)!");
					teltipobj.css("color","red");			
				}
			}else{
				$("#tel").css("border-color","red","border-width","2px","border-style","solid");
				teltipobj.html("电话号码长度错误!(7-12位)!");
				teltipobj.css("color","red");				
			}
		});
			
		// 验证QQ -->
		$("#qq").blur(function(){
			var qqStr = $.trim($("#qq").val());
			var qqlen = qqStr.length;
			var qqtipobj = $("#qqtip");
			var qqReg=/^\d*$/;
			var queryqqservleturl = "/CMS/registerQueryQqServlet?"+"&qq="+qqStr;
			if(qqlen>=4&&qqlen<=15){
				if(qqReg.test(qqStr)){
					ajaxreturn(queryqqservleturl,$("#qq"),qqtipobj);
				}else{
					$("#qq").css("border-color","red","border-width","2px","border-style","solid");
					qqtipobj.html("QQ号码不正确!");
					qqtipobj.css("color","red");
				}
			}else{
				$("#qq").css("border-color","red","border-width","2px","border-style","solid");
				qqtipobj.html("QQ号码长度不正确!");
				qqtipobj.css("color","red");
			}
		});
			
		//农历生日 -->
		$("#brithday").blur(function(){
			var brithdayStr = $.trim($("#brithday").val());
			var brithdaylen = brithdayStr.length;
			var brithdaytipobj = $("#brithdaytip");
			var brithdayReg=/^\d*$/;
			if(brithdayReg.test(brithdayStr)){
				if(brithdaylen==4){
					if(((brithdayStr.substring(0,2)>0)&&(brithdayStr.substring(0,2)<=12))&&((brithdayStr.substring(2,4)>0)&&(brithdayStr.substring(2,4)<=29))){
						$("#brithday").css("border-color","#0000FF","border-width","2px","border-style","solid");
						brithdaytipobj.html("OK");
						brithdaytipobj.css("color","#0000FF");			
					}else{
						$("#brithday").css("border-color","red","border-width","2px","border-style","solid");
						brithdaytipobj.html("农历日期范围错误，如:0609");
						brithdaytipobj.css("color","red");	
					}
				}else{
					$("#brithday").css("border-color","red","border-width","2px","border-style","solid");
					brithdaytipobj.html("农历日期长度错误，如:0609");
					brithdaytipobj.css("color","red");				
				}
			}else{
				$("#brithday").css("border-color","red","border-width","2px","border-style","solid");
				brithdaytipobj.html("农历日期错误，如:0609");
				brithdaytipobj.css("color","red");			
			}
		});
		//年龄验证  -->
		$("#age").blur(function(){
			var ageStr = $.trim($("#age").val());
			var agetipobj = $("#agetip");
			var ageReg=/^\d*$/;
			if(ageReg.test(ageStr)&&ageStr!=""){
				if(((parseInt(ageStr))>=17)&&((parseInt(ageStr))<=100)){
					$("#age").css("border-color","#0000FF","border-width","2px","border-style","solid");
					agetipobj.html("OK");
					agetipobj.css("color","#0000FF");						
				}else{
					$("#age").css("border-color","red","border-width","2px","border-style","solid");
					agetipobj.html("年龄范围错误！");
					agetipobj.css("color","red");			
				}
			}else{
				$("#age").css("border-color","red","border-width","2px","border-style","solid");
				agetipobj.html("请输入正确的年龄(数字)！");
				agetipobj.css("color","red");	
			}
		});
		
			
			//身份证验证  -->
		$("#card").blur(function(){
			 var cardStr = $.trim($("#card").val());
			 var cardlen = cardStr.length;
			 var cardtipobj = $("#cardtip");
			 var cardReg=/^(\d{14}|\d{17})(\d|[xX])$/;
			 var querycardservletstr = "/CMS/registerQueryCardServlet?"+"&card="+cardStr;
			 if(cardReg.test(cardStr)){
			    ajaxreturn("/CMS/registerQueryCardServlet",$("#card"),cardtipobj);
				$("#card").css("border-color","#0000FF","border-width","2px","border-style","solid");
				cardtipobj.html("OK");
				cardtipobj.css("color","#0000FF");	 	
			 }else{
				$("#card").css("border-color","red","border-width","2px","border-style","solid");
				cardtipobj.html("身份证号码错误，请输入合法身份证!");
				cardtipobj.css("color","red");		 
			 }
		});
		
		
			//所属公司验证-->
		$("#comp").blur(function(){
			var compselectedval = $("#comp option:checked").text();
			var comtipobj = $("#comptip");
			if(compselectedval!="=请选择=" && compselectedval!=""){
				comtipobj.html("OK");
				comtipobj.css("color","#0000FF");	 			
			}else{
				comtipobj.html("请选择所属公司");
				comtipobj.css("color","red");		
			}
		});
		
			//部门验证-->
		$("#dep").blur(function(){
			var depselectedvalue = $("#dep option:selected").text();
			var deptipobj = $("#deptip");
			if(depselectedvalue!="=请选择=" && depselectedvalue!=""){
				deptipobj.html("OK");
				deptipobj.css("color","#0000FF");	 			
			}else{
				deptipobj.html("请选择部门");
				deptipobj.css("color","red");		
			}
		});
		
			
			//职位验证-->
		$("#post").blur(function(){
			var postselectedvalue = $("#post option:selected").text();
			var posttipobj = $("#posttip");
			if(postselectedvalue!="=请选择=" && postselectedvalue!=""){
				posttipobj.html("OK");
				posttipobj.css("color","#0000FF");	 			
			}else{
				posttipobj.html("请选择职位");
				posttipobj.css("color","red");		
			}
		});
		
		//即时验证----------------------------end--------------------------------------------------------------up-----end  -->

		// checkbox method
		$("#xieyi").change(function(){
			if($("#xieyi").is(":checked")==true){
				$("#regbut").attr({"disabled":false});
			}else{
				$("#regbut").attr({"disabled":true});
			}
		});	
});


	

//ajax return 
function ajaxreturn(urlstr,obj,objtip){
		$(function(){
			$.ajax({
				url: urlstr,
				type: "POST",
				async:false, 
				dataType:'json',
				success:function(json) {
					if(json.status=="yes"){
						//set style 
						obj.css("border-color","#0000FF","border-width","2px","border-style","solid");
						objtip.html("OK");
						objtip.css("color","#0000FF");
					}else{
						obj.css("border-color","red","border-width","2px","border-style","solid");
						objtip.html("该号码已经被注册!");
						objtip.css("color","red");
					}
				}
			});
		});
	
}
	

// 提交时验证 -->
	function register(){
	var r_username_flag = null;
	var r_password_flag = null;
	var r_repeatpassword_flag = null;
	var r_sex_flag = null;
	var r_tel_flag = null;
	var r_qq_flag = null;
	var r_brithday_flag = null;
	var r_age_flag = null;
	var r_card_flag = null;
	var r_company_flag = null;
	var r_dep_flag = null;
	var r_post_flag = null;
	//验证用户名  -->
	var usernameStr = $.trim($("#username").val());
	var usernamelen = usernameStr.length;
	var usernametipobj = $("#usernametip");
	var reg = /[\u4e00-\u9fa5],{0,}$/;
	if(usernamelen<=1||usernamelen>5){
		r_username_flag = false;
		$("#username").css("border-color","red","border-width","2px","border-style","solid");
		usernametipobj.html("2-4个中文字符");
		usernametipobj.css("color","red");
	}else{
		if(!reg.test(usernameStr)){
			r_username_flag = false;			
			$("#username").css("border-color","red","border-width","2px","border-style","solid");
			usernametipobj.html("请输入中文字符");
			usernametipobj.css("color","red");
		}else{
			r_username_flag = true;
			$("#username").css("border-color","#0000FF","border-width","2px","border-style","solid");
			usernametipobj.html("OK");
			usernametipobj.css("color","#0000FF");
		}
	}	
	// 密码验证 -->
	var passwordStr = $.trim($("#password").val());
	var passwordlen = passwordStr.length;
	var passwordtipobj = $("#passwordtip");
	if(passwordlen<8||passwordlen>16){
		r_password_flag = false;
		$("#password").css("border-color","red","border-width","2px","border-style","solid");
		passwordtipobj.html("密码长度为8-16个字符");
		passwordtipobj.css("color","red");
	}else{
		r_password_flag = true;
		$("#password").css("border-color","#0000FF","border-width","2px","border-style","solid");
		passwordtipobj.html("OK");
		passwordtipobj.css("color","#0000FF");
	}
	//重复密码验证  -->
	var passwordStr = $.trim($("#password").val());
	var passwordlen = passwordStr.length;
	var repeatpasswordStr = $.trim($("#repeatpassword").val());
	var repeatpasswordlen = repeatpasswordStr.length;
	var repeatpasswordtipobj = $("#repeatpasswordtip");
	if(repeatpasswordlen==0||repeatpasswordlen!=passwordlen||passwordStr!=repeatpasswordStr){
		r_repeatpassword_flag = false;
		$("#repeatpassword").css("border-color","red","border-width","2px","border-style","solid");
		repeatpasswordtipobj.html("与前一次输入的密码不匹配!");
		repeatpasswordtipobj.css("color","red");
	}else{
		r_repeatpassword_flag = true;
		$("#repeatpassword").css("border-color","#0000FF","border-width","2px","border-style","solid");
		repeatpasswordtipobj.html("OK");
		repeatpasswordtipobj.css("color","#0000FF");	
	}
	//验证性别
	var getsexradio = $("input:radio[name='sex']");
	var sextipobj = $("#sextip");
//	alert(getsexradio.is(":checked"));
	if(!getsexradio.is(":checked")){
		r_sex_flag = false;
		sextipobj.html("请选择性别！");
		sextipobj.css("color","red");
	}else{
		r_sex_flag = true;
		sextipobj.html("OK");
		sextipobj.css("color","#0000FF");	
	}
	//验证电话号码 
	var telStr = $.trim($("#tel").val());
	var tellen = telStr.length;
	var teltipobj = $("#teltip");
	var telReg=/^\d*$/;
	var squerytelservletstr = "/CMS/registerQueryTelServlet?"+"&tel="+telStr;
	if(tellen<7||tellen>12){
		r_tel_flag = false;
		$("#tel").css("border-color","red","border-width","2px","border-style","solid");
		teltipobj.html("电话号码长度错误!(7-12位)!");
		teltipobj.css("color","red");
	}else{
		if(!telReg.test(telStr)){
			r_tel_flag = false;
			$("#tel").css("border-color","red","border-width","2px","border-style","solid");
			teltipobj.html("电话号码格式错误!(请输入合法的号码)!");
			teltipobj.css("color","red");
		}else{
			$(function(){
				$.ajax({
					url: squerytelservletstr,
					type: "POST",
					async:false, 
					dataType:'json',
					success:function(teljson) {
						if(teljson.status=="yes"){
							r_tel_flag = true;
							$("#tel").css("border-color","#0000FF","border-width","2px","border-style","solid");
							teltipobj.html("OK");
							teltipobj.css("color","#0000FF");
						}else{
							r_tel_flag = false;
							$("#tel").css("border-color","red","border-width","2px","border-style","solid");
							teltipobj.html("该号码已经被注册!");
							teltipobj.css("color","red");
						}
					}
				});
			});
		}
	}	
		//验证QQ  -->
	var qqStr = $.trim($("#qq").val());
	var qqlen = qqStr.length;
	var qqtipobj = $("#qqtip");
	var qqReg=/^\d*$/;
	var squeryqqservleturl = "/CMS/registerQueryQqServlet?"+"&qq="+qqStr;
	if(qqlen<4||qqlen>15){
		r_qq_flag = false;
		$("#qq").css("border-color","red","border-width","2px","border-style","solid");
		qqtipobj.html("QQ号码长度不正确!");
		qqtipobj.css("color","red");
	}else{
		if(!qqReg.test(qqStr)){
			r_qq_flag = false;
			$("#qq").css("border-color","red","border-width","2px","border-style","solid");
			qqtipobj.html("QQ号码长度不正确!");
			qqtipobj.css("color","red");
		}else{
			$(function(){
				$.ajax({
					url: squeryqqservleturl,
					type: "POST",
					async:false, 
					dataType:'json',
					success:function(qqjson) {
						if(qqjson.status=="yes"){
							r_qq_flag = true;
							//set style 
							$("#qq").css("border-color","#0000FF","border-width","2px","border-style","solid");
							qqtipobj.html("OK");
							qqtipobj.css("color","#0000FF");
						}else{
							r_qq_flag = false;
							$("#qq").css("border-color","red","border-width","2px","border-style","solid");
							qqtipobj.html("该号码已经被注册!");
							qqtipobj.css("color","red");
						}
					}
				});
			});
		}
	}
	//生日日期验证  -->
	//农历生日 -->
	var brithdayStr = $.trim($("#brithday").val());
	var brithdaylen = brithdayStr.length;
	var brithdaytipobj = $("#brithdaytip");
	var brithdayReg=/^\d*$/;
	if(!brithdayReg.test(brithdayStr)){
		r_brithday_flag = false;
		$("#brithday").css("border-color","red","border-width","2px","border-style","solid");
		brithdaytipobj.html("农历日期错误，如:0609");
		brithdaytipobj.css("color","red");
	}else{
		if(brithdaylen!=4){
			r_brithday_flag = false;
			$("#brithday").css("border-color","red","border-width","2px","border-style","solid");
			brithdaytipobj.html("农历日期长度错误，如:0609");
			brithdaytipobj.css("color","red");
		}else{
			if(((brithdayStr.substring(0,2)<1)||(brithdayStr.substring(0,2)>12))||((brithdayStr.substring(2,4)<1)&&(brithdayStr.substring(2,4)>29))){
				r_brithday_flag = false;
				$("#brithday").css("border-color","red","border-width","2px","border-style","solid");
				brithdaytipobj.html("农历日期范围错误，如:0609");
				brithdaytipobj.css("color","red");
			}else{
				r_brithday_flag = true;
				$("#brithday").css("border-color","#0000FF","border-width","2px","border-style","solid");
				brithdaytipobj.html("OK");
				brithdaytipobj.css("color","#0000FF");	
			}
		}
	}
	//年龄验证  -->
	var ageStr = $.trim($("#age").val());
	var agetipobj = $("#agetip");
	var ageReg=/^\d*$/;
	if(!ageReg.test(ageStr)||ageStr==""){
		r_age_flag = false;
		$("#age").css("border-color","red","border-width","2px","border-style","solid");
		agetipobj.html("请输入正确的年龄(数字)！");
		agetipobj.css("color","red");
	}else{
		if(((parseInt(ageStr))<17)&&((parseInt(ageStr))>100)){
			r_age_flag = false;
			$("#age").css("border-color","red","border-width","2px","border-style","solid");
			agetipobj.html("年龄范围错误！");
			agetipobj.css("color","red");
		}else{
			r_age_flag = true;
			$("#age").css("border-color","#0000FF","border-width","2px","border-style","solid");
			agetipobj.html("OK");
			agetipobj.css("color","#0000FF");		
		}
	}	
	// 身份证验证 -->
	 var cardStr = $.trim($("#card").val());
	 var cardlen = cardStr.length;
	 var cardtipobj = $("#cardtip");
	 var cardReg=/^(\d{14}|\d{17})(\d|[xX])$/;
	  var squerycardservletstr = "/CMS/registerQueryCardServlet?"+"&card="+cardStr;
	 if(!cardReg.test(cardStr)){
	 	r_card_flag = false;
	 	$("#card").css("border-color","red","border-width","2px","border-style","solid");
		cardtipobj.html("身份证号码错误，请输入合法身份证!");
		cardtipobj.css("color","red");
	 }else{
	 	$(function(){
	 		$.ajax({
					url: squerycardservletstr,
					type: "POST",
					async:false, 
					dataType:'json',
					success:function(json) {
						if(json.status=="yes"){
							r_card_flag = true;
							//set style 
							$("#card").css("border-color","#0000FF","border-width","2px","border-style","solid");
							cardtipobj.html("OK");
							cardtipobj.css("color","#0000FF");
						}else{
							r_card_flag = false;
							$("#card").css("border-color","red","border-width","2px","border-style","solid");
							cardtipobj.html("该号码已经被注册!");
							cardtipobj.css("color","red");
						}
					}
				});
	 	});
	 }
	 // 所属公司验证 -->
	var compselectedval = $("#comp option:checked").text();
	var comtipobj = $("#comptip");
	if(compselectedval=="=请选择=" || compselectedval==""){
		r_company_flag = false;
		comtipobj.html("请选择所属公司");
		comtipobj.css("color","red");
	}else{
		r_company_flag = true;
		comtipobj.html("OK");
		comtipobj.css("color","#0000FF");
	}
	// 部门验证 -->
	var depselectedvalue = $("#dep option:selected").text();
	var deptipobj = $("#deptip");
	if(depselectedvalue=="=请选择=" || depselectedvalue==""){
		r_dep_flag = false;
		deptipobj.html("请选择部门");
		deptipobj.css("color","red");	
	}else{
		r_dep_flag = true;
		deptipobj.html("OK");
		deptipobj.css("color","#0000FF");	 
	} 
	// 职位验证 -->	
	var postselectedvalue = $("#post option:selected").text();
	var posttipobj = $("#posttip");
	if(postselectedvalue=="=请选择=" || postselectedvalue==""){
		r_post_flag = false;
		posttipobj.html("请选择职位");
		posttipobj.css("color","red");	
	}else{
		r_post_flag = true;
		posttipobj.html("OK");
		posttipobj.css("color","#0000FF");	
	}
//	alert("name:"+r_username_flag);
//	alert("pass:"+r_password_flag);
//	alert("rpass:"+r_repeatpassword_flag);
//	alert("sex:"+r_sex_flag);
//	alert("tel"+r_tel_flag);
//	alert("qq:"+r_qq_flag);
//	alert("bri:"+r_brithday_flag);
//	alert("age:"+r_age_flag);
//	alert("card:"+r_card_flag);
//	alert("company:"+r_company_flag);
//	alert("dep:"+r_dep_flag);
//	alert("post:"+r_post_flag);
	if(r_username_flag && r_password_flag && r_repeatpassword_flag && r_sex_flag && r_tel_flag && r_qq_flag && r_brithday_flag && r_age_flag && r_card_flag && r_company_flag && r_dep_flag && r_post_flag){
		return true;
	}else{
		return false;
	}
//	$("#formregister").submit();
}	
		
// 提交时验证-------------------------------------------------------------------------------end -->	