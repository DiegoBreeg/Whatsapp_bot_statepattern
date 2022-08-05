function User_state() {
    this.storage = {}
    this.get = function ({ from }) {
        if (!this.storage[from]) {
            this.storage[from] = { state: '!inicial' }
            return this.storage[from].state
        } else return this.storage[from].state
    }
    this.set = function ({ from }, new_state) {
        this.storage[from].state = new_state
    }
}
const user_state = new User_state()
module.exports = user_state