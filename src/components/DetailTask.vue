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

    <create-task-modal />
  </div>
</template>

<script>
export default {
  name: "DetailTask",
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

<style scoped src="./DetailTask.css" />