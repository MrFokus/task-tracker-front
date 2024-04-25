
export const useMyFetch = async<Type> (request:string, opts?:any)=>{
    const config = useRuntimeConfig()
    const accessToken = useCookie('access')
    const res = await $fetch<Type>(request, {
        ...opts,
        baseURL: config.public.baseUrl,
        headers: { Authorization: accessToken.value ? accessToken.value : '' },
        immediate:true,
    })
    return res
}