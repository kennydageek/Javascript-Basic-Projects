new Vue({
  el: '.container',

  data: {
    value: 0,
  },

  methods: {
    addOne() {
      this.value++;
      this.changeStyle();
    },

    subOne() {
      this.value--;
      this.changeStyle();
    },

    reset() {
      this.value = 0;
      this.changeStyle();
    },

    changeStyle() {
      let number = document.querySelector('#value')
      if (+this.value === 0) {
        number.style.color = '#102a42';
      } else if (+this.value < 0) {
        number.style.color = 'red';
      }
    }
  }
})