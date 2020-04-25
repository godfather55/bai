Vue.component('list', {
    template: '#architektura',
    data() {
      return {
        składowe: ['Memory', 'Control Unit', 'Arithmetic Logic Unit', 'I/O device']
      }
    }
  })
  
 
  new Vue({
    el: '#app'
  }) 