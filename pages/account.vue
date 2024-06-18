<script setup lang="ts">
import TitleBase from '~/components/UI/TitleBase.vue';
let user = await useMyFetch('/user')
const formData = ref({
    name: '',
    mail: '',
    password: '',
    confirmPassword: ''
})
const error = ref()
watch(user, () => [
    formData.value.name = user.name,
    formData.value.mail = user.mail,
    formData.value.photo = user.photo
], { immediate: true })


async function uploadFile(e: any) {
    let files: File[] = Array.from(e.target.files);
    let data = new FormData()
    data.append('file', files[0])

    formData.value.photo = await useMyFetch('/user/upload', {
        method: "POST",
        body: data
    })
}

async function updateUser() {
    if (formData.value.password !== formData.value.confirmPassword) {
        error.value = "Пароли не совпадают"
        setTimeout(() => {
            error.value = ''
        }, 5000)
        return
    }
    if (formData.value.mail && formData.value.name) {
        user = await useMyFetch('/user', {
            method: "PATCH",
            body: {
                mail: formData.value.mail.trim(),
                name: formData.value.name.trim(),
                password: formData.value.password?formData.value.password:undefined,
            }
        })
    }
}
</script>

<template>
    <main class="padding-page column">
        <TitleBase title="Аккаунт" description="Здесь вы можете управлять своим аккаунтом" />
        <form @submit.prevent="" class="profile-info column">
            <div class="container-profile-photo">
                <div class="hover-container">
                    <img class="profile" :src="formData.photo ? formData.photo : '/no-user-profile.svg'" alt="">
                    <label class="add-photo">
                        <input @change="uploadFile" type="file" accept="image/jpg,image/jpeg,image/png,image/svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <path
                                d="M47.9999 26.6668L37.3332 16.0002M6.6665 57.3335L15.6915 56.3307C16.7941 56.2082 17.3454 56.1469 17.8608 55.9801C18.3179 55.8321 18.753 55.623 19.1542 55.3585C19.6064 55.0603 19.9986 54.668 20.7831 53.8836L55.9999 18.6668C58.9454 15.7213 58.9454 10.9457 55.9999 8.00016C53.0544 5.05464 48.2788 5.05464 45.3332 8.00015L10.1164 43.2169C9.33196 44.0014 8.93972 44.3936 8.64154 44.8458C8.37699 45.247 8.16788 45.6821 8.01987 46.1392C7.85305 46.6546 7.79179 47.2059 7.66928 48.3085L6.6665 57.3335Z"
                                stroke="white" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </label>
                </div>
            </div>
            <div class="input-container column">
                <p class="input-name">Имя</p>
                <input v-model="formData.name" placeholder="Введите ваше имя" type="text">
            </div>
            <div class="input-container column">
                <p class="input-name">Адрес электронной почты</p>
                <input v-model="formData.mail" placeholder="Введите вашу почту" type="text">
            </div>
            <div class="input-container column">
                <p class="input-name">Новый пароль</p>
                <input v-model="formData.password" placeholder="Введите ваш новый пароль" type="password">
            </div>
            <div class="input-container column">
                <p class="input-name">Повторите новый пароль</p>
                <input v-model="formData.confirmPassword" placeholder="Повторите ваш новый пароль" type="password">
            </div>
            <p v-if="error" class="error">
                {{ error }}
            </p>
            <div class="action">
                <button @click="updateUser" class="save blue">
                    Сохранить
                </button>
            </div>
        </form>

    </main>
</template>

<style scoped lang="scss">
    main {
        padding-top: 2rem;
        gap: 2rem
    }

    .profile-info {
        width: 50%;
        margin: 0 auto;
        gap: 1rem;

        .action {
            justify-content: flex-end;
        }
    }

    .input-container {
        gap: 0.5rem;
    }

    .container-profile-photo {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;

        .profile {
            width: 10rem;
        }
    }

    .hover-container {
        input {
            display: none;
        }

        position: relative;
        overflow: hidden;
        border-radius: 100%;

        .add-photo {
            cursor: pointer;
            display: none;
            position: absolute;
            align-items: center;
            justify-content: center;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;

        }

        &:hover {
            .add-photo {
                background-color: rgba(0, 0, 0, 0.40);
                display: flex;
            }
        }
    }

    .error {
        color: red;

    }
</style>