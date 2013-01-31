
/**
 * Glocal variables:
 */

var mainPage = null;

/**
 * Global functions
 */
function initialize(data) {
	_prepareTabs();
	//_prepareNotes();

	mainPage = new MainPage();
	mainPage.main(data);
	selectbox_initialize();
};

function getMainPage() {
	return mainPage;
};

function _prepareTabs() {
	$("div.selectTabs_first, div.selectTabs_second").each(function() {
		var tmp = $(this);
		// console.log($(tmp).find(" .lineTabs li"));
		$(tmp).find(".lineTabs li").each(function(i) {
					$(tmp).find(".lineTabs li:eq(" + i + ") a").click(
							function() {
								var tab_id = i + 1;
								$(tmp).find(".lineTabs li a")
										.removeClass("active");
								$(this).addClass("active");
								$(tmp).find(".content div").stop(false, false)
										.hide();
								$(tmp).find(".tab" + tab_id).stop(false, false)
										.show();
								return false;
							});
				});
	});
};

function _prepareNotes() {
	$('.demo-tip-darkgray').poshytip({
				className : 'tip-darkgray',
				showTimeout : 1,
				bgImageFrameSize : 11,
				offsetX : -25
			});
}