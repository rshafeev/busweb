
/*
 * Class Network
 */

function Network() {

	this.request_calculate = function() {
		var ajax_url = "ways/calculate.htm";

		$.ajax({
					type : "POST",
					url : ajax_url,
					data : "",
					contentType : "application/json; charset=utf-8",
					dataType : "json",
					success : function(data) {
						alert(data);
					},
					failure : function(errMsg) {
						alert(errMsg);
					}
				});

	};
};