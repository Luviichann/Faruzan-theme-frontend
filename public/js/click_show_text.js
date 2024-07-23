var a_idx = 0;
function getRandomColor() {  
    var r = Math.floor(Math.random() * 256);   // 随机生成 0-255   
    var g = Math.floor(Math.random() * 256);   // 随机生成 0-255   
    var b = Math.floor(Math.random() * 256);   // 随机生成 0-255   
    return "rgb(" + r + ", " + g + ", " + b + ")";  
}
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array
            ("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": getRandomColor()
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            3000,
            function () {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}