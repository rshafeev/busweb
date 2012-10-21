<%@ page contentType="text/html;charset=UTF-8" language="java"%>

<table class="menu_options_table">
	<tbody>
		<tr>
			<td>
				<input type="radio" name="proezd" id="no_lgot" value="no_lgotv" checked="checked" />
			</td>
			<td class="padding_right">
				<label for="no_lgot" id="lgot_label" title="">отсутствует</label>
			</td>
			<td>
				<input type="checkbox" id="tram" />
			</td>
			<td class="padding_right">
				<label for="tram" id="tram_label" title="">на трамвай</label>
			</td>
		</tr>
		<tr>
			<td>
				<input type="radio" name="proezd" id="lgot" value="lgot" />
			</td>
			<td>
				<label for="lgot" id="lgot_label" style="margin-left: 5px; cursor: pointer;" title="">льготый</label>
			</td>
			<td>
				<input type="checkbox" id="troll" />
			</td>
			<td>
				<label for="troll" id="troll_label" style="margin-left: 5px; cursor: pointer;" title="">на троллейбус</label>
			</td>
		</tr>
		<tr>
			<td>
				<input type="radio" name="proezd" id="stud" value="stud" />
			</td>
			<td>
				<label for="stud" id="stud_label" style="margin-left: 5px; cursor: pointer;" title="">студенческий</label>
			</td>
		</tr>
	</tbody>
</table>
