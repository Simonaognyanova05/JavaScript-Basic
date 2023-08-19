function solve(input){
    let planuvani = Number(input[0]);
    let broiSlujiteli = Number(input[1]);
    let rabotniDni = Number(input[2]);

    let chasoveZaRabota = broiSlujiteli * rabotniDni * 8;
    
    let broiProcesoriKoitoShteIzrabotqt = Math.floor(chasoveZaRabota / 3);
    if(broiProcesoriKoitoShteIzrabotqt < planuvani){
        let zagiba = (planuvani - broiProcesoriKoitoShteIzrabotqt) * 110.10;
        console.log(`Losses: -> ${zagiba.toFixed(2)} BGN`);
    }else{
        let pechalba = (broiProcesoriKoitoShteIzrabotqt - planuvani) * 110.10;
        console.log(`Profit: -> ${pechalba.toFixed(2)} BGN`);
    }

}
solve((["150",
"7",
"18"]))