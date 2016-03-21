# Livetoken

[![NPM](https://nodei.co/npm/livetoken.png?compact=true)](https://nodei.co/npm/livetoken/)

Easily implement token authentication (unique and temporary code) in your node project.
This will allow you to request token to [livetoken.io](http://livetoken.io), and get some information about your account.

If you are using meteor, please have a look at [livetoken-base](https://github.com/x62en/livetoken-base)


## Registration

First register yourself on [livetoken.io](http://livetoken.io) (it's free !) and retrieve your API Key (client_id) from your administration space.

___


## Install

Install with npm
  ```sh
    npm install --save livetoken
  ```


## Basic usage

Require the module
  ```coffeescript
    LIVETOKEN = require('livetoken')
  ```

Instantiate with your API_KEY
  ```coffeescript
    livetoken = new LIVETOKEN('YOUR-API-KEY-HERE')
  ```

Execute status request
  ```coffeescript
    livetoken.status
      callback: (result) ->
        unless result.State
          console.log result.Msg
        else
          console.log "Credit: #{result.Credit}"
          console.log "Sent mail: #{result.Sent_mail}"
          console.log "Sent sms: #{result.Sent_sms}"
  ```

Execute token request
  ```coffeescript
    livetoken.request
      phone: '0033601020304' # client phone in international format
      email: 'client.mail@domain.com'
      callback: (result) ->
        unless result.State
          console.log result.Msg
        else
          console.log "Token generated at: #{result.Time}"
          console.log "Phone token: #{result.Phone}"
          console.log "Email token: #{result.Email}"
  ```


## TODO

> Write some unit tests...
