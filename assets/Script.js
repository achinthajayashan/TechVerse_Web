$("#sideMenuSec").hide();
// $("#menuIcon ,#menuText").hide();
// $('#ServicesPage').hide();

$("i").mouseenter(function (event) {
    $("#menuText").text("Open")
});

$("i").mouseleave(function (event) {
    $("#menuText").text("Menu")
});

$("#menuIcon").click(function (event) {
    $("#sideMenuSec").show();


});

$(".fa-xmark").click(function (event) {
    $("#sideMenuSec").hide();


});

$("#sideMenuSec>i").click(function (event) {
    $("#sideMenuSec").hide();

});

$("main>section:nth-child(1)>div:nth-child(3)>img").mouseenter(function (event) {
    $("main>section:nth-child(1)>div:nth-child(3)>div").css("color","black");
    $("main>section:nth-child(1)>div:nth-child(3)>div").css("background-color","white");
    $("main>section:nth-child(1)>div:nth-child(3)>div").css("border-color","lightgrey");
    // $("main>section:nth-child(1)>div:nth-child(3)>div").css("scale","1.1");
})

$("main>section:nth-child(1)>div:nth-child(3)>img").mouseleave(function (event) {
    $("main>section:nth-child(1)>div:nth-child(3)>div").css("color","white");
    $("main>section:nth-child(1)>div:nth-child(3)>div").css("background-color","lightgrey");
    $("main>section:nth-child(1)>div:nth-child(3)>div").css("border-color","white");
    // $("main>section:nth-child(1)>div:nth-child(3)>div").css("scale","1");
})

$('#HomeButton').click(function () {
    $('#HomePage').show();
})

$('#ServiceButton').click(function () {
    $('#HomePage').hide();
    $('#ServicesPage').show();
})

$('#btnContact').click(function () {

})



