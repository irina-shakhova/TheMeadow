jQuery(document).ready(function() {	
	function updateHeaderLines() {
        var mainImgWidth = 1024,
            screenWidth = $(window).width();

        var sideWidth = (screenWidth - mainImgWidth) / 2;
        $(".header_left-wrapper").css("width", Math.floor(sideWidth) + "px");
        $(".header_right-wrapper").css("width", Math.ceil(sideWidth) + "px");
    }

    $("#wrapper").resize(function() {
        updateHeaderLines();
    });

    updateHeaderLines();
});