<script setup lang="ts">

</script>

<template>
    <header class="padding-page">
        <nuxt-link to="/" class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                    d="M17.9167 4.08333C19.0667 3.1 20.95 3.1 22.1167 4.08333L24.75 6.35C25.25 6.78333 26.1833 7.13333 26.85 7.13333H29.6833C31.45 7.13333 32.9 8.58333 32.9 10.35V13.1833C32.9 13.8333 33.25 14.7833 33.6833 15.2833L35.95 17.9167C36.9333 19.0667 36.9333 20.95 35.95 22.1167L33.6833 24.75C33.25 25.25 32.9 26.1833 32.9 26.85V29.6833C32.9 31.45 31.45 32.9 29.6833 32.9H26.85C26.2 32.9 25.25 33.25 24.75 33.6833L22.1167 35.95C20.9667 36.9333 19.0833 36.9333 17.9167 35.95L15.2833 33.6833C14.7833 33.25 13.85 32.9 13.1833 32.9H10.3C8.53334 32.9 7.08334 31.45 7.08334 29.6833V26.8333C7.08334 26.1833 6.73334 25.25 6.31667 24.75L4.06667 22.1C3.10001 20.95 3.10001 19.0833 4.06667 17.9333L6.31667 15.2833C6.73334 14.7833 7.08334 13.85 7.08334 13.2V10.3333C7.08334 8.56667 8.53334 7.11667 10.3 7.11667H13.1833C13.8333 7.11667 14.7833 6.76667 15.2833 6.33333L17.9167 4.08333Z"
                    fill="#2E90FA" />
                <path
                    d="M17.9834 25.2833C17.6501 25.2833 17.3334 25.15 17.1001 24.9167L13.0667 20.8833C12.5834 20.4 12.5834 19.6 13.0667 19.1167C13.5501 18.6333 14.3501 18.6333 14.8334 19.1167L17.9834 22.2667L25.1501 15.1C25.6334 14.6167 26.4334 14.6167 26.9167 15.1C27.4001 15.5833 27.4001 16.3833 26.9167 16.8667L18.8667 24.9167C18.6334 25.15 18.3167 25.2833 17.9834 25.2833Z"
                    fill="white" />
            </svg>
            <p class="name">ИнтерПро</p>
        </nuxt-link>
        <div class="profile">
            <NuxtLink class="settings" to="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M2.5 6.66667L12.5 6.66667M12.5 6.66667C12.5 8.04738 13.6193 9.16667 15 9.16667C16.3807 9.16667 17.5 8.04738 17.5 6.66667C17.5 5.28596 16.3807 4.16667 15 4.16667C13.6193 4.16667 12.5 5.28596 12.5 6.66667ZM7.5 13.3333L17.5 13.3333M7.5 13.3333C7.5 14.714 6.38071 15.8333 5 15.8333C3.61929 15.8333 2.5 14.714 2.5 13.3333C2.5 11.9526 3.61929 10.8333 5 10.8333C6.38071 10.8333 7.5 11.9526 7.5 13.3333Z"
                        stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </NuxtLink>
            <img src="@/assets/img/no-user-profile.svg" alt="">
        </div>
    </header>
</template>


<style scoped lang="scss">
header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--Gray-200, #EAECF0);
    background: var(--White, #FFF);
    justify-content: space-between;
    .logo {
        display: flex;
        align-items: center;
        gap: 0.62rem;
        svg {
            width: 2.5rem;
            aspect-ratio: 1/1;
        }

        .name {
            color: $gray-900;
            /* Text xl/Semibold */
            font-family: Inter,sans-serif;
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 600;
            line-height: 1.875rem;
            /* 150% */
        }
    }
    .profile{
        gap: 1rem;
        align-items: center;
        .settings{
            padding:0.62rem;
        }
        img{
          width:2.5rem;
          height: 2.5rem;
          border-radius:50%;
          aspect-ratio: 1/1;
        }
    }
}
</style>
