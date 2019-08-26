const rp = require('request-promise');
const logger = require("winston"); 
const moment = require("moment");

module.exports = {
  requestOptions: (req, res) => {
    const requestOptions = {
      method: 'GET',
      uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      qs: {
        'start': '1',
        'limit': '5',
        'convert': 'USD'
      },
      headers: {
        'X-CMC_PRO_API_KEY': process.env.CRYPTO_API
      },
      json: true,
      gzip: true
    };
  
    rp(requestOptions).then(response => {
        console.log('API call response:', response);
        res.json(response)
      }).catch((err) => {
        console.log('API call error:', err.message);
    });
  },
  getHistoricalPrices: (req, res) => {
    const endDate = moment().unix() * 1000
    const startDate = moment().subtract(10, 'day').unix() * 1000
    const crypto = req.query.q.toLowerCase()
    const requestOptions = {
      method: 'GET',
      uri: `https://api.coincap.io/v2/assets/${crypto}/history`,
      qs: {
        'interval': 'd1',
        'start': startDate,
        'end': endDate
      },
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true
    };
    rp(requestOptions).then(response => {
      console.log('API call response:', response);
      return res.json(response);
    }).catch((err) => {
      console.log('API call error:', err.message);
      return new console.log(err);
  });
  }
};