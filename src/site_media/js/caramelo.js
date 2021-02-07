$(document).ready(function() {


    var menu_ul = $('.menu > li > ul'),
        menu_a  = $('.menu > li > a'),
        menu_aa  = $('.menu > li > ul > li > a'),
        menu_ul_ul  = $('.menu > li > ul > li > ul');
    
    

    $('.active').next().stop(true,true).slideDown(0);


    

    menu_a.click(function(e) {
        e.preventDefault();
        if(!$(this).hasClass('active')) {
            menu_a.removeClass('active');
            menu_aa.removeClass('active');
            menu_aa.next().stop(true,true).slideUp('normal');

            menu_ul.filter(':visible').slideUp('normal');
            $(this).addClass('active').next().stop(true,true).slideDown('normal');
        } else {
            $(this).removeClass('active');
            $(this).next().stop(true,true).slideUp('normal');
        }
    });

    menu_aa.click(function(e) {
         e.preventDefault();
        if(!$(this).hasClass('active')) {
            menu_aa.removeClass('active');
            menu_ul_ul.filter(':visible').slideUp('normal');
            $(this).addClass('active').next().stop(true,true).slideDown('normal');
        } else {
            $(this).removeClass('active');
            $(this).next().stop(true,true).slideUp('normal');
        }
    });
});




