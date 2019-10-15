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
      polling: null
    };
  },
  beforeMount() {
    // check for livechat cookie
    const id = Cookies.get('livechat');
    if (!id) {
      this.createChatID();
    } else {
      this.liveChatId = id;
    }
    // setup listener
    const doc = document.getElementById('document');
    doc.addEventListener('aside.show', ({ detail: { target } }) => {
      if (target === '#aside-livechat') this.pollData();
    });
    doc.addEventListener('aside.hide', ({ detail: { target } }) => {
      if (target === '#aside-livechat') clearInterval(this.polling);
    });
    // start polling for chat
    this.getMessages();
    this.pollData();
  },
  beforeDestroy() {
    clearInterval(this.polling);
  },
  methods: {
    sendMessage() {
      const formData = new FormData();
      formData.set('message', this.message);
      formData.set('id', this.liveChatId);

      axios.post(`${appScript}?postMessage`, formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      this.clearMessage();
    },
    clearMessage() {
      this.message = '';
    },
    createChatID() {
      axios.post(`${appScript}?initChat`)
        .then(({ data: { id } }) => {
          Cookies.set('livechat', id, { expires: 30 });
          this.liveChatId = id;
        })
        .catch((error) => {
          console.log(error);
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
          this.messages = messages;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
});
