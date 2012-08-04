<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<html>
<body>
 <h1>Spring MVC internationalization example</h1>
 
Language : <a href="?lang=en_US">English</a>|<a href="?lang=rus_RU">Russian</a>|<a href="?lang=uk_UA">Ukrainian</a>  
 
<h3>
welcome.springmvc : <spring:message code="welcome.springmvc" text="default text" />
</h3>
  
 Current Locale : ${pageContext.response.locale} 
 
</body>
</html>
