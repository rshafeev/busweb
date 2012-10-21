<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<h3 style="text-align: center; font-size: 12px; padding-bottom: 3px; padding-top: 3px;">Какой ищем маршрут?</h3>

<table class="menu_options_table">
	<tbody>
		<tr>
			<td>
				<input type="radio" name="way_options" id="optimal" value="optimal" checked="checked" border="0"/>
			</td>
			<td class="padding_right">
				<label for="optimal" id="optimal_tip_label" title="">оптимальный</label>
			</td>
			<td>
				<input type="radio" name="way_options" id="fast" value="fast" />
			</td>
			<td class="padding_right">
				<label for="fast" id="fast_tip_label" title="">быстрый</label>
			</td>
		</tr>
		<tr>
			<td>
				<input type="radio" name="way_options" id="cheap" value="cheap" />
			</td>
			<td>
				<label for="cheap" id="cheap_tip_label" style="margin-left: 5px; cursor: pointer;" title="">дешевый</label>
			</td>
			<td>
				<input type="checkbox" id="direct" />
			</td>
			<td>
				<label for="direct" id="direct_tip_label" style="margin-left: 5px; cursor: pointer;" title="">без пересадок</label>
			</td>
		</tr>
	</tbody>
</table>