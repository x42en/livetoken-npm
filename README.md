# Livetoken

[![NPM](https://nodei.co/npm/livetoken.png?compact=true)](https://nodei.co/npm/livetoken/)

Easily implement token authentication (unique and temporary code) in your node project.
This will allow you to request token to [livetoken.io](http://livetoken.io), and get some information about your account.

If you are using meteor, please have a look at [livetoken-base](https://github.com/x62en/livetoken-base)


## Install

Install with npm
	```sh
		npm install --save livetoken
	```


## Basic usage

Require the module, and use your API_KEY
	```coffeescript
		LIVETOKEN = require('livetoken')(YOUR-API-KEY-HERE)
	```

Instantiate without options
	```coffeescript
		livetoken = new LIVETOKEN()
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
			phone: 0033601020304 //client phone in international format
			email: client.mail@domain.com
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
