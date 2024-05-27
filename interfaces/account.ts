export interface IRegister{
    login: string,
    mail: string,
    name: string,
    password: string,
    repeatPassword:string
}

export interface User{
    id:number,
    login: string,
    mail: string,
    name: string,
    photo:string
}

export interface IAddUser extends User{
    role:number | undefined,
}
