export interface ITeamBase{
    id:number,
    name: string,
    photo?: string
}

export interface ITeamParticipates extends ITeamBase{
    participates?:{user_id:number,role:number}[]
}

export interface ITeamParticipatesProjects extends ITeamParticipates{
    projects?: {
        id: number,
        name: string,
        photo:string
    }[]
}