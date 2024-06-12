<script setup lang="ts">


const emit = defineEmits<{
    close:[]
}>()
</script>

<template>
    <form @submit.prevent="" class="white-window marks-modal column">
        <slot></slot>
    </form>
    <div @click="emit('close')" class="out-click">

    </div>
</template>

<style scoped lang="scss">
    .marks-modal {
        padding: 0.375rem;
        position: absolute;
        z-index: 10;
        width: 17.5rem;
        border-radius: 0.875rem;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        height: fit-content;
    }

    

    .out-click{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba($color: #000000, $alpha: 0.2);
    }

</style>