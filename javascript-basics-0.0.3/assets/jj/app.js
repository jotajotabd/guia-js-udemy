let dias = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
};

let dias2 = ['Domingo', 
        'Lunes', 
        'Martes', 
        'Miercoles', 
        'Jueves', 
        'Viernes', 
        'Sabado',
];

const dia = new Date();
let hoy = dia.getDay();

console.log(dias[hoy])
console.log(dias2[hoy])

let mensaje;

/*if (hoy === 0 || hoy === 6 ){
    mensaje = "Es fin de semana"
    console.log(`${mensaje}`)
}else{
    mensaje = "Es entre semana"
    console.log(`${mensaje}, ya que el día de hoy es: ${dias[hoy]}`)
}*/
mensaje = ([0,6].includes(hoy)) ? "Es fin de semana pajuo" : "Es entre semana pendejo"
console.log(mensaje)


mensaje = ([0,6].includes(hoy)) ? console.log("Es fin de semana") : console.log("Es entre semana")

let v1 = 6;
let v2 = 4;

let numeroMayor;

numeroMayor = v1 >= v2 ? `El número ${v1} es mayor que ${v2}` : `El número ${v2} es mayor a ${v1}`
console.log(numeroMayor)