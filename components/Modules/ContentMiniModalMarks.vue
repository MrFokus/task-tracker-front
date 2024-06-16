<script setup lang="ts">
import { useProjectStore } from '~/store/project';

const isNewMark = ref(false)
const isManagementMarks = ref(false)
const refactMark = ref()

const emit = defineEmits<{
    close: [],
    setMark: [any[]]
}>()

const props = defineProps<{
    marksProject:any[]
}>()
const route = useRoute()
const selectStyleForNewMark = ref()
const colors = [{ text: '#F04438', background: '#FEF3F2' }, { text: '#F79009', background: '#FFFAEB' }, { text: '#12B76A', background: '#ECFDF3' }, { text: '#0BA5EC', background: '#F0F9FF' }, { text: '#667085', background: '#EAECF0' }, { text: '#EE46BC', background: '#FDF2FA' }, { text: '#9E77ED', background: '#F9F5FF' }, { text: '#FB6514', background: '#FFF6ED' }]
const newMark = ref({
    name: '',
    text: '',
    background: ''
})


async function saveMark() {
    isNewMark.value = false
    let res = await useMyFetch('/mark', {
        method: "POST",
        body: {
            name: newMark.value.name,
            color: newMark.value.text,
            background: newMark.value.background,
            projectId: +route.params.id
        }
    })
    newMark.value = {
        name: '',
        text: '',
        background: ''
    }

}
// const project = useProjectStore()
// const marksProject = ref()

// watch(project, () => {
//     marksProject.value = project.marks

// }, { immediate: true, deep: true })
const markTask = defineModel()

watch(selectStyleForNewMark, () => {
    newMark.value = {
        name: newMark.value.name,
        ...colors[selectStyleForNewMark.value]
    }
})

function addMark(mark: any) {
    let indexMark = markTask.value.findIndex((el) => JSON.stringify(el) == JSON.stringify(mark))
    console.log(indexMark);

    if (indexMark !== -1) {
        markTask.value.splice(indexMark, 1)
    }
    else {
        markTask.value.push(mark)
    }
    emit('setMark', markTask.value)
}

async function deleteMark(id: number) {
    let res = await useMyFetch(`/mark/${id}`, {
        method: "DELETE"
    })
    console.log(res);

}


</script>


<template>
    <header>
        <button :disabled="!isNewMark && !isManagementMarks"
            @click="() => { isNewMark = false; isManagementMarks = false }" class="back">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12.6668 8.00001H3.3335M3.3335 8.00001L8.00016 12.6667M3.3335 8.00001L8.00016 3.33334"
                    stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
        <p class="name-chapter">{{ isNewMark ? 'Создание метки' : isManagementMarks ? 'Управление метками' : refactMark ?
            'Редактирование метки' : 'Метки'
            }}</p>
        <button @click="emit('close')" class="close"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4L12 12" stroke="#667085" stroke-width="1.66667" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg></button>
    </header>

    <div v-if="isNewMark || refactMark" class="content modal-block column new-mark-container">
        <div class="preview">
            <div :style="{ backgroundColor: newMark.background }" class="mark">
                <p :style="{ color: newMark.text }" class="mark-name">{{ newMark.name }}</p>
            </div>
        </div>
        <input type="text" v-model="newMark.name" class="input-name-mark">
        <hr>
        <p class="color-title">Цвет</p>
        <ul class="colors">
            <li v-for="(color, i) in colors">
                <button class="color" @click="selectStyleForNewMark = i" :style="{ backgroundColor: color.text }">
                    <svg v-if="i == selectStyleForNewMark" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                        viewBox="0 0 14 14" fill="none">
                        <path d="M11.6663 3.5L5.24967 9.91667L2.33301 7" stroke="white" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </li>
        </ul>
        <hr>
        <button @click="saveMark" class="blue">Сохранить метку</button>
    </div>

    <div v-else-if="isManagementMarks" class="content column  management-mark-container">
        <ul class="marks column">
            <li v-for="mark in marksProject">
                <div class="mark">
                    <div class="name-container">
                        <div :style="{ backgroundColor: mark.color ?? '' }" class="color">

                        </div>
                        <p class="mark-name">{{ mark.name }}</p>
                    </div>
                    <div class="actions">
                        <button @click="refactMark = 1"><img src="@/assets/img/edit-02.svg" alt=""></button>
                        <button @click="deleteMark(mark.id)"><img src="@/assets/img/trash-02.svg" alt=""></button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div v-else class="content column">
        <ul class="marks column">
            <li v-for="mark in marksProject">
                <button @click="addMark(mark)" class="mark">
                    <svg v-if="markTask.findIndex(el => el.id === mark.id) !== -1" xmlns="http://www.w3.org/2000/svg"
                        width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M11.6663 3.5L5.24967 9.91667L2.33301 7" stroke="#2E90FA" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="name-container">
                        <div :style="{ backgroundColor: mark.color ?? '' }" class="color">

                        </div>
                        <p class="mark-name">{{ mark.name }}</p>
                    </div>
                </button>
            </li>
        </ul>
        <div class="hr-container">
            <hr>
        </div>
        <div class="actions-mark-modal column">
            <button @click="isNewMark = true" class="add-new-mark">
                Добавить новую метку...
            </button>
            <button @click="isManagementMarks = true" class="management-mark">
                Управление метками
            </button>
        </div>
    </div>
</template>


<style scoped lang="scss">
    header {
        width: 100%;
        padding: 0.125rem;
        gap: 0.62rem;
        align-items: center;

        button {
            padding: 0.375rem;

            &:disabled {
                opacity: 0;
            }

        }

        .name-chapter {
            width: 100%;
            text-align: center;
            color: $gray-500;
            text-align: center;
            font-family: Inter;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1.25rem;
        }

    }

    .marks {
        width: 100%;
        gap: 0.25rem;
        max-height: 14rem;
        overflow: auto;

        li {
            width: 100%;
        }

        .mark {
            &:hover {
                background-color: $gray-100;
            }

            width: 100%;
            max-width: 100%;
            padding: 0.375rem 0.25rem 0.375rem 0.75rem;
            gap: 0.875rem;
            align-items: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;

            svg {
                min-width: fit-content;
            }

            .name-container {
                // display: grid;
                // grid-template-columns: auto 1fr 1fr;
                gap: 0.5rem;
                align-items: center;
                max-width: 100%;
                width: 100%;


                .color {
                    width: 0.5rem;
                    height: 0.5rem;
                    border-radius: 62.4375rem;
                    background: var(--Error-500, #F04438);
                }

                .mark-name {
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    max-width: 80%;
                    color: $gray-500;
                    font-family: Inter;
                    font-size: 1rem;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 1.5rem;
                }

            }
        }
    }

    .hr-container {
        width: 100%;
        padding: 0.5rem;
    }

    hr {
        border-top: 1px solid $gray-200;
    }

    .actions-mark-modal {
        gap: 0.25rem;

        button {
            padding: 0.375rem 1rem;
            color: $gray-700;

            /* 16-24, Text M/Medium */
            font-family: Inter;
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1.5rem;

            /* 150% */
            &:hover {
                background-color: $gray-100;
                border-radius: 0.625rem;

            }
        }
    }

    .new-mark-container {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        gap: 0.5rem;

        .preview {
            padding: 0.75rem;
            border-radius: 0.625rem;


            .mark {
                border-radius: 0.5rem;
                width: 100%;
                height: 1.75rem;
                background-color: $gray-100;
                align-items: center;

                .mark-name {
                    width: 100%;
                    overflow: hidden;
                    text-align: center;
                    text-overflow: ellipsis;
                    font-family: Inter;
                    font-size: 0.875rem;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 1.25rem;
                }
            }
        }
    }

    .input-name-mark {
        padding: 0.375rem 0.875rem;
        border-radius: 0.625rem;
        color: $gray-900;

        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
    }

    .color-title {
        color: $gray-500;

        /* Text sm/Medium */
        font-family: Inter;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.25rem;
        /* 142.857% */
    }

    .colors {
        display: grid;
        grid-template-columns: repeat(auto-fill, 3.5rem);
        gap: 0.5rem;

        li {
            height: 1.75rem;
        }

        .color {
            width: 100%;
            height: 100%;
            border-radius: 0.5rem;
            align-items: center;
            justify-content: center;

        }
    }

    .management-mark-container {
        .mark {
            justify-content: space-between;
            align-items: center;

            &:hover {
                background: unset;
            }

            .name-container {
                max-width: 65% !important;

                .mark-name {
                    max-width: 80%;
                }
            }

            .actions {
                gap: 0.5rem;

                button {
                    border-radius: 0.625rem;
                    padding: 0.375rem;

                    &:hover {
                        background-color: $gray-100;
                    }
                }
            }
        }
    }
</style>