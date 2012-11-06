<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<ui:helps>
	<jsp:attribute name="page_head">
	 	<script type="text/javascript">
				var basicModel = $.parseJSON('${model.getJsonBasicModel()}');
			</script>
	</jsp:attribute>

	<jsp:attribute name="navigation">
        <title>Bus</title>
        <div class="logo_menu">
			<a href="#"><img src="media/css/images/log.png" /></a>
		</div>
      <div class="menu-temp">
<ul class="nav">
<li class="active"><a href="#"> Главная</a></li>
<li class="link"><a href="help.htm"> Помощь</a></li>
<li class="link"><a href="#"> О проекте</a></li>
</ul>
</div>
<div class="icons_menu">
<div class="lang_panel">
				<a href="?lang=rus_RU"><img src="media/css/images/ru.png"
					alt="Ru"></a> 
				<a href="?lang=en_US"><img src="media/css/images/uk.png"
					alt="En"></a> 
				<a href="?lang=uk_UA"><img src="media/css/images/ua.png"
					alt="Ua"></a> 
      </div>
</div>
    </jsp:attribute>

	<jsp:attribute name="content">
   		<jsp:directive.include file="widgets/about_container.jsp" />
    </jsp:attribute>

	<jsp:attribute name="foot">
    </jsp:attribute>
</ui:helps>
