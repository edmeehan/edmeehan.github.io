import Vue from 'vue';
import test from 'Test/components/test';

Vue.component('test', test);

const vueApp = new Vue({
  el: '#live-chat'
});
