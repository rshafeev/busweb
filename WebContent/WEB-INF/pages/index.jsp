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
				<a href="?lang=rus_RU"><img src="media/css/images/ru.png"  alt="Ru"></a> 
				<a href="?lang=en_US"><img src="media/css/images/uk.png"  alt="En"></a> 
				<a href="?lang=uk_UA"><img src="media/css/images/ua.png"  alt="Ua"></a>
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
														text="default text" /> </b>
														
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
														<b> <spring:message code="welcome.travel_line"
														text="default text" />  </b>
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
														text="default text" />  </b> 
													</p>
												</div>
												<div class="mini_table_transp_temp" style="height: 20px;"></div>
												<div class="mini_table_transp_list"
											style="width: 190px; margin-left: 15px;"><a href="#" onclick="on_btn_metro_click(this);">
																<img src="media/css/images/metro_selected.png"></img>
															</a>
												
												
															<a href="#" onclick="on_btn_bus_click(this)">
															<img src="media/css/images/bus_selected.png" />
															</a>
													

														
															<a href="#" onclick="on_btn_troll_click(this)">
																<span><img src="media/css/images/trol_selected.png" /></span>
															</a>
														
														
															<a href="#" onclick="on_btn_tram_click(this)">
																<span><img src="media/css/images/tram_selected.png"></img></span>
															</a>
																<a href="#" onclick="on_btn_auto_click(this)">
																<span><img style="margin-left:8px;" src="media/css/images/auto.png"></img></span>
															</a>
													<table 
												style="margin-top: 5px; margin-left: 3px; margin-right: 3px; ">
													
															
																																					<tr>
													
													</table>
												</div>
											</div>
										</div>

									</td>

								 	<td style="width: 250px;">
								

									
							<div class="mini_table_transp_new" >
							
						 	 <div class="selectTabs_second">
			<ul class="lineTabs" >
				<li><a class="active" href="#">Настройки</a></li>
				<li><a href="#">Проездной</a></li>
				<li><a href="#">Время</a></li>
			</ul> 
			 <div class="content">
				<div class="tab1">
<h3 style="text-align: center;font-size: 12px;padding-bottom: 3px;padding-top: 3px; ">
Какой ищем маршрут?
</h3>
												
  <table cellpadding="2" cellspacing="0" class="menu_options_table">
    <tbody>
      <tr>
        <td>
          <input type="radio" name="way_options" id="optimal" value="optimal" checked="checked">
        </td>
                <td class="padding_right">
          <label for="optimal" id="optimal_tip_label" title="">оптимальный</label>
        </td>
                <td>
          <input type="radio" name="way_options" id="fast" value="fast">
        </td>
        <td class="padding_right">
          <label for="fast" id="fast_tip_label" title="">быстрый</label>
        </td>
      </tr>
      <tr>
              <td>
          <input type="radio" name="way_options" id="cheap" value="cheap">
        </td>
        <td>
          <label for="cheap" id="cheap_tip_label" style="margin-left: 5px; cursor: pointer;"title="">дешевый</label>
        </td>
                <td>
          <input type="checkbox" id="direct">
        </td>
        <td>
          <label for="direct" id="direct_tip_label" style="margin-left: 5px; cursor: pointer;" title="">без пересадок</label>
        </td>

      </tr>
    </tbody>
  </table>

									</div>
				<div class="tab2" >
										
  <table cellpadding="2" cellspacing="0" class="menu_options_table">
    <tbody>
      <tr>
              <td>
          <input type="radio" name="proezd" id="no_lgot" value="no_lgotv" checked="checked">
        </td>
        <td class="padding_right">
          <label for="no_lgot" id="lgot_label" title="">отсутствует</label>
        </td>
        <td>
           <input type="checkbox" id="tram">
        </td>
        <td class="padding_right">
          <label for="tram" id="tram_label" title="">на трамвай</label>
        </td>

      </tr>
      <tr>
              <td>
          <input type="radio" name="proezd" id="lgot" value="lgot">
        </td>
        <td>
          <label for="lgot" id="lgot_label"style="margin-left: 5px; cursor: pointer;"title="">льготый</label>
        </td>
                <td>
          <input type="checkbox" id="troll">
        </td>
        <td>
          <label for="troll" id="troll_label" style="margin-left: 5px; cursor: pointer;" title="">на троллейбус</label>
        </td>

      </tr>
            <tr>
              <td>
          <input type="radio" name="proezd" id="stud" value="stud">
        </td>
        <td>
          <label for="stud" id="stud_label" style="margin-left: 5px; cursor: pointer;"title="">студенческий</label>
        </td>


      </tr>
    </tbody>
  </table>		
  						
</div>
<div class="tab3">
   <jsp:directive.include  file="widgets/time_panel.jsp"/>
</div>

</div>
</div>
</div> 

									  <td>
										<button style="width: auto; height: 40px; margin-left: 50px;"
									type="submit" class="button"
									onclick="on_btn_calculate_click();">
									<spring:message code="welcome.btn_calc" text="default text" />
								</button>
									</td>   
								</tr>
							</tbody>
						</table>				
					</div>

				</div>
    </jsp:attribute>
	<jsp:attribute name="content">
 
 <div id="container">
<div id="wrapper">
<div id="content">
<div id="map_canvas" style="width: 98%; height: 100%; border: 2px solid white;"></div>
</div>
</div>
<div id="navigation">
</div>
 <div id="extra">										
 <div id="arrow_div">
		<a href="#"><img style="margin-top: 250px;"
						onclick="on_right_panel_show();" name='img'
						src='media/css/images/arrow_left.png' /></a>
					
		</div>	
 	<div id="ways_panel" style="display: none; width: 100%; height: 100%;">
				
	</div>	
</div>	
 

</div>   
  
    </jsp:attribute>

	<jsp:attribute name="foot">
  
    </jsp:attribute>
</ui:page>
