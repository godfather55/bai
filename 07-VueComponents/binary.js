Vue.component('binarnie', {
  props: ['liczba'],
  template: '#show',
  computed: {
    konwertuj(){
    return  parseInt(this.liczba).toString(2)  
    }
  }

})

  new Vue({
    el: '#app',   
  }) 
