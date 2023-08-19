function solve(input){
    let zakupenoKol = Number(input.shift()) * 1000;
    let end = input.pop();

    let obshtoKolHrana = 0;
    for(let el of input){
        el = Number(el);
        obshtoKolHrana += el;
    }
    if(zakupenoKol >= obshtoKolHrana){
        let ostanalaHrana = zakupenoKol - obshtoKolHrana;
        console.log(`Food is enough! Leftovers: ${ostanalaHrana} grams.`);
    }else{
        let nujnaHrana = obshtoKolHrana - zakupenoKol;
        console.log(`Food is not enough. You need ${nujnaHrana} grams more.`);
    }
}
solve(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"])