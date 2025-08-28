$(function () {
    // 漢堡按鈕
    $("hamburger").click(function () {
        // 切換 漢堡按鈕與叉叉
        $(this).toggleClass("is-active");
        // 切換顯示與隱藏
        $(".navigation").toggleClass("show");

    })
    // 捲動的指定位置
    $("menu a").click(function () {

        var btn = $(this).attr("href");
        var pos = $(btn).offset();
        $("html,body").animate({ scrollTop: pos.top }, 1000);

    });

    // 回到頂端
    $("#gotop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);

    });

    // 淡出蛋入
    $(windows).scroll(function () {

        if($(this).scrolllTop()>200){
            $('#gotop').stop().fadTo("fast",1);
        }else{
            $('#gotop').stop().fadOut("fast");
        }

    });

});

// 共用預設值

$('.smoove').smoove({

    offset:250
    // 離底部多遠 載入

})

