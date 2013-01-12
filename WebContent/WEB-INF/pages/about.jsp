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
			function loadSrc(src, _this) {
				console.log(src);
				console.log(this);
				_this.src = src;
			};
		</script>
	</jsp:attribute>
	<jsp:attribute name="left_column">
   
			<div class="text_info">
				<h3><spring:message code="about.title" text="default text" /></h3>
				<h6 style="margin-top:20px;">Передвижение по городу является неотъемлимой частью нашей повседневной жизни. 
				Каждй день нам необходимо перемещаться между разными точками города.
				И часто возникают вопросы: <b style="   color:#5794BF; font-weight: normal;">как добраться в тот или иной пункт? как быстрей доехать? где сделать
				пересадку?</b> и т.д.</h6>
				<h6>В наше время существует достаточно много сайтов, на которых можно найти информацию об общественном транспорте 
				любого города Украины. Однако сайты не смогут ответить на наши вопросы.</h6>
				<h6>Именно поэтому у нас возникла идея создать интернет-сервис с маршрутами общественного транспорта Украины.</h6>
				
				<h4><spring:message code="about.details" text="default text" /> CityWays</h4>
				<h6><b style="color:#5794BF;font-size: 16px;">CityWays</b> - это интернет-сервис, который поможет Вам добраться, на городском транспорте либо
				на автомобиле, с одной точки города в другую.</h6>
				<h6>С помощью <b style="color:#5794BF;">CityWays</b> Вы сможете построить и выбрать наиболее оптимальный по стоимости
				и времени маршрут.</h6>
			<h6>Благодаря расширенным настройкам появляется возможность построения маршрута с учетов дня недели и времени
			выезда, а также с учетом проездного, льготного или студенческого.</h6>
			</div>
	
   </jsp:attribute>

	<jsp:attribute name="right_column">
     	<div class="contacts_info">
				<h3>
				<spring:message code="about.contacts" text="default text" />:
				</h3>
				<div class="inf">
				<div class="img_div">
			<img style="padding: 5px;"
						src="${myContext}/media/css/images/adres.png" /><br>
					<img style="padding: 3px;"
						src="${myContext}/media/css/images/Phone.png" /><br>
											<img style="padding: 3px;"
						src="${myContext}/media/css/images/phone.png" /><br>
						<img style="padding: 4px;"
						src="${myContext}/media/css/images/vkontakte.png" height="20" width="20" /><br>
						<img style="padding: 4px;"
						src="${myContext}/media/css/images/facebook.png" height="20" width="20" /><br>
						<img style="padding: 4px;"
						src="${myContext}/media/css/images/twitter.png" height="20" width="20" /><br>
				<img style="padding: 4px;"
						src="${myContext}/media/css/images/email.png" /><br>
					<img style="padding: 4px;"
						src="${myContext}/media/css/images/site.png" /><br>
				</div>
				<div class="text_div">
				 <h6>ул. Сумская, 17</h6>
				<h6>+38(057)712-32-45</h6>
				<h6>+38(067)235-56-14</h6>
				<h6><a href="http://vk.com/cityways_public">vk.com/cityways_public</a></h6>
				<h6><a href="http://www.facebook.com/pages/City-Ways/320120854768477">facebook.com/pages/City-Ways</a></h6>
				<h6><a href="https://twitter.com/City_Ways">twitter.com/City_Ways</a></h6>
				<h6><a href="#">support@premiumgis.com</a></h6>
				<h6><a href="#">www.premiumgis.com</a></h6> 
			</div>
			</div>
			</div>
   </jsp:attribute>

</ui:columns>

