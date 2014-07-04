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

    console.log(LEO.settings.specialContent);

    var i = 0;
    var delay = 5000;


    var changeImage = function () {
        $("#bg-layer").animate({opacity: 0}, 'slow', function () {
            if (i == LEO.settings.specialContent.items.length) {
                i = 0;
            }
            console.log(i);
            var item = LEO.settings.specialContent.items[i];
            console.log(item);
            var bg = 'url(' + LEO.settings.specialContent.imagePath+ item.imageFileName + ')';
            i++;
            $(this).css({'background-image': bg }).animate({opacity: 1});
            $("#title").html(item.title);
            $("#text").html(item.text);
        });
    };

    changeImage();
    setInterval(changeImage, delay);

    $("#contentFrameWrapper").draggable(
        {
            cursor: "move",
//            axis: "y",
            containment: "#page",
            scroll: false});


});