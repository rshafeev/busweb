<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<div class="mini_table_town">
	<div class="mini_table_town_center">
		<div class="mini_table-town_top">
			<p>
				<b><spring:message code="welcome.city" text="default text" /> </b>
			</p>
		</div>

		<form name="testform">
			<select id="selectbox_city" class="selectbox" name="websites"
				size="1" onChange="on_change_selectbox_city()">
			</select>
		</form>
	</div>
</div>