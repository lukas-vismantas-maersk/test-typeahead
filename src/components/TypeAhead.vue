<template>
  <div>
    <mc-c-typeahead :options="options" />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    const options = ["Zero", "One", "Two", "Three", "Four", "Five"];
    return { options };
  },
});
</script>

<style lang="scss" scoped></style>
