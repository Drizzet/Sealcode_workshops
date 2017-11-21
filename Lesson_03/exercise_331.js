function log($a){
console.log($a);
console.log($a.parent());
console.log($a.closest('section'));
console.log($a.next());
console.log($a.prev());
console.log($a.children());
console.log(' ');
}

let $a=$('.popular-recipes');
log($a);
$a=$('nav');
log($a);
$a=$('aside');
log($a);