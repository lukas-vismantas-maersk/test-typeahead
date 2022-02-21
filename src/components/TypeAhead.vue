<template>
  <mc-c-typeahead
    v-mc-model="selectedCountry"
    :options.prop="options"
    :label="label"
    :placeholder="placeholder"
    :value.prop="selectedCountry"
  />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    const options = ["Zero", "One", "Two", "Three", "Four", "Five"];

    return { options, selectedCountry: "" };
  },
  props: {
    label: {
      type: String,
      default: "HCeck",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
});
</script>

<style></style>
