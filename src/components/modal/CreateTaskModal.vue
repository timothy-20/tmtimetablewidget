<template>
  <normal-style-modal v-on:dismiss=""
                      v-on:confirm=""
                      title="New Task"
                      subtitle="register a new work schedule and fill out the content" >
    <div class="create-task-modal-container">
      <div class="header-wrapper">
        <normal-style-text-field class="title-text-field" />
        <div class="title-button-wrapper">

        </div>
      </div>

      <div class="content-wrapper">
        CONTENT
      </div>
    </div>
  </normal-style-modal>
</template>

<script>
export default {
  name: "CreateTaskModal",
  data: function () {
    return {
    }
  },
  methods: {

  },
}
</script>

<style scoped src="./CreateTaskModal.css" />