<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui" %>

<ui:page>
    <jsp:attribute name="head">
        <title>Bus</title>
           <div class="menu">
       	 <ul>
          <li><a class="active" href="home_page.htm"><span>Home</span></a></li>
          <li><a  href="programms.htm"><span>Programms</span></a></li>
          <li><a  href="service.htm"><span>Service</span></a></li>
          <li><a href="support.htm"><span>Support</span></a></li>
          <li><a  href="contact_us.htm"><span>Contact us</span></a></li>
        </ul>
        
      </div>
      
    </jsp:attribute>
    <jsp:attribute name="body">
<div class="body">
  <div id="map_canvas" style="width:90%; height:100%; 	margin-left:78px;
	margin-top:0px;"></div>
  
   </div>  	
    </jsp:attribute>
   
         	<jsp:attribute name="foot">
  <div class="footer" style="margin-bottom: 0px;"></div>
    </jsp:attribute> 	    
</ui:page>