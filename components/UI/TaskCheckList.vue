<script setup lang="ts">
const checkList = defineModel<{
    id?: number,
    name: string,
    status: boolean
}[]>()
const isAddCheck = ref(false)
const newCheckValue = ref('')
const indexEditCheck = ref()
function addCheck() {
    if (newCheckValue.value) {
        checkList.value?.push({ name: newCheckValue.value, status: false })
        console.log(checkList.value);

        newCheckValue.value = ''
        isAddCheck.value = false
    }
}
function deleteCheck(index: number) {
    checkList.value?.splice(index, 1)
}
</script>

<template>
    <ul class="check-list column">
        <li v-for="(checkElement, index) in checkList" :key="index">
            <label class="custom-checkbox">
                <input v-model="checkList[index].status" type="checkbox">
                <span>{{ checkElement.name }}</span>
            </label>
            <div class="actions">
                <!-- <button @click="indexEditCheck = index"><img src="@/assets/img/edit-02.svg" alt=""></button> -->
                <button @click="deleteCheck(index)"><img src="@/assets/img/trash-02.svg" alt=""></button>
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
            <div v-out-click="() => { isAddCheck = false }" v-else-if="isAddCheck || indexEditCheck !== undefined"
                class="input-add-check-container">
                <input autofocus v-if="isAddCheck" @keydown.enter="addCheck" v-model="newCheckValue" type="text">
                <input autofocus v-else-if="indexEditCheck !== undefined" @keydown.enter="indexEditCheck = undefined"
                    v-model="checkList[indexEditCheck].name" type="text">
                <button @click="isAddCheck ? addCheck() : indexEditCheck = undefined" class="blue">
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
        gap: 1rem;
        display: flex;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem;
        align-items: center;
        justify-content: space-between;

        .custom-checkbox {
            padding: .25rem 0;
            width: 100%;

            span {
                width: 100%;
            }
        }

        &:hover {
            .actions {
                display: flex;
            }
        }
    }

    .actions {
        display: none;
        gap: 0.5rem;

        button {
            border-radius: 0.625rem;
            padding: 0.375rem;

            &:hover {
                background-color: $gray-100;
            }
        }
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
    width: 100%;

    input {
        width: 100%;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem;
        padding: 0.125rem 0.25rem;
    }

    button.blue {
        padding: 0.5rem;
        height: 100%;
        aspect-ratio: 1/1;
        border-radius: 0.625rem;
        // svg{
        //     width: 1rem;
        //     height: 1rem;
        // }
    }
}
</style>