<script setup lang="ts">
import ContentModalCreateProject from '~/components/Modules/ContentModalCreateProject.vue';
import ContentModalCreateTeam from '~/components/Modules/ContentModalCreateTeam.vue';
import TeamContent from '~/components/Modules/TeamContent.vue';
import EmptyContent from '~/components/UI/EmptyContent.vue';
import ModalBase from '~/components/UI/ModalBase.vue';
import ProjectCard from '~/components/UI/ProjectCard.vue';
import TitleBase from '~/components/UI/TitleBase.vue';
import { useUserStore } from '~/store/user';


const userStore = useUserStore()

const teams = ref()
async function getTeams() {
    try {
        let res = await useMyFetch(`/team`)
        teams.value = res
        console.log(teams.value);
        
    }
    catch (e) {
        console.error(e);
    }
}

getTeams()
let isSelectCreate = ref(false)
let isCreateTeam = ref(false)
let isCreateProject = ref(false)
</script>

<template>
    <ModalBase @close="() => { isCreateTeam = false;  isCreateProject = false}" v-if="isCreateTeam || isCreateProject">
        <ContentModalCreateTeam v-if="isCreateTeam" @close="isCreateTeam = false">
            
        </ContentModalCreateTeam>
        <ContentModalCreateProject v-else-if="isCreateProject" @close="isCreateProject = false"></ContentModalCreateProject>
    </ModalBase>
    <main class="padding-page">
        <TitleBase title="Главная"
            description="Здесь вы можете управлять лмчными проектами или командами, в которых состоите.">
            <div v-out-click="()=>isSelectCreate=false" style="position: relative; height: fit-content; width: fit-content;" class="btn-container">
                <button @click="isSelectCreate = true" class="blue add-team">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10.0001 4.16667V15.8333M4.16675 10H15.8334" stroke="white" stroke-width="1.67"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Создать
                </button>
                <ul v-if="isSelectCreate" class="list-select-component">
                    <li>
                        <button class="select-item" @click="isCreateTeam = true">
                            Создать команду
                        </button>
                    </li>
                    <li>
                        <button @click="isCreateProject = true" class="select-item">
                            Создать проект
                        </button>
                    </li>
                </ul>
            </div>
        </TitleBase>
        <EmptyContent v-if="teams && teams.length==0" description="Пока ничего нет. <br> Создайте личный проект или команду!" preview="@/assets/img/empty-emoji.png"></EmptyContent>
        <div v-else class="content-main-page">
            <!-- <section class="personal-projects white-block">
                <div class="title-container">
                    <p class="team-name">
                        Личные проекты
                    </p>
                    <div class="btns">
                        <nuxt-link to="/team/local" class="white">
                            Показать все проекты
                        </nuxt-link>
                    </div>
                </div>
                <div class="last-projects-container">
                    <p class="title">Последние проекты</p>
                    <div v-crop-content class="last-projects">
                        <ProjectCard></ProjectCard>
                        <ProjectCard></ProjectCard>
                        <ProjectCard></ProjectCard>
                        <ProjectCard></ProjectCard>
                        <ProjectCard></ProjectCard>
                        <ProjectCard></ProjectCard>
                    </div>
                </div>
            </section> -->
            <section class="teams">
                <div v-for="team in teams" class="team white-block">
                    <TeamContent :users="team.users" :team-id="team.teamId" :team-name="team.teamName">
                    </TeamContent>
                </div>
            </section>
        </div>
    </main>
</template>

<style scoped lang="scss">
    main {
        flex-direction: column;
        padding-top: 3rem;
        padding-bottom: 3rem;
        gap: 1.5rem;
    }

    .add-team {
        gap: .5rem;
        height: fit-content;
    }

    .teams {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(auto-fill, minmax(37.25rem, 1fr));
    }

    

    .content-main-page {
        flex-direction: column;
        gap: 1.5rem;
    }

    .personal-projects {
        flex-direction: column;
    }

    .title-container {
        justify-content: space-between;
        gap: 1rem;
        width: 100%;

        .team-name {
            color: $gray-900;
            font-family: Inter, sans-serif;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 600;
            line-height: 2.25rem;
            /* 150% */
        }

        .btns {
            gap: 0.75rem;
        }

        .managment,
        a {
            color: $gray-700;
            /* Text sm/Semibold */
            font-family: Inter, sans-serif;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 600;
            line-height: 1.25rem;
            /* 142.857% */
        }
    }

    .last-projects-container {
        flex-direction: column;
        gap: .5rem;

        .title {
            color: $gray-500;

            /* Text sm/Medium */
            font-family: Inter;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1.25rem;
            /* 142.857% */
        }

        .last-projects {
            // display: grid;
            // justify-items: center;
            // grid-template-columns: repeat(auto-fill,minmax(16.75rem,1fr));
            gap: .75rem;
            justify-content: space-around;
        }
    }

</style>