import Vue from 'vue';
import Cookies from 'js-cookie';
import axios from 'axios';
import chat_form from '@/components/chat_form';
import chat_messages from '@/components/chat_messages';

Vue.component('ChatForm', chat_form);
Vue.component('ChatMessages', chat_messages);

const appScript = 'https://script.google.com/macros/s/AKfycbwwVCO1BZ_41YRbZovt1ifpBuEpeIx12j6zvxykHC4-9cuIhiHsUrcfYpCo9MGWUPQ3/exec';

new Vue({
  el: '#livechat-app',
  data() {
    return {
      message: '',
      messages: [],
      liveChatId: null,
      polling: null,
      active: false
    };
  },
  beforeMount() {
    // get livechat cookie
    this.initChat(Cookies.get('livechat'));
  },
  beforeDestroy() {
    clearInterval(this.polling);
  },
  methods: {
    sendMessage() {
      const formData = new FormData();
      formData.set('message', this.message);
      formData.set('id', this.liveChatId);

      axios.post(`${appScript}?postMessage`, formData);
      this.clearMessage();
    },
    clearMessage() {
      this.message = '';
    },
    initChat(chatID) {
      const formData = new FormData();
      formData.set('id', chatID);

      // kick off the party
      axios.post(`${appScript}?initChat`, formData)
        .then(({ data: { id, active } }) => {
          Cookies.set('livechat', id, { expires: 30 });
          this.liveChatId = id;
          this.active = active;
          this.getMessages();
          if (active) this.setupChatListeners();
        });
    },
    setupChatListeners() {
      this.pollData();
      // setup listener
      const doc = document.getElementById('document');
      doc.addEventListener('aside.show', ({ detail: { target } }) => {
        if (target === '#aside-livechat') this.pollData();
      });
      doc.addEventListener('aside.hide', ({ detail: { target } }) => {
        if (target === '#aside-livechat') clearInterval(this.polling);
      });
    },
    pollData() {
      this.polling = setInterval(this.getMessages, 4000);
    },
    getMessages() {
      const formData = new FormData();
      formData.set('id', this.liveChatId);

      axios.post(`${appScript}?polling`, formData)
        .then(({ data: { messages } }) => {
          if (this.messages.length !== messages.length) {
            this.messages = messages;
          }
        });
    }
  }
});
