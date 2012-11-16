<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<div id="about_cont">

</div>

<script>
$('#scrollbar1').tinyscrollbar_update();	
</script>
<div class="about_cont">
	<div class="about_us">
		<jsp:directive.include file="about_left.jsp" />
	</div>

	<div class="about_contacts">
		<jsp:directive.include file="about_right.jsp" />
	</div>
</div>