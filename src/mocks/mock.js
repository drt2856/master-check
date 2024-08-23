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

export const mock_goals = [
    {
        id: "1",
        title: "Obtener un trabajo como programador",
        motivation: "Signigica mi realización como profecional y una fuente grande de ingresos",
        category: "Trabajo",
        dateFinalitation: "2025-1-1",
        completed:false,
        steps: [
            {
                id: "1",
                title: "Actualizar cv",
                checked: true,
                description: "Enllace al protfolio, proyectos importantes etc",
                position: 0
            },
            {
                id: "2",
                title: "Revisar bolsas de emprelo",
                checked: false,
                description: "",
                position: 1
            }
        ],
        notes: [
            {
                id: "1",
                note: "El primer día me parti el pie",
                dateCreate: "2024-11-2"
            }

        ]
    },{
        id:"2",
        title: "Correr 20 millas",
        motivation: "Signigica mi realización como profecional y una fuente grande de ingresos",
        category: "Trabajo",
        dateFinalitation: "2025-1-1",
        completed:false,
        steps: [
            {
                id: "1",
                title: "Actualizar cv",
                checked: true,
                description: "Enllace al protfolio, proyectos importantes etc",
                position: 0
            },
            {
                id: "2",
                title: "Revisar bolsas de emprelo",
                checked: false,
                description: "",
                position: 1
            }
        ],
        notes: [
            {
                id: "1",
                note: "El primer día me parti el pie",
                dateCreate: "2024-11-2"
            }

        ]
    }
]

export const habits = [
    {
        id: "0",
        title: "Levantarse a las 5 de la mañana",
        description: "Esto es para ir al trabajo",
        position: 0,
        sckechduule: "5:00 am",
        daysOfWeek: [
            "LUNES",
            "MARTES",
            "MIERCOLES",
            "JUEVES",
            "VIERNES"
        ]
    },
    {
        id: "1",
        title: "Levantarse a las 5 de la mañana",
        description: "Esto es para ir al trabajo",
        position: 2,
        sckechduule: "5:00 am",
        daysOfWeek: [
            "LUNES",
            "MARTES",
            "MIERCOLES",
            "JUEVES",
            "VIERNES"
        ]
    }
]
export const tasks = [
    {
        id: "0",
        title: "Arreglar el televisor",
        position: 0,
        sckechduule: "5:00 am"
    },
    {
        id: "1",
        title: "Levantarse a las 5 de la mañana",
        description: "Esto es para ir al trabajo",
        position: 2,
        sckechduule: "5:00 am",
        daysOfWeek: [
            "LUNES",
            "MARTES",
            "MIERCOLES",
            "JUEVES",
            "VIERNES"
        ]
    }
]
export const history = [
    {
        id:"1",
        date: "2024-8-17",
        habits_day:[
            {
                id: "0",
                title: "Levantarse a las 5 de la mañana",
                checked: true,
                description: "Enllace al protfolio, proyectos importantes etc",
                position: 0
            },
            {
                id: "2",
                title: "Dormir 6 horas",
                checked: true,
                description: "",
                position: 1
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
