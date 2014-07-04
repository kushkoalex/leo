(function(global){
    var leo = {
            settings:null
        };

    global.LEO = leo;

})(this);



(function(leo){

    var settings;

    if (leo.settings === null) {
        leo.settings = settings = {};
    } else {
        settings = leo.settings;
    }

    if(!('specialContent' in settings))
    {
        settings.specialContent = {

            imagePath:'/leo/images/',

            items:[
                {
                    imageFileName: 'bg.png',
                    title:'результат, поражающий воображение',
                    text:'12 дней, чтобы организовать и завезти нужные материалы. Несколько часов, чтобы разбудить гномиков. И сутки на застройку. <br> Интерьер готов, кто бы что не говорил!'
                },
                {
                    imageFileName:'bg2.png',
                    title:'второй заголовок',
                    text:'Текст под вторым заголовком!'
                }
            ]
        }
    }

})(LEO);