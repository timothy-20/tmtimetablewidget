<template>
  <div class="container">
    <div class="text-field-wrapper">
      <button class="title-label"
              v-show="!isTextFieldEnabled"
              v-on:click="focusTextField" >
        <p>{{ taskTitle }}</p>
      </button>
      <input class="title-text-field"
             type="text"
             ref="taskTitleTextField"
             v-show="isTextFieldEnabled"
             v-on:blur="blurTextField"
      />
    </div>

    <div class="button-wrapper">
      <button class="cancel">X</button>
      <button class="confirm">O</button>
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