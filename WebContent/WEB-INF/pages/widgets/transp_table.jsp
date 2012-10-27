<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<div class="mini_table_transp">
	<div class="mini_table_transp_center">
		<div class="mini_table-transp_top">
			<p>
				<b><spring:message code="welcome.type" text="default text" /> </b>
				<b style="margin-left: 5px;"> <spring:message code="welcome.transport" text="default text" />
				</b>
			</p>
		</div>
		<div class="mini_table_transp_temp"></div>
		<div class="mini_table_transp_list">
			<a href="#" onclick="on_btn_metro_click(this);"> <img
				src="media/css/images/metro_selected.png"></img>
			</a> <a href="#" onclick="on_btn_bus_click(this)"> <img
				src="media/css/images/bus_selected.png" />
			</a> <a href="#" onclick="on_btn_troll_click(this)"> <span><img
					src="media/css/images/trol_selected.png" /></span>
			</a> <a href="#" onclick="on_btn_tram_click(this)"> <span><img
					src="media/css/images/tram_selected.png"></img></span>
			</a> <a href="#" onclick="on_btn_auto_click(this)"> <span><img
					style="margin-left: 8px;" src="media/css/images/auto.png"></img></span>
			</a>
			<table>
				<tr>
			</table>
		</div>
	</div>
</div>