<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<form name="testform">
    <select id="selectbox_city" class="selectbox" name="websites" size="1"
            onChange="cityways.page.Events.onChangeSelectboxCity()">
        <c:forEach var="city" items="${model.getCitiesModel().getCities()}">
            <c:choose>
                <c:when
                        test="${city.getId() == model.getCitiesModel().getSelectedCity().getId()}">
                    <option selected="selected" value="${city.getKey()}">
                            ${city.getName()}</option>
                </c:when>
                <c:otherwise>
                    <option value="${city.getKey()}">${city.getName()}</option>
                </c:otherwise>
            </c:choose>
        </c:forEach>
    </select>
</form>