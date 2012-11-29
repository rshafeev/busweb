<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<div class="mini_table_town">
	<div class="mini_table_town_center">
		<div class="mini_table-town_top">
			<p>
				<b><spring:message code="welcome.city" text="default text" /> </b>
			</p>
		</div>

		<form name="testform">
			<select id="selectbox_city" class="selectbox" name="websites"
				size="1" onChange="on_change_selectbox_city()">
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

	</div>
</div>