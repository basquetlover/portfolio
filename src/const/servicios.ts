export const SERVICIOS = [
  {
    id: "database",
    nombre: "Base de Datos",
    descripcion:
      "Base de datos escalable para almacenar usuarios, contenido y datos del proyecto.",
    tecnologia: "Supabase",
    tipoPrecio: "externo_mensual",
    planes: [
      {
        id: "basic",
        nombre: "Básico",
        precioMensual: 25,
        precioAnual: 300,
        incluye: [
          { text: "Proyecto activo" },
          { text: "Autenticación" },
          { text: "Backups" }
        ]
      },
      {
        id: "pro",
        nombre: "Pro",
        precioMensual: 40,
        precioAnual: 480,
        incluye: [
          { text: "Más almacenamiento" },
          { text: "Tiempo real" },
          { text: "Mayor tráfico" }
        ]
      },
      {
        id: "advanced",
        nombre: "Avanzado",
        precioMensual: 60,
        precioAnual: 720,
        incluye: [
          { text: "Alta concurrencia" },
          { text: "Prioridad" },
          { text: "Optimización avanzada" }
        ]
      }
    ]
  },

  {
    id: "hosting",
    nombre: "Hosting y Despliegue",
    descripcion:
      "Hosting del proyecto con dominio, HTTPS y escalado automático.",
    tecnologia: "Vercel",
    tipoPrecio: "externo_mensual",
    planes: [
      {
        id: "basic",
        nombre: "Básico",
        precioMensual: 20,
        precioAnual: 240,
        incluye: [
          { text: "Deploy continuo" },
          { text: "HTTPS" }
        ]
      },
      {
        id: "pro",
        nombre: "Pro",
        precioMensual: 35,
        precioAnual: 420,
        incluye: [
          { text: "CI/CD avanzado" },
          { text: "Preview deploys" }
        ]
      },
      {
        id: "advanced",
        nombre: "Avanzado",
        precioMensual: 50,
        precioAnual: 600,
        incluye: [
          { text: "Alto rendimiento" },
          { text: "Monitorización" }
        ]
      }
    ]
  },

  {
    id: "emails",
    nombre: "Emails",
    descripcion:
      "Sistema de envío de correos automáticos para notificaciones y confirmaciones.",
    tecnologia: "Resend",
    tipoPrecio: "externo_mensual",
    planes: [
      {
        id: "basic",
        nombre: "Básico",
        precioMensual: 20,
        precioAnual: 240,
        incluye: [
          { text: "Hasta 3.000 emails/mes" }
        ]
      },
      {
        id: "pro",
        nombre: "Pro",
        precioMensual: 25,
        precioAnual: 300,
        incluye: [
          { text: "Mayor volumen" },
          { text: "Logs" },
          { text: "Hasta 10.000 emails/mes" }
        ]
      },
      {
        id: "advanced",
        nombre: "Avanzado",
        precioMensual: 45,
        precioAnual: 540,
        incluye: [
          { text: "Emails masivos" },
          { text: "Automatizaciones" }
        ]
      }
    ]
  },

  {
    id: "storage",
    nombre: "Almacenamiento de Archivos",
    descripcion:
      "Gestión de imágenes y documentos con control de acceso.",
    tecnologia: "Supabase Storage",
    tipoPrecio: "externo_mensual",
    dependeDe: [
        {
            id: "database",
            nombre: "Base de Datos",
            icono: `<path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z"/>`
        }
],
    planes: [
      {
        id: "basic",
        nombre: "Básico",
        precioMensual: 6,
        precioAnual: 60,
        incluye: [
          { text: "Almacenamiento básico" }
        ]
      },
      {
        id: "pro",
        nombre: "Pro",
        precioMensual: 15,
        precioAnual: 180,
        incluye: [
          { text: "Más espacio" },
          { text: "Permisos" }
        ]
      }
    ]
  },

  {
    id: "payments",
    nombre: "Pagos y Suscripciones",
    descripcion:
      "Sistema de cobros online y control de acceso por pago.",
    tecnologia: "Stripe",
    tipoPrecio: "desarrollo_unico",
    dependeDe: [
        {
            id: "database",
            nombre: "Base de Datos",
            icono: `<path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z"/>`
        },
        {
            id: "emails",
            nombre: "Emails",
            icono: `<path d="M280-280q-33 0-56.5-23.5T200-360v-400q0-33 23.5-56.5T280-840h560q33 0 56.5 23.5T920-760v400q0 33-23.5 56.5T840-280H280Zm280-188L280-663v303h560v-303L560-468Zm0-98 280-194H280l280 194ZM120-120q-33 0-56.5-23.5T40-200v-500h80v500h660v80H120Zm720-546v-94H280v94-94h560v94Z"/>`
        }
    ],
    precioUnico: 80
  },

  {
    id: "auth",
    nombre: "Autenticación de Usuarios",
    descripcion:
      "Registro, login, recuperación de contraseña y control de acceso.",
    tipoPrecio: "desarrollo_unico",
    dependeDe: [
        {
            id: "database",
            nombre: "Base de Datos",
            icono: `<path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z"/>`
        }
    ],
    precioUnico: 80
  },

  {
    id: "newsletter",
    nombre: "Newsletter",
    descripcion:
      "Sistema de suscripción y envío de newsletters.",
    tipoPrecio: "desarrollo_unico",
    dependeDe: [
        {
            id: "database",
            nombre: "Base de Datos",
            icono: `<path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z"/>`
        },
        {
            id: "emails",
            nombre: "Emails",
            icono: `<path d="M280-280q-33 0-56.5-23.5T200-360v-400q0-33 23.5-56.5T280-840h560q33 0 56.5 23.5T920-760v400q0 33-23.5 56.5T840-280H280Zm280-188L280-663v303h560v-303L560-468Zm0-98 280-194H280l280 194ZM120-120q-33 0-56.5-23.5T40-200v-500h80v500h660v80H120Zm720-546v-94H280v94-94h560v94Z"/>`
        }
    ],
    precioUnico: 180
  },

  {
    id: "discord_bot",
    nombre: "Bot de Discord",
    descripcion:
      "Bot personalizado para automatizar tareas e integrarlo con la web.",
    tipoPrecio: "desarrollo_unico",
    dependeDe: [
        {
            id: "database",
            nombre: "Base de Datos",
            icono: `<path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z"/>`
        },
        {
            id: "hosting",
            nombre: "Hosting y Despliegue",
            icono: `<path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h200q33 0 56.5 23.5T440-760v560q0 33-23.5 56.5T360-120H160Zm440 0q-33 0-56.5-23.5T520-200v-560q0-33 23.5-56.5T600-840h200q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H600Zm-440-80h200v-560H160v560Zm440 0h200v-560H600v560ZM200-360h120v-80H200v80Zm440 0h120v-80H640v80ZM200-480h120v-80H200v80Zm440 0h120v-80H640v80ZM200-600h120v-80H200v80Zm440 0h120v-80H640v80ZM160-200h200-200Zm440 0h200-200Z"/>`
        }
    ],
    precioUnico: 300
  },

  {
    id: "maintenance",
    nombre: "Mantenimiento y Soporte",
    descripcion:
      "Soporte continuo, mejoras, actualizaciones y monitorización.",
    tipoPrecio: "mantenimiento",
    planes: [
      {
        id: "basic",
        nombre: "Básico",
        precioMensual: 40,
        precioAnual: 480,
        incluye: []
      },
      {
        id: "pro",
        nombre: "Pro",
        precioMensual: 70,
        precioAnual: 840,
        incluye: []
      },
      {
        id: "advanced",
        nombre: "Avanzado",
        precioMensual: 120,
        precioAnual: 1440,
        incluye: []
      }
    ]
  }
];


export const SERVICIOS_ICONOS = [
  {
    id: "database",
    nombre: "Base de Datos",
  },
  {
    id: "hosting",
    nombre: "Hosting y Despliegue",
  },
  {
    id: "emails",
    nombre: "Emails",
  },
  {
    id: "storage",
    nombre: "Almacenamiento de Archivos",
  },
  {
    id: "payments",
    nombre: "Pagos y Suscripciones",
  },
  {
    id: "auth",
    nombre: "Autenticación de Usuarios",
  },
  {
    id: "newsletter",
    nombre: "Newsletter",
  },
  {
    id: "discord_bot",
    nombre: "Bot de Discord",
  },
  {
    id: "maintenance",
    nombre: "Mantenimiento y Soporte",
  }
]