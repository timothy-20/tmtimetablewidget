<template>
  <div class="normal-style-modal-container">
    <div class="overlay"></div>
    <div class="modal-wrapper">
      <div class="modal-header">
        <div class="title-wrapper">
          <div class="title"><p>{{ title }}</p></div>
          <div class="subtitle"><p>{{ subtitle }}</p></div>
        </div>
        <div class="button-wrapper">
          <button class="dismiss" v-on:click="actionDismiss">
            <img src="@/assets/close.png" alt="close png icon">
          </button>
        </div>
      </div>

      <div class="modal-content">
        <slot />
      </div>

      <div class="modal-footer">
        <button v-on:click="actionDismiss" class="cancel">CANCEL</button>
        <button v-on:click="actionConfirm" class="confirm">CONFIRM</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NormalStyleModalView",
  props: {
    title: {
      type: String,
      require: true,
      default() { return "Title" }
    },
    subtitle: {
      type: String,
      require: true,
      default() { return "subtitle" }
    }
  },
  data: function () {
    return {

    }
  },
  methods: {
    actionDismiss() {
      this.$emit('dismiss')
    },

    actionConfirm() {
      this.$emit('confirm')
    }
  }
}
</script>

<style scoped>
@import "@/views/modal/NormalStyleModalView.css";
</style>
