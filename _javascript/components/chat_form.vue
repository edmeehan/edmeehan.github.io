<template>
  <div>
    <input class="livechat__form-input"
      :value="value"
      @keyup.enter="submit"
      @input="input"
      type="text"
      placeholder="Write a message...">
    <button class="livechat__form-button button button--small button--cta-1" aria-label="Send Message" @click="submit"><i class="fas fa-comment"></i></button>
  </div>
</template>

<script>
export default {
  props: {
    'value': String
  },

  methods: {
    submit() {
      this.$emit('submit');
    },
    input(e) {
      this.$emit('input', e.target.value)
    }
  }
};
</script>