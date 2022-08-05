const message_handler = require('./message_handler')
const User = require('./user')
const user_state = require('./user_state')
const form = require('./form')


function client_on(message) {
    const user = new User(message)
    const response = message_handler.getResponse(user)
    console.log(response)
}


let message = {from: 'diego', body: 'olá'} 
client_on(message)//1

message = {from: 'diego', body: '!cadastro'}
client_on(message)//2

message = {from: 'diego', body: 'diego'}
client_on(message)//3

message = {from: 'diego', body: 'meu CPF'}
client_on(message)//4

message = {from: 'diego', body: 'meu RG'}
client_on(message)//4


console.log(user_state.storage)




message = {from: 'diego', body: 'olá'} 
client_on(message)//1

message = {from: 'diego', body: '!cadastro'}
client_on(message)//2

message = {from: 'diego', body: 'diego'}
client_on(message)//3

message = {from: 'diego', body: 'meu CPF'}
client_on(message)//4

message = {from: 'diego', body: 'meu RG'}
client_on(message)//4

console.log(user_state.storage)