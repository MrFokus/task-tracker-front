<script setup lang="ts">
import ListParticipants from './ListParticipants.vue';


</script>

<template>
    <div class="task-card column">
        <header>
            <p class="template-name">Дизайн</p>
        </header>
        <div class="card-content column">
            <div class="mark-block">
                <p :style="{ color: '#B42318', backgroundColor: '#FEF3F2' }" class="mark">
                    Высокий приоритет
                </p>
                <p :style="{ color: '#B54708', backgroundColor: '#FFFAEB' }" class="mark">
                    Срочно
                </p>
                <p :style="{ color: '#B42318', backgroundColor: '#FEF3F2' }" class="mark">
                    Средний приоритет
                </p>
                <p :style="{ color: '#B42318', backgroundColor: '#FEF3F2' }" class="mark">
                    В ожидании
                </p>
                <p :style="{ color: '#B42318', backgroundColor: '#FEF3F2' }" class="mark">
                    Высокий приоритет
                </p>
            </div>
            <p class="task-name">
                Заголовок карточки на две строки и не более, если будет превышать
            </p>
            <p class="task-description">
                Описание карточки. Здесь строк больше, чем в заголовке и отображается без сокращений три строки
            </p>
            <div class="task-content-info-container">
                <div class="content-info">
                    <img src="@/assets/img/comment-info.svg" alt="">
                    <p class="result">3</p>
                </div>
                <div class="content-info">
                    <img src="@/assets/img/attachment-info.svg" alt="">
                    <p class="result">3</p>
                </div>
                <div class="content-info">
                    <img src="@/assets/img/checkbox-info.svg" alt="">
                    <p class="result">3 из 154</p>
                </div>
            </div>
            <div class="container-participates-date">
                <div class="dates">
                    <p class="from">16 авг</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="#667085" stroke-width="1.2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <p class="to">17 авг</p>
                </div>
                <ListParticipants class="list-participants" :more-name="'+'" :list="[{ name: 'undefined' }]" />
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .task-card {
        width: 100%;
        height: fit-content;
        border-radius: 1rem;
        border: 1px solid $gray-300;
        background-color: white;
        overflow: hidden;

        header {
            width: 100%;
            background: $gray-100;
            padding: 0.5rem 1rem;

            .template-name {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }
    }

    .card-content {
        padding: 1rem;
        gap: 1rem;
    }

    .task-name {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        overflow: hidden;
        color: $gray-900;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem;
    }

    .task-description {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        text-overflow: ellipsis;
        overflow: hidden;
        color: $gray-500;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem;
    }

    .mark-block {
        flex-wrap: wrap;
        gap: 0.5rem;
        .mark {
            white-space: nowrap;
        }
    }

    .profile:nth-of-type(n) {
        margin-left: -0.5rem;
    }

    .profile:first-of-type {
        margin-left: 0rem;
    }

    .task-content-info-container {
        gap: 1.25rem;

        .content-info {
            gap: .25rem;

            .result {
                color: $gray-500;
            }
        }
    }

    .container-participates-date {
        align-items: center;
        justify-content: flex-end;
        gap: 1rem;

        .dates {
            // width: 100%;
            align-items: center;
            gap: 0.25rem;

            p {
                color: $gray-500;
            }
        }
    }

    .list-participants:deep() {
        padding: 0;
        max-width: 70%;
        justify-content: flex-end;

        .profiles {
            width: fit-content;
        }

        .other-container {
            padding: 0;

            a {
                font-size: 0.875rem;
                color: $gray-500;
            }
        }
    }

</style>
