import { useUserStore } from "~/store/user"

export default defineNuxtRouteMiddleware(async (to, from) => {
    let exceptions = ['/login', '/register']
    if (!exceptions.includes(to.path)) {
        try{
            const user = useUserStore()
            await user.getUser()
        }
        catch(e){            
            if (e.statusCode === 401){
               return navigateTo('/login')
            }
        }
    }
})
