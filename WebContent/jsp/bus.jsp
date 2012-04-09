<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui" %>

<ui:page>
    <jsp:attribute name="head">
        <title>Bus</title>
           <div class="menu">
       	 <ul>
          <li><a class="active" href="home_page.htm"><span>Home</span></a></li>
          <li><a class="active" href="programms.htm"><span>Programms</span></a></li>
          <li><a class="active" href="service.htm"><span>Service</span></a></li>
          <li><a class="active" href="support.htm"><span>Support</span></a></li>
          <li><a class="active" href="contact_us.htm"><span>Contact us</span></a></li>
        </ul>
        
      </div>
      
    </jsp:attribute>
    <jsp:attribute name="body">
<div class="body">
    <img alt="picture" src="css/images/big_map.bmp" style="width: 100%;">
      <div class="clr"></div>
   </div>
    </jsp:attribute>
    
        <jsp:attribute name="foot">
    </jsp:attribute>
</ui:page>