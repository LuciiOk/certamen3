import { Clima } from "./clima";

export interface Region {
    nombre:string
    clima:Clima[]
}

export let listaRegiones:Region[] = [
    {
        nombre: 'valparaiso',
        clima: [
            {
                dia: 'Lunes',
                temperatura: 20,
                clima: 'Soleado'
            },
            {
                dia: 'Martes',
                temperatura: 20,
                clima: 'Lluvioso'
            },
            {
                dia: 'Miercoles',
                temperatura: 20,
                clima: 'Nublado'
            },
            {
                dia: 'Jueves',
                temperatura: 20,
                clima: 'Lluvioso'
            },
            {
                dia: 'Viernes',
                temperatura: 20,
                clima: 'Tormenta'
            },
            {
                dia: 'Sabado',
                temperatura: 20,
                clima: 'Soleado'
            },
            {
                dia: 'Domingo',
                temperatura: 20,
                clima: 'Nublado'
            }
        ]
    },
    {
        nombre: 'Metropolitana',
        clima: [
            {
                dia: 'Lunes',
                temperatura: 20,
                clima: 'Lluvioso'
            },
            {
                dia: 'Martes',
                temperatura: 20,
                clima: 'Lluvioso'
            },
            {
                dia: 'Miercoles',
                temperatura: 20,
                clima: 'Tormenta'
            },
            {
                dia: 'Jueves',
                temperatura: 20,
                clima: 'Lluvioso'
            },
            {
                dia: 'Viernes',
                temperatura: 20,
                clima: 'Tormenta'
            },
            {
                dia: 'Sabado',
                temperatura: 20,
                clima: 'Tormenta'
            },
            {
                dia: 'Domingo',
                temperatura: 20,
                clima: 'Tormenta'
            }
        ]
    }
]