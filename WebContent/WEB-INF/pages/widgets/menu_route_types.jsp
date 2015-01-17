<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="mini_table_transp">
    <div class="mini_table_transp_center">
        <div class="mini_table-transp_top">
            <p>
                <b><spring:message code="basic.type" text="default text"/> </b> <b
                    style="margin-left: 5px;"> <spring:message
                    code="basic.transport" text="default text"/>
            </b>
            </p>
        </div>
        <div class="mini_table_transp_temp"></div>
        <div class="mini_table_transp_list">
            <c:forEach var="routeType" items="${model.getRouteTypesIds()}">
                <a id="cways_menu_route_btn_${routeType}" href="#"
                   onclick="cityways.page.Events.onRouteTypeClick('${routeType}');"
                   class="demo-tip-darkgray">
                </a>
            </c:forEach>

            <a id="cways_menu_route_btn_auto" href="#"
               onclick="cityways.page.Events.onRouteTypeClick('auto');"
               class="demo-tip-darkgray">
            </a>

            <table>
                <tr>
            </table>
        </div>

    </div>
</div>