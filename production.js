const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const message_handler = require('./src/bot/message_handler')
const User = require('./src/bot//user')
const user_state = require('./src/bot/user_state')
const form = require('./src/bot/form')    
    
    const client = new Client({
        authStrategy: new LocalAuth()
    });
    
    
    client.on('qr', (qr) => {
        // Generate and scan this code with your phone
        qrcode.generate(qr, { small: true });
    });
    
    client.on('ready', () => {
        console.log('Client is ready!');
    });
    
    client.on('message', message => {
        const user = new User(message)
        const response = message_handler.getResponse(user)
        console.log(response)
        client.sendMessage(message.from, response);
    });

client.initialize()

    