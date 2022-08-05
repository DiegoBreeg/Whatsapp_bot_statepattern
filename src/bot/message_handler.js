const form = require("./form")
const user_state = require("./user_state")

function Message_handler() {
    this.response = ''
    this.options = {
        '!inicial': (user) => {
            user_state.set(user, '!menu')
            return `bem vindo ao meu app
            escolha uma das opções para continuar

            !cadastro - para cadastrar serviço
            !lista - para lista de serviços
            !informações - para informações
            `
        },
        '!cadastro': (user) => form.register(user)
        ,
        '!lista': (user) => {
            user_state.set(user, '!inicial')
            return 'pediatria, urologista, ginecologista, podólogo, oncologista, neurologista '
        },
        '!informações': (user) => {
            user_state.set(user, '!inicial')
            return 'robô feito pelo Diego.B'
        }
    }

    this.getResponse = (user) => {
        if (user_state.get(user) === '!menu') {
            if (!(user.body in message_handler.options)) {
                user_state.set(user, '!inicial')
                return 'Código inexistente, tente novamente'
            }
            user_state.set(user, user.body)
        }
        return this.options[user_state.get(user)](user)
    }
}
const message_handler = new Message_handler()
module.exports = message_handler