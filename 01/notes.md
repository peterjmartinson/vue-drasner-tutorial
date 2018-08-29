## Notes


### The .js file
Everything looks like:
    new Vue({
      el: '#app',
      data: {
        text: 'Hello World'
      }
    });


Inside the HTML file, you place the variables inside double moustaches:
    <div id="app">
      {{ text }} Nice to meet you.
    </div>


For-loops:
    <li v-for="item in items">

Binding:
    <textarea v-model="message" class="message" rows="5" maxlength="72"></textarea>
    <p class="booktext">{{ message }} </p>
