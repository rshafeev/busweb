<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui"%>

<ui:page>
	<jsp:attribute name="menu">
        <title>Bus</title>
          <div class="menu">
       	 <ul>
          <li><a class="active" href="home_page.htm"><span>Home</span></a></li>
          <li><a href="programms.htm"><span>Programms</span></a></li>
          <li><a href="service.htm"><span>Service</span></a></li>
          <li><a href="support.htm"><span>Support</span></a></li>
          <li><a href="contact_us.htm"><span>Contact us</span></a></li>
        </ul>       
      </div>     
    </jsp:attribute>


	<jsp:attribute name="head">
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
														<b>C I T Y :</b>
													</p>
												</div>
												<form name="testform">
													<select class="styled" name="websites" size="1"
												id="address" onChange="codeAddress()">
														<option selected value="Kharkov">Kharkov</option>
														<option value="Kiev">Kiev</option>
														<option value="Doneck">Doneck</option>
													</select>
												</form>
											</div>
										</div>
									</td>

									<td style="width: 215px;">
										<div class="mini_table_route">
											<div class="mini_table_route_center">
												<div class="mini_table-route_top">
													<p style="font: normal normal 400 11px/21px Arial;">
														<b>T R A V E L </b> <b style="margin-left: 10px;">L IN E :</b>
													</p>
												</div>
												<table class="b-search__points">
													<tbody>
														<tr>
															<td class="b-search__point-name">
																<div class="A_search">
																	<p style="margin-left: 3px; font-size: 11px;">A</p>
																</div>
															</td>
															<td class="b-search__point-input"><span
														class="b-form-input__box"> <input
															style="margin-bottom: 2px; margin-top: 15px; width: 200px;"></input>
															</span></td>
														</tr>
														<tr class="b-search__point">
															<td class="b-search__point-name">
																<div class="B_search">
																	<p style="margin-left: 3px; font-size: 11px;">B</p>
																</div>
															</td>
															<td class="b-search__point-input"><span
														class="b-form-input__box"> <input
															class="b-form-input__input" id="uniq162"
															autocomplete="off"
															style="margin-bottom: 5px; width: 200px;"></input></span></td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</td>

									<td style="width: 145px;">
										<div class="mini_table_transp">
											<div class="mini_table_transp_center">
												<div class="mini_table-transp_top"
											style="margin-top: -3px; position: absolute; margin-left: 12px;">
													<p
												style="font: normal normal 400 11px/21px Arial; height: 18px;">
														<b>T R A N S P O R T </b> <b style="margin-left: 10px;">T Y P E :</b>
													</p>
												</div>
												<div class="mini_table_transp_temp" style="height: 20px;"></div>
												<div class="mini_table_transp_list"style="width: 150px; margin-left: 15px;">
													<table align="center"
												style="margin-top: 5px; margin-left: 3px; margin-right: 3px;">
														<tr>
															<a href="#" onclick="change_image_metro(this);">
																<span><img src="media/images/metro_selected.png"></img></span>
															</a>
														</tr>
														<tr>
															<a href="#" onclick="change_image_bus(this)">
																<img src="media/images/bus_selected.png" />
															</a>
														</tr>
														<tr>
															<a href="#" onclick="change_image_troll(this)">
																<img src="media/images/trol_selected.png" />
															</a>
														</tr>
														<tr>
															<a href="#" onclick="change_image_tram(this)">
																<img src="media/images/tram_selected.png"></img>
															</a>
														</tr>
													</table>
												</div>
											</div>
										</div>

									</td>

									<td style="width: 170px;">
										<div class="mini_table_marsh">
											<div class="mini_table_marsh_center">
												<div class="mini_table_marsh_top"
											style="margin-top: -3px; position: absolute; margin-left: 662px; width: 80px; height: 18px;">
													<p style="font: normal normal 400 11px/21px Arial;">
														<b>O P T I O N S :</b>
													</p>
												</div>
												<div class="mini_table_transp_temp" style="height: 5px;"></div>
												<div class="mini_table_transp_list"
											style="width: 120px; height: 30px;">
													<div class="mini_temp" style="height: 8px;"></div>
													<p style="font-size: 12px; font-family:"Verdana", "Arial", "Tahoma";">
														<input type="radio" name="labeled" value="1"
													id="labeled_1" /><label for="labeled_1"
													style="margin-left: 5 px;">Optimal</label>
													</p>
													<p style="font-size: 12px; font-family:"Verdana", "Arial", "Tahoma"; ">
														<input type="radio" name="labeled" value="2"
													id="labeled_2" /><label for="labeled_2"
													style="margin-left: 5 px;">Fast</label>
													</p>
													<p style="font-size: 12px; font-family:"Verdana", "Arial", "Tahoma";">
														<input type="radio" name="labeled" value="3"
													id="labeled_3" /><label for="labeled_3"
													style="margin-left: 5 px;">Cheep</label>
													</p>
												</div>
											</div>
									
							</td>
									<td>
										<button style="width: 120px; height: 40px; margin-left: 50px;"
									type="submit" class="button" onclick="btn_calculate_click();">Calculate</button>
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
<div id="map_canvas" style="width: 99%; height: 100%; border: 2px solid white;"></div>
</div>
</div>
<div id="navigation">
</div>
 <div id="extra">										
 <div id="arrow_div">
		<a href="#"><img style="margin-top: 250px;" onclick="changeImage();"
						name='img' src='media/images/arrow_left.png' /></a>
					
		</div>	
		<div id="test" style="display: none; width: 100%; height:100%; ">
					<h2 style="color: black; margin:10 0 10 0;">Появляется текст</h2>
					<h2 style="color: black; margin:10 0 10 0;">Появляется текст</h2>
					<h2 style="color: black;margin:10 0 10 0;">Появляется текст</h2>

				</div>	
</div>	


</div> 

    </jsp:attribute>

	<jsp:attribute name="foot">
  
    </jsp:attribute>
</ui:page>