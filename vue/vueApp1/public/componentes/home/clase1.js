const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Bienvenute a la tiendute',
        animales: [{
            raza: 'perro',
            cantidad: 20
        }, {
            raza: 'gato',
            cantidad: 12
        }, {
            raza: 'conejo',
            cantidad: 0
        }, {
            raza: 'chivo',
            cantidad: 10
        }],
        nuevoVichoRaza: '',
        nuevoVichoCantidad: '',
        vichosTotales: 0,
    },
    methods: {
        agregarFruta() {
            if ((this.nuevoVichoRaza) && (this.nuevoVichoCantidad)) {
                this.animales.push({
                    raza: this.nuevoVichoRaza,
                    cantidad: this.nuevoVichoCantidad,
                })
            }
            else {
                console.log('datos incorrectos');
            }
            this.nuevoVichoRaza = '';
            this.nuevoVichoCantidad = ''
        }
    },
    computed: {
        sumarVichos() {
            this.vichosTotales = 0;
            this.animales.forEach(element => {
                this.vichosTotales += element.cantidad;
            });
            return this.vichosTotales;
        }
    }
});