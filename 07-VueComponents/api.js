Vue.component('api', {
    template: '#showApi',
    data: function(){
        return {
            covid: Array
        }

    },

    mounted: function(){
   
        $.get("https://api.covid19api.com/summary").then(response => {
            this.covid = response.Countries;           
            })    
      }
})
  
  new Vue({
    el: '#app',
    data: {
       
    }
    
  });

