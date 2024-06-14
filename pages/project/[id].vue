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
const isCreateColumn = ref(false)
const newColumnInput = ref('')
console.log(project);
if (!project) {
    navigateTo('/')
}

function createCard(columnId: number) {
    isCreateCard.value = true
    createCardIdColumn.value = columnId
}

async function createColumn() {
    if (newColumnInput.value.trim()) {
        let res = await useMyFetch('/group', {
            method: 'POST',
            body: {
                projectId: project?.id,
                name: newColumnInput.value.trim()
            }
        })
        console.log(res);
        isCreateColumn.value = false
    }
}

</script>

<template>
    <div class="kanban-component">
        <ModalBase @close="isCreateCard = false" v-if="isCreateCard && createCardIdColumn">
            <ModulesContentModalCreateCard @close="isCreateCard = false" :project-name="project?.name" />
        </ModalBase>
        <ModalBase v-if="isCreateColumn" @close="isCreateColumn = false">
            <form @submit.prevent="" class="create-column white-block column">
                <header>
                    <p>Создание колонки</p>
                </header>
                <!-- <hr> -->
                <div class="content-form column">
                    <input v-model="newColumnInput" placeholder="Введите название колонки" type="text">
                    <hr>
                    <div class="btns">
                        <button @click="isCreateColumn = false" class="white">Отмена</button>
                        <button @click="createColumn" class="blue">Создать колонку</button>
                    </div>
                </div>
            </form>
        </ModalBase>
        <div v-if="project.groups.length" class="kanban">
            <ColumnKanban @create-card="createCard" :id="column.id" :name="column.name"
                v-for="column in project.groups"></ColumnKanban>
            <div class="group-kanban column">
                <div class="container-column-name">
                    <button @click="isCreateColumn = true" class="grey-button">
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

        .grey-button {
            width: 100%;
        }
    }

    .create-column {
        gap: 1rem;

        header {
            p {
                color: $gray-500;
                font-family: Inter;
                font-size: 0.875rem;
                font-style: normal;
                font-weight: 400;
                line-height: 1.25rem;
                /* 142.857% */
            }
        }

        .content-form {
            gap: 0.5rem;
        }

        .btns {
            gap: 0.5rem;

            button {

                /* Text sm/Semibold */
                font-family: Inter;
                font-size: 0.875rem;
                font-style: normal;
                font-weight: 600;
                line-height: 1.25rem;
                /* 142.857% */
            }
        }
    }
</style>