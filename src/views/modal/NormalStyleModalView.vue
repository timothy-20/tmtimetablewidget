<template>
  <div class="modal-container">
    <div class="overlay"></div>
    <div class="modal-wrapper">
      <div class="modal-header">
        <div class="title-wrapper">
          <p class="title">{{ title }}</p>
          <p class="subtitle">{{ subtitle }}</p>
        </div>
        <div class="button-wrapper">
          <button class="dismiss">
            <img src="@/assets/close.png" alt="close png icon">
          </button>
        </div>
      </div>

      <div class="modal-content">
        <slot />
      </div>

      <div class="modal-footer">
        <button class="cancel">CANCEL</button>
        <button class="confirm">CONFIRM</button>
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

    },

    actionConfirm() {

    }
  }
}
</script>

<style scoped>
@import "@/views/modal/NormalStyleModalView.css";
</style>
