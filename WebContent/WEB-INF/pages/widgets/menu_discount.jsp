<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<table id="cways_menu_discount" class="menu_options_table3">
    <tbody>
    <tr>
        <td>
            <input type="radio" id="cways_menu_discount_none" name="radio_discount" checked value="discount_without"

                   onchange="cityways.page.Events.onDiscountChanged(this, 'discount_none');"/>
        </td>
        <td class="padding_right">
            <label for="cways_menu_discount_none_label" id="lgot_label" title="">
                <spring:message code="basic.discount_without" text="default text"/></label>
        </td>
        <td>
            <input type="checkbox" id="cways_menu_discount_tram"
                   onchange="cityways.page.Events.onDiscountChanged(this.value, 'discount_tram');"/>
        </td>
        <td class="padding_right">
            <label for="cways_menu_discount_tram_label" id="tram_label" title=""><spring:message
                    code="basic.discount_tram" text="default text"/></label>
        </td>
    </tr>
    <tr>
        <td>
            <input type="radio" id="cways_menu_discount_pref" name="radio_discount" value="discount_pref"
                   onchange="cityways.page.Events.onDiscountChanged(this.value, 'discount_pref');"/>
        </td>
        <td>
            <label for="lgot" id="cways_menu_discount_pref_label" style="margin-left: 5px; " title=""><spring:message
                    code="basic.discount_pref" text="default text"/></label>
        </td>
        <td>
            <input type="checkbox" id="cways_menu_discount_trolley"
                   onchange="cityways.page.Events.onDiscountChanged(this.value, 'discount_trolley');"/>
        </td>
        <td>
            <label for="troll" id="cways_menu_discount_trolley_label" style="margin-left: 5px; "
                   title=""><spring:message code="basic.discount_trolley" text="default text"/></label>
        </td>
    </tr>
    <tr>
        <td>
            <input type="radio" id="cways_menu_discount_other" name="radio_discount" value="discount_other"
                   onchange="cityways.page.Events.onDiscountChanged(this.value, 'discount_other');"/>
        </td>
        <td>
            <label for="stud" id="cways_menu_discount_other_label" style="margin-left: 5px; " title=""><spring:message
                    code="basic.discount_other" text="default text"/></label>
        </td>
        <td>
            <input type="checkbox" id="cways_menu_discount_metro"
                   onchange="cityways.page.Events.onDiscountChanged(this.value, 'discount_metro');"/>
        </td>
        <td>
            <label for="troll" id="cways_menu_discount_metro_label" style="margin-left: 5px; " title=""><spring:message
                    code="basic.discount_metro" text="default text"/></label>
        </td>
    </tr>
    </tbody>
</table>
