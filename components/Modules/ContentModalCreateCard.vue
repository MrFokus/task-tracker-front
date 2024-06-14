<script setup lang="ts">
import MiniModal from '../UI/MiniModal.vue';


const props = defineProps<{
    projectName: string,
    columnId?: number,
}>()

const isSetMark = ref(false)
const isSetParticipants = ref(false)

const formData = ref({
    taskName: '',
    description: '',
    dateEnd: '',
    mark: [],
    participates: [],
    columnId: props.columnId,
    checkList: [],
    attachment: [],

})


function setMark(marks: any[]) {
    formData.value.mark = marks
    console.log(formData.value);

}

const emit = defineEmits<{
    close: []
}>()

function textareaResize(e: any) {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
}
</script>

<template>
    <form @submit.prevent="" class="white-window column">
        <header class="modal-block">
            <p class="modal-name">{{ projectName }}</p>
            <button class="close" @click="emit('close')">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M11 1L1 11M1 1L11 11" stroke="#667085" stroke-width="1.66667" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
        </header>
        <div class="content-modal modal-block column">
            <section class="container-name-description column">
                <input placeholder="Название задачи" v-model="formData.taskName" class="clear task-name" type="text" />
                <textarea @input="textareaResize" placeholder="Описание задачи" v-model="formData.description"
                    class="clear task-description" />
            </section>
            <section class="task-info column">
                <div class="info-element-container">
                    <p class="name">Дата исполнения</p>
                    <div class="content-container">
                        <input type="date">
                        <!-- <button class="grey">Сегодня</button> -->
                    </div>
                </div>
                <div class="info-element-container">
                    <p class="name">Метка</p>
                    <div class="content-container">
                        <button @click="isSetMark = true" class="grey">Указать</button>
                    </div>
                </div>
                <div class="info-element-container">
                    <p class="name">Ответственные</p>
                    <div class="content-container">
                        <button @click="isSetParticipants = true" class="grey">Указать</button>
                    </div>
                </div>
                <div class="info-element-container">
                    <p class="name">Колонка</p>
                    <div class="content-container">
                        <button class="grey">Указать</button>
                    </div>
                </div>
                <div class="info-element-container">
                    <p class="name">Ярлык</p>
                    <div class="content-container">
                        <input class="add-label" type="text">
                    </div>
                </div>
            </section>
            <hr>
            <section class="attachment-checklist">
                <button class="grey">Добавить чеклист</button>
                <button class="grey">Прикрепить файлы</button>
            </section>
            <hr>
        </div>
        <footer class="modal-block">
            <button class="blue save">Сохранить</button>
        </footer>
        <MiniModal v-if="isSetMark" @close="isSetMark = false">
            <ModulesContentMiniModalMarks @set-mark="setMark" @close="isSetMark = false"></ModulesContentMiniModalMarks>
        </MiniModal>
        <MiniModal v-if="isSetParticipants" @close="isSetParticipants = false">
            <ul class="users-team">
                <li v-for="user in usersTeam">
                    <button>
                        <img src="" alt="">
                        <p class="name"></p>
                    </button>
                </li>
            </ul>
        </MiniModal>
    </form>
</template>


<style lang="scss" scoped>
    form {
        position: relative;
        height: fit-content;
    }

    header {
        width: 100%;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid $gray-200;
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
        gap: 2rem;
        padding: 1.5rem 2rem;

    }

    .modal-block {
        width: 50rem;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
    }

    .modal-name {
        color: $gray-500;
        font-family: Inter;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.25rem;
    }

    .container-name-description {
        gap: 0.5rem;
    }

    .task-name {
        &::placeholder {
            color: $gray-500;
        }

        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2rem;
        color: $gray-900;
    }

    .task-description {
        &::placeholder {
            color: $gray-500;
        }

        min-height: 1.5rem;
        color: $gray-900;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        max-height: 300px;
        resize: none;
        height: 1.5rem;
    }

    .task-info {
        gap: 1rem;

        .info-element-container {
            gap: 2rem;

            .name {
                width: 8.75rem;
                color: $gray-500;
                font-size: 1rem;
                font-style: normal;
                font-weight: 400;
                line-height: 1.5rem;
            }
        }
    }

    .grey {
        color: $gray-700;
        text-align: center;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25rem;
    }

    hr {
        border-top: 1px solid $gray-200;
    }

    .attachment-checklist {
        gap: 0.75rem;
    }

    footer {
        justify-content: flex-end;
        border-top: 1px solid $gray-200;

        .save {
            padding: 0.625rem 1rem;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 600;
            line-height: 1.25rem;
        }
    }

    .add-label {
        padding: 0;
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25rem;
        color: $gray-700;
        background-color: $gray-100;

        &:focus {
            background-color: #fff;
        }
    }
</style>