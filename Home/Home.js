$(function(){
    let humbergerButton = $("#humberger-button");
    let headerNav = $("#header-nav");
    let navCloseButton = $("#nav-close-button");
    let homeImgArray = $("#home-img-container img");
    let section = $("#section");
    let nextIndex = 0;
    let currentIndex = 0;


    humbergerButton.on('click', function(){
        headerNav.fadeIn();
    })

    navCloseButton.on('click', function(){
        headerNav.fadeOut();
    })

    setInterval(function(){
        nextIndex = (currentIndex + 1) % homeImgArray.length;
        homeImgArray.eq(currentIndex).animate({
            opacity: '0',            
        }, 2000)
        homeImgArray.eq(nextIndex).animate({
            opacity: '1'
        }, 2000)
        homeImgArray.eq(nextIndex).css('opacity', 1);

        currentIndex = nextIndex;
    }, 7000)
})