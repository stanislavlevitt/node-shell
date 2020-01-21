const request = require('request');
module.exports = (url) => {

  request(url, function (error, response, body) {
    if (error) throw error;
    process.stdout.write(body);
  });
}
