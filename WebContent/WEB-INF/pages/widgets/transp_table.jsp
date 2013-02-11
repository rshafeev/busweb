<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<script type="text/javascript">
	function tool(self) {

		//console.log(this.title);
		console.log(self.title);

		self.title = 'test';
	}
</script>
<div class="mini_table_transp">
	<div class="mini_table_transp_center">
		<div class="mini_table-transp_top">
			<p>
				<b><spring:message code="basic.type" text="default text" /> </b> <b
					style="margin-left: 5px;"> <spring:message
						code="basic.transport" text="default text" />
				</b>
			</p>
		</div>
		<div class="mini_table_transp_temp"></div>
		<div class="mini_table_transp_list">
			<c:forEach var="routeType" items="${model.getRouteTypes()}">
				<a id="cways_menu_route_btn_${routeType.getName()}" href="#"
					onclick="cityways.Page.Events().onRouteTypeClick(this,'${routeType.getName()}','${routeType.getIncludeTitle()}', '${routeType.getExcludeTitle()}');"
					class="demo-tip-darkgray" title="${routeType.getExcludeTitle()}">
					<img
					src="${myContext}/media/css/images/route_types/32/${routeType.getName()}_selected.png" />
				</a>
			</c:forEach>

			<a  id="cways_menu_route_btn_c_route_auto"  href="#"
				onclick="cityways.Page.Events().onRouteTypeClick(this,'c_route_auto','<spring:message code="basic.enable_c_route_auto" text="default text" />', '<spring:message code="basic.exclude_c_route_auto" text="default text" />');"
				class="demo-tip-darkgray"
				
				title="<spring:message code="basic.enable_c_route_auto" text="default text" />">
				<span><img style="margin-left: 8px;"
					src="${myContext}/media/css/images/route_types/32/c_route_auto.png" /></span>
			</a>

			<table>
				<tr>
			</table>
		</div>

	</div>
</div>