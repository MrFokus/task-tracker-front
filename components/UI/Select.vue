<script setup lang="ts">
const model = defineModel()
const props = defineProps<{
  listSelect: string[]
  selectedIndex?: number
}>()
const emit = defineEmits<{
  select: [number]
}>()
const isActive = ref(false)
watch(() => props.listSelect, () => {
  if (props.listSelect.length > 0 && !model.value && !props.selectedIndex) {
    select(0)
  }
}, { immediate: true })
watch(() => props.selectedIndex, () => {
  if (props.selectedIndex) {    
    console.log(props.selectedIndex);
    model.value = props.listSelect[props.selectedIndex]
    select(props.selectedIndex)
  }
}, { immediate: true })
function select(index: number) {
  if (model.value !== props.listSelect[index]) {
    model.value = props.listSelect[index]
    isActive.value = false
    emit('select', index)
  }

}
</script>

<template>
  <div v-out-click="() => { isActive = false }" :class="['select', isActive ? 'active' : '']">
    <button type="button" @click="isActive = !isActive" :style="{ justifyContent: model ? '' : 'flex-end' }"
      class="open white">
      {{selectedIndex!==undefined?listSelect[selectedIndex]: model }}
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
        <path d="M13.6663 1.5L7.24967 7.91667L1.5 1.5" stroke="#667085" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </button>
    <ul v-if="isActive" class="list-select-component">
      <li v-for="(option, index) in listSelect">
        <button type="button" @click="select(index)" :class="[option === (selectedIndex!==undefined?listSelect[selectedIndex]: model) ? 'selected' : '']">
          {{ option }}
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
            <path d="M10.6663 1.5L4.24967 7.91667L1.33301 5" stroke="#2E90FA" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.select {
  width: 100%;
  position: relative;

  .open {
    width: 100%;
    font-size: 1rem;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  &.active {
    .open {
      svg {
        transform: rotate(180deg);
      }
    }
  }
}

.list-select-component {
  width: fit-content;
  padding: 0.25rem .5rem;
  z-index: 20;

  li {
    padding: .25rem;
    width: 100%;
  }

  button {
    white-space: nowrap;
    gap: 2rem;
    font-size: 1rem;

    svg {
      opacity: 0;
    }
  }

  .selected {
    align-items: center;
    width: 100%;
    justify-content: space-between;

    svg {
      opacity: 1;
    }
  }
}
</style>