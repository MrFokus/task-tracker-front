<script setup lang="ts">
import { useProjectStore } from '~/store/project';
import ListParticipants from './ListParticipants.vue';

const props = defineProps<{
    card: {
        id: number,
        name: string,
        dateEnd: string,
        dateCreate:string,
        description?:string,
        marks?: any[],
        label: string,
        subtasks?: any[],
        attachments?:any[],
        participants?:any[]
    }
}>()

const emit = defineEmits<{
    open:[number]
}>()

</script>

<template>
    <div draggable="true" @dragend="useProjectStore().drag!==undefined" @dragstart="useProjectStore().drag=card.id" @click="emit('open',card.id)" class="task-card column">
        <header>
            <p class="template-name">{{card.label}}</p>
        </header>
        <div class="card-content column">
            <div v-if="card.marks?.length" class="mark-block">
                <p :key="mark.id" v-for="mark in card.marks" :style="{ color: mark.color, backgroundColor: mark.background }" class="mark">
                    {{mark.name}}
                </p>
            </div>
            <p class="task-name">
                {{ card.name }}
            </p>
            <p class="task-description">
                {{ card.description }}
            </p>
            <div class="task-content-info-container">
                <!-- <div class="content-info">
                    <img src="@/assets/img/comment-info.svg" alt="">
                    <p class="result">3</p>
                </div> -->
                <div v-if="card.attachments?.length" class="content-info">
                    <img src="@/assets/img/attachment-info.svg" alt="">
                    <p class="result">{{ card.attachments?.length }}</p>
                </div>
                <div v-if="card.subtasks?.length" class="content-info">
                    <img src="@/assets/img/checkbox-info.svg" alt="">
                    <p class="result">{{ card.subtasks?.filter((el)=> el.status === true).length }} из {{ card.subtasks?.length }}</p>
                </div>
            </div>
            <div class="container-participates-date">
                <div v-if="card.dateEnd" class="dates">
                    <p class="from">{{dateTransform(card.dateCreate)}}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="#667085" stroke-width="1.2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <p class="to">{{dateTransform(card.dateEnd)}}</p>
                </div>
                <ListParticipants class="list-participants" :more-name="'+'" :list="card.participants" />
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .task-card {
        width: 100%;
        height: fit-content;
        border-radius: 1rem;
        border: 1px solid $gray-300;
        background-color: white;
        overflow: hidden;
        cursor: pointer;
        header {
            width: 100%;
            background: $gray-100;
            padding: 0.5rem 1rem;

            .template-name {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }
    }

    .card-content {
        padding: 1rem;
        gap: 1rem;
    }

    .task-name {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        overflow: hidden;
        color: $gray-900;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem;
    }

    .task-description {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        text-overflow: ellipsis;
        overflow: hidden;
        color: $gray-500;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem;
    }

    .mark-block {
        flex-wrap: wrap;
        gap: 0.5rem;
        // .mark {
        //     white-space: nowrap;
        // }
    }

    .profile:nth-of-type(n) {
        margin-left: -0.5rem;
    }

    .profile:first-of-type {
        margin-left: 0rem;
    }

    .task-content-info-container {
        gap: 1.25rem;

        .content-info {
            gap: .25rem;

            .result {
                color: $gray-500;
            }
        }
    }

    .container-participates-date {
        align-items: center;
        justify-content: flex-end;
        gap: 1rem;

        .dates {
            // width: 100%;
            align-items: center;
            gap: 0.25rem;

            p {
                color: $gray-500;
            }
        }
    }

    .list-participants:deep() {
        padding: 0;
        max-width: 70%;
        justify-content: flex-end;

        .profiles {
            width: fit-content;
        }

        .other-container {
            padding: 0;

            a {
                font-size: 0.875rem;
                color: $gray-500;
            }
        }
    }

</style>
