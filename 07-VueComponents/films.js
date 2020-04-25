Vue.component ('film1', {
    template: '#film1',
    data(){
        return {
            tytuł: 'The Fast and the Furious',
            reżyser: 'Rob Cohen',
            rok: '2001'
        }
    }
})

Vue.component ('film2', {
    template: '#film2',
    data(){
        return {
            tytuł: 'Avengers: Endgame',
            reżyser: 'Anthony i Joe Russo',
            rok: '2019'
        }
    }
})

Vue.component ('film3', {
    template: '#film3',
    data(){
        return {
            tytuł: 'Taxi 4',
            reżyser: 'Gérard Krawczyk',
            rok: '2007'
        }
    }
})

new Vue({

    el: '#app'

})