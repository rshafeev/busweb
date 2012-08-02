<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui"%>

<ui:page>
	<jsp:attribute name="head">
        <title>Bus</title>
          <div class="menu">
       	 <ul>
          <li><a class="active" href="home_page.htm"><span>Home</span></a></li>
          <li><a href="programms.htm"><span>Programms</span></a></li>
          <li><a href="service.htm"><span>Service</span></a></li>
          <li><a href="support.htm"><span>Support</span></a></li>
          <li><a href="contact_us.htm"><span>Contact us</span></a></li>
        </ul>       
      </div>     
    </jsp:attribute>

	<jsp:attribute name="content">
		 	
	<!--  <div id="main">	


	<div id="map_canvas"
				style="width: 98%; height: 100%; margin-left: 10px; margin-top: 0px; border: 2px solid white; position: absolute;"
				>
	 </div> 
	
	<div class="right_col" style="background-color: red;">
		<div id="test" style="display: none; ">
					<h2 style="color: black;">Появляется текст</h2>
				</div>	
					<div class="arrow_div"
					style="width: 10px; height: 500px; float: right;">
		<a href="#"><img style="margin-top: 250px;" onclick="changeImage();"
						name='img' src='css/images/arrow_left.png' /></a>
					
		</div>	
	</div>	 
</div> -->

<div id="container" style="height:100%;width:100%; position:absolute; overflow:hidden;">
<div id="wrapper">
<div id="content">
<div id="map_canvas" style="width:100%; height:100%"></div>
</div>
</div>
<div id="navigation">
<p><strong>2) Navigation here.</strong>  </p>
</div>
<div id="extra">
<div class="temp_text" style="height: 90%; width: 100%; background: blue;">
<p><strong>3) More stuff here.</strong> very text make long column make filler fill make column column silly filler text silly column fill silly fill column text filler make text silly filler make filler very silly make text very very text make long filler very make column make silly column fill silly column long make silly filler column filler silly long long column fill silly column very </p>
</div>
<div id="footer"><p>Here it goes the footer</p></div>
</div>

</div> 
    </jsp:attribute>

	<jsp:attribute name="foot">
  
    </jsp:attribute>
</ui:page>