//input
//function
//output
document.addEventListener('DOMContentLoaded', function () {
    var convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', convertTemperature);

    function convertTemperature() {
      var temperatureInput = document.getElementById('temperature');
      var unitSelect = document.getElementById('unit');
      var resultDiv = document.getElementById('result');

      var temperatureValue = parseFloat(temperatureInput.value);
      var selectedUnit = unitSelect.value;

      if (!isNaN(temperatureValue)) {
        if (selectedUnit === 'celsius') {
          var convertedFahrenheit = (temperatureValue * 9/5) + 32;
          resultDiv.innerHTML = temperatureValue + ' Celsius is ' + convertedFahrenheit.toFixed(2) + ' Fahrenheit';
        } else if (selectedUnit === 'fahrenheit') {
          var convertedCelsius = (temperatureValue - 32) * 5/9;
          resultDiv.innerHTML = temperatureValue + ' Fahrenheit is ' + convertedCelsius.toFixed(2) + ' Celsius';
        }
      } else {
        resultDiv.innerHTML = 'Please enter a valid temperature.';
      }
    }
  });