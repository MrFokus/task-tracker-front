<script setup lang="ts">
import CardTask from '../UI/CardTask.vue';

const props = defineProps<{
    id: number,
    cards: any[]
}>()

const emit=defineEmits<{
    close:[]
}>()
</script>

<template>
    <section class="archive white-window column">
        <header class="modal-block">
            <p class="modal-name">Архив</p>
            <button type="button" class="close" @click="emit('close')">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M11 1L1 11M1 1L11 11" stroke="#667085" stroke-width="1.66667" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
        </header>
        <div class="content-modal modal-block">
            <CardTask :card="card" v-for="card in cards"></CardTask>
        </div>
    </section>
</template>

<style scoped lang="scss">
.archive {
    height: fit-content;
}

header {
    width: 100%;
    justify-content: space-between;
    align-items: center;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.modal-block {
    width: 50rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
}

.modal-name {
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
}

.input-container {
    gap: .5rem;
    width: 100%;
}

footer {
    justify-content: flex-end;
}

.includes-participants {
    gap: 0;
    // max-height: 20rem;
}

.include-profile {
    padding-bottom: .5rem;
    padding-top: .5rem;
    display: grid;
    grid-template-columns: auto auto 1fr 30% auto;
    align-items: center;
    justify-items: end;
    gap: 2rem;
    border-bottom: 1px $gray-300 solid;

    .profile-photo {
        width: 3rem;
        aspect-ratio: 1/1;
    }

    .full-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: end;
        color: $gray-500;
        max-width: 100%;
    }
}

.delete-user {
    height: 2.375rem;
    padding: 0.5rem;
    width: 100%;
    aspect-ratio: 1/1;
    align-items: center;
    justify-content: center;
}

.team-search {
    cursor: pointer;
    padding: 0.25rem .5rem;
    display: grid;
    align-items: center;
    grid-template-columns: auto auto 1fr;
    gap: 2rem;
    max-width: 100%;
    width: 100%;

    img {
        object-fit: cover;
        width: 2rem;
        height: 2rem;
    }

    .team-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: end;
        color: $gray-500;
        max-width: 100%;

    }

    &:hover {
        border-radius: 0.5rem;
        background-color: $gray-100;
    }
}

.profile {
    width: 10rem;
    margin: 0 auto;
}
</style>