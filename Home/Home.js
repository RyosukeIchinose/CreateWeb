$(function(){
    let humbergerButton = $("#humberger-button");
    let headerNav = $("#header-nav");
    let navCloseButton = $("#nav-close-button");

    humbergerButton.on('click', function(){
        headerNav.fadeIn();
    })

    navCloseButton.on('click', function(){
        headerNav.fadeOut();
    })
})