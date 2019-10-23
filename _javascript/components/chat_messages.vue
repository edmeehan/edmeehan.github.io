<template>
  <ul>
    <li :key="index" v-for="(message, index) in messages" class="livechat__message" :class="`livechat__message--${message[1]}`">
      <img class="livechat__message-icon" v-if="isMe(message[1])" src="/img/headshots/emeehan_square_3.jpg" alt="headshot">
      <div class="livechat__message-text">
        {{ message[0] }}
      </div>
      <div class="livechat__message-time font-tiny">
        {{ formatDate(message[2]) }}
      </div>
    </li>
  </ul>
</template>


<script>
import moment from 'moment';

export default {
  props: {
    'messages': Array
  },

  // mounted() {
  //   // console.log('test mounted');
  // },

  updated() {
    // scroll to bottom of text
    this.$el.scrollTop = this.$el.scrollHeight - this.$el.clientHeight;
  },

  methods: {
    formatDate(timestamp) {
      return moment(timestamp).format("MMM Do, h:mmA")
    },
    isMe(label) {
      return label === 'me';
    }
  }
};
</script>