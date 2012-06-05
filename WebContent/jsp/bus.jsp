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
 
	<!-- <div id="map_canvas" style="width:97%;  height: 100%; margin-left: 15px; margin-top: 0px; border: 2px solid white;">
	</div> -->

<!--  <div id="map_canvas" style="width:300;  height: 100%; margin-left: 15px; margin-top: 0px; border: 2px solid white; position:absolute;" onclick="changeSizeImage(this)">
 
 
	</div> -->
	<div id="map_canvas" style="width:97%;  height: 100%; margin-left: 10px; margin-top: 0px; border: 2px solid white; position:absolute;" onclick="changeSizeImage(this)">
	
	</div> 
	
			<div class="right_col" style="float:right;">
			<!-- <button id="zoomInX" value="Увеличить блок (только по горизонтали)" onclick="zoomInX('map_canvas')" >Size up</button>
<button id="zoomOutX" value="Уменьшить блок (только по горизонтали)" onclick="zoomOutX('map_canvas')">Size down</button> -->
<input type="image" id="zoomOutX" onclick="zoomOutX('map_canvas')" style="cursor: pointer;
display: block;
float: right;
" src='css/images/arrow_left.png'>
<input type="image" id="zoomInX" onclick="zoomInX('map_canvas')" src='css/images/arrow_right.png'>	 
		
</div>
 <!-- <div id="leftBlock" class="block">
	<div class="content">

	</div>
	<a href="#" class="opener">op</a>
</div> --> 


</div>

    </jsp:attribute>

	<jsp:attribute name="foot">
  
    </jsp:attribute>
</ui:page>