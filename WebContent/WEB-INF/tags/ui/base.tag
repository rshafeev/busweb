<%@ tag body-content="empty"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ attribute name="page_head" required="true" fragment="true"%>
<%@ attribute name="content" required="true" fragment="true"%>
<%@ attribute name="foot" required="true" fragment="true"%>

<c:set var="myContext" value="${pageContext.request.contextPath}" />

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf8" />
<meta http-equiv="Cache-control" content="no-cache">
<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
<script src="media/js/jquery.tinyscrollbar.min.js"></script>
<script src="media/js/jquery.json-2.3.js"></script>
<script src="media/js/WidgetHelpers.js"></script>
<script type="text/javascript">
	includeCSSFile("media/css/basic", "basic", []);
	function updateContainerSize() {
		$("#container").css('height', getWindowSize().height - 35);
	};
	$(document).ready(function() {
		$(window).bind("resize", function(e) {
			updateContainerSize();
		});
		updateContainerSize();
	});
</script>
<script src="http://vkontakte.ru/js/api/openapi.js"
	type="text/javascript"></script>
<script type="text/javascript" src="//vk.com/js/api/openapi.js?66"></script>
<script type="text/javascript">
	VK.init({
		apiId : 3255131,
		onlyWidgets : true
	});
</script>

<jsp:invoke fragment="page_head" />
</head>

<body>
	<div id="ajax_js"></div>
	<div class="main-wrap clearfix">
		<div class="page_layout">
			<div class="portal-headline">
				<div class="header">
					<div class="block_header">
						<div class="logo_menu">
							<a href="#"><img src="media/css/images/log.png" /></a>
						</div>
						<div class="menu-temp">

							<ul class="nav">
								<c:forEach var="link"
									items="${model.getNavigationModel().getLinks()}">
									<c:choose>
										<c:when test="${link.isSelected()}">
											<li class="active"><a
												href="${myContext}/${link.getUrl()}">${link.getLabel()}</a>
											</li>
										</c:when>
										<c:otherwise>
											<li><a href="${myContext}/${link.getUrl()}">${link.getLabel()}</a>
											</li>
										</c:otherwise>
									</c:choose>
								</c:forEach>
							</ul>
						</div>

						<div class="icons_menu">
							
							<div class="fb_panel">
								<div id="fb-root"></div>
								<script>
									(function(d, s, id) {
										var js, fjs = d.getElementsByTagName(s)[0];
										if (d.getElementById(id))
											return;
										js = d.createElement(s);
										js.id = id;
										js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
										fjs.parentNode.insertBefore(js, fjs);
									}(document, 'script', 'facebook-jssdk'));
								</script>
								 
								<div class="fb-like" data-href="http://ways.in.ua"
									data-send="false" data-layout="button_count" data-width="90"
									data-show-faces="true" data-font="arial"></div> 
							</div>
							<div class="lang_panel">

								<!-- 				<div id="vk_like"></div>
<script type="text/javascript">
VK.Widgets.Like("vk_like", {type: "full"});
</script> -->
								<div class="g-plusone" data-size="medium"
									data-annotation="inline" data-width="120"></div>
								<script type="text/javascript">
									(function() {
										var po = document.createElement('script');
										po.type = 'text/javascript';
										po.async = true;
										po.src = 'https://apis.google.com/js/plusone.js';
										var s = document.getElementsByTagName('script')[0];
										s.parentNode.insertBefore(po, s);
									})();
								</script>


								<a href="?lang=rus_RU"><img src="media/css/images/ru.png"
									alt="Ru"></a> <a href="?lang=en_US"><img
									src="media/css/images/uk.png" alt="En"></a> <a
									href="?lang=uk_UA"><img src="media/css/images/ua.png"
									alt="Ua"></a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="main_content">
				<div id="container">
					<jsp:invoke fragment="content" />
				</div>
			</div>

			<div class="footer">
				<jsp:invoke fragment="foot" />
			</div>
		</div>
	</div>
</body>
</html>