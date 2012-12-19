<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<div class="mini_table_transp">
	<div class="mini_table_transp_center">
		<div class="mini_table-transp_top">
			<p>
				<b><spring:message code="basic.type" text="default text" /> </b>
				<b style="margin-left: 5px;"> <spring:message code="basic.transport" text="default text" />
				</b>
			</p>
		</div>
		 <div class="mini_table_transp_temp"></div>
		<div class="mini_table_transp_list">
			<a href="#" onclick="on_btn_metro_click(this);" class="demo-tip-darkgray" title="Не включать в маршрут метро"> <img
				src="${myContext}/media/css/images/metro_selected.png" />
			</a> <a href="#" onclick="on_btn_bus_click(this)" class="demo-tip-darkgray" title="Не включать в маршрут автобус"> <img
				src="${myContext}/media/css/images/bus_selected.png"  />
			</a> <a href="#" onclick="on_btn_troll_click(this)" class="demo-tip-darkgray" title="Не включать в маршрут троллейбус "> <span><img
					src="${myContext}/media/css/images/trol_selected.png"  /></span>
			</a> <a href="#" onclick="on_btn_tram_click(this)" class="demo-tip-darkgray" title="Не включать в маршрут трамвай "> <span><img
					src="${myContext}/media/css/images/tram_selected.png"  /></span>
			</a> <a href="#" onclick="on_btn_auto_click(this)" class="demo-tip-darkgray" title="Включить поиск маршрутов для авто"> <span><img
					style="margin-left: 8px;" src="${myContext}/media/css/images/auto.png"  /></span>
			</a>
			<table>
				<tr>
			</table>
		</div>
		
	</div>
</div>