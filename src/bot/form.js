const user_state = require("./user_state")

function Form() {
    this.storage = {}

    this.register = (user) => {        
        if(!this.storage[user.from]) {
            this.storage[user.from] = {state: 1, data: []}
            return `Informe seu nome`
        }
        if(this.storage[user.from].state == 1){
            this.storage[user.from].data.push(user.body)
            this.storage[user.from].state = 2
            return `Informe seu CPF`
        }
        if(this.storage[user.from].state == 2){
            this.storage[user.from].data.push(user.body)
            this.storage[user.from].state = 3
            return `Informe o serviço desejado.
            opções:
            pediatria, neurologia, cardiologia
            `
        }
        if(this.storage[user.from].state == 3){
            this.storage[user.from].data.push(user.body)
            console.log(this.storage[user.from].data)

            delete this.storage[user.from]
            user_state.set(user, '!inicial')
            return `Cadastro realizado com sucesso`
        }
    }    
}
const form = new Form()

module.exports = form