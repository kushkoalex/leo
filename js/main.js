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

});


// http://stackoverflow.com/questions/5002351/jquery-fade-css-background-image-change

 //    http://stackoverflow.com/questions/4630947/how-do-i-change-the-background-image-using-jquery-animation