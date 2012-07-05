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
	<div id="main">	
				<div class="right_col">
	<div id="test" style="display: none">
					<h2 style="color: black;">Появляется текст</h2>
				</div>	
					<div class="arrow_div" style="width:10px; height: 500px;  float: right;" >
<a href="#" 
						onclick="
var g = this.getElementsByTagName('img');
if(g[0].src.indexOf('css/images/arrow_left.png') != -1) 
	{
	zoomOutX('map_canvas');
	g[0].src='css/images/arrow_right.png'; }
	else
		{
		zoomInX('map_canvas');
		g[0].src='css/images/arrow_left.png';		
		}
	">
<span ><img style="margin-top:250px;" src="css/images/arrow_left.png"></img></span>
					</a>
					</div>	
<div class="arrow_div_left" style="width:10px; height: 500px;  float: left;" >
<a href="#" 
						onclick="
							zoomInX('map_canvas');
	">
<span ><img style="margin-top:250px;" src="css/images/arrow_right.png"></img></span>
					</a>
					</div>	
</div>

	<div id="map_canvas"
				style="width: 98%; height: 100%; margin-left: 10px; margin-top: 0px; border: 2px solid white; position: absolute;"
				onclick="changeSizeImage(this)">



	 </div> 

</div>

    </jsp:attribute>

	<jsp:attribute name="foot">
  
    </jsp:attribute>
</ui:page>