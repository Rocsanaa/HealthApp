var button = document.getElementById('mHRandRHR');
button.addEventListener('click', rhmANDmhr);

function rhmANDmhr() {
    var rHR = getRHR(values);
    document.getElementById("results").textContent = "Your Resting Heart Rate is " + resting + "."
}

function getRHR(values) {
    var inputHR = document.getElementById('inputPulse').value;
    resting = ( inputHR * 10);
    return resting;
}
