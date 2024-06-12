<script setup lang="ts">
const otherParticipants = ref(0)
const props = defineProps<{
    list?: { name: string, photo?: string }[],
    moreName?:string
}>()
</script>

<template>

    <div class="list-participants-component">
        <div v-crop-content="(length:number)=>otherParticipants = length" class="profiles">
            <img class="profile" v-for="profile in list" :title="profile?.name"
                :src="profile?.photo " alt="">
        </div>
        <div class="other-container">
            <nuxt-link v-if="otherParticipants">
               {{ moreName?? 'ещё'}} {{ otherParticipants }}
            </nuxt-link>
        </div>
        <slot>

        </slot>
    </div>
</template>

<style scoped lang="scss">
    .list-participants-component {
        max-width: 100%;
        flex: 1 0 0;
        padding: .75rem 1rem;
        justify-content: space-between;
        gap: 0.5rem;
        min-width: 0;
    }

    .wrapper-profiles {
        width: 100%;
    }

    .other-container {
        align-items: center;
        padding: 0 .75rem;
        color: $gray-700;
        /* Text sm/Semibold */
        font-family: Inter;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.25rem;
        a{
            white-space: nowrap;
        }
        /* 142.857% */
    }

    .profiles {
        align-items: center;
        max-width: 100%;
        width: 100%;
        overflow: hidden;
    }

    .profile:nth-of-type(n) {
        margin-left: -0.5rem;
    }
    .profile:first-of-type {
        margin-left: 0rem;
    }

</style>