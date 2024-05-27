<script setup lang="ts">

function keyDown(event: any) {
    if (event.key === "Escape") {
        emit('close')
    }
}
// onMounted(() => {
//     window.addEventListener('keydown', keyDown)
// })


// onUnmounted(() => {
//     window.removeEventListener('keydown.esc', keyDown)
// })
const emit = defineEmits<{
    close: []
}>()
</script>

<template>
    <div class="modal-base-component">
        <div class="scroll-wrapper out-side">
            <div class="modal-container">
                <div style="height: fit-content; width: fit-content; margin: 3rem 0;" @keydown.esc="keyDown">
                    <slot>

                    </slot>
                </div>
            </div>
        </div>
    </div>


</template>


<style lang="scss" scoped>

    .scroll-wrapper {
        overflow-y: auto;
        position: fixed;
        width: fit-content;
        height: fit-content;
        z-index: 11;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        max-width: 100vw;
        max-height: 100vh;
        background: rgba(0, 0, 0, 0.40);

    }

    .modal-container {
        align-items: center;
        justify-content: center;
        height: fit-content;
        width: 100vw;
        min-height: 100vh;
    }

</style>