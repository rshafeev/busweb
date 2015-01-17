<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<table class="menu_options_table1">
    <tbody>
    <tr>
        <td>
            <input type="radio" name="way_options" id="optimal" value="optimal" checked="checked"/>
        </td>
        <td class="padding_right">
            <label for="optimal" id="optimal_tip_label" class="demo-tip-darkgray"
                   title="<spring:message code="basic.optimal_routes" text="default text" />"><spring:message
                    code="basic.label_optimal" text="default text"/></label>
        </td>
        <td>
            <input type="radio" name="way_options" id="fast" value="fast"/>
        </td>
        <td class="padding_right">
            <label for="fast" id="fast_tip_label" class="demo-tip-darkgray"
                   title="<spring:message code="basic.fast" text="default text" />"><spring:message
                    code="basic.label_fast" text="default text"/></label>
        </td>
    </tr>
    <tr>
        <td>
            <input type="radio" name="way_options" id="cheap" value="cheap"/>
        </td>
        <td>
            <label for="cheap" id="cheap_tip_label" style="margin-left: 5px; " class="demo-tip-darkgray"
                   title="<spring:message code="basic.cheap" text="default text" />"><spring:message
                    code="basic.label_cheep" text="default text"/></label>
        </td>
        <td>
            <input type="checkbox" id="cways_menu_transitions_none"/>
        </td>
        <td>
            <label for="direct" id="direct_tip_label" style="margin-left: 5px; " class="demo-tip-darkgray"
                   title="<spring:message code="basic.direct_rout" text="default text" />"><spring:message
                    code="basic.direct" text="default text"/></label>
        </td>
    </tr>
    </tbody>
</table>