<script setup lang="ts">
import CardTask from './CardTask.vue';

const props = defineProps<{
    id: number,
    name: string,
}>()

const emit = defineEmits<{
    createCard:[number]
}>()
</script>

<template>
    <div class="group-kanban column">
        <div class="container-column-name">
            <div class="column-name">
                <img src="@/assets/img/status-icons.svg" alt="">
                <p class="name">{{ name }}</p>
            </div>
        </div>
        <div class="content column">
            <!-- <CardTask /> -->
            <button @click="emit('createCard',id)" class="grey-button">
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