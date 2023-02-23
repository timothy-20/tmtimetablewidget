<template>
  <div class="container">
    <div class="header">
      <div class="content-wrapper date">
        <div class="label"><span>YEAR / MONTH / DAY</span></div>
        <input class="content text-field" type="text">
      </div>
      <div class="content-wrapper d-day">
        <div class="label"><span>D - DAY</span></div>
        <input class="content text-field" type="text">
      </div>
      <div class="content-wrapper comment">
        <div class="label"><span>COMMENT</span></div>
        <textarea class="content text-field" maxlength="400"></textarea>
      </div>
      <div class="content-wrapper total-time">
        <div class="label"><span>TOTAL TIME</span></div>
        <input class="content text-field" type="text">
      </div>
    </div>

    <div class="music">

    </div>

    <div class="main">
      <div class="content-wrapper tasks">
        <div class="label"><span>TASKS</span></div>
        <tasks class="content" />
      </div>

      <div class="content-wrapper timetable">
        <div class="label"><span>TIMETABLE</span></div>
        <timetable class="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped src="./HomeView.css" />