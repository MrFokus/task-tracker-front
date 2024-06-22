import { useUserStore } from "~/store/user"

export default defineNuxtRouteMiddleware(async (to, from) => {
    let exceptions = ['/login', '/register']
    if (!exceptions.includes(to.path)) {
        const user = useUserStore()
        await user.getUser()
    }
})
