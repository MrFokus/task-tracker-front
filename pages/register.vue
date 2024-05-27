<script setup lang="ts">
import type { IRegister} from '~/interfaces/account';

const access_token = useCookie('access_token', { maxAge: 360000})
const registerData = ref<IRegister>({
    login: '',
    mail: '',
    name:'',
    password: '',
    repeatPassword:''
})
async function register() {
    try {
        if (registerData.value.password !== registerData.value.repeatPassword) {
            return
        }
        const res = await useMyFetch<{ access_token: string }>('/user', {
            method: "POST",
            body: {
                login: registerData.value.login,
                password: registerData.value.password,
                mail: registerData.value.mail,
                name: registerData.value.name
            },
        })
        access_token.value = 'Bearer ' + res?.access_token
        await navigateTo('/')
    }
    catch (e) {
        console.error(e);
    }

}</script>

<template>
    <form @submit.prevent="register" class="login white-block">
        <div class="logo">
            <img src="@/assets/img/logo-login.svg" alt="logo" />
            <p>ИнтерПро</p>
        </div>

        <div class="credential">
            <p>Логин</p>
            <input v-model="registerData.login" placeholder="Введите логин" type="text" />
        </div>

        <div class="credential">
            <p>Почта</p>
            <input v-model="registerData.mail" placeholder="Введите почту" type="text" />
        </div>

        <div class="credential">
            <p>Имя, которое будет видно всем</p>
            <input v-model="registerData.name" placeholder="Введите имя" type="text" />
        </div>

        <div class="credential">
            <p>Пароль</p>
            <input v-model="registerData.password" placeholder="Введите пароль" type="password" />
        </div>

        <div class="credential">
            <p>Повторите пароль</p>
            <input v-model="registerData.repeatPassword" placeholder="Повторите пароль" type="password" />
        </div>

        <nuxt-link to="/login">Есть аккаунт?</nuxt-link>

        <button class="blue">Зарегистрироваться</button>
    </form>
</template>

<style scoped lang="scss">
.login {
    margin: auto;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

.credential {
    width: 27rem;
    flex-direction: column;
    gap: 0.25rem;

    p {
        color: $gray-700;
        font-family: Inter, sans-serif;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.25rem;
        /* 142.857% */
    }
}

a {
    color: #2e90fa;
    font-family: Inter, sans-serif;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    width: 100%;
    align-content: left;
}

.logo {
    align-items: center;
    gap: 0.62rem;

    p {
        color: $gray-900;
        /* Text xl/Semibold */
        font-family: Inter, sans-serif;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.875rem;
        /* 150% */
    }
}
</style>
