exports.config = {

  specs: [
    './e2e/*.spec.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: ["--disable-web-security"] 
     }
  },

  baseUrl: 'http://localhost:8000'


};