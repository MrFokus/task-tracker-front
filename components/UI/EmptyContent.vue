<script setup lang="ts">
const props = defineProps<{
    description: string,
    preview?:string,
    indicator?:boolean
}>()
</script>

<template>
    <div class="empty-projects">
        <img class="empty-emoji" src="@/assets/img/empty-emoji.png" alt="">
        <p v-html="description">
        </p>
        <img class="indicator" src="@/assets/img/indicator.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
.empty-projects {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: relative;
        gap: 1.5rem;

        p {
            color: #101828;
            text-align: center;
            font-family: Inter, sans-serif;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

        .indicator {
            width: 3rem;
            position: absolute;
            top: 0.5rem;
            right: 3rem;
            aspect-ratio: 1/1;
        }
    }
</style>