<script setup lang="ts">
const props = defineProps<{
    color: string,
    background: string,
    name:string
}>()
</script>

<template>
    <p :style="{ color: color, backgroundColor: background }" class="mark">
        {{ name }}
    </p>
</template>

<style scoped></style>