<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Home</title>
<link rel="stylesheet" type="text/css" href="css/styles.css">
<link rel="stylesheet" type="text/css" href="css/slider_styles.css">
<!--<style id="AEEB20B6-2CBF-4F04-8C76-4B754DB03E30"></style>  -->
<script type="text/javascript" src="css/jquery.js"></script>
<script type="text/javascript" src="css/easySlider1.5.js"></script>
<script type="text/javascript" charset="utf-8">
// <![CDATA[
$(document).ready(function(){	
	$("#slider").easySlider({
		controlsBefore:	'<p id="controls">',
		controlsAfter:	'</p>',
		auto: true, 
		continuous: true
	});	
});
// ]]>
</script>
<style type="text/css">
.sliders_pict { width:958px; height:296px; margin:0 auto; border:1px solid #212121;}
#slider { margin:0; padding:0; list-style:none; }
#slider ul,
#slider li { margin:0; padding:0; list-style:none; }
/* 
    define width and height of list item (slide)
    entire slider area will adjust according to the parameters provided here
*/
#slider li { width:958px; height:296px; overflow:hidden; }
p#controls { margin:0; padding:0; position:relative; }
#prevBtn { display:block; margin:0; overflow:hidden; width:52px; height:49px; position:absolute; left:-25px; top:-49px; }
#nextBtn { display:block; margin:0; overflow:hidden; width:52px; height:49px; position:absolute; left: 930px; top:-49px; }
#prevBtn a { display:block; width:52px; height:49px; background:url(css/images/left_arrow.gif) no-repeat 0 0; }
#nextBtn a { display:block; width:52px; height:49px; background:url(css/images/right_arrow.gif) no-repeat 0 0; }
</style>
</head>
<body>
<div class="main_page">
			<div class="head">
				<div class="head_block">
						<div class="logotip"><a href="#"><img border="0" alt="logotip" src="css/images/logotip.png" width="280" height="100"></a></div>
						<div class="menu">
							<ul>
								  <li><a class="active" href="home_page.htm"><span>Home</span></a></li>
								          <li><a href="programms.htm"><span>Programms</span></a></li>
								          <li><a href="service.htm"><span>Service</span></a></li>
								          <li><a href="support.htm"><span>Support</span></a></li>
										  <li><a href="contact_us.htm"><span>Contact us</span></a></li>
							</ul>
						</div>
						<div class="clr"></div>
				</div>
			</div>
			<div class="slider">
				<div class="head_text">
					<div class="sliders_pict">
						<div style="width: 958px; height: 296px; overflow: hidden;" id="slider">
						<ul style="width: 2874px; margin-left: -397.94px;">
						<li style="float: left;">
							<div class="div"> <img class="screen" border="0" alt="screen 1" src="css/images/slider_img_1.jpg" width="655" height="298">
								<div class="left_sl">
									<h2>Fresh Business</h2>
									<p>Nunc eleifend, enim nec posuere posuere, dui dolor interdum orci, non luctus pede felis a eros. Curabitur dignissim, purus id posuere</p>
									<p>Vehicula, ipsum risus placerat lacus, vel interdum enim augue at au gue. </p>
									<p><a href="#"><img border="0" alt="picture" src="css/images/button_view.gif" width="124" height="36"></a></p>
								</div>
							</div>
						</li>
						<li style="float: left;">
							<div class="div"> <img class="screen" border="0" alt="screen 1" src="css/images/slider_img_2.jpg" width="655" height="298">
								<div class="left_sl">
									  <h2>Orange Design</h2>
									  <p>Nunc eleifend, enim nec posuere posuere, dui dolor interdum orci, non luctus pede felis a eros. Curabitur dignissim, purus id posuere</p>
									  <p>Vehicula, ipsum risus placerat lacus, vel interdum enim augue at au gue. </p>
									  <p><a href="#"><img border="0" alt="picture" src="css/images/button_view.gif" width="124" height="36"></a></p>
								</div>
							</div>
						</li>
						<li style="float: left;">
							<div class="div"> <img class="screen" border="0" alt="screen 1" src="css/images/slider_img_3.jpg" width="655" height="298">
									<div class="left_sl">
										<h2>Createfolio</h2>
									  <p>Nunc eleifend, enim nec posuere posuere, dui dolor interdum orci, non luctus pede felis a eros. Curabitur dignissim, purus id posuere</p>
									  <p>Vehicula, ipsum risus placerat lacus, vel interdum enim augue at au gue. </p>
									  <p><a href="#"><img border="0" alt="picture" src="css/images/button_view.gif" width="124" height="36"></a></p>
									</div>
							</div>
						</li>
					</ul>
				</div>
					<p id="controls"> <span id="prevBtn"><a href="javascript:void(0);"></a></span> <span id="nextBtn"><a href="javascript:void(0);"></a></span></p>
			</div>
			<div class="clr"></div>
			</div>
		</div>
		<div class="clr"></div>
			<div class="top_menu">
				<div class="top_menu_resize">
					<div class="info_block1"> <img alt="picture" src="css/images/image_1.jpg" width="59" height="59">
							<p><strong>GIS project </strong><br>
							Vestibulum sit amet neque eu neque suscipit consequat quis vel risus. Vestibulum vehicula purus nec dui accumsan fermentum. </p>
							<p><a href="#">Read More</a></p>
					</div>
					<div class="info_block2"> <img alt="picture" src="css/images/image_2.jpg" width="59" height="59">
							<p><strong>Transport</strong><br>
							Vestibulum sit amet neque eu neque suscipit consequat quis vel risus. Vestibulum vehicula purus nec dui accumsan fermentum. </p>
							<p><a href="#">Read More</a></p>
					</div>
					<div class="info_block1"> <img alt="picture" src="css/images/image_3.jpg" width="59" height="59">
							<p><strong>NavMobile</strong><br>
							Vestibulum sit amet neque eu neque suscipit consequat quis vel risus. Vestibulum vehicula purus nec dui accumsan fermentum. </p>
							<p><a href="#">Read More</a></p>
					</div>
					<div class="clr"></div>
				</div>
				<div class="clr"></div>
			</div>
			<div class="body">
					<div class="body_resize">
						<div class="news_table">
							<h2>Latest news</h2>
							<p class="data"> 14 / Марта / 2012</p>
							<p>Vestibulum quis odio augue. Sed mi turpis, porttitor quis aliquam vel, viverra sit amet purus. In nec libero ac elit.</p>
							<div class="bg"></div>
							<p class="data"> 15 / Марта / 2012</p>
							<p>Vestibulum quis odio augue. Sed mi turpis, porttitor quis aliquam vel, viverra sit amet purus. In nec libero ac elit.</p>
							<div class="bg"></div>
							<p class="data"> 16 / Марта / 2012</p>
							<p>Vestibulum quis odio augue. Sed mi turpis, porttitor quis aliquam vel, viverra sit amet purus. In nec libero ac elit.</p>
							<div class="bg"></div>
							<p><a href="#"><strong>more news &gt;&gt;</strong></a></p>
						</div>
						<div class="info_table">
							<h2>Welcome to our website</h2>
							<p><span><strong>Fusce vehicula dignissim ligula.</strong></span> </p>
							<p>Vestibulum sit amet neque eu neque suscipit consequat quis vel risus. Vestibulum vehicula purus nec dui accumsan fermentum. Suspendisse potenti. Ut dapibus est id odio pretium blandit in eget leo. </p>
							<p>Aliquam erat volutpat. Curabitur blandit odio eget odio eleifend vel mattis augue convallis. Praesent fringilla, eros et tristique tempus, libero metus porttitor velit, at ultrices eros dolor placerat nunc. Fusce ac egestas ante.</p>
							<p class="test"><em>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem entore veritatis et quasi architecto beatae vitae dicta sunt explicabo."</em><br>
							  <a href="#"><strong>-John S., webdesigner<br>
							  </strong></a> </p>
						</div>
						<div class="clr"></div>
					</div>
			</div>
		</div>
		<div class="footer">
			<div class="footer_resize"> <a href="#"><img border="0" alt="picture" src="css/images/foot_logo.png" width="150" height="80"></a>
				<p class="leftt">Design by <a href="#">Marianna</a><br>
				  Copyright © PremiumGIS.com. All Rights Reserved<br>
				  <a href="Home_page.html">Home</a> | <a href="ContactUs.html">Contact</a> | <a href="#">RSS </a></p>
				<div class="clr"></div>
			</div>
			<div class="clr"></div>
		</div>
<script></script>
</body>
</html>