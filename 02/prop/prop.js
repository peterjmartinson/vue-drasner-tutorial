Vue.component('osiris', {
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  template: `<div class="num">{{ count }}</div>`
})

Vue.component('horace', {
  props: {
    text: {
      type: String, // This should fail validation, and show an error in the browser console
      required: false
    },
    othertext: String
  },
  template: `<div>{{ text }} </div>`
});

Vue.component('gordon', {
  props: ['text'],
  template: `<div>{{ text }} </div>`
});

new Vue({
  el: '#app',
  data() {
    return {
      message: 'prop message',
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
});
