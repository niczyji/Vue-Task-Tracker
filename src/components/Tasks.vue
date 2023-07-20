<template>
  <!-- Eine Aufgabe wird für jedes Element in 'tasks' erzeugt. -->
  <div :key="task.id" v-for="task in tasks">
    <!-- 'Task'-Komponente erhält jedes Aufgabenobjekt. 
    'toggle-reminder'- und 'delete-task'-Ereignisse werden zur übergeordneten Komponente weitergeleitet. -->
    <Task
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>

<script>
import Task from "./Task";

export default {
  name: "Tasks",
  props: {
    tasks: Array, // Aufgaben, die als Prop übergeben werden
  },
  components: {
    Task,
  },
  emits: ["delete-task", "toggle-reminder"], // Ereignisse, die diese Komponente auslösen kann
};
</script>
