/**
 * Created by Administrator on 2016/10/11.
 */


    var tips=[
        "请输入正确的手机号",
        "请输入正确的卡号"
    ];


    function createAlert(tip) {
        $("body").prepend("<div class='full-mask'></div>");
        $(".full-mask").append("<div class='alert-box'></div>");
        $(".alert-box").append("<div class='alert-content-box'></div><div class='alert-button'>确定</div>");
        $(".alert-content-box").append("<p>"+tip+"</p>");

        var alertBtn=$(".alert-button");
        alertBtn.bind("click",function(){
            $(this).parents(".full-mask").hide();
        });
    }



