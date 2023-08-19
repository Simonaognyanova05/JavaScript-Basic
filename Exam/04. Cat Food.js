function solve(input){
    let broiKotki = input.shift();

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;

    let obshtoKol = 0;
    for(let hrana of input){
        hrana = Number(hrana);
        if(hrana >= 100 && hrana < 200){
            group1 += 1;
        }else if(hrana >= 200 && hrana < 300){
            group2 += 1;
        }else if(hrana >= 300 && hrana < 400){
            group3 += 1;
        }
        obshtoKol += hrana;
    }
    obshtoKol = obshtoKol / 1000;
    let cenaZaHrana = (obshtoKol * 12.45).toFixed(2);
    console.log(`Group 1: ${group1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);

    console.log(`Price for food per day: ${cenaZaHrana} lv.`);
}
solve(["6",
"102",
"236",
"123",
"399",
"342", 
"222"])