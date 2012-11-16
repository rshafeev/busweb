<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<script>
$('#scrollbar1').tinyscrollbar_update();	
</script>
<div class="help_cont">
	<div class="help_info">
		<jsp:directive.include file="help_left.jsp" />
	</div>

	<div class="help_links">
		<jsp:directive.include file="help_right.jsp" />
	</div>
</div>