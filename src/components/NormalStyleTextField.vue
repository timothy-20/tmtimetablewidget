<template>
  <div class="normal-style-text-field-container">
    <button class="text-field label"
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

    <div class="button-wrapper"
         v-show="isTextFieldEnabled">
      <button class="cancel"
              v-on:click="cancelSubmit" />
      <button class="confirm"
              v-on:click="confirmSubmit" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NormalStyleTextField",
  data: function () {
    return {
      taskTitle: "",
      isTextFieldEnabled: false,
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
      this.taskTitle = this.$refs.taskTitleTextField.value;
      this.isTextFieldEnabled = false;
    },
    confirmSubmit() {
      console.log("Confirm text field.");
    },
    cancelSubmit() {

    },
  }
}
</script>

<style scoped src="./NormalStyleTextField.css" />
