$(document).ready(function() {
	var video = document.getElementById('video');
	$('#switch').change(function() {
		$('#led').toggleClass('powerLight-on');
		if ($('#switch').is(':checked')) {
			video.play();
			$('.screen-on').css('display','block');
		}else {
			video.pause();
			video.currentTime = 0;
			$('.screen-on').css('display','none');
		}
	});
});