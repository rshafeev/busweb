<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<ui:page>
	<jsp:attribute name="page_head">
	 	<script type="text/javascript">
				var basicModel = $.parseJSON('${model.getJsonBasicModel()}');
			</script>
	</jsp:attribute>

	<jsp:attribute name="navigation">
        <title>Bus</title>
          <div class="menu">
       	<ul>
          <li><a class="active" href="home_page.htm"><span><spring:message
								code="welcome.home" text="default text" /></span></a></li>
          <li><a href="programms.htm"><span><spring:message
								code="welcome.programms" text="default text" /></span></a></li>
          <li><a href="service.htm"><span><spring:message
								code="welcome.servise" text="default text" /></span></a></li>
          <li><a href="support.htm"><span><spring:message
								code="welcome.support" text="default text" /></span></a></li>
          <li><a href="contact_us.htm"><span><spring:message
								code="welcome.contact_us" text="default text" /></span></a></li>
								

 
        </ul>     
  
      </div> 
      <div class="lang_panel">
				<a href="?lang=rus_RU"><img src="media/images/ru.png" alt="Ru"></a> 
				<a href="?lang=en_US"><img src="media/images/uk.png" alt="En"></a> 
				<a href="?lang=uk_UA"><img src="media/images/ua.png" alt="Ua"></a> 
      </div>    
    </jsp:attribute>


	<jsp:attribute name="menu">
				<div class="transparent">
								<div class="block-round-content">
						<table class="menu_table" cellpadding="10" cellspacing="10">
							<tbody>
								<tr>
									<td style="width: 171px;">
										<div class="mini_table_town">
											<div class="mini_table_town_center">
												<div class="mini_table-town_top">
													<p style="font: normal normal 400 11px/21px Arial;">
														<b><spring:message code="welcome.city"
														text="default text" /> :</b>
														
													</p>
												</div>
	
											 <form name="testform">

 													<select id="selectbox_city" class="selectbox"
												name="websites" size="1"
												onChange="on_change_selectbox_city()">
													</select> 
												</form> 
											</div>
										</div>
									</td>

									<td style="width: 250px;">
										<div class="mini_table_route">
											<div class="mini_table_route_center">
												<div class="mini_table-route_top">
													<p style="font: normal normal 400 11px/21px Arial;">
														<!-- <b>T R A V E L </b> <b style="margin-left: 10px;">L IN E :</b> -->
														<b> <spring:message code="welcome.travel_line"
														text="default text" /> : </b>
													</p>
												</div>
												<table class="b-search__points" >
													<tbody>
														<tr>
															<td class="b-search__point-name">
																<div class="A_search" style="margin-left: 3px;" >
																	<p style="margin-left: 3px; font-size: 11px; margin-top:5px;">A</p>
																</div>
															</td>
															<td class="b-search__point-input"><span
														class="b-form-input__box"> 
							<input id="editboxA" class="a-form-input__input"
															style="margin-bottom: 2px; margin-top: 25px; margin-left: 5px; width: 200px;"></input>
															</span></td>
														</tr>
														<tr class="b-search__point">
															<td class="b-search__point-name">
																<div class="B_search" style="margin-left: 3px;">
																	<p style="margin-left: 3px; margin-top:-3px; font-size: 11px;">B</p>
																</div>
															</td>
															<td class="b-search__point-input"><span
														class="b-form-input__box"> 
							<input id="editboxB" class="b-form-input__input" id="uniq162"
															autocomplete="off"
															style="margin-bottom: 5px; margin-left: 5px; width: 200px;"></input>
													</span></td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</td>

									<td style="width: 145px;">
										<div class="mini_table_transp">
											<div class="mini_table_transp_center">
												<div class="mini_table-transp_top">
													<p
												style="font: normal normal 400 11px/21px Arial; height: 18px;">
														<b><spring:message code="welcome.type"
														text="default text" /> </b> <b style="margin-left:5px;"> <spring:message code="welcome.transport"
														text="default text" /> : </b> 
													</p>
												</div>
												<div class="mini_table_transp_temp" style="height: 20px;"></div>
												<div class="mini_table_transp_list"
											style="width: 150px; margin-left: 15px;">
													<table align="center"
												style="margin-top: 5px; margin-left: 3px; margin-right: 3px;">
														<tr>
															<a href="#" onclick="on_btn_metro_click(this);">
																<span><img src="media/images/metro_selected.png"></img></span>
															</a>
														</tr>
														<tr>
															<a href="#" onclick="on_btn_bus_click(this)">
																<img src="media/images/bus_selected.png" />
															</a>
														</tr>
														<tr>
															<a href="#" onclick="on_btn_troll_click(this)">
																<img src="media/images/trol_selected.png" />
															</a>
														</tr>
														<tr>
															<a href="#" onclick="on_btn_tram_click(this)">
																<img src="media/images/tram_selected.png"></img>
															</a>
														</tr>
													</table>
												</div>
											</div>
										</div>

									</td>

									<td style="width: 250px;">
								
											<!--  <div class="mini_table_marsh_center">
												<div class="mini_table_marsh_top"
											style="margin-top: -3px; position: absolute; margin-left: 662px; width: 80px; height: 18px;">
													<p style="font: normal normal 400 11px/21px Arial;">
														<b><spring:message code="welcome.options"
														text="default text" />:</b>
													</p>
												</div>
												<div class="mini_table_transp_temp" style="height: 5px;"></div>
												<div class="mini_table_transp_list"
											style="width: 120px; height: 30px;">
													<div class="mini_temp" style="height: 8px;"></div>
													<p style="font-size: 12px; font-family:"Verdana", "Arial", "Tahoma";">
														<input type="radio" name="labeled" value="1"
													id="labeled_1" /><label for="labeled_1"
													style="margin-left: 5 px;"><spring:message
														code="welcome.label_optimal" text="default text" /></label>
													</p>
													<p style="font-size: 12px; font-family:"Verdana", "Arial", "Tahoma"; ">
														<input type="radio" name="labeled" value="2"
													id="labeled_2" /><label for="labeled_2"
													style="margin-left: 5 px;"><spring:message
														code="welcome.label_fast" text="default text" /></label>
													</p>
													<p style="font-size: 12px; font-family:"Verdana", "Arial", "Tahoma";">
														<input type="radio" name="labeled" value="3"
													id="labeled_3" /><label for="labeled_3"
													style="margin-left: 5 px;"><spring:message
														code="welcome.label_cheep" text="default text" /></label>
													</p>
												</div>
											</div>-->
									
							<div class="mini_table_transp_new" >
							
						 	<div class="selectTabs_second">
			<ul class="lineTabs" >
				<li><a class="active" href="#">Настройки</a></li>
				<li><a href="#">Проездной</a></li>
				<li><a href="#">Время</a></li>
			</ul> 
			 <div class="content">
				<div class="tab1">
				<!--  
																		<p style="font-size: 12px; font-family:"Verdana", "Arial", "Tahoma";">
														<input type="radio" name="labeled" value="1"
													id="labeled_1" /><label for="labeled_1"
													style="margin-left: 5 px;cursor: pointer;"><spring:message
														code="welcome.label_optimal" text="default text" /></label>
													</p>
																										<p style="font-size: 12px; font-family:"Verdana", "Arial", "Tahoma"; ">
														<input type="radio" name="labeled" value="2"
													id="labeled_2" /><label for="labeled_2"
													style="margin-left: 5 px; cursor: pointer;"><spring:message
														code="welcome.label_fast" text="default text" /></label>
													</p>
													<p style="font-size: 12px; font-family:"Verdana", "Arial", "Tahoma";">
														<input type="radio" name="labeled" value="3"
													id="labeled_3" /><label for="labeled_3"
													style="margin-left: 5 px;cursor: pointer;"><spring:message
														code="welcome.label_cheep" text="default text" /></label>
													</p>-->	
<h3 style="text-align: center;font-size: 12px;padding-bottom: 3px;padding-top: 3px; font-family:"Verdana", "Arial", "Tahoma"; ">
Какой ищем маршрут?
</h3>
												
  <table cellpadding="2" cellspacing="0" class="menu_options_table">
    <tbody>
      <tr>
        <td class="padding_right">
          <label for="optimal" id="optimal_tip_label" title="">оптимальный</label>
        </td>
        <td>
          <input type="radio" name="way_options" id="optimal" value="optimal" checked="checked">
        </td>
        <td class="padding_right">
          <label for="fast" id="fast_tip_label" title="">быстрый</label>
        </td>
        <td>
          <input type="radio" name="way_options" id="fast" value="fast">
        </td>
      </tr>
      <tr>
        <td>
          <label for="cheap" id="cheap_tip_label" style="margin-left: 5px; cursor: pointer;"title="">дешевый</label>
        </td>
        <td>
          <input type="radio" name="way_options" id="cheap" value="cheap">
        </td>
        <td>
          <label for="direct" id="direct_tip_label" style="margin-left: 5px; cursor: pointer;" title="">без пересадок</label>
        </td>
        <td>
          <input type="checkbox" id="direct">
        </td>
      </tr>
    </tbody>
  </table>

									</div>
				<div class="tab2" >

<!-- <p  class="line" style="font-size: 12px; font-family:"Verdana", "Arial", "Tahoma"; ">
														<input type="radio" name="labeled" value="4"
													id="labeled_4" /><label for="labeled_4"
													style="margin-left: 5 px;cursor: pointer;">Cтуденческий</label>
													</p>
													<p class="line"style="font-size: 12px; font-family:"Verdana", "Arial", "Tahoma";">
														<input type="radio" name="labeled" value="5"
													id="labeled_5" /><label for="labeled_5"
													style="margin-left: 5 px;cursor: pointer;">Льготный</label>
													</p>
													<input type="number" name="points" min="1" max="10" /> -->
													

  
  
    <h3 style="text-align: center;font-size: 12px;padding-bottom: 3px;padding-top: 3px; font-family:"Verdana", "Arial", "Tahoma"; ">
Наличие проездного
</h3>
												
  <table cellpadding="2" cellspacing="0" class="menu_options_table">
    <tbody>
      <tr>
        <td class="padding_right">
          <label for="lgot" id="lgot_label" title="">льготый</label>
        </td>
        <td>
          <input type="radio" name="proezd" id="lgot" value="lgot" checked="checked">
        </td>
        <td class="padding_right">
          <label for="tram" id="tram_label" title="">на трамвай</label>
        </td>
        <td>
          <input type="radio" name="proezd" id="tram" value="tram">
        </td>
      </tr>
      <tr>
        <td>
          <label for="stud" id="stud_label" style="margin-left: 5px; cursor: pointer;"title="">студенческий</label>
        </td>
        <td>
          <input type="radio" name="proezd" id="stud" value="stud">
        </td>
        <td>
          <label for="troll" id="troll_label" style="margin-left: 5px; cursor: pointer;" title="">на троллейбус</label>
        </td>
        <td>
           <input type="radio" name="proezd" id="troll" value="troll">
        </td>
      </tr>
    </tbody>
  </table>

													
				</div>
				<div class="tab3">
				<p style="font-size: 11px; display:inline;color: black;">Время выезда. </p>
				<p style="font-size: 10px; margin-left: 45px;display:inline;color: black;">часы:</p><select style="width:40px; display:inline;margin-left: 10px;margin-top: 10px;">
  <option>01</option>
  <option>02</option>
  <option>03</option>
  <option>04</option>
  <option>05</option>
    <option>06</option>
  <option>07</option>
  <option>08</option>
  <option>09</option>
  <option>10</option>
    <option>11</option>
  <option>12</option>
  <option>13</option>
  <option>14</option>
  <option>15</option>
    <option>16</option>
  <option>17</option>
  <option>18</option>
  <option>19</option>
  <option>20</option>
    <option>21</option>
  <option>22</option>
  <option>23</option>
  <option>24</option>
</select> 
<p style="font-size: 10px;color: black; margin-left: 0px;display:inline;">мин:</p>
    <select style="width:40px; display:inline; ">
  <option>00</option>
  <option>05</option>
  <option>10</option>
  <option>15</option>
  <option>20</option>
  <option>25</option>
    <option>30</option>
  <option>35</option>
  <option>40</option>
  <option>45</option>
  <option>50</option>
    <option>55</option>


</select>
		<p style="font-size: 11px;display:inline; color: black;">День недели: </p>		
		<select name=day_s size=1 style="width:104px; margin-top:7px; display:inline;margin-left: 55px;font-size: 11px;" >
<option value=1 selected>Понедельник</option>
<option value=2>Вторник</option>
<option value=3 >Среда</option>
<option value=4>Четверг</option>
<option value=5>Пятница</option>
<option value=6>Суббота</option>
<option value=7>Воскресенье</option>
</select>
				</div>

			</div>
		</div>
									<td>
										<button style="width: auto; height: 40px; margin-left: 50px;"
									type="submit" class="button"
									onclick="on_btn_calculate_click(); ">
									<spring:message code="welcome.btn_calc" text="default text" />
								</button>
      
    
									</td>
								</tr>
							</tbody>
						</table>				
					</div>
					<span class="r4"></span><span class="r3"></span><span class="r2"></span><span
				class="r1"></span>
				</div>
    </jsp:attribute>
	<jsp:attribute name="content">

<div id="container">
<div id="wrapper">
<div id="content">
<div id="map_canvas"
						style="width: 98%; height: 100%; border: 2px solid white;"></div>
</div>
</div>
<div id="navigation">
</div>
 <div id="extra">										
 <div id="arrow_div">
		<a href="#"><img style="margin-top: 250px;"
						onclick="on_right_panel_show();" name='img'
						src='media/images/arrow_left.png' /></a>
					
		</div>	
 	<div id="test" style="display: none; width: 100%; height: 100%;">
					<h2 style="color: black; margin: 10 0 10 0;">Появляется текст</h2>
					<h2 style="color: black; margin: 10 0 10 0;">Появляется текст</h2>
					<h2 style="color: black; margin: 10 0 10 0;">Появляется текст</h2>

				</div>	
</div>	


</div> 

    </jsp:attribute>

	<jsp:attribute name="foot">
  
    </jsp:attribute>
</ui:page>