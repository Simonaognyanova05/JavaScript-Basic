function solve(input){
    let obshtoRazstoqnie = 384400 * 2;
    let vremeZaOtivaneIVrashtane = Math.ceil(obshtoRazstoqnie / Number(input[0]));
    let obshtoVreme = vremeZaOtivaneIVrashtane + 3;
    let gorivo = (Number(input[1]) * obshtoRazstoqnie) / 100;
    console.log(obshtoVreme);
    console.log(gorivo);
}
solve((["10000",
"5"]))
