function main() {
	console.log("Rozpoczynam zadanie...");
    let a = 5;
    let b = 0;
    const result = divide(a, b);
    let x = 7;
    console.time('for');
    for (let i = 0; i < 3; i++) {
        a++;
        b--;
        console.log(i);
        x++;
    }
    console.timeEnd('for');
    x = x - 7;
    let tab = [];
    if(tab.length = 0){
        console.info("Tablica tab jest pusta.");}
    let tab2 = [
        {name: "Nazwa 1", color: "red", howMuch: 5},
        {name: "Nazwa 2", color: "green", howMuch: 1},
        {name: "Nazwa 3", color: "orange", howMuch: 3},
        {name: "Nazwa 4", color: "blue", howMuch: 7}
    ];
    console.table(tab2);
    debugowanie();
}

function divide(x, y) {
    if(y==0){console.error("Dzielenie przez 0!");}
    if(x<5){console.warn("Wartość zmiennej x jest mniejsza od 5!");}
    return x/y;
}

function debugowanie() {
    console.log("Debugowanie");
    const y = 5;
    if(y<=3){console.assert(false,"Błąd zmiennej y!");}
}

window.onload = main;
