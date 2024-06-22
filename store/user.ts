export const useUserStore = defineStore('user', {
    state: () => ({
        user: {},
        roles: []
    }),

    actions: {
        async getUser() {
            const access_token = useCookie('access_token')
            let user = await useMyFetch<{
                id:number,
                name: string,
                mail: string,
                photo: string
            }>('/user')
            this.user = user
            console.log(this.user);
            
        }
    }
})