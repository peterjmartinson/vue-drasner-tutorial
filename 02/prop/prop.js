Vue.component('horace', {
  props: {
    text: {
      type: Number, // This should fail validation, and show an error in the browser console
      required: true
    }
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
      message: 'prop message'
    }
  }
});
