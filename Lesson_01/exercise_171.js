function pole(a, r, pi = Math.PI){
	return ((a*pi*r*r)/360);
}

console.log(pole(60, 5, 3.14));
console.log(pole(30, 7, 22 / 7));
console.log(pole(45, 2));