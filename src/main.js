import Vue from "vue";
import App from "./App.vue";
import "@maersk-global/mds-components-community";

const initializeMaerskComponents = () => {
  // Vue.directive("mc-model", mcModel);
  Vue.config.ignoredElements = [/^mc-/];
};

initializeMaerskComponents();

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
