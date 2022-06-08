new Vue({
  el: '.container',

  data: {
    value: 0,
  },

  methods: {
    addOne() {
      this.value++;
    },

    subOne() {
      this.value--;
    },

    reset() {
      this.value = 0;
    }
  }
})