document.addEventListener('DOMcontentLoaded', function(){
  let convetrButton = document.getElementById('convert');
  convetrButton.addEventListener('click', convertTemperature);

  function convertTemperature(){
    let temperatureInput = document.getElementById('temperature');
    const resultDiv = document.getElementById('result');
    let temperatureValue = parseFloat(temperatureInput.value);
    
    if (!isNaN(temperatureValue)) {
      let convertTemperature = (temperatureValue * 9/5) + 32;
      resultDiv.innerHTML = temperatureValue + 'Celsuis is ' + convertTemperature.toFixed(2) + 'Fahrenheit';
    }else {
      resultDiv.innerHTML = 'Please enter a valid temperature.'
    }
  }
});