<script setup lang="ts">

const props = defineProps<{
  linkBack?: { path: string, name: string },
  title: string,
  description: string,
}>()
</script>

<template>
  <div class="title-module-component">
    <nuxt-link v-if="linkBack" :to="linkBack?.path" class="link-back">{{ linkBack.name }}</nuxt-link>
    <div class="title-container">
      <div style="flex-direction: column; width: 100%;">
        <p class="title">{{ title }}</p>
        <p class="description">{{ description }}</p>
      </div>
      <slot>

      </slot>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .title-module-component {
    // width: 100%;
    height: fit-content;
    flex-direction: column;
    gap: 0.75rem;
  }

  .link-back {
    color: $blue-500;
    font-family: Inter, sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25rem;
    display: flex;
    gap: .5rem;
    align-items: center;
  }


  .link-back::before {
    content: '';
    background: url('@/assets/img/blue-arrow-link.svg');
    aspect-ratio: 1/1;
    height: 1.25rem;
  }

  .title-container {
    width: 100%;
    height: fit-content;
    // flex-direction: column;
    gap: .25rem;



    .title {
      color: $gray-900;
      font-family: Inter, sans-serif;
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 600;
      line-height: 2.375rem;
    }

    .description {
      color: $gray-500;
      font-family: Inter, sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem;
      // word-wrap: nowrap;
    }
  }
</style>