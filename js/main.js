
$('button').on('click', function(){
    var addItem = $('input').val();
    $('ul').append('<li>' + addItem + '</li>');
});

const removeItem = $('li').on('click', function(){
    $(this).fadeOut('1500')
});