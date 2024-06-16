<script setup lang="ts">
const checkList = defineModel<{
    id: number,
    name: string,
    status: string
}[]>()
const isChecked = ref(false)
const isAddCheck = ref(false)
</script>

<template>
    <ul class="check-list column">
        <li v-for="checkElement in checkList">
            <label class="custom-checkbox">
                <input v-model="isChecked" type="checkbox">
                <span>{{ checkElement.name }}</span>
                <input v-model="checkElement.name" type="text">
            </label>
            <div class="actions">
                <button @click=""><img src="@/assets/img/edit-02.svg" alt=""></button>
                <button @click=""><img src="@/assets/img/trash-02.svg" alt=""></button>
            </div>
        </li>
        <li>
            <button v-if="!isAddCheck" @click="isAddCheck = true" class="add-check">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9.9974 4.16675V15.8334M4.16406 10.0001H15.8307" stroke="#344054" stroke-width="1.33"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Добавить пункт
            </button>
            <div v-out-click="() => { isAddCheck = false }" class="input-add-check-container">
                <input type="text">
                <button class="blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M11.6663 3.5L5.24967 9.91667L2.33301 7" stroke="white" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </li>
    </ul>
</template>


<style scoped lang="scss">
    .check-list {
        li {
            display: flex;
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1.5rem;
        }
    }

    .add-check {
        align-items: center;
        gap: 0.75rem;
        color: $gray-700;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem;
        /* 150% */
    }

    .input-add-check-container {
        align-items: center;
        gap: 0.5rem;
        input {
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1.5rem;
            padding: 0.25rem 0.5rem;
        }
        button.blue{
            padding: 0.5rem;
            height: 100%;
            aspect-ratio: 1/1;
            svg{
                width: 1rem;
                height: 1rem;
            }
        }
    }
</style>