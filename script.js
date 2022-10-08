const bouton = () => {
    var nb1 = parseFloat(document.getElementById('nb1').value);
    var nb2 = parseFloat(document.getElementById('nb2').value);
    var operator = document.getElementById('operateurs').value;

    switch (operator) {
        case "+":
            result = nb1 + nb2
            break;
        case "-":
            result = nb1 - nb2
            break;
        case "x":
            result = nb1 * nb2
            break;
        case "/":
            result = nb1 / nb2
            break;

        default:
            result = "Veillez choisir un opérateur"
            break;
    }

    document.getElementById('result').innerHTML = Math.round(result*100)/100;
}

