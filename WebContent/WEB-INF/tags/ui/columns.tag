<%@ tag body-content="empty"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<%@ attribute name="page_head" required="true" fragment="true"%>
<%@ attribute name="left_column" required="true" fragment="true"%>
<%@ attribute name="right_column" required="true" fragment="true"%>

<ui:base>
	<jsp:attribute name="page_head">
	<script type="text/javascript">
		includeCSSFile("media/css/columns", "columns", []);
		$(document).ready(function() {
			$('#left_column_scrollbar').tinyscrollbar();
			$('#left_column_scrollbar').tinyscrollbar_update();
			$(window).bind("resize", function(e) {
				$('#left_column_scrollbar').tinyscrollbar_update();
			});
		});
	</script>
	<jsp:invoke fragment="page_head" />
	</jsp:attribute>

	<jsp:attribute name="content">
	
	<div class="columns_content">
	<div class="columns_content_left">
	   <div id="left_column_scrollbar" class="scrollbar_body">
			 <div class="scrollbar">
				<div class="track">
					<div class="thumb">
						<div class="end"></div>
					</div>
				</div>
			</div>
			  <div class="viewport"> 
				 <div class="overview">  
		 			<jsp:invoke fragment="left_column" />
		 		 </div> 
			</div>  
	   </div>
	</div> 
	<div class="columns_content_right">
		<jsp:invoke fragment="right_column" />
	</div>
	</div>   
	</jsp:attribute>
	<jsp:attribute name="foot">
	</jsp:attribute>
</ui:base>
