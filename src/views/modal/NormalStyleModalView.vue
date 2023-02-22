<template>
  <div class="modal-container">
    <div class="overlay"></div>
    <div class="modal-wrapper">
      <div class="modal-header">
        <div class="title"><span>Title</span></div>
        <button class="dismiss">
          <img src="@/assets/close.png" alt="close png icon">
        </button>
        <div class="subtitle"><span>subtitle</span></div>
      </div>

      <div class="modal-content">
        <slot />
      </div>

      <div class="modal-footer">
        FOOTER
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NormalStyleModalView"
}
</script>

<style scoped>
@import "@/views/modal/NormalStyleModalView.css";
</style>