<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="myContext" value="${pageContext.request.contextPath}"/>

<ui:columns>
	<jsp:attribute name="page_head">
	<title>Help</title>
		<script type="text/javascript">
            var cssFile = cityways.helper.document.selectCSSFile("${myContext}/media/css/pages/",
                    [{
                        name: "help.css"
                    }
                    ]);
            cityways.helper.document.appendCSSFile(cssFile, "write");

        </script>
	</jsp:attribute>
	<jsp:attribute name="left_column">
   
			<div class="text_info">
                <h3>Полезные функции сервиса "CityWays"</h3>
                <h6>У нашего сервиса есть ряд полезных функций, которыми мы,
                    создатели сервиса, пользуемся каждый день. Но по какой-то причине
                    Вы, наши пользователи, их почти не используете. Возможно потому,
                    что просто не знаете об их существовании :)</h6>
                <h6>В этой статье мы постараемся исправить эту досадную ошибку
                    и подробно расскажем о каждой из таких функций.</h6>
                <h4>Выбор города</h4>
                <h6>
                    <img src="${myContext}/media/css/images/map.png" height="150px" width="200px" style="float: right;"/>
                    В сервисе предоставляется возможность выбора города. На данный момент доступны лишь три города: Харьков, Мелитополь и Киев.
                    В дальнейшем данный список будет расширяться.
                </h6>
                <h4>Выбор точек "ОТ" и "ДО"</h4>
                <h6>
                    <img src="${myContext}/media/css/images/mapping_places.jpg" height="150px" width="200px" style="float: left;"/>
                    Логика сервиса устроена таким образом, что для задания координат
                    точек ОТ(ДО) используется левый клик мыши. После того, как точки
                    заданы, актуализировать расположение ОТ(ДО) можно, лишь перетянув
                    соответствующий маркер. Либо использовать контекстное меню карты,
                    которое отображается при правом клике.
                </h6>
                <h4>Выбор оптимального маршрута</h4>
                <h6>
                    <img src="${myContext}/media/css/images/choose_vec.jpg" height="150px" width="200px" style="float: right;"/>
                    После того, как заданы все настройки, сервис Вам предложит оптимальные маршруты. Среди предложенных маршрутов
                    Вы можете выбрать тот, который подходит именно Вам, с учетом минимального расстояния или стоимости.

                </h6>
            </div>
	
   </jsp:attribute>

<jsp:attribute name="right_column">

   </jsp:attribute>

</ui:columns>

