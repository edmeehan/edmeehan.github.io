<template>
  <ul>
    <li :key="index" v-for="(message, index) in messages" class="livechat__message" :class="`livechat__message--${message[1]}`">
      {{ message[0] }}
    </li>
  </ul>
</template>


<script>
export default {
  props: {
    'messages': Array
  },

  mounted() {
    // console.log('test mounted');
  }
};
</script>