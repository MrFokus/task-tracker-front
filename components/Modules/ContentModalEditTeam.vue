<script setup lang="ts">
import type { IAddUser, User } from '~/interfaces/account';
import Search from '../UI/Search.vue';
import Select from '../UI/Select.vue';
import type { ITeamParticipates } from '~/interfaces/team';
import noUserProfile from '~/assets/img/no-user-profile.svg'

const emit = defineEmits<{
    close: [],
    update: []
}>()

const props = defineProps<{
    team: any
}>()
const searchUser = ref('')
const teamName = ref('')
const listSelectRole = ref(await useMyFetch<{ id: number, name: string, nameRu: string }[] | undefined>('/role'))
console.log(listSelectRole);
const listSearchUser = ref<User[]>([])
const listPeople = ref<IAddUser[]>([])
const isUserSearch = ref(false)
function addPeople(user: User) {
    console.log(user.id);

    if (listPeople.value.length < 0 || !listPeople.value.find((el) => el.id === user.id)) {
        if (listPeople.value.find(user => user.role === 2)) {
            listPeople.value.push({ ...user, role: 3 })
        }
        else if (listPeople.value.find(user => user.role === 1)) {
            listPeople.value.push({ ...user, role: 2 })
        }
        else {
            listPeople.value.push({ ...user, role: 1 })
        }
        isUserSearch.value = false
    }
    return

}


watch(() => props.team, () => {
    teamName.value = props.team.name;
    listPeople.value = props.team.participatesTeam.map((part: any) => {
        console.log(part.role.id);

        return {
            id: part.user.id,
            login: part.user.login,
            mail: part.user.mail,
            name: part.user.name,
            photo: part.user.photo ? part.user.photo : undefined,
            role: part.role.id
        }
    })


}, { immediate: true, deep: true })

function deletePeople(index: number) {
    if (listPeople.value.length > 1) {
        listPeople.value.splice(index, 1)
        listPeople.value.forEach((u,index)=>{
            setRole(u.role-1,index)
        })
    }
}

function setRole(indexRole: number, indexUser: number) {
    let director = listPeople.value.findIndex(u => u.role == 1)
    let teamLead = listPeople.value.findIndex(u => u.role == 2)
    console.log(indexRole, indexUser);


    if (indexRole === 0 && director !== -1) {
        listPeople.value[director].role = 3
        console.log('director');
        director = listPeople.value.findIndex(u => u.role == 1)
        teamLead = listPeople.value.findIndex(u => u.role == 2)

    }
    if (indexRole === 1 && teamLead !== -1) {
        listPeople.value[teamLead].role = 3
        console.log('teamLead');
        director = listPeople.value.findIndex(u => u.role == 1)
        teamLead = listPeople.value.findIndex(u => u.role == 2)

    }
    listPeople.value[indexUser].role = listSelectRole.value ? listSelectRole.value[indexRole].id : undefined
    director = listPeople.value.findIndex(u => u.role == 1)
    teamLead = listPeople.value.findIndex(u => u.role == 2)


    console.log(director, teamLead);

    if (director == -1) {
        listPeople.value[0].role = 1

        return
    }
}

async function createTeam() {
    try {
        let res = await useMyFetch<ITeamParticipates>('team/' + props.team.id, {
            method: 'PATCH',
            body: {
                name: teamName.value,
                participates: listPeople.value.map(el => ({ id: el.id, role: el.role }))
            }
        })
        console.log(res);

        if (res) {
            emit('update')
            emit('close')
        }
    }
    catch (e: any) {
        console.log(e.message);

    }

}
watch(searchUser, async () => {
    listSearchUser.value = await useMyFetch<User[]>('/user/search', {
        query: {
            name: searchUser.value
        }
    })
}, { immediate: true })
</script>

<template>
    <form @submit.prevent="createTeam" class="white-window column">
        <header class="modal-block">
            <p class="modal-name">Редактировние команды</p>
            <button type="button" class="close" @click="emit('close')">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M11 1L1 11M1 1L11 11" stroke="#667085" stroke-width="1.66667" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
        </header>
        <hr>
        <div class="content-modal modal-block column">
            <div class="input-container column">
                <p class="input-name">Название команды</p>
                <input v-model="teamName" placeholder="Введите название команды" type="text">
            </div>
            <div class="input-container column">
                <p class="input-name">Добавление участников</p>
                <Search :attributes="{ placeholder: '@login' }" v-model:is-search="isUserSearch" v-model="searchUser"
                    @select="addPeople">
                    <li @click="addPeople(user)" class="profile-search" :key="user.id" v-for="user in listSearchUser">
                        <img class="profile-photo" :src="user.photo ? user.photo : noUserProfile" alt="">
                        <p class="login">@{{ user.login }}</p>
                        <p class="full-name">{{ user.name }}</p>
                    </li>
                </Search>
                <ul class="includes-participants column">
                    <li v-if="listPeople" v-for="(user, index) in listPeople" class="include-profile">
                        <img class="profile-photo" :src="user.photo ?? noUserProfile" alt="">
                        <p class="login">{{ user.login }}</p>
                        <p class="full-name">{{ user.name }}</p>
                        <Select v-if="listSelectRole" class="select-role" :selectedIndex="user.role - 1"
                            @select="setRole($event, index)" :list-select="listSelectRole.map(el => el.nameRu)">
                        </Select>
                        <button type="button" @click="deletePeople(index)" class="white delete-user">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none">
                                <path
                                    d="M10.6667 4.00001V3.46668C10.6667 2.71994 10.6667 2.34657 10.5213 2.06136C10.3935 1.81047 10.1895 1.6065 9.93865 1.47867C9.65344 1.33334 9.28007 1.33334 8.53333 1.33334H7.46667C6.71993 1.33334 6.34656 1.33334 6.06135 1.47867C5.81046 1.6065 5.60649 1.81047 5.47866 2.06136C5.33333 2.34657 5.33333 2.71994 5.33333 3.46668V4.00001M2 4.00001H14M12.6667 4.00001V11.4667C12.6667 12.5868 12.6667 13.1468 12.4487 13.5747C12.2569 13.951 11.951 14.2569 11.5746 14.4487C11.1468 14.6667 10.5868 14.6667 9.46667 14.6667H6.53333C5.41323 14.6667 4.85318 14.6667 4.42535 14.4487C4.04903 14.2569 3.74307 13.951 3.55132 13.5747C3.33333 13.1468 3.33333 12.5868 3.33333 11.4667V4.00001"
                                    stroke="#F04438" stroke-width="1.67" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
            <footer>
                <button type="submit" class="blue">Сохранить</button>
            </footer>
        </div>
    </form>
</template>


<style scoped lang="scss">
form {
    height: fit-content;
}

header {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    // padding: 0.75rem 2rem;

}

.close {
    padding: .5rem;
    aspect-ratio: 1/1;
    height: 100%;

    svg,
    svg path {
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
    }
}

.content-modal {
    gap: 1rem;
}

.modal-block {
    width: 50rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
}

.modal-name {
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
}

.input-container {
    gap: .5rem;
    width: 100%;
}

footer {
    justify-content: flex-end;
}

.includes-participants {
    gap: 0;
    // max-height: 20rem;
}

.include-profile {
    padding-bottom: .5rem;
    padding-top: .5rem;
    display: grid;
    grid-template-columns: auto auto 1fr 30% auto;
    align-items: center;
    justify-items: end;
    gap: 2rem;
    border-bottom: 1px $gray-300 solid;

    .profile-photo {
        width: 3rem;
        aspect-ratio: 1/1;
    }

    .full-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: end;
        color: $gray-500;
        max-width: 100%;
    }
}

.delete-user {
    height: 2.375rem;
    padding: 0.5rem;
    width: 100%;
    aspect-ratio: 1/1;
    align-items: center;
    justify-content: center;
}

.profile-search {
    cursor: pointer;
    padding: 0.25rem .5rem;
    display: grid;
    align-items: center;
    grid-template-columns: auto auto 1fr;
    gap: 2rem;
    max-width: 100%;
    width: 100%;

    img {
        object-fit: cover;
        width: 2rem;
        height: 2rem;
    }

    .full-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: end;
        color: $gray-500;
        max-width: 100%;

    }

    &:hover {
        border-radius: 0.5rem;
        background-color: $gray-100;
    }
}
</style>