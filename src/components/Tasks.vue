<template>
  <div class="tasks-container">
    <detail-task />
  </div>
</template>

<script>
import DetailTask from "@/components/DetailTask";

export default {
  name: "Tasks",
  components: {
    "detail-task": DetailTask,
  }
}
</script>

<style scoped>
@import "@/components/Tasks.css";
</style>