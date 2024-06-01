<script setup lang="ts">
const props = defineProps<{
    id:number,
    name: string,
    lastUpdate?: Date,
    photo?: string
}>()
</script>

<template>
    <nuxt-link :to="`/project/${id}`" class="project-card">
        <img src="https://static.wixstatic.com/media/f47f99_2990d6716f154cabb5ab3f7eea7d55a3~mv2.png" alt=""
            class="preview">
        <div class="info">
            <p class="project-name">«{{name}}»</p>
            <p class="last-update">
                Обновлено 2 часа назад
            </p>
        </div>
    </nuxt-link>
</template>

<style scoped lang="scss">
    .project-card {
        min-width: 16.75rem;
        width: 16.75rem;
        cursor: pointer;
        border: 1px solid $gray-300;
        border-radius: 1rem;
        flex-direction: column;
        overflow: hidden;

        .preview {
            height: 6.25rem;
            width: 100%;
            background-color: $gray-100;
            object-fit: cover;
        }

        .info {
            padding: 1rem;
            flex-direction: column;
            gap: .25rem;

            .project-name {
                color: var(--Gray-900, #101828);
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                /* Text md/Medium */
                font-family: Inter;
                font-size: 1rem;
                font-style: normal;
                font-weight: 500;
                line-height: 1.5rem;
                /* 150% */
            }

            .last-update {
                color: $gray-500;

                /* Text sm/Regular */
                font-family: Inter;
                font-size: 0.875rem;
                font-style: normal;
                font-weight: 400;
                line-height: 1.25rem;
                /* 142.857% */
            }
        }
    }
</style>