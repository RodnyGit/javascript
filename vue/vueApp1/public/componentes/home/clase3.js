const app = new Vue({
    el: '#app',
    data: {
        msj: '',
        contador: 0,
        fondoBarraArray: ['bg-primary', 'bg-success', 'bg-info', 'bg-warning', 'bg-danger'],
        fondoBarra: 'bg-primary',
        processId: 0
    },
    methods: {
        stop() {
            clearInterval(this.processId);
        },
        start: function interval() {
            this.processId = setInterval(() => {
                this.contador++;
                if (this.contador > 99) {
                    this.contador = 0;
                }
            }, 200);
        }
    },
    computed: {
        invertir() {
            return this.msj.split('').reverse().join('')
        },
        calcular() {
            this.fondoBarra = this.fondoBarraArray[(Math.trunc(this.contador / 20))];
            return this.contador
        }
    }
});