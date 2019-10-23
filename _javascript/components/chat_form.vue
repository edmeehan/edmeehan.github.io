<template>
  <div>
    <textarea class="livechat__form-input"
      :value="value"
      :disabled="!active"
      @keyup.enter="submit"
      @input="input"
      :placeholder="placeholderText"></textarea>
    <button :disabled="!active" class="livechat__form-button button button--small button--cta-1" aria-label="Send Message" @click="submit"><i class="fas fa-comment"></i></button>
  </div>
</template>

<script>
export default {
  props: {
    'value': String,
    'active': Boolean
  },

  methods: {
    submit() {
      if (this.active) this.$emit('submit');
    },
    input(e) {
      if (this.active) this.$emit('input', e.target.value)
    }
  },

  computed: {
    placeholderText() {
      return this.active ? 'Write a message...' : 'Live Chat is currently closed.'
    }
  }
};
</script>