<script setup lang="ts">
import ColumnKanban from '~/components/UI/ColumnKanban.vue';

definePageMeta({
    layout: 'project'
})
</script>

<template>
    <div class="kanban-component">
    <div class="kanban">
        <ColumnKanban></ColumnKanban>
        <ColumnKanban></ColumnKanban>
        <ColumnKanban></ColumnKanban>
        <ColumnKanban></ColumnKanban>
        <ColumnKanban></ColumnKanban>
        <ColumnKanban></ColumnKanban>
        <ColumnKanban></ColumnKanban>
        <ColumnKanban></ColumnKanban>
        <ColumnKanban></ColumnKanban>
        <ColumnKanban></ColumnKanban>
        <ColumnKanban></ColumnKanban>
        <ColumnKanban></ColumnKanban>
        <ColumnKanban></ColumnKanban>
        <ColumnKanban></ColumnKanban>
        <ColumnKanban></ColumnKanban>
        <ColumnKanban></ColumnKanban>
        <ColumnKanban></ColumnKanban>
    </div>
</div>
</template>


<style lang="scss" scoped>
.kanban-component{
    max-width: 100%;
    width: 100%;
    max-height: 100%;
    height: 100%;
    padding: 1.5rem 1.63rem;
    overflow: auto;
}
.kanban{
    gap: 1rem;

}

</style>