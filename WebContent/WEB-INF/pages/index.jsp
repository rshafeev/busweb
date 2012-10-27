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
        <div class="logo_menu">LOGOTIP</div>
      <div class="menu-temp">
<ul class="nav">
<li class="active"><a href="#"> Главная</a></li>
<li class="link"><a href="#"> Поддержка</a></li>
<li class="link"><a href="#"> Разработчикам</a></li>
</ul>
</div>
<div class="icons_menu">ICONS</div>
       	<!-- <ul>
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
        </ul>  -->    

  
  <!-- <div class="lang_panel">
			<!-- 	<a href="?lang=rus_RU"><img src="media/css/images/ru.png"
				alt="Ru"></a> 
				<a href="?lang=en_US"><img src="media/css/images/uk.png"
				alt="En"></a> 
				<a href="?lang=uk_UA"><img src="media/css/images/ua.png"
				alt="Ua"></a> 
      </div>   -->
    </jsp:attribute>

	<jsp:attribute name="menu">
		   <div class="transparent">
				<div class="block-round-content">
					<table class="menu_table">
						<tbody>
							<tr>
								<td style="width: 171px;">
  									<jsp:directive.include file="widgets/city_table.jsp" />
								</td>
								<td style="width: 250px;">
  									<jsp:directive.include file="widgets/route_table.jsp" />
								</td>
								<td style="width: 145px;">	
  									<jsp:directive.include file="widgets/transp_table.jsp" />
								</td>
								<td style="width: 330px;">
									<div class="mini_table_transp_new">
										<div class="selectTabs_second">
											<ul class="lineTabs">
												<li><a class="active" href="#">Настройки</a></li>
												<li><a href="#">Время</a></li>
												<li><a href="#">Проездной</a></li>
				
											</ul> 
										 <div class="content">
											<div class="tab1">
												<jsp:directive.include file="widgets/settings_panel.jsp" />
											</div>
											<div class="tab2">
  		 										<jsp:directive.include file="widgets/time_panel.jsp" />				
											</div>
											<div class="tab3">								
  												<jsp:directive.include file="widgets/ticket_type.jsp" />
											</div>

										</div>
									</div>
								</div> 
							</td>
						 <td style="width: 180px;">
								<button type="submit" class="button" onclick="on_btn_calculate_click();">
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
   		<jsp:directive.include file="widgets/container.jsp" />
    </jsp:attribute>

	<jsp:attribute name="foot">
    </jsp:attribute>
</ui:page>
