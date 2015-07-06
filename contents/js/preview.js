
$(function() {
    $(".gallery img.preview").hover(
        function() {
            var url = $(this).attr("src").replace("_static", "_animated");
            $(this).attr("src", url);
        },
        function() {
            var url = $(this).attr("src").replace("_animated", "_static");
            $(this).attr("src", url);
        }
    );                  
});
