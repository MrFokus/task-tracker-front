<script setup lang="ts">
import { useMyFetch } from "~/composables/myFetch";

const access_token = useCookie('access_token', { maxAge: 360000})
const credential = ref<{ login: string, password: string }>({
  login: '',
  password: ''
})
async function login() {
  try {
    const res = await useMyFetch<{ access_token: string }>('/auth', {
      method: "POST",
      body: {
        login: credential.value.login,
        password: credential.value.password
      },
    })
    access_token.value = 'Bearer ' + res?.access_token
    await navigateTo('/')
  }
  catch (e) {
    console.error(e);
  }

}
</script>

<template>
  <form @submit.prevent="login" class="login white-block">
    <div class="logo">
      <img src="@/assets/img/logo-login.svg" alt="logo" />
      <p>ИнтерПро</p>
    </div>
    <div class="credential">
      <p>Логин</p>
      <input v-model="credential.login" placeholder="Введите логин" type="text" />
    </div>
    <div class="credential">
      <p>Пароль</p>
      <input v-model="credential.password" placeholder="Введите пароль" type="password" />
    </div>
    <nuxt-link to="/register">Нет аккаунта?</nuxt-link>

    <button class="blue">Войти</button>
  </form>
</template>

<style scoped lang="scss">
.login {
  margin: auto;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  // padding: 1.5rem;
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
