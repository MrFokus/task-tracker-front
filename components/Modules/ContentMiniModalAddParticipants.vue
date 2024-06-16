<script setup lang="ts">
const emit = defineEmits<{
    close: [],
}>()

const props = defineProps<{
    users: any[]
}>()

const participants = defineModel()
function addUser(user: any) {
    let indexMark = participants.value.findIndex((el) => JSON.stringify(el) == JSON.stringify(user))
    console.log(indexMark);

    if (indexMark !== -1) {
        participants.value.splice(indexMark, 1)
    }
    else {
        participants.value.push(user)
    }
}
</script>


<template>
    <header>
        <p class="name-chapter">Добавление исполнителя</p>
        <button @click="emit('close')" class="close"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4L12 12" stroke="#667085" stroke-width="1.66667" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg></button>
    </header>
    <ul class="content column add-participants">
        <li v-for="user in users">
            <button @click="addUser(user)" class="user">
                <div class="user-container">
                    <img :src="user.photo ?? '/no-user-profile.svg'" alt="">
                    <p class="user-name">{{ user.name }}</p>
                </div>
                <svg v-if="participants?.findIndex(el => el.id === user.id) !== -1" xmlns="http://www.w3.org/2000/svg"
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
        padding: 0.125rem;
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

    .add-participants {
        width: 100%;
        gap: 0.25rem;
        max-height: 14rem;
        overflow: auto;

        li {
            width: 100%;
        }

        .user-container {
            align-items: center;
            gap: 1rem;
            img {
                border-radius: 100%;
                width: 2rem;
                height: 2rem;
            }
        }

        .user {
            justify-content: space-between;
            border-radius: 0.625rem;

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

            .name-container {
                // display: grid;
                // grid-template-columns: auto 1fr 1fr;
                gap: 0.5rem;
                align-items: center;
                max-width: 100%;
                width: 100%;

                .user-name {
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    max-width: 80%;
                    color: $gray-500;
                    font-family: Inter;
                    font-size: 1rem;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 1.5rem;
                }

            }
        }
    }
</style>