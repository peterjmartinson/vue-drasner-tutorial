Vue.component('individual-comment', {
  template: `<li> {{ commentpost }} </li>`,
  props: ['commentpost']
});

// This doesn't work, probably because you're not using Babel
new Vue({
  el: '#app',
  data: {
    newComment: '',
    comments: [
      { 
        text: 'Looks great Julianne!',
        author: 'Robin Rendle',
        authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-coffee.jpg'
      },
      { 
        text: 'I love the Sea',
        author: 'Miriam Suzanne',
        authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-miriam.jpg'
      },
      { 
        text: 'Where are you?',
        author: 'Geoff Graham',
        authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-geoff.jpg'
      }
    ]
  },
  methods: {
    addComment: function () {
      const newCommentObj = {
        text: this.newComment,
        author: 'Magoo',
        authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-skull.jpg'
      };
      this.comments.push(newCommentObj);
      this.newComment = '';
    }
  }
});
