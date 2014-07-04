$(function () {
    $(".block").click(function () {
        $(".intro-container").fadeOut(1000, function () {
            $(".imagine").fadeIn(1000, function () {
                setTimeout(function () {
                    location.href = 'main.html';
                }, 2000);
            });
        });
    });

    var images = ['img/bg.png', 'img/bg2.png'];
    var i = 0;
    var delay = 5000;


    var changeImage = function () {
        $("#bg-layer").animate({opacity: 0}, 'slow', function () {
            if (i == images.length) {
                i = 0;
            }
//            console.log(i);
            var image = images[i];
            var bg = 'url(' + image + ')';
            i++;
            $(this).css({'background-image': bg }).animate({opacity: 1});
        });
    };

//    changeImage();
//    setInterval(changeImage, delay);

    $("#contentFrameWrapper").draggable(
        {
            cursor: "move",
//            axis: "y",
            containment: "#page",
            scroll: false});


});