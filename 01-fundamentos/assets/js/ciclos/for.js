
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
for( let i = 0; i < heroes.length; i++ ) {
    console.log( heroes[i] );
}


console.warn('For in');
for( let i in heroes ) {
    console.log( heroes[i] );
}

console.warn('For of');
for( let heroe of heroes ){
    console.log( heroe );
}

const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1)
    console.log(valor)

}

valorCarta('20C')
