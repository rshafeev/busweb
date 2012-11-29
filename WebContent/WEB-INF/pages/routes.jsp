<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="myContext" value="${pageContext.request.contextPath}" />

<ui:base>
	<jsp:attribute name="page_head">	

	<script type="text/javascript"
			src="http://maps.google.com/maps/api/js?sensor=false&libraries=drawing"></script>
	<script src="${myContext}/media/js/libs/selectbox.js"></script>
	<script src="${myContext}/media/js/libs/jquery.poshytip.js"></script>
	<script src="${myContext}/media/js/routes/routes.js"></script>	
	<script src="${myContext}/media/js/routes/RSchems.js"></script>
	<script type="text/javascript">
		includeCSSFile("${myContext}/media/css/pages", "routes", []);
		$(document).ready(function() {
			$('.view-source .hide').hide();
			$('.view-source .link_name').toggle(function() {
				$(this).siblings('.hide').stop(false, true).slideDown(100);
			}, function() {
				$(this).siblings('.hide').stop(false, true).slideUp(100);
			});
			initialize();
		});
		$(function() {
			$('.demo-tip-darkgray').poshytip({
				className : 'tip-darkgray',
				showTimeout : 1,
				bgImageFrameSize : 11,
				offsetX : -25
			});
		});
	</script>

	</jsp:attribute>

	<jsp:attribute name="content">
	<div id="routes_map">
		<div id="routes_wrapper">
			<div id="map_canvas"></div>
		</div>
		<div id="routes_extra">
			 <div id="routes_arrow_div" onmousedown="return false"
					onclick="on_right_panel_show(this);">
			<a href="#"><img name='img_panel'
						src='${myContext}/media/css/images/arrow_left.png' /></a>
			
			</div> 
			<div id="routes_panel"> 
			<div class="select_box"
						style="width: 100px; height: 30px; background: red; margin-left: 5px;">
					<form name="testform">
			<select id="selectbox_city" class="selectbox" name="websites"
								size="1" onChange="on_change_selectbox_city()">
			</select>
		</form>
		</div>
			<div id="containerv">
	<div id="contentv">
	<div class="view-source">
<div class="link_name" onclick="on_btn_arrow_click(this);">
									<div class="link_p">
										<p>Метро </p>
									</div>
				<div class="link_img">
				<a href="#"><img name='img'
											src='${myContext}/media/css/images/arrow_down.png' />	</a>	
				</div>			
								</div>
								
<div class="hide nocookies">
<div class="my_text">		
<a href="#" class="demo-tip-darkgray"
											title="<b>23-Августа - метростроителей им.Ващенка</b> <br>
Номер маршрута: 23 <br>
Стоимость проезда: 2.50 <br>
Интервал движения: 5 мин. <br>
Время работы: 6:30 - 23:30">Алексеевская линия</a><br>
<a href="#" class="demo-tip-darkgray"
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
	<div class="view-source">
<div class="link_name" onclick="on_btn_arrow_click(this);">
								<div class="link_p">	<p>Трамвай</p>
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
								<div class="link_p">	<p>Автобус</p>
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
