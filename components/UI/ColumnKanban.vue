<script setup lang="ts">
import { DEFAULT_COLUMN } from '~/constants/project';
import CardTask from './CardTask.vue';
import { useProjectStore } from '~/store/project';

const props = defineProps<{
    id: number,
    name: string,
    cards: any[]
}>()

const emit = defineEmits<{
    createCard: [{
        id: number,
        name: string,
    }],
    delete: [number],
    openTask: [number]
}>()

async function swapCard() {
    console.log('sfgsfjgnskgsjgnsk');
    
    let res = await useMyFetch('/task/swap-group', {
        method: "PUT",
        body: {
            taskId: useProjectStore().drag,
            groupId: props.id
        }
    })
    console.log(res);
    useProjectStore().drag=undefined
}
</script>

<template>
    <div @dragover.prevent @drop.prevent="swapCard" :class="['group-kanban', 'column', { 'drag': useProjectStore().drag!==undefined }]">
        <div :class="['container-column-name', DEFAULT_COLUMN[name] ? 'no-delete' : '']">
            <div :style="{ backgroundColor: DEFAULT_COLUMN[name]?.background ?? 'transparent', outline: DEFAULT_COLUMN[name] ? '' : '1px solid #D0D5DD' }"
                :class="['column-name']">
                <img :src="DEFAULT_COLUMN[name]?.icon ?? '/dashed-icon.svg'" alt="">
                <p :style="{ color: DEFAULT_COLUMN[name]?.color ?? '#344054' }" class="name">{{ name }}</p>
            </div>
            <button @click="emit('delete', id)" class="delete">Удалить</button>
        </div>
        <div class="content column">
            <CardTask @open="emit('openTask', $event)" v-if="cards && id" :card="card" :key="card.id"
                v-for="card in cards" />
            <button @click="emit('createCard', { id, name })" class="grey-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10.0001 4.16666V15.8333M4.16675 9.99999H15.8334" stroke="#667085" stroke-width="1.67"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Добавить карточку
            </button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .group-kanban {
        position: relative;
        width: 18.75rem;
        gap: 1rem;
        margin-top: -1rem;

        .content {
            height: 100%;
            gap: 0.75rem;
            border-radius: 1rem;
        }
    }

    .drag .content {
        background-color: #E8EFFB;


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

        .delete {
            display: none;
            background-color: #F04438;
            color: white;
            width: fit-content;
            gap: 0.38rem;
            border-radius: 0.5rem;
            padding: 0.25rem 0.5rem;
            align-items: center;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1.25rem;
        }

        &:not(.no-delete):hover {
            .column-name {
                display: none;
            }

            .delete {
                display: flex;
            }

        }

    }


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
            text-overflow: ellipsis;
            width: 100%;
            max-width: 100%;
            overflow: hidden;
            white-space: nowrap;
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1.25rem;
        }
    }
</style>