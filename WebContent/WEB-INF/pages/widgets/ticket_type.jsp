<%@ page contentType="text/html;charset=UTF-8" language="java"%>

<table class="menu_options_table3">
	<tbody>
		<tr>
			<td>
				<input type="radio" name="proezd" id="no_lgot" value="no_lgotv" checked="checked" />
			</td>
			<td class="padding_right">
				<label for="no_lgot" id="lgot_label"  title=""><spring:message code="basic.no_travel_doc" text="default text" /></label>
			</td>
			<td>
				<input type="checkbox" id="tram" />
			</td>
			<td class="padding_right">
				<label for="tram" id="tram_label"  title=""><spring:message code="basic.on_tram" text="default text" /></label>
			</td>
		</tr>
		<tr>
			<td>
				<input type="radio" name="proezd" id="lgot" value="lgot" />
			</td>
			<td>
				<label for="lgot" id="lgot_label" style="margin-left: 5px; " title=""><spring:message code="basic.preferential" text="default text" /></label>
			</td>
			<td>
				<input type="checkbox" id="troll" />
			</td>
			<td>
				<label for="troll" id="troll_label" style="margin-left: 5px; " title=""><spring:message code="basic.on_troll" text="default text" /></label>
			</td>
		</tr>
		<tr>
			<td>
				<input type="radio" name="proezd" id="stud" value="stud" />
			</td>
			<td>
				<label for="stud" id="stud_label" style="margin-left: 5px; " title=""><spring:message code="basic.students" text="default text" /></label>
			</td>
		</tr>
	</tbody>
</table>
