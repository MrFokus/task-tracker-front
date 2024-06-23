<script setup lang="ts">
import TitleBase from '~/components/UI/TitleBase.vue';
const route = useRoute()
console.log(route);

let user = await useMyFetch('/user/'+route.params.id)


</script>

<template>
    <main class="padding-page column">
        <TitleBase title="Аккаунт" />
        <form @submit.prevent="" class="profile-info column">
            <div class="container-profile-photo">
                <div class="hover-container">
                    <img class="profile" :src="user.photo ? user.photo : '/no-user-profile.svg'" alt="">
                </div>
            </div>
            <div class="input-container column">
                <p class="input-name">Логин</p>
                <input disabled v-model="user.login" placeholder="Введите ваше имя" type="text">
            </div>
            <div class="input-container column">
                <p class="input-name">Имя</p>
                <input disabled v-model="user.name" placeholder="Введите ваше имя" type="text">
            </div>
            <div class="input-container column">
                <p class="input-name">Адрес электронной почты</p>
                <input disabled v-model="user.mail" placeholder="Введите вашу почту" type="text">
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