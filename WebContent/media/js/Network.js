
/*
 * Class Network
 */

function Network() {

	this.request_find_ways = function() {
		var ajax_url = "ways/find.json";

		$.ajax({
					type : "POST",
					url : ajax_url,
					data : "",
					contentType : "application/json; charset=utf-8",
					dataType : "json",
					success : function(data) {
						console.log(data);
						
					},
					failure : function(errMsg) {
						console.log(errMsg);
					
					}
				});

	};
};