<script setup lang="ts">
import ColumnKanban from '~/components/UI/ColumnKanban.vue';
import ModalBase from '~/components/UI/ModalBase.vue';

definePageMeta({
    layout: 'project'
})
const route = useRoute()
const project = await useMyFetch(`/project/${route.params.id}`)
const isCreateCard = ref(false)
const createCardIdColumn = ref<number>() 
console.log(project);
if (!project) {
    navigateTo('/')
}

function createCard(columnId: number) {
    isCreateCard.value = true
    createCardIdColumn.value = columnId
}

</script>

<template>
    <div class="kanban-component">
        <ModalBase @close="isCreateCard = false" v-if="isCreateCard && createCardIdColumn">
            <ModulesContentModalCreateCard @close="isCreateCard = false" :project-name="project?.name"/>
        </ModalBase>
        <div v-if="project.groups.length" class="kanban">
            <ColumnKanban @create-card="createCard" :id="column.id" :name="column.name" v-for="column in project.groups"></ColumnKanban>
            <div class="group-kanban column">
                <div class="container-column-name">
                    <button class="grey-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10.0001 4.16666V15.8333M4.16675 9.99999H15.8334" stroke="#667085"
                                stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Добавить колонку
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .kanban-component {
        max-width: 100%;
        width: 100%;
        max-height: 100%;
        height: 100%;
        padding: 1.5rem 1.63rem;
        padding-top: 0;
        overflow: auto;
    }

    .kanban {
        gap: 1rem;
        height: fit-content;
        width: fit-content;
    }

    .group-kanban {
        position: relative;
        width: 18.75rem;
        gap: 1rem;
        margin-top: -1rem;

        .content {
            gap: 0.75rem;
        }
    }

    .container-column-name {
        width: 100%;
        padding-top: 1.5rem;
        padding-bottom: 1rem;
        position: sticky;
        top: 0;
        right: 0;
        left: 0;
        background-color: $gray-50;

        .grey-button{
            width: 100%;
        }
    }
</style>