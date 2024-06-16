<script setup lang="ts">
import { DEFAULT_COLUMN } from '~/constants/project';

const emit = defineEmits<{
    close: [],
}>()

const props = defineProps<{
    groups: any[]
}>()

const selectGroup = defineModel()
function setGroup(group: any) {
    selectGroup.value = group
}
</script>


<template>
    <header>
        <p class="name-chapter">Выбор колонки</p>
        <button @click="emit('close')" class="close"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4L12 12" stroke="#667085" stroke-width="1.66667" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg></button>
    </header>
    <ul class="content column set-column">
        <li v-for="group in groups">
            <button @click="setGroup(group)" class="column-container-name">

                <div :style="{ backgroundColor: DEFAULT_COLUMN[group.name]?.background ?? 'transparent', outline: DEFAULT_COLUMN[group.name] ? '' : '1px solid #D0D5DD' }"
                    :class="['column-name']">
                    <img :src="DEFAULT_COLUMN[group.name]?.icon ?? '/dashed-icon.svg'" alt="">
                    <p :style="{ color: DEFAULT_COLUMN[group.name]?.color ?? '#344054' }" class="name">{{ group.name }}
                    </p>
                </div>
                <svg v-if="JSON.stringify(group) == JSON.stringify(selectGroup)" xmlns="http://www.w3.org/2000/svg"
                    width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M11.6663 3.5L5.24967 9.91667L2.33301 7" stroke="#2E90FA" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    header {
        width: 100%;
        // padding: 0.125rem;
        gap: 0.62rem;
        align-items: center;

        button {
            padding: 0.375rem;

            &:disabled {
                opacity: 0;
            }

        }

        .name-chapter {
            width: 100%;
            text-align: center;
            color: $gray-500;
            text-align: center;
            font-family: Inter;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1.25rem;
        }

    }

    .set-column {
        width: 100%;
        gap: 0.5rem;
        max-height: 14rem;
        overflow: auto;
        padding: 0.5rem 0.5rem;

        li {
            width: 100%;
        }

        .column-name {
            background-color: $gray-200;
            width: fit-content;
            gap: 0.38rem;
            border-radius: 0.5rem;
            padding: 0.25rem 0.5rem;
            align-items: center;
            max-width: 100%;

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

        .column-container-name {
            justify-content: space-between;
            border-radius: 0.625rem;
            max-width: 100%;

            &:hover {
                background-color: $gray-100;
            }

            width: 100%;
            max-width: 100%;
            padding: 0.375rem 0.5rem;
            gap: 0.875rem;
            align-items: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;

            svg {
                min-width: fit-content;
            }
        }
        .name{
            max-width: 100%;
        }
    }
</style>