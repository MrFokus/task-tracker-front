<script setup lang="ts">
import EmptyContent from '../UI/EmptyContent.vue';
import ListParticipants from '../UI/ListParticipants.vue';
import ProjectCard from '../UI/ProjectCard.vue';

const props = defineProps<{
    teamName: string,
    teamId: number,
    users?: {name:string, photo:string}[]
}>()

const projects = ref()

async function getProjects() {
    try {
        let res = await useMyFetch(`/team/${props.teamId}`)
        if (res && res.projects) {

            projects.value = res?.projects
        }
        console.log(projects.value);
        
    }
    catch (e) {
        console.error(e);
    }
}

await getProjects()
</script>

<template>
    <div class="team-content-component">
        <div class="title-container">
            <p class="team-name">
                {{teamName}}
            </p>
            <div class="btns">
                <nuxt-link :to="`team/${teamId}`" class="white">
                    Показать все проекты
                </nuxt-link>
            </div>
        </div>
        <ListParticipants :list="users" class="list-participants">
            <!-- <button class="white add-paticipant">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10.0001 4.16667V15.8333M4.16675 10H15.8334" stroke="#667085" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button> -->
        </ListParticipants>
        <div v-if="projects.length > 0" class="last-projects-container">
            <p class="title">Последние проекты</p>
            <div  v-crop-content class="last-projects">
                <ProjectCard :photo="project.photo" :id="project.id" :name="project.name" v-for="project in projects"></ProjectCard>
            </div>
        </div>
        <div v-else>
            <EmptyContent class="no-projects" description="Пока что проектов нет"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .team-content-component {
        width: 100%;
        flex-direction: column;
        gap: 1rem;
    }

    .title-container {
        justify-content: space-between;
        gap: 1rem;

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

    .list-participants {
        width: 100%;
        height: 100%;
        max-height: 4rem;
        background-color: $gray-100;
        border-radius: 0.75rem;
    }

    .add-paticipant {
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        aspect-ratio: 1/1;
        padding: 0.5rem;

        svg {
            width: 1.25rem;
            height: 1.25rem;
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
            gap: .75rem;
        }
    }
    .no-projects:deep(){
        .empty-emoji{
            width: 8rem;
        }
    }
</style>