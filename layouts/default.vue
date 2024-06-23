<script setup lang="ts">
import Header from "~/components/UI/Header.vue";
import Message from "~/components/UI/Message.vue";
</script>

<template>
  <Header />
  <slot>

  </slot>
  <Message></Message>
</template>


<style scoped lang="scss">

</style>