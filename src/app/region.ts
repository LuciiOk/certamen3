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
    },
    {
        nombre: 'Bio Bio',
        clima: [
            {
                dia: 'Lunes',
                temperatura: 19,
                clima: 'Soleado'
            },
            {
                dia: 'Martes',
                temperatura: 13,
                clima: 'Tormenta'
            },
            {
                dia: 'Miercoles',
                temperatura: 12,
                clima: 'Tormenta'
            },
            {
                dia: 'Jueves',
                temperatura: 14,
                clima: 'Nublado'
            },
            {
                dia: 'Viernes',
                temperatura: 15,
                clima: 'Nublado'
            },
            {
                dia: 'Sabado',
                temperatura: 12,
                clima: 'Lluvioso'
            },
            {
                dia: 'Domingo',
                temperatura: 10,
                clima: 'Lluvioso'
            }
        ]
    }
]