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
