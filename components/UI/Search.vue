<script setup lang="ts">
const isSearching = defineModel('isSearch')
const inputSearch = defineModel()

const props = defineProps<{
    attributes?:Record<string, any>
}>()
const inputElement = ref<HTMLElement>()
const setAttribute = () => {
    if (inputElement.value) {
        console.log(props.attributes);
        for (let key in props.attributes) {
            inputElement.value.setAttribute(key,props.attributes[key].toString())
        }
    }
}
onMounted(setAttribute)
watch(() => props.attributes,setAttribute,{immediate:true})
</script>

<template>
    <div v-out-click="()=>isSearching = false" class="search">
        <input ref="inputElement" v-model="inputSearch" @focus="isSearching = true" type="text">
        <ul v-if="isSearching" class="list-select-component column">
            <slot>

            </slot>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.search,input,.list-select-component{
    width: 100%;
}
.list-select-component{
    padding: .25rem;
    max-height: 12rem;
    overflow: auto;
}
.search{
    position: relative;
}

</style>