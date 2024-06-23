<script setup lang="ts">
import {useErrorStore} from "~/store/error";
const storeUI = useErrorStore()


</script>

<template>
  <div class="messages">
      <div v-for="{id,type,message} in storeUI.messages" :class="[type,'message-container']">
        <div class="indicator">
        </div>
        <p class="message" v-html="message"></p>
        <button class="clear" @click="storeUI.deleteMessage(id)"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M10.9498 1.05025C11.3404 1.44078 11.3404 2.07394 10.9498 2.46447L7.41429 6L10.9498 9.53553C11.3404 9.92606 11.3404 10.5592 10.9498 10.9497V10.9497C10.5593 11.3403 9.92614 11.3403 9.53561 10.9497L6.00008 7.41421L2.46455 10.9497C2.07402 11.3403 1.44086 11.3403 1.05033 10.9497V10.9497C0.659809 10.5592 0.659809 9.92606 1.05033 9.53553L4.58587 6L1.05033 2.46447C0.659809 2.07394 0.659809 1.44078 1.05033 1.05025V1.05025C1.44086 0.659728 2.07402 0.659728 2.46455 1.05025L6.00008 4.58579L9.53561 1.05025C9.92614 0.659728 10.5593 0.659728 10.9498 1.05025V1.05025Z" fill="#0D1421"/>
        </svg></button>
      </div>
  </div>
</template>

<style scoped lang="scss">
.messages{
  position: fixed;
  width: min(50vw,400px);
  flex-direction: column;
  bottom: 1.25rem;
  right: 0;
  gap: 0.5rem;
  .error{
    background: #FEF3F2;
    .indicator{
      background: #F04438;
    }
  }
  .warn{
    background: #FFFAEB;
    .indicator{
      background: #B54708;
    }
  }
  .success{
    background: #ECFDF3;
    .indicator{
      background:#12B76A;
    }
  }
}
.message-container{
  animation: 0.3s slide;
  flex-direction: row;
  border-radius: 0.685rem 0 0 0.685rem ;
  overflow: hidden;
  @keyframes slide {
    0%{
      transform: translateX(100%);
    }
    100%{
      transform: translateX(0);
    }
  }
  .indicator{
    min-width: 1rem;
    max-width: 1rem;
  }
  width: 100%;
  p{
    width: 100%;
    color: #344054;
    padding: 0.75rem 1rem;
    word-wrap: anywhere;
  }
}
button{
  padding: 0.685rem;
}
</style>