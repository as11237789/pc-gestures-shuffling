/**
 * Created by Administrator on 2019/2/15.
 */
(function () {
    var index=0;
    var leg=$("figure").length;
    var startX,finalX;
    var span=document.getElementsByTagName("span");
    function load() {
        $("figure").css("z-index", 0);
        $($("figure")[0]).css("z-index", 1);
    }
    load();
    function autoPlay() {
        index++;
        if(index>=leg){
            index=0;
        }
        $("figure").css("z-index", 0);
        $($("figure")[index]).css("z-index", 1);
        for(var i=0;i<span.length;i++){
            span[i].className="";
        }
        span[index].setAttribute("class","current");
        console.log("进入autoPlay");
        console.log(index);
    }
    timer=setInterval(autoPlay,1000);
    $("#slider").mousedown(function () {
        var e=window.event;
        startX=e.clientX;
        clearInterval(timer);
    });
    $("#slider").mouseup(function () {
        var e=window.event;
        var finalX=e.clientX;
        console.log("span-------"+span.length);
        console.log("开始--------"+startX);
        console.log("结束--------"+finalX);
        if(startX-finalX>100){
            console.log("进入"+(startX-finalX));
            index--;
            if(index<0){
                index=leg-1;
                $("figure").css("z-index", 0);
                $($("figure")[index]).css("z-index", 1);
                for(var i=0;i<span.length;i++){
                    span[i].className="";
                }
                span[index].setAttribute("class","current");
                console.log("preif------"+index);
            }else{
                $("figure").css("z-index", 0);
                $($("figure")[index]).css("z-index", 1);
                for(var i=0;i<span.length;i++){
                    span[i].className="";
                }
                span[index].setAttribute("class","current");
                console.log("preelse------"+index);
            }
        }else if(startX-finalX<-100){
            index++;
            if(index<leg){
                $("figure").css("z-index", 0);
                $($("figure")[index]).css("z-index", 1);
                for(var i=0;i<span.length;i++){
                    span[i].className="";
                }
                span[index].setAttribute("class","current");
                console.log("nextif------"+index);
            }else{
                index=0;
                $("figure").css("z-index", 0);
                $($("figure")[index]).css("z-index", 1);
                for(var i=0;i<span.length;i++){
                    span[i].className="";
                }
                span[index].setAttribute("class","current");
                console.log("nextelse------"+index);
            }
        }
    });
    //动态生成轮播图小圆点
    function yuan() {
        function $(id){ return document.getElementById(id); }
        var circle = document.createElement("div");
        circle.setAttribute("class","circle");
        var lis = document.getElementsByTagName("figure");
        for(var i=0; i<lis.length; i++){
            var span = document.createElement("span");
            circle.appendChild(span);
        }
        $("slider").appendChild(circle);
        var spanChildren = circle.children;
        spanChildren[0].setAttribute("class","current");
    }
    yuan();
    $("span").click(function () {
         index = $("span").index(this);
        for(var i=0;i<span.length;i++){
            span[i].className="";
        }
        this.setAttribute("class","current");
        $("figure").css("z-index", 0);
        $($("figure")[index]).css("z-index", 1);
    });
    function imgdragstart(){return false;}
    for(i in document.images)document.images[i].ondragstart=imgdragstart;
})();











































// (function () {
//     // var index=0;
//     // var leg=
//     // var startX,finalX;
//     // var e=window.event;
//     var lunbo={
//         index:0,
//         leg:$("figure").length,
//         load:function () {
//             $("figure").css("z-index", 0);
//             $($("figure")[0]).css("z-index", 1);
//         },
//         init:function () {
//             this.load();
//             this.mousedown();
//             this.mouseup();
//         },
//         mousedown:function () {
//             var e=window.event;
//             startX=e.clientX;
//         },
//         mouseup:function () {
//             var e=window.event;
//             var finalX=e.clientX;
//             console.log("开始--------"+startX);
//             console.log("结束--------"+finalX);
//             if(startX-finalX>100){
//                 console.log("进入"+(startX-finalX));
//                 index--;
//                 if(index<0){
//                     index=leg-1;
//                     $("figure").css("z-index", 0);
//                     $($("figure")[index]).css("z-index", 1);
//                     console.log("preif------"+index);
//                 }else{
//                     $("figure").css("z-index", 0);
//                     $($("figure")[index]).css("z-index", 1);
//                     console.log("preelse------"+index);
//                 }
//             }else if(startX-finalX<-100){
//                 index++;
//                 if(index<leg){
//                     $("figure").css("z-index", 0);
//                     $($("figure")[index]).css("z-index", 1);
//                     console.log("nextif------"+index);
//                 }else{
//                     index=0;
//                     $("figure").css("z-index", 0);
//                     $($("figure")[index]).css("z-index", 1);
//                     console.log("nextelse------"+index);
//                 }
//             }
//         }
//
//     };
//     lunbo.init();
// })();