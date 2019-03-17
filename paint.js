

var color = $(".selected").css("background-color");
var $canvas = $("canvas");

var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;


$(".controls").on("click", "li", function() {
    
    $(this).siblings().removeClass("selected");
    
    $(this).addClass("selected");
    
    color = $(".selected").css("background-color");
    console.log("selected color = " + color);
});


$("#revealColorSelect").click(function() {
    
    changeColor();
    $("#colorSelect").toggle();
});


function changeColor() {
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();
    var a = $("#alpha").val() / 100;

    $("#newColor").css("background-color", "rgba(" + r + "," + g + "," + b + "," + a + ")");
    console.log($("#newColor").css("background-color"));

}


$("input").change(changeColor);


$("#addNewColor").click(function() {
    
    var $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
    $(".controls ul").append($newColor);
    
    $newColor.click();
});


$canvas.mousedown(function(e) {
    lastEvent = e;
    mouseDown = true;

}).mousemove(function(e) {
    if (mouseDown) {
        //Draw lines
        context.beginPath();
        context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = color;
        context.stroke();
        lastEvent = e;
    }
}).mouseup(function() {
    mouseDown = false;
}).mouseleave(function() {
    $canvas.mouseup();
});