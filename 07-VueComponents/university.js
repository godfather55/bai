Vue.component('university', {
    template: '#dane',
    
    data () {
      return {
        name: "Cracow University of Economics",
        address: "31-510 Kraków, Rakowicka 27, POLAND"
      }
    }
  })
  
  new Vue({
    el: '#app'
  }) 
