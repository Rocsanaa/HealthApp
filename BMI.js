var button = document.getElementById('calculateBMI');
button.addEventListener('click', BMI);

function BMI(){
	var BMI = W / (Math.pow(h, 2));




}


function displayBMI(W, Ft, In){
	var W = document.getElementById('inputW').value;
	var Ft = document.getElementById('inputFt').value;
	var In = document.getElementById('inputIn').value;
	var result = BMI(W, Ft, In);

}

	function getCategory(){




	}
