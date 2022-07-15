$(document).ready(function(){
    hideAllDefault();
    showAnswerCorrect();
    showAnswerWrong();
})


function hideAllDefault(){
    $('.imageCorrect').hide();
    $('.imageWrong').hide();
}

function showAnswerCorrect() {

    $('#revenge').click(function(){
        $(this).css('backgroundColor', 'navy');
        $('.answer1').text('Σωστή απάντηση').next().show();
        $('.answer1').next().next().hide();
        $('.answer1').addClass('answer-style');  
        $(this).siblings().css('opacity', '0.8').css('textDecoration', 'line-through');
    })

    $('#scarlet').click(function(){
        $(this).css('backgroundColor', 'navy');
        $('.answer2').text('Σωστή απάντηση').next().show();
        $('.answer2').next().next().hide();
        $('.answer2').addClass('answer-style');  
        $(this).siblings().css('opacity', '0.8').css('textDecoration', 'line-through');
    })

    $('#year').click(function(){
        $(this).css('backgroundColor', 'navy');
        $('.answer3').text('Σωστή απάντηση').next().show();
        $('.answer3').next().next().hide();
        $('.answer3').addClass('answer-style'); 
        $(this).siblings().css('opacity', '0.8').css('textDecoration', 'line-through'); 
    })

    $('#burbank').click(function(){
        $(this).css('backgroundColor', 'navy');
        $('.answer4').text('Σωστή απάντηση').next().show();
        $('.answer4').next().next().hide();
        $('.answer4').addClass('answer-style');  
        $(this).siblings().css('opacity', '0.8').css('textDecoration', 'line-through');
    })

    $('#firstFilm').click(function(){
        $(this).css('backgroundColor', 'navy');
        $('.answer5').text('Σωστή απάντηση').next().show();
        $('.answer5').next().next().hide();
        $('.answer5').addClass('answer-style');    
        $(this).siblings().css('opacity', '0.8').css('textDecoration', 'line-through');    
    })

}


function showAnswerWrong() {

    $('#revenge').siblings().click(function(){
        $('.answer1').text('Λάθος απάντηση').addClass('answer-style').next().next().show();
        $('.answer1').next().hide();
    })

    $('#scarlet').siblings().click(function(){
        $('.answer2').text('Λάθος απάντηση').addClass('answer-style').next().next().show();
        $('.answer2').next().hide();
    })

    $('#year').siblings().click(function(){
        $('.answer3').text('Λάθος απάντηση').addClass('answer-style').next().next().show();
        $('.answer3').next().hide();
    })

    $('#burbank').siblings().click(function(){
        $('.answer4').text('Λάθος απάντηση').addClass('answer-style').next().next().show();
        $('.answer4').next().hide();
    })

    $('#firstFilm').siblings().click(function(){
        $('.answer5').text('Λάθος απάντηση').addClass('answer-style').next().next().show();
        $('.answer5').next().hide();
    })

}