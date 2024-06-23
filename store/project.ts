export const useProjectStore = defineStore('project', {
    state: () => ({
        id:null,
        name: '',
        photo:'',
        teams:[],
        users: [],
        groups: [],
        tasks: [],
        marks: [],
        drag:undefined,
    }),

    getters: {
        getState() {
            return this
        }
    },

    actions: {
        async getProject(projectId:number) {
            let project = await useMyFetch(`/project/${projectId}`)
            if (project) {
                this.id = project.id
                this.name = project.name
                this.photo = project.photo
                this.groups = project.groups
                this.tasks = project.tasks
            }
            this.teams = project.teams
            let res = await useMyFetch('/team/users', { query: { teamId: this.teams[0].id } })
            console.log(res);
            
            this.users = res.map(el =>{ 
                console.log({...el.user, role:el.role});
                
                return{...el.user, role:el.role}
            })
            this.marks = await useMyFetch('/mark', {
                query: {
                    projectId: +projectId
                }
            })
            return this.$state
        },
    }
})