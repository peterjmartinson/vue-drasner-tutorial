new Vue({
  el: '#app',
  data() {
    return {
      counter: 0,
      x: 0
    }
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    xCoordinate(e) {
      this.x = e.clientX;
    }
  }
});
