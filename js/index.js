var captionLength = 0;
var caption = '';
var typeing_timeout = 50;
var erase_len = 74;
var type_again_len = 57;
var erase_flag = true;
var caption = "Productivity is my passion. Helping people get things done is my calling. Making you and your team more productive already in the first days you use ABC is my promise.<br><br>I personally guarantee you'll be more productive 30 days from now.<br><br>When you sign up for our ABC trial, not only will you get access to a productivity system designed for all the major platforms, that's been helping 300,000+ busy professionals get things done in the last 7+ years.<br><br>I will also personally teach you all the best productivity principles I know through video tutorials, my popular \"10-Steps to Ultimate Productivity\" course and my \"Productive! Magazine\". My goal is to help you achieve greatness while living a more balanced and better organized life.<br><br><b>Mudila Strashniy</b><br><br>Productivity guy, founder and CEO of ABC";

$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');

    testTypingEffect();

});

function testTypingEffect() {

    type();
}


function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        if(erase_flag && captionLength >= erase_len)
        {
            setTimeout('erase()', 500);
            erase_flag = false;
        }
        else
            setTimeout('type()', typeing_timeout);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function erase() {
    captionEl.html(caption.substr(0, captionLength--));
    if(captionLength >= type_again_len) {
        setTimeout('erase()', 50);
    } else {
        setTimeout('type()', 300);
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}