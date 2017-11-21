$(function() {

$('aside h2').append('!');

var $newListItem = $('<li>Nowy element</li>');
$newListItem.attr('id', 'new-id')
$('li:last').after($newListItem);

$('footer').remove();

$('h1.header1').attr('class', 'header-new');

//czerwona czcionka dla !

$('ul').css('background-color', 'green');

});