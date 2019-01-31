
$('button').on('click', function() {
    $('ul').append('<li>' + $('input').val() + '</li>');
});

$('ul').on('click', 'li', function(){
    $(this).closest('li').fadeOut() 
});

$('button').on('click', function(){
    $('input').val('').delay(800)
});