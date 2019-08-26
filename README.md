[![Build Status](https://travis-ci.com/ThomasN72/webscraper.svg?branch=master)](https://travis-ci.com/ThomasN72/webscraper)


# Crypto_Application
Welcome to the crypto tracker. This tracker retrieves real time cryto prices and simulates profit/loss on crypto tradings.

<img src="./client/src/images/sample.png"
     style="float: left; margin-right: 10px;" />

<img>

## Installation
Use [node] to install packages
This should install both client and server side packages.
(Please refer to package.json for package dependencies)
```node
npm install
```

## Setup
This crypto tracker uses 2 different API.
1. https://coinmarketcap.com/
2. https://coincap.io 

MarketCap requires an API key which you can register and use the free version. Coincap is completely free and no api key is needed.

Create a .env file in the root folder and update the below information.

Substitute the below with your own key and password. If you would like to use the contact form as well, go ahead and update all the email information.

```
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=SENDEREMAIL
EMAIL_PASS=SENDERPASSWORD
EMAIL_RECEIPENT=RECEIPENTEMAIL

CRYPTO_API=API KEY
```

## Usage
Use npm start to begin running both client and server for debugging
```node
npm run start:prod
```

## Enjoy and have fun!

