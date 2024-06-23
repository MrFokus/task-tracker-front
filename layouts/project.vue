<script setup lang="ts">
import ListParticipants from '~/components/UI/ListParticipants.vue';
import { useProjectStore } from '~/store/project';

const project = useProjectStore()
</script>

<template>
  <header class="column">
    <div class="path-indicator">
      <div class="path-element">
        <nuxt-link :to="`/`" class="name main-page">Главная</nuxt-link>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5.83337 18.3333L14.1667 1.66667" stroke="#D0D5DD" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </div>
      <div class="path-element">
        <nuxt-link :to="`/team/${project.teams[0]?.id}`" class="name">{{project.teams[0]?.name}}</nuxt-link>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5.83337 18.3333L14.1667 1.66667" stroke="#D0D5DD" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </div>
      <p class="path-element">
        <span class="name current">{{project?.name}}</span>
      </p>
    </div>
    <div class="project-info-and-actions">
      <div class="title-block">
        <h1>{{project?.name}}</h1>
        <div class="participants">
          <ListParticipants class="list-participants"
            :list="project.users">
          </ListParticipants>
          <!-- <button class="white add">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9.99996 4.16667V15.8333M4.16663 10H15.8333" stroke="#667085" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button> -->
        </div>
      </div>
      <div class="actions">
        <button class="white">Показать архив</button>
        <!-- <button class="white">Фильтры</button> -->
      </div>
    </div>
  </header>
  <slot>

  </slot>
</template>


<style scoped lang="scss">

  header {
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    gap: 0.5rem;
    border-bottom: 1px solid var(--Gray-300, #D0D5DD);
    padding: 1.62rem;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
  }

  h1 {
    color: $gray-900;
    font-size: 1.875rem;
    font-weight: 500;
    line-height: 2.25rem;
  }

  .path-indicator {
    // gap: .25rem;
    align-items: center;
  }

  .participants {
    max-width: 20rem;
    max-height: 2.5rem;
  }

  .path-element {
    align-items: center;
    padding: 0.62rem 0;

    .main-page{
      color: $blue-600 !important;
      font-weight: 700;
    }

    svg {
      margin: 0 0.25rem;
    }

    .name {
      color: $gray-500;

      font-size: 0.875rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.25rem;
    }

    .name:hover,
    .current {
      color: $gray-900;
    }
  }


  .project-info-and-actions {
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;


    .add {
      padding: .62rem;
    }

    .list-participants {
      padding: 0;
    }

    .title-block {
      width: 100%;
      // max-width: 100vw;
      // display: grid;
      // grid-template-columns: auto 1fr;
      align-items: center;
      gap: 0.75rem;
    }

    .actions {
      button {
        white-space: nowrap;
        font-family: Inter;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.25rem;

      }

      .archive {
        color: $gray-500;
      }

      .archive:hover {
        color: $gray-900;
      }

    }
  }


</style>