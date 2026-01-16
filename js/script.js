/**
 * Temperature Conversion Program
 * Author: Tanmay Gangadhar Giramkar
 * Company: Prodigy InfoTech
 * Task: 01
 * Date: January 2026
 * 
 * Description: This program converts temperature values between
 * Celsius, Fahrenheit, and Kelvin scales with input validation
 * and a user-friendly interface.
 */

// ========== DOM Elements ==========
const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertBtn = document.getElementById('convertBtn');
const resetBtn = document.getElementById('resetBtn');
const resultsSection = document.getElementById('results');
const errorMessage = document.getElementById('error-message');

// Result display elements
const celsiusResult = document.getElementById('celsiusResult');
const fahrenheitResult = document.getElementById('fahrenheitResult');
const kelvinResult = document.getElementById('kelvinResult');

// ========== Event Listeners ==========
convertBtn.addEventListener('click', convertTemperature);
resetBtn.addEventListener('click', resetForm);

// Allow Enter key to trigger conversion
temperatureInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        convertTemperature();
    }
});

// Clear error message when user starts typing
temperatureInput.addEventListener('input', () => {
    errorMessage.textContent = '';
    temperatureInput.style.borderColor = '';
});

// ========== Main Conversion Function ==========
/**
 * Converts temperature from one unit to all three units
 * Validates input and displays results
 */
function convertTemperature() {
    // Get input values
    const tempValue = temperatureInput.value.trim();
    const selectedUnit = unitSelect.value;
    
    // Validate input
    if (!validateInput(tempValue)) {
        return;
    }
    
    // Convert string to number
    const temperature = parseFloat(tempValue);
    
    // Perform conversions based on selected unit
    let celsius, fahrenheit, kelvin;
    
    switch(selectedUnit) {
        case 'celsius':
            celsius = temperature;
            fahrenheit = celsiusToFahrenheit(temperature);
            kelvin = celsiusToKelvin(temperature);
            break;
            
        case 'fahrenheit':
            celsius = fahrenheitToCelsius(temperature);
            fahrenheit = temperature;
            kelvin = fahrenheitToKelvin(temperature);
            break;
            
        case 'kelvin':
            celsius = kelvinToCelsius(temperature);
            fahrenheit = kelvinToFahrenheit(temperature);
            kelvin = temperature;
            break;
            
        default:
            showError('Invalid unit selected');
            return;
    }
    
    // Display results
    displayResults(celsius, fahrenheit, kelvin);
}

// ========== Validation Function ==========
/**
 * Validates user input
 * @param {string} value - The input value to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateInput(value) {
    // Check if input is empty
    if (value === '') {
        showError('Please enter a temperature value');
        return false;
    }
    
    // Check if input is a valid number
    if (isNaN(value)) {
        showError('Please enter a valid number');
        return false;
    }
    
    // Convert to number for additional validation
    const numValue = parseFloat(value);
    
    // Check for absolute zero violations
    const selectedUnit = unitSelect.value;
    
    if (selectedUnit === 'celsius' && numValue < -273.15) {
        showError('Temperature cannot be below -273.15°C (absolute zero)');
        return false;
    }
    
    if (selectedUnit === 'fahrenheit' && numValue < -459.67) {
        showError('Temperature cannot be below -459.67°F (absolute zero)');
        return false;
    }
    
    if (selectedUnit === 'kelvin' && numValue < 0) {
        showError('Temperature cannot be below 0K (absolute zero)');
        return false;
    }
    
    return true;
}

// ========== Conversion Functions ==========

/**
 * Convert Celsius to Fahrenheit
 * Formula: (°C × 9/5) + 32 = °F
 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

/**
 * Convert Celsius to Kelvin
 * Formula: °C + 273.15 = K
 */
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

/**
 * Convert Fahrenheit to Celsius
 * Formula: (°F - 32) × 5/9 = °C
 */
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

/**
 * Convert Fahrenheit to Kelvin
 * Formula: (°F - 32) × 5/9 + 273.15 = K
 */
function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

/**
 * Convert Kelvin to Celsius
 * Formula: K - 273.15 = °C
 */
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

/**
 * Convert Kelvin to Fahrenheit
 * Formula: (K - 273.15) × 9/5 + 32 = °F
 */
function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

// ========== Display Functions ==========

/**
 * Display conversion results
 * @param {number} celsius - Temperature in Celsius
 * @param {number} fahrenheit - Temperature in Fahrenheit
 * @param {number} kelvin - Temperature in Kelvin
 */
function displayResults(celsius, fahrenheit, kelvin) {
    // Format numbers to 2 decimal places
    celsiusResult.textContent = `${celsius.toFixed(2)} °C`;
    fahrenheitResult.textContent = `${fahrenheit.toFixed(2)} °F`;
    kelvinResult.textContent = `${kelvin.toFixed(2)} K`;
    
    // Show results section with animation
    resultsSection.classList.remove('hidden');
    
    // Scroll to results on mobile
    if (window.innerWidth < 640) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

/**
 * Display error message
 * @param {string} message - Error message to display
 */
function showError(message) {
    errorMessage.textContent = message;
    temperatureInput.style.borderColor = '#ef4444';
    temperatureInput.focus();
}

// ========== Reset Function ==========
/**
 * Reset the form to initial state
 */
function resetForm() {
    // Clear input
    temperatureInput.value = '';
    
    // Reset select to default
    unitSelect.value = 'celsius';
    
    // Hide results
    resultsSection.classList.add('hidden');
    
    // Clear error message
    errorMessage.textContent = '';
    temperatureInput.style.borderColor = '';
    
    // Clear result values
    celsiusResult.textContent = '--';
    fahrenheitResult.textContent = '--';
    kelvinResult.textContent = '--';
    
    // Focus on input
    temperatureInput.focus();
}

// ========== Initialize ==========
/**
 * Initialize the application
 * Focus on temperature input when page loads
 */
document.addEventListener('DOMContentLoaded', () => {
    temperatureInput.focus();
    console.log('Temperature Converter initialized');
    console.log('Created by: Tanmay Gangadhar Giramkar');
    console.log('Prodigy InfoTech - Task 01');
});
```

// ### **5. .gitignore**
// ```
// # OS generated files
// .DS_Store
// .DS_Store?
// ._*
// .Spotlight-V100
// .Trashes
// ehthumbs.db
// Thumbs.db

// # IDE files
// .vscode/
// .idea/
// *.swp
// *.swo
// *~

// # Logs
// *.log

// # Temporary files
// *.tmp