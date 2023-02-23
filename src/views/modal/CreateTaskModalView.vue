<template>
  <frame-modal-view v-on:dismiss=""
                    v-on:confirm=""
                    title="New Task"
                    subtitle="register a new work schedule and fill out the content" >
    <div class="create-task-modal-container">
      <div class="header-wrapper">
        <div class="title-wrapper">
          <button class="task-title"
                  v-show="!isTextFieldEnabled"
                  v-on:click="focusTextField" >
            <p>{{ taskTitle }}</p>
          </button>
          <input class="task-title text-field"
                 type="text"
                 ref="taskTitleTextField"
                 v-show="isTextFieldEnabled"
                 v-on:blur="blurTextField"
          />

          <div class="button-wrapper">
            <button class="cancel">X</button>
            <button class="confirm">O</button>
          </div>
        </div>

        <div class="title-button-wrapper">

        </div>
      </div>

      <div class="content-wrapper">
        CONTENT
      </div>
    </div>
  </frame-modal-view>
</template>

<script>
import NormalStyleModalView from "@/views/modal/NormalStyleModalView";

export default {
  name: "CreateTaskModalView",
  components: {
    "frame-modal-view": NormalStyleModalView
  },
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

<style scoped>
@import "@/views/modal/CreateTaskModalView.css";
</style>