const https = require('https');
const category = 'electronics'

const pingServer = () => {
  try {
    https.get(`https://estore-backend-de6f.onrender.com/api/products/category/${category}`, (res) => {
      console.log(`Pinged backend server: Status Code ${res.statusCode}`);
    }).on('error', (err) => {
      console.log('Error pinging backend server:', err.message);
    });
  } catch (error) {
    console.log('Unable to ping backend server:', error.message);
  }
};

setInterval(pingServer, 300000);
