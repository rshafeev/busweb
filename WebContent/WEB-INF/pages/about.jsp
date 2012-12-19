<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:set var="myContext" value="${pageContext.request.contextPath}" />

<ui:columns>

	<jsp:attribute name="page_head">
	<title><spring:message code="about.title" text="default text" /> </title>
		<script type="text/javascript">
			includeCSSFile("${myContext}/media/css/pages", "about", []);
			function loadSrc(src,_this){
				console.log(src);
				console.log(this);
				_this.src = src;
			};
		</script>
	</jsp:attribute>
	<jsp:attribute name="left_column">
   
			<div class="text_info">
				<spring:message code="about.text" text="default text" />
				<img src="/media/css/images/bus.png"/>
				<h3>О проекте "CityWays"</h3>
				<h6>CityWays - это интернет-сервис, который помогает ответить
					на такие часто задаваемые вопросы как доехать? и как добраться? из
					точки А в точку Б, используя общественный транспорт или автомобиль.
					Возможности CityWays позволяют подобрать наиболее выгодные, как с
					точки зрения времени, так и затрат варианты маршрутов.</h6>
				<h4>Карты городов Украины с маршрутами</h4>
				<h6>Довольно часто мы сталкиваемся с ситуацией, когда не знаем,
					как доехать на общественном транспорте или автомобиле до нужного
					места. Существует много сайтов, где размещена информация об
					общественном транспорте городов Украины, но эта информация не дает
					понять, где и как проходят их маршруты. А главное, мы не получаем
					ответ на вопрос как доехать до нужного нам места. Поэтому у нас
					возникла идея создать интерактивные карты городов Украины с
					маршрутами общественного транспорта.</h6>
					<!-- 
				<h6>На сайте CityWays размещены карты городов Украины, на
					которые нанесены все актуальные маршруты и остановки общественного
					транспорта. Чтобы узнать, как доехать до нужного места, достаточно
					кликнуть на карте, обозначив точки ОТ и ДО, и нажать кнопку
					СОСТАВИТЬ МАРШРУТ. Сервис CityWays визуально отобразит Вам на карте
					основные возможные маршруты по данному запросу. При этом Вы можете
					исключить определенный тип транспорта из своей схемы движения. А
					также, Вы можете установить критерий поиска - оптимальный, быстрый
					или дешевый маршрут.</h6> -->
				<h4>CityWays рекомендует помнить:</h4>
				<h6>В случае, если Вы столкнулись с неточностями работы сервиса
					или заметили ошибки на сайте, просим сообщить разработчиками с
					помощью формы НАШЛИ ОШИБКУ.</h6>
				<h6>Команда CityWays постоянно работает над улучшением качества
					предоставляемых услуг! CityWays не обещает сделать Вашу жизнь
					идеальной, но гарантирует существенно облегчить ежедневные
					трудности городских поездок.</h6>
			</div>
	
   </jsp:attribute>

	<jsp:attribute name="right_column">
     	<div class="contacts_info">
				<h3>
				Контакты:
				</h3>
				<img src="${myContext}/media/css/images/adres.png" />
				<h6>
				ул. Сумская, 17
				</h6>
			<br>
				<img src="${myContext}/media/css/images/telef.png" />
				<h6>
				+38(057)712-32-45
				</h6>
			<br>
				<img src="${myContext}/media/css/images/email.png" />
				<h6>
				<a href="#">support@premiumgis.com</a>
				</h6>
			<br>
				<img src="${myContext}/media/css/images/site.png" />
				<h6>
				<a href="#">www.premiumgis.com</a>
				</h6>
			<br>
			</div>
   </jsp:attribute>

</ui:columns>

