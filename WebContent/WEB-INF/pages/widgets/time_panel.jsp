<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<p style="font-size: 11px; display: inline; color: black;"><spring:message code="basic.check_out"
                                                                           text="default text"/>:</p>

<p style="font-size: 10px; margin-left: 25px; display: inline; color: black;"><spring:message code="basic.hour"
                                                                                              text="default text"/>:</p>
<select style="width: 40px; display: inline; margin-left: 10px; margin-top: 10px;border-radius:5px;">
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

<p style="font-size: 10px; color: black; margin-left: 0px; display: inline; "><spring:message code="basic.minutes"
                                                                                              text="default text"/>:</p>
<select style="width: 40px; display: inline;border-radius:5px;">
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
<br>

<p style="font-size: 11px; color: black; display: inline;"><spring:message code="basic.day_of_week"
                                                                           text="default text"/>:</p>
<select name=day_s size=1
        style="width: 104px; margin-top: 7px; display: inline; margin-left: 32px; font-size: 11px;border-radius:5px;">
    <option value=1 selected><spring:message code="basic.monday" text="default text"/></option>
    <option value=2><spring:message code="basic.tuesday" text="default text"/></option>
    <option value=3><spring:message code="basic.wednesday" text="default text"/></option>
    <option value=4><spring:message code="basic.thursday" text="default text"/></option>
    <option value=5><spring:message code="basic.friday" text="default text"/></option>
    <option value=6><spring:message code="basic.saturday" text="default text"/></option>
    <option value=6><spring:message code="basic.sunday" text="default text"/></option>
</select>