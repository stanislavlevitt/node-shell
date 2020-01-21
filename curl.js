const request = require('request');
module.exports = (url,done) => {

  request(url, function (error, response, body) {
    if (error) throw error;
    done(body);
  });
}
