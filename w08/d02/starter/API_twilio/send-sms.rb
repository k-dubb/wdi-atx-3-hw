require 'rubygems' # not necessary with ruby 1.9 but included for completeness
require 'twilio-ruby'
# require 'secrets.rb'

# put your own credentials here
account_sid = 'AC491f34db9d03cb0b9bfa429da9f616aa'
auth_token = 'ed2ff7c3d0fc734b2e8496ef6206e379'

# set up a client to talk to the Twilio REST API
@client = Twilio::REST::Client.new account_sid, auth_token

# alternatively, you can preconfigure the client like so
Twilio.configure do |config|
  config.account_sid = account_sid
  config.auth_token = auth_token
end

# and then you can create a new client without parameters
@client = Twilio::REST::Client.new

@client.messages.create(
  from: '+14253104046',
  to: '+14252605083',
  body: 'Hey there again!'
)