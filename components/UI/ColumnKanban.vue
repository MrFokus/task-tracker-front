<script setup lang="ts">

</script>

<template>
    <div class="column">
        <div class="column-name">
            <img src="@/assets/img/status-icons.svg" alt="">
            <p class="name">Запланированно</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .column {
        max-width: 18.75rem;
    }

    .column-name {
        max-width: 100%;
        gap: 0.38rem;
        border-radius: 0.5rem;
        background: $gray-200;
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