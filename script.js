function convertCelsiusToFahrenheit() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    var calculationInput = document.getElementById('calculation');

    
    if (celsiusInput.value !== '' && !isNaN(celsiusInput.value)) {
        var celsius = parseFloat(celsiusInput.value);

        if (celsius >= 1 && celsius <= 100) 
        {
            var fahrenheit = (celsius * 9/5) + 32;

            //display
            fahrenheitInput.value = fahrenheit;
            calculationInput.value = `${celsius}°C * (9/5) + 32 = ${fahrenheit}°F`;
        } 
        else 
        {
            alert('Input the temperature in the range 1°C to 100°C');
        }
    } else 
    {
        alert('Input a valid temperature in Celsius.');
    }
}

function resetValues() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculation').value = '';
}

function reverseConversion() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    var calculationInput = document.getElementById('calculation');

    if (fahrenheitInput.value !== '' && !isNaN(fahrenheitInput.value)) {
        var fahrenheit = parseFloat(fahrenheitInput.value);

        if (fahrenheit >= 32 && fahrenheit <= 212) {
            var celsius = (fahrenheit - 32) * 5/9;

            celsiusInput.value = celsius;
            calculationInput.value = `${fahrenheit}°F - 32 * 5/9 = ${celsius}°C`;
        } else {
            alert('Input a temperature in the range of 32°F to 212°F.');
        }
    } else {
        alert('Input a valid temperature in Fahrenheit.');
    }
}
