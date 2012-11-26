<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<ui:base>
	<jsp:attribute name="page_head">	
	<script type="text/javascript"
			src="http://maps.google.com/maps/api/js?sensor=false&libraries=drawing"></script>
			<script src="media/js/libs/selectbox.js"></script>
	<script src="media/js/main/GoogleMap.js"></script>
	<script src="media/js/routes/RSchems.js"></script>
	<script src="media/js/routes/routes.js"></script>	
	<script type="text/javascript">
		includeCSSFile("media/css/pages", "routes", []);
		$(document).ready(function() {
			initialize();	
		});
	</script>
	<script type="text/javascript">
$(document).ready(function(){                                                  
    $('.view-source .hide').hide();
    $('.view-source .link_name').toggle(
      function(){
        $(this).siblings('.hide').stop(false, true).slideDown(500);
       // $(this).css('background', 'url(media/css/images/arrow_down.png)');
        $(this).document.img.src = 'media/css/images/arrow_down.png';
      },
     function(){
        $(this).siblings('.hide').stop(false, true).slideUp(500);
        //$(this).css('background', 'url(media/css/images/arrow_up.png)');
        $(this).document.img.src = 'media/css/images/arrow_up.png';
     }
   );
});
</script>
	</jsp:attribute>

	<jsp:attribute name="content">
	<div id="routes_map">
		<div id="routes_wrapper">
			<div id="map_canvas"></div>
		</div>
		<div id="routes_extra">
			 <div id="routes_arrow_div" onmousedown="return false"
					onclick="on_right_panel_show();">
			<a href="#"><img name='img'
						src='media/css/images/arrow_left.png' /></a>
			
			</div> 
			<div id="routes_panel"> 
			<div class="select_box" style="width:100px; height:30px;background: red;margin-left:5px; ">
					<form name="testform">
			<select id="selectbox_city" class="selectbox" name="websites"
				size="1" onChange="on_change_selectbox_city()">
			</select>
		</form>
		</div>
			<div id="containerv">
	<div id="contentv">
	<div class="view-source">
<div class="link_name"><p>Metro</p></div>
<div class="hide nocookies">
				<p class="mytext">	
		Text1				
				</p>
			</div>
	</div>	
	<div class="view-source">
<div class="link_name"><p>Tramvaj</p></div>
<div class="hide nocookies">
				<p class="mytext">	
		Text1				
				</p>
			</div>
	</div>	
		<div class="view-source">
<div class="link_name"><p>Bus</p></div>
<div class="hide nocookies">
				<p class="mytext">	
		Text1				
				</p>
			</div>
	</div>	
		<div class="view-source">
<div class="link_name"><p>Troll</p></div>
<div class="hide nocookies">
				<p class="mytext">	
		Text1				
				</p>
			</div>
	</div>		
	</div>	
	</div>
			</div>
		</div>
	
	</div>
		
	</jsp:attribute>
	<jsp:attribute name="foot">
	</jsp:attribute>
</ui:base>
