<template>
  <div class="normal-style-text-field-container">
    <button class="text-field"
            v-show="!isTextFieldEnabled"
            v-on:click="focusTextField" >
      <p>{{ taskTitle }}</p>
    </button>
    <input class="text-field"
           type="text"
           ref="taskTitleTextField"
           v-show="isTextFieldEnabled"
           v-on:blur="blurTextField"
    />

    <div class="button-wrapper">
      <button class="cancel" />
      <button class="confirm" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NormalStyleTextField",
  data: function () {
    return {
      taskTitle: "Task",
      isTextFieldEnabled: false
    }
  },
  methods: {
    focusTextField() {
      this.isTextFieldEnabled = true;

      this.$nextTick(() => {
        this.$refs.taskTitleTextField.focus()
        this.$refs.taskTitleTextField.value = this.taskTitle
      });
    },

    blurTextField() {
      this.isTextFieldEnabled = false;
    }
  }
}
</script>

<style scoped src="./NormalStyleTextField.css" />