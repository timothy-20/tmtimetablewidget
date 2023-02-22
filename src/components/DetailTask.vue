<template>
  <div class="detail-task-container">
    <div class="task-wrapper">
      <div class="task-label">
        <input class="task-title" type="text" maxlength="20">
      </div>
      <div class="task-content">
        <button v-on:click="presentCreateTaskModal" class="add-task">Add Task</button>
      </div>
    </div>

    <normal-style-modal />
  </div>
</template>

<script>
import NormalStyleModalView from "@/views/modal/NormalStyleModalView";

export default {
  name: "DetailTask",
  components: {
    "normal-style-modal": NormalStyleModalView
  },
  data: function () {
    return {

    }
  },
  methods: {
    presentCreateTaskModal() {
      console.log("present create task modal")
    }
  }
}
</script>

<style scoped>
.detail-task-container {

}

.task-wrapper {
  display: flex;
  flex-flow: row wrap;
  border-bottom: 1px solid black;
}

.task-label {
  flex: 0 1 150px;
  border-right: 1px solid black;
  padding: 8px;
}

.task-label input {
  width: 100%;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  text-overflow: ellipsis;
  background-color: transparent;
}

.task-content {
  flex: 1 0 auto;
}

.task-content .add-task {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
</style>