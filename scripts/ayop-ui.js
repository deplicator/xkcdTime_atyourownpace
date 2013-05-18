/*jslint browser: true, eqeq: true, sloppy: true*/
/*global $: false*/
/*
 * User Interface cosmetics.
 */

$(document).ready(function () {
    //Play back direction buttons.
    $('.direction').click(function () {
        if (!$(this).hasClass('dir-select')) {
            $('.direction').toggleClass('dir-select');
        }
    });
    
    var rightArrow = '\u2192', downArrow = '\u2193';
    
    //Toggeling boxes below comic.
    $('#funstuff h3').click(function () {
        $('#funstuff .inside').slideToggle('slow', function () {
            if ($('#funstuff h3 .craparrow').html() == rightArrow) {
                $('#funstuff h3 .craparrow').html(downArrow);
            } else {
                $('#funstuff h3 .craparrow').html(rightArrow);
            }
        });
    });

    $('#specialframes h3').click(function () {
        $('#specialframes .inside').slideToggle('slow', function () {
            if ($('#specialframes h3 .craparrow').html() == rightArrow) {
                $('#specialframes h3 .craparrow').html(downArrow);
            } else {
                $('#specialframes h3 .craparrow').html(rightArrow);
            }
        });
    });
});