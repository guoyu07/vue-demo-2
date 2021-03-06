Vue.component('card', {
  props: ['title', 'subtitle'],
  template: `
  <div class="card">
  <div class="card-content">
    <p class="title">
      {{title}}
    </p>
    <p class="subtitle">
      {{subtitle}}
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        Share on <a href="#">Facebook</a>
      </span>
    </p>
  </footer>
</div>
  `
})

var app = new Vue({
  el: '#root'
})
