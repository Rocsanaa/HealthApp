var button = document.getElementById('bmi');

function final() {

    var height = document.getElementById('inputft').value;
    var weight = document.getElementById('inputW').value;

    document.getElementById("product").textContent = "Your BMI score is " + present + ". Your BMI category is " + later + "."
}

function fttometers() {
 meters = height / 0.3048;
    return meters;
}

function poundstokg() {

}


button.addEventListener('click', final);
