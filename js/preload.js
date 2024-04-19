function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

preload([
    'media/bg/slide-1.jpg',
    'media/bg/slide-2.jpg',
    'media/bg/slide-3.jpg'
]);

$(function(){
    $('body').show();
});
