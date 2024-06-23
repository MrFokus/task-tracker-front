import { defineStore } from 'pinia'


export const useErrorStore = defineStore('Error', {
    state: (): {
        messages?: { id: number, type: string, message: string }[],
    } => ({
        messages: [
            // {type: 'error', message: 'ОшибкаОшибкаОшибкаОшибкаОшибкаОшибкаОшибкаОшибка'},
            // {type: 'warn', message: 'ПредупреждениеПредупреждениеПредупреждениеПредупреждениеПредупреждениеПредупреждение'},
            // {type: 'success', message: 'УспешноУспешноУспешноУспешноУспешноУспешноУспешноУспешноУспешно'},
        ]
    }),
    actions: {
        setMessages(payload: { type: string, message: string, delay?: number }) {
            if (this.messages) {
                let id = Math.random()
                while (this.messages.findIndex(msg => msg.id === id) !== -1) {
                    id = Math.random()
                }
                this.messages.push({ id: id, ...payload })
                if (!payload.delay) {
                    payload.delay = 5000
                }
                setTimeout(() => {
                    this.deleteMessage(id)
                }, payload.delay)
            }
        },
        deleteMessage(id: number) {
            if (this.messages) {
                let index = this.messages.findIndex(msg => msg.id === id)
                this.messages.splice(index, 1)
            }
        }

    }
})