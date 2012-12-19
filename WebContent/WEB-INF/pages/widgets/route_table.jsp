<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<div class="mini_table_route">
	<div class="mini_table_route_center">
		<div class="mini_table-route_top">
			<p>
				<b> <spring:message code="basic.travel_line" text="default text" /></b>
			</p>
		</div>
		
		<table>
			<tbody>
				<tr>
				
					<td>
						<div id="Apoint" class="demo-tip-darkgray" title="Начало движения"></div>
						
					</td>
					<td>
					
						<span><input  id="a_input_form" class="demo-tip-darkgray" title="Начало движения" />
						</span>
					</td>
				</tr>
				
				<tr>
										<td style="width:16px;">
					<div class="refresh"></div>
					</td>
					 <td style="width:16px;">
						<div id="Bpoint" class="demo-tip-darkgray" title="Конец движения"></div>
					
					</td>

					<td>
						<span> <input  id="b_input_form" class="demo-tip-darkgray" title="Конец движения"></input>
						</span>
					</td> 
						<td>
						<div id="cross" class="demo-tip-darkgray" title="Очистить карту"></div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>