<template>
  <header>
    <h1>{{ title }}</h1>
    <!-- Button-Komponente, die auf Klick ein "toggle-add-task" Event auslöst. Text und Farbe ändern sich basierend auf dem "showAddTask"-Status. -->
    <Button
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'Green'"
    />
  </header>
</template>

<script>
import Button from "./Button.vue";

export default {
  // eslint-disable-next-line
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Hello World",
    },
    showAddTask: Boolean, // Boolean Prop für Toggle
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 20px;
}
</style>
