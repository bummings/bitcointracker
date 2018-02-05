var btn = document.querySelector('#btn');
var box = document.getElementById('resultBox');

btn.addEventListener('click', function() {
	loadPrice();
});

	function loadPrice() {
		var XHR = new XMLHttpRequest();
	XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
	XHR.onreadystatechange = function() {
		if(XHR.readyState == 4 && XHR.status == 200) {
			
			var resultUSD = JSON.parse(XHR.responseText).bpi.USD.rate_float.toFixed(2);
			var resultEUR = JSON.parse(XHR.responseText).bpi.EUR.rate_float.toFixed(2);
			var resultGBP = JSON.parse(XHR.responseText).bpi.GBP.rate_float.toFixed(2);

			console.log('USD: ' + resultUSD);
			console.log('EUR: ' + resultEUR);
			console.log('GBP: ' + resultGBP);
			
			box.innerHTML = '<h2> USD: ' + resultUSD +   ' <br>EUR: ' + resultEUR + '<br> GBP: ' + resultGBP + '</h2>';
			// box.innerHTML= '<h2> EUR: ' + resultEUR + '</h2>';
		}
	}
	XHR.send();
};
	

