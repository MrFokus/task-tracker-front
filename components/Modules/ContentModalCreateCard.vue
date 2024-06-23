<script setup lang="ts">
import { useProjectStore } from '~/store/project';
import Mark from '../UI/Mark.vue';
import MiniModal from '../UI/MiniModal.vue';
import ContentMiniModalAddParticipants from './ContentMiniModalAddParticipants.vue';
import ContentMiniModalAddColumn from './ContentMiniModalAddColumn.vue';
import { DEFAULT_COLUMN } from '~/constants/project';
import TaskCheckList from '../UI/TaskCheckList.vue';
import DropFile from '../UI/DropFile.vue';
import AttachmentElement from '../UI/AttachmentElement.vue';
import AttachmentByCreate from '../UI/AttachmentByCreate.vue';

const project = useProjectStore()
const props = defineProps<{
    projectName: string,
    group?: any,
    projectId:number,
}>()

const isSetMark = ref(false)
const isSetParticipants = ref(false)
const isSetColumn = ref(false)
const isAddCheckList = ref(false)
const isAddAttachments = ref(false)

const formData = ref({
    taskName: '',
    description: '',
    dateEnd: '',
    marks: [],
    participants: [],
    group: props.group,
    checkList: [],
    attachments: [],
    label: ''
})

const files = ref([])
// await getTask()
async function saveTask () {
    let res = await useMyFetch(`/task`, {
        method: "POST",
        body: {
            projectId:props.projectId,
            name: formData.value.taskName,
            description: formData.value.description,
            groupId: formData.value.group.id,
            dateEnd: new Date(formData.value.dateEnd).toISOString(),
            label: formData.value.label,
            marks: formData.value.marks,
            participants: formData.value.participants,
            checkList: formData.value.checkList,
        }
    })
    let files_res =await uploadFiles(files.value, res.id)
    emit('close')

}


async function getTask() {

    const task = await useMyFetch(`/task/${props.taskId}`)
    if(task)
    formData.value = {
        taskName: task.name,
        description: task.description,
        dateEnd: task.dateEnd,
        marks: task.marks,
        participants: task.participants,
        group: task.column,
        checkList: task.subtasks,
        attachments: task.attachments,
        label: task.label
    }
}



function setMark(marks: any[]) {
    formData.value.marks = marks
    console.log(formData.value);
}

const emit = defineEmits<{
    close: []
}>()

function textareaResize(e: any) {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
}

async function uploadFiles(files: File[],taskId:number) {
    let file = new FormData()
    console.log(files);

    files.forEach(f => file.append('files', f))
    let res = await useMyFetch('/task/upload/' + taskId, {
        method: 'POST',
        body: file
    })
    return res

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
                        <input v-model="formData.dateEnd" type="date">
                        <!-- <button class="grey">Сегодня</button> -->
                    </div>
                </div>
                <div class="info-element-container">
                    <p class="name">Метка</p>
                    <div class="content-container">
                        <ul v-if="formData.marks.length">
                            <li v-for="mark in formData.marks">
                                <Mark class="mark" :color="mark.color" :background="mark.background"
                                    :name="mark.name" />
                            </li>
                            <li>
                                <button @click="isSetMark = true" class="add white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <g clip-path="url(#clip0_0_2708)">
                                            <path
                                                d="M12.0003 6.66671L9.33368 4.00004M1.66699 14.3334L3.92324 14.0827C4.1989 14.0521 4.33673 14.0367 4.46556 13.995C4.57985 13.958 4.68862 13.9058 4.78892 13.8396C4.90196 13.7651 5.00002 13.667 5.19614 13.4709L14.0003 4.66671C14.7367 3.93033 14.7367 2.73642 14.0003 2.00004C13.264 1.26366 12.0701 1.26366 11.3337 2.00004L2.52948 10.8042C2.33336 11.0003 2.2353 11.0984 2.16075 11.2114C2.09461 11.3117 2.04234 11.4205 2.00533 11.5348C1.96363 11.6636 1.94831 11.8015 1.91769 12.0771L1.66699 14.3334Z"
                                                stroke="#667085" stroke-width="1.67" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_2708">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                        <button v-else @click="isSetMark = true" class="add grey">Указать</button>
                    </div>

                </div>
                <div class="info-element-container">
                    <p class="name">Ответственные</p>
                    <div class="content-container">
                        <ul v-if="formData.participants.length">
                            <li v-for="participants in formData.participants">
                                <nuxt-link class="grey">{{ participants.name }}</nuxt-link>
                            </li>
                            <li>
                                <button @click="isSetParticipants = true" class="add white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <g clip-path="url(#clip0_0_2708)">
                                            <path
                                                d="M12.0003 6.66671L9.33368 4.00004M1.66699 14.3334L3.92324 14.0827C4.1989 14.0521 4.33673 14.0367 4.46556 13.995C4.57985 13.958 4.68862 13.9058 4.78892 13.8396C4.90196 13.7651 5.00002 13.667 5.19614 13.4709L14.0003 4.66671C14.7367 3.93033 14.7367 2.73642 14.0003 2.00004C13.264 1.26366 12.0701 1.26366 11.3337 2.00004L2.52948 10.8042C2.33336 11.0003 2.2353 11.0984 2.16075 11.2114C2.09461 11.3117 2.04234 11.4205 2.00533 11.5348C1.96363 11.6636 1.94831 11.8015 1.91769 12.0771L1.66699 14.3334Z"
                                                stroke="#667085" stroke-width="1.67" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_2708">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                        <button v-else @click="isSetParticipants = true" class="add grey">Указать</button>
                    </div>
                </div>
                <div class="info-element-container">
                    <p class="name">Колонка</p>
                    <div class="content-container">
                        <div :style="{ backgroundColor: DEFAULT_COLUMN[formData.group.name]?.background ?? 'transparent', outline: DEFAULT_COLUMN[formData.group.name] ? '' : '1px solid #D0D5DD' }"
                            :class="['column-name']">
                            <img :src="DEFAULT_COLUMN[formData.group.name]?.icon ?? '/dashed-icon.svg'" alt="">
                            <p :style="{ color: DEFAULT_COLUMN[formData.group.name]?.color ?? '#344054' }" class="name">
                                {{
                                    formData.group.name
                                }}</p>
                        </div>
                        <button v-if="!formData.group" @click="isSetColumn = true" class="add grey">Указать</button>
                        <button v-else @click="isSetColumn = true" class="add white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none">
                                <g clip-path="url(#clip0_0_2708)">
                                    <path
                                        d="M12.0003 6.66671L9.33368 4.00004M1.66699 14.3334L3.92324 14.0827C4.1989 14.0521 4.33673 14.0367 4.46556 13.995C4.57985 13.958 4.68862 13.9058 4.78892 13.8396C4.90196 13.7651 5.00002 13.667 5.19614 13.4709L14.0003 4.66671C14.7367 3.93033 14.7367 2.73642 14.0003 2.00004C13.264 1.26366 12.0701 1.26366 11.3337 2.00004L2.52948 10.8042C2.33336 11.0003 2.2353 11.0984 2.16075 11.2114C2.09461 11.3117 2.04234 11.4205 2.00533 11.5348C1.96363 11.6636 1.94831 11.8015 1.91769 12.0771L1.66699 14.3334Z"
                                        stroke="#667085" stroke-width="1.67" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_2708">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="info-element-container">
                    <p class="name">Ярлык</p>
                    <div class="content-container">
                        <input placeholder="Введите название ярлыка" v-model="formData.label" class="add-label"
                            type="text">
                    </div>
                </div>
            </section>
            <hr v-if="!formData.checkList?.length || !formData.attachments?.length">
            <section v-if="!formData.checkList?.length || !formData.attachments?.length" class="attachment-checklist">
                <button v-if="!formData.checkList.length" @click="isAddCheckList = true" class="add grey">Добавить
                    чеклист</button>
                <button v-if="!formData.attachments.length" @click="isAddAttachments = true" class="add grey">Прикрепить файлы</button>
            </section>
            <hr v-if="formData.checkList.length">
            <section v-if="formData.checkList.length || isAddCheckList" class="check-list column">
                <p class="title">Чеклист</p>
                <TaskCheckList v-model="formData.checkList" />
            </section>
            <hr v-if="formData.checkList?.length || formData.attachments?.length">
            <section v-if="formData.attachments?.length || isAddAttachments" class="attachments column">
                <p class="title">Вложения</p>
               <AttachmentByCreate :name="file.name" v-for="file in files"></AttachmentByCreate>
                <DropFile :multiple="true" @upload="files = $event"></DropFile>
            </section>
        </div>
        <footer class="modal-block">
            <button @click="saveTask" class="blue save">Сохранить</button>
        </footer>
        <MiniModal v-if="isSetMark" @close="isSetMark = false">
            <ModulesContentMiniModalMarks v-model="formData.marks" @set-mark="setMark" :marks-project="project.marks"
                @close="isSetMark = false">
            </ModulesContentMiniModalMarks>
        </MiniModal>
        <MiniModal v-if="isSetParticipants" @close="isSetParticipants = false">
            <ContentMiniModalAddParticipants @close="isSetParticipants = false" v-model="formData.participants"
                :users="project.users"></ContentMiniModalAddParticipants>
        </MiniModal>
        <MiniModal v-if="isSetColumn" @close="isSetColumn = false">
            <ContentMiniModalAddColumn @close="isSetColumn = false" v-model="formData.group" :groups="project.groups" />
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
        max-width: 100%;
        gap: 2rem;

        .column-name {
            background-color: $gray-200;
            width: fit-content;
            gap: 0.38rem;
            border-radius: 0.5rem;
            padding: 0.25rem 0.5rem;
            align-items: center;

            img {
                width: 1rem;
                height: 1rem;
            }

            p.name {
                min-width: auto;
                text-overflow: ellipsis;
                // width: 100%;
                max-width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-align: center;
                font-size: 0.875rem;
                font-weight: 500;
                line-height: 1.25rem;
            }
        }

        .content-container {
            width: 100%;
            max-width: 100%;
            flex-wrap: wrap;
            gap: 0.5rem;

            ul {
                flex-wrap: wrap;
                gap: 0.5rem;
            }

        }

        .name {
            min-width: 8.75rem;
            color: $gray-500;
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.5rem;
        }

        .mark {
            max-width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            display: flex;
            align-items: center;
            padding: 0.25rem 0.5rem;
            text-align: center;
            font-size: 0.875rem;
            font-weight: 500;
            line-height: 1.25rem;
        }
    }
}

.add {
    color: $gray-700;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;

    &.white {
        padding: 0.375rem;
    }
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

.check-list,
.attachments {
    gap: 0.75rem;

    .title {
        color: $gray-900;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5rem;
    }
}
</style>