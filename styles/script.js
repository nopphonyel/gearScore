function resize() {
    var screenHeight = document.body.clientHeight;
    var screenWidth = document.body.clientWidth;

    var main_title_foreground = document.getElementById("main_title");
    var main_title_background = document.getElementById("main_title_background");
    var main_header = document.getElementById("main_header");

    if (screenWidth < 970) {
        var margin = 10;
        var ratioForeground = 1240 / 333;
        var ratioBackground = 620 / 154;
        var ratioLeftBackground = 620 / 465;

        main_title_foreground.style.top = margin * 2;
        main_title_foreground.style.width = screenWidth - (margin * 2);
        main_title_foreground.style.height = (screenWidth - (margin * 2)) / ratioForeground;

        main_title_background.style.width = main_title_foreground.clientWidth / ratioBackground;
        main_title_background.style.height = main_title_foreground.clientWidth / ratioBackground;
        main_title_background.style.left = main_title_foreground.clientWidth / ratioLeftBackground;

        main_header.style.height = main_title_foreground.clientHeight + 100;
    } else {
        main_title_foreground.style.top = 100;
        main_title_foreground.style.width = 620;
        main_title_foreground.style.height = 167;

        main_title_background.style.width = 154;
        main_title_background.style.height = 154;
        main_title_background.style.left = 465;

        main_header.style.height = 460;
    }
}
