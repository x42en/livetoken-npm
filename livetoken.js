/****************************************************/
/*         Livetoken - v0.1.3                       */
/*                                                  */
/* Easily interact with LiveToken.io in node.js     */
/****************************************************/
/*             -    Copyright 2016    -             */
/*                                                  */
/*   License: Apache v 2.0                          */
/*   @Author: Ben Mz                                */
/*   @Email: benoit (at) webboards (dot) fr         */
/*                                                  */
/****************************************************/

(function() {
  var Livetoken, request;

  request = require('request');

  module.exports = Livetoken = (function() {
    function Livetoken(apikey) {
      this.apikey = apikey;
    }

    Livetoken.prototype.status = function(_arg) {
      var callback;
      callback = _arg.callback;
      if (!callback) {
        callback = this._default_callback;
      }
      return this._interact({
        action: 'status',
        params: {
          'Client_ID': this.apikey
        },
        callback: callback
      });
    };

    Livetoken.prototype.request = function(_arg) {
      var callback, email, params, phone;
      phone = _arg.phone, email = _arg.email, callback = _arg.callback;
      params = {
        'Client_ID': this.apikey
      };
      if (phone) {
        params.Phone = phone;
      }
      if (email) {
        params.Email = phone;
      }
      if (!callback) {
        callback = this._default_callback;
      }
      return this._interact({
        action: 'status',
        params: params,
        callback: callback
      });
    };

    Livetoken.prototype._default_callback = function(raw) {
      return console.log(JSON.stringify(raw));
    };

    Livetoken.prototype._interact = function(_arg) {
      var action, callback, params;
      action = _arg.action, params = _arg.params, callback = _arg.callback;
      return request({
        method: 'POST',
        json: true,
        form: params,
        uri: "http://livetoken.io/" + action
      }, (function(_this) {
        return function(error, response, body) {
          if (!error && response.statusCode === 200) {
            return callback(body);
          } else {
            return callback({
              State: false,
              Msg: "Uknown server error: " + response.statusCode
            });
          }
        };
      })(this));
    };

    return Livetoken;

  })();

}).call(this);
