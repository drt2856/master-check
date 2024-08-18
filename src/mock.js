export const metas = [
    {
        id: 1,
        title: "Obtener un trabajo como programador",
        motivation: "Signigica mi realización como profecional y una fuente grande de ingresos",
        category: CATEGORIES.TRABAJO,
        finalitation_date: "2025-1-1",
        steps: [
            {
                id: 1,
                title: "Actualizar cv",
                checked: true,
                description: "Enllace al protfolio, proyectos importantes etc",
                position: 0
            },
            {
                id: 2,
                title: "Revisar bolsas de emprelo",
                checked: false,
                description: "",
                position: 1
            }
        ],
        notes: [
            {
                id: 1,
                note: "El primer día me parti el pie",
                create_date: "2024-11-2"
            }

        ]
    }
]

export const habits = [
    {
        id: 0,
        title: "Levantarse a las 5 de la mañana",
        description: "Esto es para ir al trabajo",
        position: 0,
        sckechduule: "5:00 am",
        days_of_the_week: [
            DAYS_OF_THE_WEEK.LUNES,
            DAYS_OF_THE_WEEK.MARTES,
            DAYS_OF_THE_WEEK.MIERCOLES,
            DAYS_OF_THE_WEEK.JUEVES,
            DAYS_OF_THE_WEEK.VIERNES
        ]
    }
]

export const history = [
    {
        id:1,
        date: "2024-8-17",
        habits_day:[
            {
                id: 0,
                title: "Levantarse a las 5 de la mañana",
                checked: true,
                description: "Enllace al protfolio, proyectos importantes etc",
                position: 0
            },
        ]

    }

]

export const DAYS_OF_THE_WEEK = {
    LUNES: "Lunes",
    MARTES: "Martes",
    MIERCOLES: "Miercoles",
    JUEVES: "Jueves",
    VIERNES: "Viernes",
    SABADO: "Sabado",
    DOMINGO: "Domingo"
}


export const CATEGORIES = {
    TRABAJO: "Trabajo",
    PERSONAL: "Personal",
    VARIO: "Vario",
    DEPORTE: "Deporte",
    FAMILIA: "Familia",
    HOGAR: "Hogar",
    SALUD: "Salud",
    DINERO: "Dinero"
}