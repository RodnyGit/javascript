const app = new Vue({
    el: '#app',
    data: {
        colorArray: ['bg-success', 'bg-primary', 'bg-danger', 'bg-warning', 'bg-info'],
        color: 'bg-dark'
    },
    methods: {
        randomFondo() {
            let num = Math.floor(Math.random() * (5 - 0)) + 0;
            this.color = this.colorArray[num];
        }
    },
    computed: {

    }
});