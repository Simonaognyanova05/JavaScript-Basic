function solve(input){
    let month = input[0];
    let prekaraniChasove = Number(input[1]);
    let broiHora = Number(input[2]);
    let denIliNosht = input[3];

    let cenaNaChovek = 0;
    let obshtaCena = 0;
    if(month === 'march' || month === 'april' || month === 'may'){
        if(denIliNosht === 'day'){
            cenaNaChovek = 10.50;
        }else if(denIliNosht === 'night'){
            cenaNaChovek = 8.40;
        }
    }else if(month === 'june' || month === 'july' || month === 'august'){
        if(denIliNosht === 'day'){
            cenaNaChovek = 12.60;
        }else if(denIliNosht === 'night'){
            cenaNaChovek = 10.20;
        }
    }

    if(broiHora >= 4){
        let otstapka = 0.1 * cenaNaChovek;
        cenaNaChovek -= otstapka;
    }
    if(prekaraniChasove >= 5){
        let otstapka = 0.5 * cenaNaChovek;
        cenaNaChovek -= otstapka;
    }
    

    obshtaCena = cenaNaChovek * broiHora * prekaraniChasove;
    console.log(`Price per person for one hour: ${cenaNaChovek.toFixed(2)}`);
    console.log(`Total cost of the visit: ${obshtaCena.toFixed(2)}`);
}
solve(["july",
"5",
"5",
"night"]);