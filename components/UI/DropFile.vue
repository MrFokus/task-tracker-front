<script setup lang="ts">
function dragFile(e: any) {
    let files: File[] = Array.from(e.dataTransfer.files);
    emit('upload', files)
}
function uploadFile(e: any) {
    let files: File[] = Array.from(e.target.files);
    emit('upload', files)
}
const emit = defineEmits<{
    upload: [File[]]
}>()

const props = defineProps<{
    multiple?: boolean,
    accept?:string
}>(
)



</script>

<template>
    <div :class="['drag-and-drop']" @dragover.prevent @drop.prevent="dragFile">
        <div class="container">
            <label class="upload">
                <p>Выберите файл</p>
                <input @change="uploadFile" :accept="accept??''" :multiple="multiple??false" type="file">
            </label>
            <p>или перетащите его в эту область...</p>
        </div>
        <p class="description">
            Размер файла не должен превышать 1 ГБ
        </p>
    </div>
</template>

<style scoped lang="scss">
    .drag-and-drop {
        .container {
            gap: 0.25rem;
        }

        p {
            color: $gray-700;
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 1.25rem;
        }

        .description {
            color: $gray-500;
            text-align: center;
            font-size: 0.75rem;
            font-weight: 400;
            line-height: 1.125rem;
        }

        padding: 1rem 1.5rem;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        border-radius: 0.5rem;
        border: 1px dashed $gray-200;
        background: $gray-50;
    }

    .upload {
        cursor: pointer;

        p {
            color: $blue-500;
            font-size: 0.875rem;
            font-weight: 500;
            line-height: 1.25rem;
        }

        input {
            display: none;
        }
    }
</style>