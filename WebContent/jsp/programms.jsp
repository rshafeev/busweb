<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui" %>

<ui:page>
    <jsp:attribute name="head">
        <title>Programms</title>
           <div class="menu">
        <ul>
          <li><a href="home_page.htm"><span>Home</span></a></li>
          <li><a class="active" href="programms.htm"><span>Programms</span></a></li>
          <li><a href="service.htm"><span>Service</span></a></li>
          <li><a href="support.htm"><span>Support</span></a></li>
          <li><a href="contact_us.htm"><span>Contact us</span></a></li>
        </ul>
      </div>
    </jsp:attribute>
    <jsp:attribute name="body">
      <div class="body">
    	<div class="body_resize">
      		<div class="prog_info">
		        <h2>Programms info</h2>
		        <p><span><strong>Fusce vehicula dignissim ligula.</strong></span> </p>
		        <p>Vestibulum sit amet neque eu neque suscipit consequat quis vel risus. Vestibulum vehicula purus nec dui accumsan fermentum. Suspendisse potenti. Ut dapibus est id odio pretium blandit in eget leo.</p>
     	   </div>
      	<div class="prog_name">
	        <h2>Programms</h2>
	        <p><span><strong>Customer Support</strong></span></p>
	        <div class="bg"></div>
	        <p><span><strong>Sales Enquiry</strong></span></p>
	        <div class="bg"></div>
	       </div>
	      <div class="clr"></div>
    	</div>
 	 </div>
    </jsp:attribute>
    
        <jsp:attribute name="foot">
   		</jsp:attribute>
</ui:page>