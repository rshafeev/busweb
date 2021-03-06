<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="myContext" value="${pageContext.request.contextPath}"/>

<ui:base>
	<jsp:attribute name="page_head">	
	<script type="text/javascript"
            src="http://maps.google.com/maps/api/js?sensor=false&libraries=drawing"></script>
	
	<script src="${myContext}/media/js/libs/selectbox.js"></script>
	<script src="${myContext}/media/js/libs/jquery.poshytip.js"></script>
	<script type="text/javascript"
            src="http://underscorejs.ru/underscore.js"></script>
	<script src="${myContext}/media/cityways/main_page.js"></script>
	<script type="text/javascript">

        var options = {
            currentCity: $.parseJSON('${model.JsonSelectedCity()}'),
            serverHost: "${myContext}",
            resourceURI: "${myContext}/media/cityways/",
            lang: "${model.getLanguage()}"
        };

        cityways.page.setCurrent(new cityways.page.RoutesPage(options));
    </script>
	</jsp:attribute>

	<jsp:attribute name="content">
	<div id="routes_map">
        <div id="routes_wrapper">
            <div id="map_canvas"></div>
        </div>
        <div id="routes_extra">
            <div id="routes_arrow_div" onclick="cityways.page.Events.onShowPanel();">
                <a id="arrow_icon" href="#"><img id='img_panel'/></a>

            </div>
            <div id="routes_panel">
                <div class="city_tab" style="display: inline-block;">
                    <h3><spring:message code="routespanel.choosecity" text="default text"/>:</h3>
                    <jsp:directive.include file="widgets/city_table.jsp"/>
                </div>
                <div class="routes_inform">
                    <div id="cityways_routes_panel_scroll" class="scrollbar_body_routes">
                        <div class="scrollbar">
                            <div class="track">
                                <div class="thumb">
                                    <div class="end"></div>
                                </div>
                            </div>
                        </div>
                        <div class="viewport">
                            <div class="overview">

                                <jsp:directive.include file="widgets/routes/container.jsp"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
	
	</jsp:attribute>
	<jsp:attribute name="foot">
	</jsp:attribute>
</ui:base>
