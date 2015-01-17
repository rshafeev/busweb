<%@ tag body-content="empty" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ attribute name="page_head" required="true" fragment="true" %>
<%@ attribute name="content" required="true" fragment="true" %>
<%@ attribute name="foot" required="true" fragment="true" %>

<c:set var="myContext" value="${pageContext.request.contextPath}"/>

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf8"/>
    <meta http-equiv="Cache-control" content="no-cache">
    <script
            src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
    <script src="${myContext}/media/js/libs/jquery.tinyscrollbar.min.js"></script>
    <script src="${myContext}/media/js/libs/jquery.json-2.3.js"></script>
    <script src="${myContext}/media/cityways/basic.js"></script>

    <script type="text/javascript">
        (function () {
            var cssFile = cityways.helper.document.selectCSSFile("${myContext}/media/css/",
                    [{
                        name: "basic.css"
                    }]);
            cityways.helper.document.appendCSSFile(cssFile, "write");

        })();

        $(document).ready(function () {
            function updateContainerSize() {
                $("#container").css('height', cityways.util.getWindowSize().height - 35);
            };
            updateContainerSize();
            $(window).bind("resize", function (e) {
                updateContainerSize();
            });

        });

    </script>

    <script>
        $(function () {
            /* выбор города */
            $('.delivery_list').hover(function () {
                $(".cities_list").slideToggle('fast');
            });
            $('ul.cities_list li').click(function () {
                var tx = $(this).html();
                var tv = $(this).attr('alt');
                $(".cities_list").slideUp('fast');
                $(".delivery_list span").html(tx);
                $(".delivery_text").html(tv);
            });
        })
    </script>
    <jsp:invoke fragment="page_head"/>
</head>

<body>
<div id="ajax_js"></div>
<div class="main-wrap clearfix">
    <div class="page_layout">
        <div class="portal-headline">
            <div class="header">
                <div class="block_header">
                    <div class="logo_menu">
                        <a href="#">
                            <img style="margin-top:8px;margin-left:10px;"
                                 src="${myContext}/media/css/images/citylogotip.png"/></a>
                    </div>
                    <div class="menu-temp">

                        <ul class="nav">
                            <c:forEach var="link"
                                       items="${model.getNavigationModel().getLinks()}">
                                <c:choose>
                                    <c:when test="${link.isSelected()}">
                                        <li class="active"
                                            onclick="document.location.href='${myContext}/${link.getUrl()}'">
                                            <a>${link.getLabel()}</a>
                                        </li>
                                    </c:when>
                                    <c:otherwise>
                                        <li
                                                onclick="document.location.href='${myContext}/${link.getUrl()}'">
                                            <a>${link.getLabel()}</a>
                                        </li>
                                    </c:otherwise>
                                </c:choose>
                            </c:forEach>
                        </ul>
                    </div>

                    <div class="icons_menu">
                        <div class="fb_panel">

                        </div>
                        <div class="g-plusone" data-size="medium"
                             data-annotation="inline" data-width="50"></div>
                        <script type="text/javascript">
                            (function () {
                                var po = document.createElement('script');
                                po.type = 'text/javascript';
                                po.async = true;
                                po.src = 'https://apis.google.com/js/plusone.js';
                                var s = document.getElementsByTagName('script')[0];
                                s.parentNode.insertBefore(po, s);
                            })();
                        </script>
                        <div class="lang_panel">


                            <a href="?lang=rus_RU" class="dropdown_langmenu">
                                <img src="${myContext}/media/css/images/ru.png" alt="Ru"></a>
                            <a href="?lang=en_US"><img src="${myContext}/media/css/images/uk.png" alt="En"></a>
                            <a href="?lang=uk_UA"><img src="${myContext}/media/css/images/ua.png" alt="Ua"></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="main_content">
            <div id="container">
                <jsp:invoke fragment="content"/>
            </div>
        </div>

        <div class="footer">
            <jsp:invoke fragment="foot"/>
        </div>
    </div>
</div>
</body>
</html>