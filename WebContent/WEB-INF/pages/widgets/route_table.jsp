<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<div class="mini_table_route">
	<div class="mini_table_route_center">
		<div class="mini_table-route_top">
			<p>
				<b><spring:message code="basic.travel" text="default text" /> </b>
				<b style="margin-left: 5px;">  <spring:message code="basic.line" text="default text" /></b>
			</p>
		</div>
		
		<table>
			<tbody>
				<tr>
				
					<td>
						<div id="Apoint" class="demo-tip-darkgray" title="<spring:message code="basic.start_point" text="default text" />"></div>
						
					</td>
					<td>
					
						<span><input  id="a_input_form" class="demo-tip-darkgray" title="<spring:message code="basic.start_point" text="default text" />" />
						</span>
					</td>
				</tr>
				
				<tr>
										<td style="width:16px;">
					<div class="refresh"></div>
					</td>
					 <td style="width:16px;">
						<div id="Bpoint" class="demo-tip-darkgray" title="<spring:message code="basic.end_point" text="default text" />"></div>
					
					</td>

					<td>
						<span> <input  id="b_input_form" class="demo-tip-darkgray" title="<spring:message code="basic.end_point" text="default text" />"></input>
						</span>
					</td> 
						<td>
						<div id="cross" class="demo-tip-darkgray" title="<spring:message code="basic.clear_map" text="default text" />"></div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>