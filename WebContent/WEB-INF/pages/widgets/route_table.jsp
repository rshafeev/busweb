<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<div class="mini_table_route">
	<div class="mini_table_route_center">
		<div class="mini_table-route_top">
			<p>
				<b> <spring:message code="welcome.travel_line" text="default text" /></b>
			</p>
		</div>
		
		<table>
			<tbody>
				<tr>
				
					<td>
						<div class="Apoint"></div>
						
					</td>
					<td>
					
						<span><input id="editboxA" class="a_input_form"></input>
						</span>
					</td>
				</tr>
				
				<tr>
										<td style="width:16px;">
					<div class="refresh"></div>
					</td>
					 <td style="width:16px;">
						<div class="Bpoint"></div>
					
					</td>

					<td>
						<span> <input id="editboxB" class="b_input_form" id="uniq162" autocomplete="off"></input>
						</span>
					</td> 
						<td>
						<div class="cross" onClick="alert('Delete');"></div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>