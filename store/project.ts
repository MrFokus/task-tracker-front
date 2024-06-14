export const useProjectStore = defineStore('project', {
    state: () => ({
        id:null,
        name: '',
        photo:'',
        teams:[],
        users: [],
        groups: [],
        tasks: [],
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
            }
            this.teams = project.teams
            let res = await useMyFetch('/team/users', { query: { teamId: this.teams[0].id } })
            this.users = res.map(el => el.user)
            return this.$state
        },
    }
})