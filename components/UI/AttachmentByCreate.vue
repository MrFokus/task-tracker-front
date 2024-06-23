<script setup lang="ts">
const props = defineProps<{
    name:string
}>()

const emit = defineEmits<{
    delete:[]
}>()

async function deletefile() {
    emit('delete')
    
}
console.log(props.name);

</script>

<template>
    <div class="attachment">
        <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M12 14V8.5C12 7.67157 12.6716 7 13.5 7C14.3284 7 15 7.67157 15 8.5V14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14V10M8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22Z"
                stroke="#2E90FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p class="file-name">
            {{ name }}
        </p>
        <div class="actions">
            <button @click="deletefile()" class="white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M10.6667 3.99998V3.46665C10.6667 2.71991 10.6667 2.34654 10.5213 2.06133C10.3935 1.81044 10.1895 1.60647 9.93865 1.47864C9.65344 1.33331 9.28007 1.33331 8.53333 1.33331H7.46667C6.71993 1.33331 6.34656 1.33331 6.06135 1.47864C5.81046 1.60647 5.60649 1.81044 5.47866 2.06133C5.33333 2.34654 5.33333 2.71991 5.33333 3.46665V3.99998M2 3.99998H14M12.6667 3.99998V11.4666C12.6667 12.5868 12.6667 13.1468 12.4487 13.5746C12.2569 13.951 11.951 14.2569 11.5746 14.4487C11.1468 14.6666 10.5868 14.6666 9.46667 14.6666H6.53333C5.41323 14.6666 4.85318 14.6666 4.42535 14.4487C4.04903 14.2569 3.74307 13.951 3.55132 13.5746C3.33333 13.1468 3.33333 12.5868 3.33333 11.4666V3.99998"
                        stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .attachment {
        justify-content: space-between;
        min-height: 4rem;
        display: flex;
        padding: 0.625rem 0.875rem;
        align-items: center;
        gap: 0.75rem;
        border-radius: 0.75rem;
        border: 1px solid $gray-300;
        background: #FFF;
    }

    .logo {
        min-width: 1.5rem;
        min-height: 1.5rem;
    }

    .file-name {
        width: 100%;
        text-align: start;
        max-width: 100%;
        overflow: hidden;
        color: $gray-900;
        text-overflow: ellipsis;
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        /* 150% */
    }

    .actions {
        gap: 0.5rem;

        button,a {
            padding: 0.5rem;
        }
    }
</style>