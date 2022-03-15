function changeLights(){

    let nomeLampada = document.getElementById("light").src
    let bulb = nomeLampada.substring(nomeLampada.indexOf('light-') + 6)

    if (bulb == 'off.png') {
    document.getElementById("light").src="images/light-on.png";
    }
    else {
    document.getElementById("light").src="images/light-off.png";
    }
}