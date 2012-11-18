<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<div id="map_container"> 
	<div id="wrapper">
		<div id="content">
			<div id="map_canvas"></div>

		</div>
	</div>
	<div id="navigation"></div>
	<div id="extra">
		<div id="arrow_div" onmousedown="return false" onclick="on_right_panel_show();">
			<a href="#" ><img  name='img'
				src='media/css/images/arrow_left.png' /></a>
		</div>

		<div id="ways_panel">
			<div id="panel_scrollbar" class="scrollbar_body">
			 <div class="scrollbar">
					<div class="track">
						<div class="thumb">
							<div class="end"></div>
						</div>
					</div>				
				</div>
				<div class="viewport">
					<div class="overview">
						<div id="panel_data"></div>
				
					</div>

				</div>
			
			</div>
		</div>
		
	</div>

</div>