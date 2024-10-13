// config.js
const config = {
    development: {
        apiUrl: 'http://localhost:3000/api', // Local development URL
    },
    production: {
        apiUrl: 'https://lokeshbhaskar.github.io/API-Management/api', // Production URL
    },
};

// Check the environment
const isDevelopment = window.location.hostname === 'localhost';
const currentConfig = isDevelopment ? config.development : config.production;

export default currentConfig;
