<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      // Methode, die aufgerufen wird, wenn der Button angeklickt wird
      this.$emit("btn-click"); // Sendet ein "btn-click"-Event an die übergeordnete Komponente
    },
  },
};
</script>
