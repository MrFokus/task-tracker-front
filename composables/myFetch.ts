
export const useMyFetch = async<Type> (request:string, opts?:any)=>{
    const config = useRuntimeConfig()
    const accessToken = useCookie('access_token')
    try{
    const res = await $fetch<Type>(request, {
        ...opts,
        baseURL: config.public.baseUrl,
        headers: { Authorization: accessToken.value ? accessToken.value : '' },
        immediate:true,
    })
    return res
}
catch (e){
    console.error(e);
    throw e
}
}