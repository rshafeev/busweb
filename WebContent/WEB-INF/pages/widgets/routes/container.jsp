<%@ page contentType="text/html;charset=UTF-8" language="java"
	import="com.pgis.bus.data.models.*,
	        com.pgis.bus.data.models.route.*,
	        com.pgis.bus.server.models.page.*,
	         com.pgis.bus.server.models.data.*,
	        java.util.ArrayList,
	        com.google.gson.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div id="containerv">
<c:forEach var="routesModel" items="${model.getRoutes()}">
<div id="block_bus">

<div id="bus_label">
<p style="">${routesModel.getRouteType().getName() }</p>
</div>
<c:forEach var="route" items="${routesModel.getRoutes()}">
	<a href="#" class="demo-tip-darkgray"
						title="<b>${route.getName()}</b> <br/>
Номер маршрута: ${route.getName()} <br/>
Стоимость проезда: ${route.getCost()}  <br/>
Интервал движения: 5 мин. <br/>
Время работы: 6:30 - 23:30">${route.getName()}</a>
		</c:forEach>
</div>
</c:forEach>
	<!---->


	<!--<c:forEach var="routesModel" items="${model.getRoutes()}">
		<div class="view-source">
			<div class="link_name" onclick="on_btn_arrow_click(this);">
				<div class="link_p">
					<p>${routesModel.getRouteType().getName() }</p>
					<br>
				</div>
				<div class="link_img">
					<a href="#"><img name='img'
						src='${myContext}/media/css/images/arrow_down.png' /> </a>
				</div>
			</div>
			
			<c:forEach var="route" items="${routesModel.getRoutes()}">
			<div class="hide nocookies">
				<div class="my_text">
					<a href="#" class="demo-tip-darkgray"
						title="<b>${route.getName()}</b> <br/>
Номер маршрута: ${route.getName()} <br/>
Стоимость проезда: ${route.getCost()}  <br/>
Интервал движения: 5 мин. <br/>
Время работы: 6:30 - 23:30">${route.getName()}</a><br />
				</div>
			</div>
				</c:forEach>
		</div>
	</c:forEach>-->
</div>



<!-- 
<div id="contentv">
	<div class="view-source">
		<div class="link_name" onclick="on_btn_arrow_click(this);">
			<div class="link_p">
				<p>Метро</p>
			</div>
			<div class="link_img">
				<a href="#"><img name='img'
					src='${myContext}/media/css/images/arrow_down.png' /> </a>
			</div>
		</div>

		<div class="hide nocookies">
			<div class="my_text">
				<a href="#" class="demo-tip-darkgray"
					title="<b>23-Августа - метростроителей им.Ващенка</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">Алексеевская
					линия</a><br> <a href="#" class="demo-tip-darkgray"
					title="<b>Холодная гора - Пролетарская</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">Холодногорско-заводская</a><br>
				<a href="#" class="demo-tip-darkgray"
					title="<b>Советская - Геров труда</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">Салтовская</a>
			</div>
		</div>
	</div>
	<div class="view-source">
		<div class="link_name" onclick="on_btn_arrow_click(this);">
			<div class="link_p">
				<p>Трамвай</p>
			</div>
			<div class="link_img">
				<img name='img' src='${myContext}/media/css/images/arrow_down.png' />
			</div>
		</div>
		<div class="hide nocookies">
			<div class="my_text">
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>

				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>

			</div>
		</div>
	</div>
	<div class="view-source">
		<div class="link_name" onclick="on_btn_arrow_click(this);">
			<div class="link_p">
				<p>Автобус</p>
			</div>
			<div class="link_img">
				<img name='img' src='${myContext}/media/css/images/arrow_down.png' />
			</div>
		</div>
		<div class="hide nocookies">
			<div class="my_text">
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>

				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>

			</div>
		</div>
	</div>
	<div class="view-source">
		<div class="link_name" onclick="on_btn_arrow_click(this);">
			<div class="link_p">
				<p>Троллейбус</p>
			</div>
			<div class="link_img">
				<img name='img' src='${myContext}/media/css/images/arrow_down.png' />
			</div>
		</div>
		<div class="hide nocookies">
			<div class="my_text">
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>

				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>
				<a href="#" class="demo-tip-darkgray"
					title="<b>ул.23-Августа - прт.Ленина</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">23</a>

			</div>
		</div>
	</div>
</div>-->

