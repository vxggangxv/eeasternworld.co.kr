$(function() {
	$.each($("[id^='sub-'] > li"), function(idx, item) {
		$(this).click(function() {
			$(this).addClass('on').siblings().removeClass('on');
			var idx = $(this).index();
			//console.log(idx);
			$(this).closest('ul').next().children().eq(idx).addClass('on').siblings().removeClass('on');
		});
	});
});